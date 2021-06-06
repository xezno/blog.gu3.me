---
title: Devlog - 31 May -> 6 June
tags: sbox,blog,devlog 
date: 2021-06-06T19:55:26+01:00
thumb: 
description: Stuff I've been working on this week.
---

Amazingly, I actually did stuff this week!

<!--more-->

## Non-s&box

Here's the non-s&box stuff I've been working on.

### Blog Update

I've changed the blog's styling a little bit. On the front page each post now has a little more info.
I also made the background colour more blue and gave the headings a nicer font & some better styling.
This is only about a quarter of the way there though - I want to change the styling a lot more.

I also want to make a rich text editor or something, or tidy up the markdown stuff. I don't like how things are done right
now. I'm mixing in some html so that I can get custom Vue components in, but it's getting messy - I might make my own subset
of markdown to prevent this.

## s&box

Here's the s&box stuff I've been working on.

### Unreal to s&box

I'm working on an [UE4 to s&box](https://github.com/xezno/unreal-to-sbox) converter so that people can easily drop in
Unreal marketplace assets.

It's super basic at the moment - you export everything as a gltf in UModel, then you run the program and it'll convert
them all into fbx files that Source 2 can use. Then it'll make some vmdl files so that you don't have to go importing them
all manually.

The next step is to convert materials so that people don't have to worry about that either.

### Instagib

I've been working on a Quake-like instagib gamemode over the last couple of days.

I got the basic gameplay nailed on day 1, then spent today polishing everything up so that it looked nicer.
There's still some stuff left to do, but it's already half finished.
I'm calling it "Alex's Instagib" because I'm sure someone else will come along and want their own version (layla?) - and I'd
rather not get people confused.

Some videos in chronological order (oldest to newest):

<EmbedVideo src="https://cdn.discordapp.com/attachments/834377561802801152/850816863663685675/deez.mp4"></EmbedVideo>

<EmbedVideo src="https://cdn.discordapp.com/attachments/834377561802801152/851135332560142386/arrows.mp4"></EmbedVideo>

### Scrapping Gamemodes

If you check my [github profile](https://github.com/xezno?tab=repositories&q=sbox&type=&language=&sort=) you'll notice that
all of my previous gamemodes are archived. I've decided to do this mainly because either the code was a mess, or the projects
never got anywhere.

The only exclusion to this is [poker](https://github.com/sbox-casino/sbox-poker) which I still definitely want to do.

## Informal ideas list

Here's a list of stuff I want to do, but I don't have a timeline for or anything and I'm not promising that I'll do them all.
I'm putting this here mainly so that I can come back later and find some stuff to do.

### Template

I want my own base to derive from. I already have something similar to this but it's just the 'minimal' gamemode template 
with a couple of tweaks - I want my base to have some more stuff than that.

### Vehicles

Vehicles are something I've been meaning to do for a while. It would be fun to have them in s&box - there's no official
vehicle stuff yet, even though it was shown off at one point, so I'd be starting from scratch here.

### 2D Sonic Game

SEGA hasn't published a good 2D Sonic game since 2017 and hasn't actually developed one for a long time. It'd be nice to see
if I can get 2D working decently in s&box, too.

### Halo Forge

Someone suggested a Forge-style map editor. Wouldn't be too difficult IMO. At that point I'd probably also throw in a few
Halo guns or vehicles or something just to give people stuff to play with.

### Braxnet Online Clone

[Braxnet Online](https://braxnet.online/) was an RP-style Gmod thing that lasted about 3 years. The person that worked on 
this is currently working on their own version in s&box, but I don't see a reason why I couldn't do something similar myself.

### Battle Royale

While this would be stupidly ambitious, it'd also be fun. A nice Danger Zone-styled island map, a dozen guns to choose from,
and some extra shit here and there. Just you & a couple of mates against, what, 20 players or something? Probably doable.

## Conclusion

good week