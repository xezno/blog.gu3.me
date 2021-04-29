---
title: MKJS Controller Support
date: 2021-04-29 10:06:02 GMT+1
---

I saw an interesting gif of Krunker.io (the web game) being played on an Xbox Series X the other day.

<!--more-->

![krunker on xbox](/mkjs-controller/krunkerxbox.gif)

My first thought was, "wow, that's cool, the PlayStation doesn't have WebGL support". I then remembered the time I tried
to get [MKJS](https://github.com/riperiperi/mkjs) working on my PlayStation 4 a few years ago - but, since there wasn't
any support for accelerated graphics within the integrated browser, it didn't work.

I then just went down a train of thoughts - stuff like, "wow it must suck having to use a mouse and keyboard on a console",
"I wonder if MKJS would work on an Xbox", etc. until I arrived at "hey maybe I should get controller support working for
MKJS".
So that's what I did.

The first thing I did was to get the button layout right. It uses the same layout as the original Mario Kart DS - so controls
are basically 1:1. The only exception to this is the turning, which is now completely analog:

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 103.2609%;">
  <iframe src="https://streamable.com/o/c6sley"
    style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;"
    allowfullscreen
    scrolling="no"
    allow="encrypted-media">
  </iframe>
</div>
<br>

I also added rumble support... but trying to demonstrate that is hard, so you'll just have to imagine it. Rumble support is
basic - it happens on specific events (kart collisions, drifting, whenever you spin out after hitting an item) and it's all
tuned manually, so it's not perfect. It does a great job at making the game feel a lot more polished though.

Eventually I'll PR this into the main MKJS repo, but it needs some more testing. If you're really impatient, you can test it 
[here](https://xezno.github.io/mkjs/) right now.