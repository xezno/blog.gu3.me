---
title: Mocha - December 2022
date: 2022-12-29T14:35:00Z
tags: engine,devlog,mocha
thumb: https://blog.gu3.me/mocha/mocha.png
description: I'm making a game engine.
---

![Mocha Screenshot](/mocha/mocha.png)

This is my engine. There are many like it, but this one is mine.

## Core

The core of the engine is written in C++. The core contains all the functionality needed for rendering, entity management, logging, physics... you name it. It started as a relatively small portion of the engine, but now about half of it is C++ (probably just because of how much code is needed to render anything using Vulkan).

## C#

There are some parts of the engine that are relegated to C#. All game code is done in C#. Asset management (both the asset compiler and the asset loader) is all done in C#. Anything where I want easy and instant iteration - because the C# side compiles almost instantly (we're talking milliseconds per build) unlike the C++ side.

### InteropGen

Getting stuff from one side to the other is an interesting problem. Right now I have a tool called InteropGen - which automatically generates a nice wrapper around any function I want.

This is done through annotations. Here's an example (with some stuff removed for the sake of brevity):
```cpp
//@InteropGen generate class
class Texture
{
private:
    // ...

public:
    void Copy( uint32_t srcX, uint32_t srcY, uint32_t dstX, uint32_t dstY, uint32_t width, uint32_t height, Texture* src );

    //@InteropGen ignore
    inline AllocatedImage GetImage() { return m_image; }
};
```

This generates a compatible C wrapper:
```c
// ...

extern "C" inline void __Texture_Copy( Texture* instance, uint32_t srcX, uint32_t srcY, uint32_t dstX, uint32_t dstY, uint32_t width, uint32_t height, Texture * src )
{
    instance->Copy( srcX, srcY, dstX, dstY, width, height, src );
}

// ...
```

And on the C# side:
```cs
public unsafe class Texture : INativeGlue
{
    // ...
    
    private static delegate* unmanaged< IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, void > _Copy = (delegate* unmanaged< IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, IntPtr, void >)Mocha.Common.Global.UnmanagedArgs.__Texture_CopyMethodPtr;

    // ...
    
    public void Copy( uint srcX, uint srcY, uint dstX, uint dstY, uint width, uint height, Texture src ) 
    {
        using var ctx = new MemoryContext( "Texture.Copy" );
        _Copy( ctx.GetPtr( instance ), ctx.GetPtr( srcX ), ctx.GetPtr( srcY ), ctx.GetPtr( dstX ), ctx.GetPtr( dstY ), ctx.GetPtr( width ), ctx.GetPtr( height ), ctx.GetPtr( src ) );
    }
    
    // ...
}
```

So then I can call it with
```cs
Glue.Texture NativeTexture = new();
NativeTexture.Copy( 0, 0, 0, 0, 32, 32, SourceTexture );
```

This generates some C# bindings that are serviceable enough for me to write a nicer wrapper around. In this case, textures get wrapped in a nice function that handles things like texture asset loading directly.

In future, I will probably refactor this system to be explicitly inclusive and get rid of `//@InteropGen generate` entirely. I mainly used the latter to differentiate between C# structs and classes.. but I think there are better ways of doing that. I could also go a completely different route and use `.def` files with declarations in them, like [s&box does](https://garry.blog/interopgen/), but I don't like that because it makes it more difficult to tell what is being binded at a glance.

#### Memory Management

You may have noticed `MemoryContext` in the above examples. This handles all memory management - it ensures that everything allocated gets freed when necessary. I'm currently using a naive solution where everything is freed at the end of the function (i.e. when `IDisposable.Dispose()` gets called). This is fine for most purposes right now, but I suspect I'll need a more robust solution later.

## Rendering

The rendering all happens in C++. It's all bare-metal Vulkan wrapped in my own little abstraction. I'm currently targeting Vulkan 1.3, which gives me access to loads of cool features - like [dynamic rendering](https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VK_KHR_dynamic_rendering.html), which lets me bypass render passes entirely and helps simplify rendering logic. I also recently added support for `VK_KHR_ray_query` (and the acceleration structures required for it). I haven't delved too far into this - I'm just using it for ray-traced shadows at the moment - but I intend on using it in compute shaders for things like indirect lighting calculations.

![Mocha Asset Browser Screenshot](/mocha/shadows.png)

You can see the shadows getting softer as they get further from the light.. this is super simple right now - it just takes 8 samples and scatters them - but also quite noisy.

## UI

UI is done in C#. This is entirely custom. I wrote a neat little HTML and SCSS parser - with a decent subset of features supported. UI can hotload whenever you modify any HTML or SCSS files, so you get to preview changes instantly without having to restart your game or anything.

<EmbedVideo src="/mocha/Mocha_bC6cylalVb.mp4"></EmbedVideo>

## Tooling

<img class="float-right" src="/mocha/asset_browser.png" /> 

Tooling is done in C#. Everything uses ImGui. Bindings for this aren't generated using InteropGen, but I'm instead just using the ImGui.NET library. All the rendering and platform setup is done in C++, and then the pointer to the ImGui context is sent to C#. As long as the versions for my local copy & the library match up, everything works perfectly.

I'm using the multi-viewports + docking branch. This means I can display each tool as its separate window without having to worry too much.

Everything works like you'd expect it to - you can maximize, minimize, and close windows, and you can even hold shift to dock those windows into the main view.

I think eventually I'll change this to be more like a normal game engine.. but I like how this works right now: it's wonderful for multi-monitor setups because you can have your game maximized on one monitor, then have all the tools you're using on the other.

## Motivation & The Future

If you've read this far you're probably wondering what the point of this all is. I'm just doing most of this for fun, but I want to get a space game nailed down in my engine - it's something along the lines of 0x10c. I have it designed and planned out, and it's just a matter of getting the engine ready so that I can knuckle down and work on that. I plan on doing an engine 'tech test' at some point next month with a basic test game so that I can make sure the game runs well across different hardware configurations - and I'm quite looking forward to that.