---
title: s&box\: Week 1
tags: sbox,devlog
date: 2021-05-18T00:19:05+01:00
thumb: https://cdn.discordapp.com/attachments/839155256964284459/843991025159503932/unknown.png
description: I haven't made a new blog post in over a week. Here's why.
---

I haven't made a blog post in a long time - as of writing, it's been about 11 days.
And I've been very busy - on the 10th of May, I was given access to s&box.

If you want the tl;dr, I'll give it to you straight away:
s&box is amazing. The API is lovely and the workflow is excellent. For me, at least, it completely blows Unity out of the
water, and it's been the most fun game development experience I've had - probably ever.

In terms of specifics:

## Code / API

s&box lets you write C# code that gets hotloaded on-the-fly. This means that there isn't any waiting for the game to start
(or close), which cuts down the bullshit significantly. Prototyping is super fast. You can make a change in code, and 5
seconds later it'll have been compiled & will appear in game.

There are some exceptions to this rule, obviously, like stuff that happens in constructors - if you don't call that
constructor during gameplay, it won't execute. So stuff that happens when the game starts obviously needs you to reload - but
there's no way of working around that.

The API is also delicious. Stuff that takes 4 or 5 lines in Unity is kept slimmed down to one line.
Here's an example - a raycast in Unity looks like this:

```csharp
if (Physics.Raycast(centerPosition, direction, out var hitInfo, distance, cameraCollisionMask))
{
    orbitPosition = transform.parent.InverseTransformPoint(hitInfo.point + (hitInfo.normal * cameraCollisionSize));
}
```

Whereas the s&box equivalent looks like this:

```csharp
var traceResult = Trace.Ray( FocusPoint, targetPos ).Radius( boxSize ).WorldOnly().Run();
targetPos = traceResult.EndPos; // Shift camera away from wall
```

There are some minor differences in the code, but you get the point. It's less of a mess and it's something that you can
understand and read much more easily.

Everything is high level enough for you to use with ease, but there's also a great deal of lower level access for people
that want to get more advanced - the first thing that comes to mind here is ogniK loading in HL1 assets at runtime, with
full texturing & physics. Super neat stuff.

## Models

3D modelling isn't something I like. I don't enjoy it and I'm not good at it. But loading a model into s&box is super easy,
and you can set it up exactly how you want it. Compared to Source 1, it's the smoothest process in the world - you can just
drag your FBX into ModelDoc and it will import the model. From there, you attach materials, set up physics, etc...

It's a bit more manual and a bit more involved than Unity - but you get a shitload more control. Oh, and the whole thing
hotloads in real-time. Unlike Unity where you make a change, save the model, wait 30 seconds, realise you fucked up, start
the whole process again... It's another prototyping thing, and I love it.

## Animating

I've also used this opportunity to start doing some basic viewmodel animation work. It isn't that good, to be frank, so I
won't show it here, but it's not awful (from what I've been told).
Importing an animation into s&box is as simple as going into ModelDoc and adding the animation's FBX file. You can attach
sounds and stuff to the animations - there's a huge deal of control that I haven't delved into, simply because I haven't
had to (yet?).

## Multiplayer

The multiplayer is good. It's almost perfect - it's only slightly rough around the edges at the minute - and it's something
that will only get better over time. We had a 10-player game of deathmatch the other day and it was super fun, and I've also
played a few Hide 'n' Seek games with some other devs and I haven't had any networking issues.

The only issue is a lack of players - most people are busy working on stuff.

## Available Games

As of writing, there are like 5 games that are playable from start to finish that I'm aware of:

- Sandbox
- Pool
- MultiTanks
- Hidden
- Hide 'n' Seek

This might sound like a wide range of games, but when you factor in the "lack of players" thing I mentioned earlier, it's not
ready for prime-time yet. There isn't enough content to justify giving players keys - which is why this hasn't happened yet.
All keys are for developers, modellers, animators, designers, etc... people who will contribute to the game. And this has
made some people angry, obviously. But I totally see why it's been done and I'm glad it has - because otherwise people are
just going to be disappointed.

## Conclusion

s&box is great. But if you aren't interested in making content, go find something else to do for 6 months. It'll be here
when you get back, and it'll be in an even better state.
