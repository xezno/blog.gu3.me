---
title: Mocha - January 2023
date: 2023-1-28T17:15:00Z
tags: engine,devlog,mocha
thumb: https://blog.gu3.me/mocha-jan2023/hotloading.png
description: C# hotloading, real-time assets, and more
---

Last month I mentioned that I was working on a game engine... here's what changed between now and then

## Open-Source

Mocha is now an open-source project. You can find it on [GitHub](https://github.com/xezno/mocha). We have discussions about it on the [Mocha Discord server](https://discord.gg/SDP4R6Wsza).

Currently, there are two other people with major contributions: [@peter-r-g](https://github.com/peter-r-g); and [@MuffinTastic](https://github.com/MuffinTastic). I'll talk about their contributions in the sections below 👇

## Editor Improvements

<img class="float-right" src="/mocha-jan2023/inspector.png" /> 

This month both I and @peter-r-g worked on the editor. I implemented a basic shell for an inspector and then @peter-r-g implemented support for entities, as well as type inspectors for everything you could want.

Everything gets separated into categories, and there are some powerful attributes to play with:

```cs
[DisplayMode( DisplayMode.Slider )]
[MinMax( 0.0f, 10.0f )]
public float MyFloat { get; set; }

[ReadOnlyInInspector]
public string Hello { get; set; } = "World";

[HideInInspector]
public string Hidden { get; set; } = "👀";
```

@MuffinTastic also made some changes to the editor that make it crash less often: a lot of the time `ImGui.End*()` wouldn't get called if an element was too small to be rendered, which would cause the engine to crash. This has been fixed.

## InteropGen Changes

I mentioned before that C# and C++ bindings were generated based on comments (eg. `//@InteropGen generate class`)... I've made some changes to this that make it much easier to work with InteropGen.

If you want a function bound to C#, you can now just add the `GENERATE_BINDINGS` attribute to it:

```cpp
/// <summary>
/// Get the current pointer to an ImGUI context.
/// This is used in order to effectively "link" managed ImGUI
/// to our native ImGUI instance.
/// </summary>
/// <returns></returns>
GENERATE_BINDINGS inline void* GetContextPointer()
{
    auto ctx = ImGui::GetCurrentContext();
    return ( void* )ctx;
};
```

Any classes with no methods won't get generated. This means that you don't need to manually generate classes anymore.

In addition to that, searching for bound methods is much easier too - you can do a Find All References for `GENERATE_BINDINGS` and it'll show you all the methods that are bound:

![Find All References](/mocha-jan2023/references.png)

InteropGen also now parses a lot of information directly from the vcxproj file, so we don't need to manually change include paths and stuff anymore.

## Asset Compiler Improvements

Thanks to @peter-r-g the asset compiler is now almost [twice as fast](https://github.com/xezno/mocha/pull/12) as it was before. In addition to that, I hooked up the asset compiler so that it can be used while the engine is running - meaning there's no need to close the engine to compile new assets AND it's much faster to iterate on assets. This is a huge workflow improvement. The only thing that's missing is the ability to hotload any assets that are changed, but I plan on adding that soon.

Shaders are also now compiled assets rather than being compiled at runtime. This probably has a negligible impact on performance, but it's nice to have it consistent with everything else.

Model files are also now `MochaFile`s which means they have support for change tracking, thanks to @peter-r-g.

## C# Hotloading

I have slowly been chipping away at making it so that games are separate from the engine itself, and this month I made a lot of progress on that front. I've added support for hotloading C# assemblies, which means that you can make changes to your game code and have them take effect immediately. This is a huge workflow improvement, and it's also a lot more convenient than having to restart the engine every time you make a change.

This has also resulted in huge changes in project management. Rather than having a single project file, you now have a project file for each game. This project is generated from a project.json metadata file, which replaces the existing `projectname.json` file. Here's an example of what a project.json file looks like:

```json
{
    "name": "Minimal",
    "author": "Nobody",
    "version": "Prototype",
    "description": "Minimal project",

    "resources": {
        "code": "code/",
        "content": "content/"
    },

    "properties": {
        "tickRate": 60
    },

    "project": {
        "defaultNamespace": "Minimal"
    }
}
```

@peter-r-g also added a load of options that can be set in the project file, including things like project references and NuGet packages. There's a list of them [available here](https://github.com/xezno/mocha/pull/32) for now, eventually they'll be documented in one place.

This is infinitely more flexible than having the engine code and game code glued together. Eventually, the workflow for this will be even more frictionless after some editor improvements.

## FileSystem Changes

The way the file system worked before is that it just mounted the "Content/" directory in the repository root.. now it can support as many locations as you want. This is useful for things like having a "Content/" directory in a game as well as using "Content/core/" in the engine itself. FileSystem also now uses non-locking reads.

## Renderer Refactor

I decided that the core rendering code shouldn't be directly coupled to Vulkan, so I've worked out a pretty nice high-level abstraction for rendering:

```cpp
/// <summary>
/// Binds a pipeline
/// </summary>
/// <returns><b>RENDER_STATUS_OK</b> if successful, otherwise an error code</returns>
virtual RenderStatus BindPipeline( Pipeline p ) = 0;

// ...

/// <summary>
/// Binds a vertex buffer
/// </summary>
/// <returns><b>RENDER_STATUS_OK</b> if successful, otherwise an error code</returns>
virtual RenderStatus BindVertexBuffer( VertexBuffer vb ) = 0;

// ...

/// <summary>
/// Draws the contents of the vertex and/or index buffer
/// </summary>
/// <returns><b>RENDER_STATUS_OK</b> if successful, otherwise an error code</returns>
virtual RenderStatus Draw( uint32_t vertexCount, uint32_t indexCount, uint32_t instanceCount ) = 0;
```

The idea here is that rendering a mesh should be as few lines as possible, while also giving as much control as possible.
Creating objects is easy too:

```cpp
BufferInfo_t vertexBufferInfo = {};
vertexBufferInfo.size = mesh.vertices.size;
vertexBufferInfo.type = BUFFER_TYPE_VERTEX_INDEX_DATA;
vertexBufferInfo.usage = BUFFER_USAGE_FLAG_VERTEX_BUFFER | BUFFER_USAGE_FLAG_TRANSFER_DST;
VertexBuffer vertexBuffer( vertexBufferInfo );

BufferUploadInfo_t vertexUploadInfo = {};
vertexUploadInfo.data = mesh.vertices;
vertexBuffer.Upload( vertexUploadInfo );

mesh.vertexBuffer = vertexBuffer;
```

The render scale is now user-configurable through the `render.scale` convar, because we render to a framebuffer and then draw that using a full-screen triangle, we can render at any resolution we want. This will be useful for post-processing effects and other stuff.

Since everything gets passed in as a structure, we can add new fields without breaking the API. Vulkan-specific stuff is handled entirely within `VulkanRenderContext`, with all the Vulkan-specific stuff now being contained to about 3-4 files.

Because of this refactor a few features have been temporarily stripped back, but we've also gained some features too... eventually I'll add the missing ones back in.

In the future, I would like to add D3D12 support or something, but that is a long way off, so I haven't put too much thought into it yet.

## Other Fixes

Here's a list of miscellaneous small fixes:

- @peter-r-g: Thread dispatcher now selects threads based on processor count
- @peter-r-g: Huge build improvements for the engine itself
- @MuffinTastic: Shader compiler used for full-screen triangle shaders now uses spdlog instead of puts for error logging
- @MuffinTastic: Mouse delta is now accumulated rather than reset every frame, making mouse operations much smoother
- Non-power-of-two textures are now padded to the next power of two, this is done in the asset compiler and is transparent to the user. This is mainly done for UI rendering and texture atlases.
- Fixed `HandleMap` threading issues which were causing crashes and other weird behaviour since they're used in a lot of places
- Entities no longer interpolate their position on spawn, which would previously cause their transforms to reset to origin, meaning they wouldn't be movable until the next tick

## Summary

This has been a big month consisting of a lot of cool new features and improvements. I'm really happy with how the engine is shaping up.
Next up is cleaning everything up and documenting stuff. We've got to make sure everything's tidy before we can start working on cool things like networking, and improving the editor.