---
title: Recent Projects
date: 2021-05-05T00:41:10+01:00
tags: blog,nuxt,vue
---

Here's some stuff I've worked on over the last few months to exercise my programming & game dev knowledge.

<!--more-->

## Untitled Unity Shooter

This is a project I worked on for about a month so that I could get used to the Mirror networking library for Unity.
It sucked, but it's probably the most functional game I have on this list.

It featured:

- Multiplayer that worked at least 70% of the time
- A simple but versatile moveset (similar to that of Titanfall 2, but without wall running)
- CSGO-style weapon recoil
- A versatile weapon system that allowed for fine-grained control of various different weapon components
- Lots of custom inspectors! I'd just bought Odin Inspector at this point, and I was trying to test its limits

I faced a lot of challenges during this - a lot of thought went into the networking as well as how the weapons were managed
so that I could do as little work as possible when adding new features.

I'm not really working on this anymore. I got a little bored of it, plus I don't really like the Mirror networking API as
much as I thought it would.

Here are some videos from various points in development:

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/839276820872298506/6lydtu.mp4"></EmbedVideo>

You're probably wondering why cs_italy is included within the next two clips: I just imported the map into Unity. This isn't
a Source mod or anything impressive like that.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/839278233525551164/tv71ky.mp4"></EmbedVideo>

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/839278439419609088/5bocc8.mp4"></EmbedVideo>

## Untitled Unity Survival Thing?

This was based on the Unity shooter. I only spent about 2 days on this (I just copied over the other files, removed the ones
I didn't think I needed, and then worked on island generation) and it didn't get anywhere - because Unity doesn't support 
proper trees / grass with HDRP for whatever reason.

Anyway, the goal here was to generate random islands that people could build on and explore. Sorta like Rust.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/839277019442577408/fy35u2.mp4"></EmbedVideo>

For your consideration: ASS ISLAND

![ass island](https://cdn.discordapp.com/attachments/400357106227871744/822567418030718996/Ew28-0NXAAMWV8O.png)

## Quincy

Including Quincy might be cheating because I worked on it back in like, September 2020 or something, but it's relevant to the
next entry and I'm quite proud of it. Quincy is a PBR render I wrote in C# using OpenGL over the course of a few days.
It's really basic, but I think it looks good, so I'm putting it here.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/839276411490402345/uy8v5p.mp4"></EmbedVideo>

## LameGE

LameGE is a game engine I'm sort-of working on sometimes. I personally think it sucks and the code for it isn't that good,
but I keep telling myself I can improve it somehow, so I keep going back to it...

It uses the same renderer as Quincy, so it has the same "amazing" level of graphical fidelity, but there are some more
cool things like ECS and an inspector / UI / other game engine stuff put in there.

The main challenges with this were ensuring that all of the components worked well with each other and that the API that
got exposed to the game developer was good enough. Unfortunately I don't think I really managed that. Game engine
development is hard, and it's probably not for me, but I enjoyed doing this.

![lamege 1](https://media.discordapp.net/attachments/400357106227871744/759784299498045470/unknown.png?width=1176&height=676)

## This Blog

You're on it right now. I built this blog using Nuxt in about 24 hours. The blog's simple, and making it wasn't hard.
It was fun, though.

## OpenTPW

I think adding this to the list might also be cheating, but I have been working on it within the past few months so it
counts.

Anyways, OpenTPW is a project that is aimed at re-implementing the Theme Park World / Sim Theme Park client. It currently
involves a lot of file format reverse-engineering, which is something I'm actively learning & trying to get better at.
I've currently reversed a lot of the formats, and I've documented them over on the
[OpenTPW wiki](https://github.com/ThemeParkWorld/OpenTPW/wiki).

I've also started working on the actual game using the LameGE engine I mentioned before. There's a ride disassembler &
explorer plus I've implemented file format readers for a lot of the files. The only work left now is the visual stuff -
things like model and texture readers. I'm hoping to get those done soon.

Here's a screenshot of the tools I mentioned in action:

![tpw](https://cdn.discordapp.com/attachments/839155256964284459/839283093126643793/unknown.png)
*(if you can't see it very well - right click and open it in a new tab)*

You probably won't understand anything that's going on, so I'll attempt to describe the image: the panel on the left is just
a simple file browser, showing the directory containing the current ride. The panel in the middle is the ride disassembler -
rides in TPW use a virtual machine, which reads bytecode instructions from a file and then executes them in real-time.
The panel on the right is just the engine's scene hierarchy & object properties.

## s&bot

One of my most recent projects involved sort-of reverse-engineering the s&box API and writing a bot around it. I also
documented this API for other people to use; that info is available on the s&box wiki.

Here's what the bot looks like right now:

![sandbot](https://cdn.discordapp.com/attachments/839155256964284459/839281265484365854/unknown.png)

It's not perfect, and there's still stuff I want to add to it.
