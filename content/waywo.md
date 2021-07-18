---
title: Minecraf 2
date: 2021-07-18T12:58:02+01:00
tags: waywo,devlog,sbox
thumb: 
---

Here's what I worked on this month

<!-- more -->

# Instagib

This month, I sorta finished "Alex's Instagib", a take on the classic Instagib mode present in a lot of arena shooters.

Since the last devlog, I added:

- Global player stats - although I've just realized that these aren't working properly, so I'll have to work on those a bit
- A HUD rework
- A custom map
- Some other stuff that I can't remember off the top of my head

If you have s&box, you can [play it here](https://explorer.sboxed.com/assets/gamemode/alex.instagib).

## Future Plans

Some stuff I'd still like to do involve game states (like starting and finishing rounds). Everything else is done.

# Minecraf 2

Minecraf 2 is a bit of a joke project I've been working on to explore procedural meshes & terrain generation in s&box. It was
inspired by Leaf's and Rugg's work on their own terrain generation projects that use cube marching algorithms.

Rather than use cube marching, though, I decided to use voxels - though it'd be trivial to include a cube marching or other
isosurface algorithm to generate terrain from.

## Terrain Generation

Chunks generate a bit slowly (at least for my personal liking), but here's what chunk gen looks like:
<EmbedVideo src="https://cdn.discordapp.com/attachments/834377561802801152/865947954901024788/slightly_improved.mp4"></EmbedVideo>
Chunks are 32x32x32 in size. You can have as many as you want vertically and horizontally.

### Mesh Generation

Mesh generation is done "properly", in that only visible blocks have vertices. This extends through chunks.

![cool caves and stuff](https://cdn.discordapp.com/attachments/834377561802801152/866003976055029880/unknown.png)

Seams are corrected through oversampling - this means that there's no cross-chunk communication in the generator, which has
simplified things a bit.

## Texturing

Texturing is done through a texture atlas. Each texture is 1/16th x 1/16th, so calculating each block's relevant UV
coordinate is super easy.

The only issues, at the moment, are:

1. There is no point texture filtering. This means that I've had to scale up the regular 256x256 texture atlas to 8192x8192, which is a pretty harsh increase and uses a load more VRAM than I'm comfortable with.

2. Since there's no proper point texture filtering, I get seams:

![layla please fix this i'm begging you](https://cdn.discordapp.com/attachments/834377561802801152/865928471166320660/unknown.png)

These seams obviously worsen through mipmaps as the texture resolution decreases. So far away objects look a lot less like
they're supposed to - with distant water looking pink, for example.

## Performance

I like to think that performance is currently okay. With no LODs and a relatively large render distance, I can push ~100fps,
but memory usage is quite high. I can probably fix this through the use of a custom vertex buffer implementation that only
uses what I need.

![windows has bad memory management issues](https://cdn.discordapp.com/attachments/834377561802801152/866003767559716904/unknown.png)

## More Screenshots

![big mountain](https://cdn.discordapp.com/attachments/834377561802801152/866003418363199538/unknown.png)
*Big Mountain*

### Some earlier stuff

![LODs of fun](https://cdn.discordapp.com/attachments/834377561802801152/865227923548405790/unknown.png)
*LOD Testing*

![boring terrain](https://cdn.discordapp.com/attachments/834377561802801152/865928258808709150/unknown.png)
*Less intense terrain*

![bad looking terrain](https://cdn.discordapp.com/attachments/834377561802801152/865291284964048906/unknown.png)
*Really early terrain gen*

## Future Plans

Obviously I don't want to re-invent the wheel and make Minecraft all over again. It already exists (in multiple forms).
What I do want to make is some sort of factory builder, like a voxel-based Satisfactory.

I want to make the voxels a lot smaller - something like 1/4th of a metre - so that people can fit more detail in and so that
it looks a little nicer than Minecraft does. Obviously I'm no [John Lin](https://www.youtube.com/watch?v=8ptH79R53c0), but I
think it's doable.

I'd also like some funkier terrain generation. Something semi-realistic, but with natural beauty spots - like
waterfalls, overhangs, proper biomes... you get the picture.

# Battle Royale

I've been dicking around with a Warzone-style gamemode with some of the same movement ideas, but a bit faster. None of this
is really polished or final, but I thought I may as well post it here anyways

## Gunplay

Gunplay is there, but it doesn't feel right. I think it's down to the sound/animations.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/866285694905090068/gunplay_first_pass.mp4"></EmbedVideo>

## Movement

Movement feels pretty good, but needs a proper art pass (legs / third-person animations) and some better audio.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/866286489653215242/movement_first_pass.mp4"></EmbedVideo>

## Future Plans

I want to make this into a hybrid between Danger Zone and Warzone - a small map with some fast movement which should
hopefully lead to a decent amount of action.
