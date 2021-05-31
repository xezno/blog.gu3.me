---
title: s&box - Week 3
tags: sbox,devlog 
date: 2021-05-31T13:15:12+01:00
thumb: https://cdn.discordapp.com/attachments/839155256964284459/846776636082094151/unknown.png
description: I didn't really do anything this week. Here's why I think that happened.
---

This week has been pretty slow. I haven't done a lot. I thought about delaying this blog post - but I think it'd better
if I took this as an opportunity to break down why I didn't do much.

## Why I Did Nothing

### Motivation

Every so often I get burnt out on stuff for a week or so. I think this is something to do with the hedonic treadmill or
whatever. I don't really care about what theu nderlying reason is unless there's something I can do, but I don't think there
is anything. I think I'm always going to have good weeks and bad weeks. It generally doesn't matter as long as I average
out to being relatively productive. But this week seems to have been a bad week.

### Ideas

I think another reason might be a lack of ideas. I don't really know what to do at the moment. On one hand, I want to make
a first-person shooter; on the other hand, most s&box gamemodes are already first-person-based, and I want something that
will make the gamemode stand out among the others.

I think I'm probably just going to have to settle for something "normal" or basic or whatever as my first gamemode though.
So I guess I will just do something first-person.

### Managing Myself

I think I manage myself pretty poorly. I've been trying to improve on that since the beginning of the month, but I still need
to make some extra steps. Right now I'm only managing myself short-term, but I think the trick is to do both short- and long-
term stuff so that I don't veer off course after a day.

## Things I did do

I did do a few things this week - I'd be lying if I said I did nothing.

### Inventory

I made the UI for an inventory system. This was done almost entirely in C# and SCSS, and each little container is part of a
generic container class where you can specify the exact columns / rows for the container. Stupidly simple to write & use.
It's not hooked up to the actual player's inventory at the minute though, because I want to do a Tarkov / Unturned style
grid system where items take up multiple grid spaces.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/847867518618042408/saTUd9XzBH.mp4"></EmbedVideo>

### NPCs

Garry added a basic nav mesh API so I wrote a basic NPC thing that runs after you. It's not perfect, but it was a neat little
experiment.

<EmbedVideo src="https://cdn.discordapp.com/attachments/839155256964284459/848362948736450601/YX6QENCIFb.mp4"></EmbedVideo>

## Next Week

Over the next week I'm hopefully going to take a bit of a break away from s&box so that I can work on other stuff. There are
things I want to change on this blog (like the way posts are written right now), plus I want to take another look at
uwutube and see if I can get something working there. Most of my time is still going to be spent on s&box though.

I also want to look into having AI help me with these articles. I like writing in a simplistic style - with short-form
sentences and words everyone can understand without pulling out a fucking Pocket Oxford Dictionary. But my brain sometimes
doesn't let me do that for whatever reason. So having an AI run through whatever I'm saying and "translate" it across to
something everyone can understand would be cool.
