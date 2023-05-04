---
title: Virtual Reality
date: 2021-09-24T12:47:39+01:00
tags: sbox,vr,virtual,reality,devlog
thumb: https://blog.gu3.me/virtual-reality/thumb.png
---

Here's what I've been exploring over this last week!

<!--more-->

## Grabbing Things

I started off by making it so that you could grab actual objects in VR.

<EmbedVideo src="/virtual-reality/anger.mp4"></EmbedVideo>

## Grabbing Things with Two Hands, Making the Guns Fire

Then I made it so that you could grab an object, then use your other hand to grab it in a different location. This was a bit of a nightmare because I had to work out how I wanted to do it - eventually I settled on letting objects position themselves, and then just displaying the hands there. With a bit of polish & smoothing, it should be less janky.
And then I made it so that you could shoot guns. This was fun (and super easy).

<EmbedVideo src="/virtual-reality/who_cares.mp4"></EmbedVideo>

## Proper Reloading & Frisbees

Then I added proper reloading - rather than just inserting a magazine, you'd insert a mag, then chamber the bullet if
necessary. This wasn't much work but has made things more immersive.

I also went off on a tangent looking at simple frisbee physics, then found out I couldn't actually remember how to throw a
frisbee properly (either that or I got the physics wildly wrong).

<EmbedVideo src="/virtual-reality/frisbees.mp4"></EmbedVideo>

## More Ideas

And now I'm exploring more ideas. I think I want to make some sort of "VR toybox" right now where I can just test out
different object types and ideas - guns, frisbees, whiteboards, etc.

My current ideas are:

- Proper physics-based doors
- Switches and buttons
- Mixing these two - i.e. a keypad password for a door
- A "VR whiteboard"
- Some way of doing proper interactive UI - a tablet/phone, some holographic display thing, who knows
- Rocket launchers
- Simple destruction - i.e. punching through walls

I also want to polish things up a bit. Making the muzzle flash less blinding, making the hands / movement less janky, and overall just removing placeholder stuff.