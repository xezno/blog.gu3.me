---
title: Instagib (Mainly)
tags: devlog,blog,sbox
date: 2021-06-21T02:31:27+01:00
thumb: https://cdn.discordapp.com/attachments/839155256964284459/856346212940120064/InstagibThumb.png
description: More stuff what I've been doing
---

Hello friend! This week I did a few things.

As a word of warning: if you're on a limited connection I'd recommend skipping this one - some of these videos are quite big.

<!--more-->

## Blog

You might've noticed that I changed a few things about the blog, like the colour scheme. Dica (Alex🌮#2020) helped me with
this one - so thanks to them for that.

I also changed the front page so that things look a lot nicer! Posts now have their thumbnails shown too.

![Blog update preview](https://cdn.discordapp.com/attachments/839155256964284459/856344440939479080/unknown.png)

I ended up removing light mode because it looked like shit and I got fed up with having to update it every time I made a
minor tweak. I've attempted to make up for it by going with a palette that should be readable universally, but if anyone
has any problems feel free to contact me and I'll fix them.

## Instagib

Instagib is something I've been working on in s&box. It's based on the classic Quake / Unreal gamemode of the same name - you
get given a railgun, everyone's a one-shot kill, and there's a lot of cool movement mechanics.

This week I added quite a few new features, which turned it from a boring shitty deathmatch thing into something that almost
remotely resembles a game.

People keep telling me that it's super polished but I can't help think to myself that it's far from that. There are still
loads of things that I want to do and I haven't even started them yet.

Anyways, here's what I did, in chronological order:

### Medals

Medals now pop up if you kill people in a special way - like if you kill them while they're in the air, it'll give you the
Airborne medal, or if you get 3 kills in a row then you'll get a Killing Spree medal. These don't do anything yet but I want
them to eventually contribute to a global level / experience thing so that people are rewarded for style and skill.

### Map Ports

I ported DM4 from Quake at one point, but it's no good now because of the recent movement changes. I'm going to need to make
some original maps & map content in order for things to work how I want them to.

Anyways, here's what the map looks like:

![DM4 from Quake](https://cdn.discordapp.com/attachments/839155256964284459/856343948720734208/unknown.png)

### Gibbing

Players go boom and make a satisfying crunch.

<EmbedVideo src="https://cdn.discordapp.com/attachments/840999635317030974/855881106619236352/sbox_2021-06-19_19-45-09.mp4"></EmbedVideo>

### Experimental Hitreg

Hitreg is now done totally client-side and then the server verifies it by doing a little checking. This is different to how
it was done before - where hitreg was completely server-side, so it was entirely ping dependant. This should make the hitreg
more reliable, but it's probably easier to cheat or something?

### Rocket Jumping

You can aim at your feet and go flying.

<EmbedVideo src="https://cdn.discordapp.com/attachments/840999635317030974/856209781479964732/instagib_demo_2.mp4"></EmbedVideo>

### Cooler Movement

I modified the movement controller to let you move a lot quicker in the air. This should make it easier to dodge shots 
mid-air and should make jumping less of a death sentence.

<EmbedVideo src="https://cdn.discordapp.com/attachments/854876463283306536/855781567204032512/air_control.mp4"></EmbedVideo>

### Options Menu

S&box has no settings menu, and I'm not sure if it'll allow you to do gamemode-specific stuff in there, so I've made my
own settings menu for the time being that handles stuff my gamemode can do.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/856274548151287819/UrZqnfgMLo.mp4"></EmbedVideo>

### Bonus: Gameplay

Here's some gameplay footage of me versus someone else from the s&box community.

<EmbedVideo src="https://cdn.discordapp.com/attachments/840999635317030974/855990205772333086/napkinstagib.mp4"></EmbedVideo>