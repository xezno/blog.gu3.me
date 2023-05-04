---
title: s&box - Week 2 
tags: sbox,devlog 
date: 2021-05-25T00:59:14+01:00
thumb: https://cdn.discordapp.com/attachments/841000492750209034/845450008085790720/unknown.png
description: Another week has flown by; here's some of the stuff I've been making in s&box.
---

I've spent another week doing some stuff in s&box. It's mostly been prototyping work - getting used to the API, seeing what
it's capable of, and doing things I'm generally interested in.

Here are a few of those prototypes in their current work-in-progress states.

## Fork Knife

This is something I did in a few hours today. Opossum, another s&box dev, jokingly(?) suggested that I should make a Fortnite
gamemode a few days ago, and kept pestering me about it, so I decided I'd do it (plus I sorta enjoyed the game at one point).
I ripped a few of the Fortnite assets (namely the wood building stuff) and threw them into ModelDoc, then I wrote some code
that let you place them on a grid around the world. Super simple stuff.

I also imported [gm_tilted_towers](https://steamcommunity.com/sharedfiles/filedetails/?id=1436707775) using a pretty easy but
lengthy process, which involved decompiling the BSP, throwing the VMF from that into GMod Hammer, exporting that as another
VMF (so that Source 2 could read it without issue), and then importing it in s&box Hammer.

I then had to switch all of the missing materials out - I just chose dev textures for this because I'm super lazy. I also
deleted all of the props because they were things like tables and plantpots and stuff - which aren't included with s&box at
the moment.

![Fortnite 1](https://cdn.discordapp.com/attachments/839155256964284459/846533250381512744/E2L3ZQzXMAEEBUY.png)

![Fortnite 2](https://cdn.discordapp.com/attachments/839155256964284459/846533285924700170/E2L3UYoXEAA1rhw.png)

## Extraction

This is the same gamemode that I was animating a gun for last week. Extraction is something I intend to make as more of an
original gamemode. I want it to be a mix between Dirty Bomb (in terms of movement and objective style) while having some more
modernized gunplay elements, as well as making a few extra changes here and there to make it more interesting.

To start off with, I've just been working on individual gameplay 'elements' that you find throughout the map - mainly stuff
that used Hammer's FGDs. It's not very interesting, so I won't bother with screenshots, but it involves stuff like having
doors you can bash into, having health stations you can regen from, and having areas you can do objectives in, etc. Boring
stuff but it needs to be done before I can really do anything interesting.

## Poker

Poker is [one of many Casino-related gamemodes](https://sbox.facepunch.com/dev/casino/) I'm planning on doing over the next
few weeks. The basic art for this is something I did over the last week - casino chips and cards - and I'm quite happy with
how they turned out. I still need to do the actual chip value numbers, but that basically just involves slapping some text
into a texture.

Here's the first attempt I had at a poker chip:

![poker chip v1](https://cdn.discordapp.com/attachments/841000492750209034/845450008085790720/unknown.png)

The main issue with this was that you don't immediately know what each chip is worth... because there's a giant ampersand in
the centre of it, instead of the chip's value. Dumb design decision, but I'm using it as the icon for the casino stuff at the
moment:

![sbox casino dev thing](https://cdn.discordapp.com/attachments/839155256964284459/846535175047348254/unknown.png)

Here's the second attempt - I think it looks crispy as fuck and I love it:

![poker chip v2](https://cdn.discordapp.com/attachments/839155256964284459/846536414769577992/unknown.png)

Here's the HUD / UI I'm planning on using - I wanted to keep it simple and easy-to-read, and I've borrowed a few things from
Poker Night at the Inventory, but I'll inevitably change things up a little because it's looking a little bland at the
moment:

![poker HUD](https://cdn.discordapp.com/attachments/841000492750209034/845705124139237376/unknown.png)

## Conclusion

It feels weird not tying things up with a conclusion, but I don't really have anything to end with.

So I'll leave you with this I guess?

<EmbedVideo src="https://cdn.discordapp.com/attachments/841000467282395136/845756807082278952/oohoohoo.mp4"></EmbedVideo>