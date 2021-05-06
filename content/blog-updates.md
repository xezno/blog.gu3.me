---
title: Blog Updates
date: 2021-05-03T12:32:01+01:00
tags: blog,nuxt,vue
thumb: https://cdn.discordapp.com/attachments/839155256964284459/839819947764744203/unknown.png
---

I'm trying to keep this blog as minimal and barebones as possible, but I still plan on adding things to it every now and
then. Here are some of the things I added this week.

<!--more-->

## Dark mode

First off, I've added a dark mode to the blog. It follows your browser / operating system settings. I've tried to give it a
little less contrast because I personally find light-on-dark quite difficult to read, but I've had to also ensure that
there's still a level of accessibility for impaired users. I've also lowered the font weight slightly when dark mode gets
activated, so that text looks more balanced.

### Syntax Highlighting

I use Prism.js for syntax highlighting. It's the default one for Nuxt Content.

Getting dark mode to play well with Prism was a lot less effort than I was expecting. I essentially made my own wrapper
around two Prism themes.

```css
@import url("prism-themes/themes/prism-vs.css");

/* Took this from https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css */
@media (prefers-color-scheme: dark) {
  /* ... */
}
```

I had to copy the dark theme in manually because CSS is weird and won't let you use `@import` unless its at the very top
of the document - which it wouldn't be if it was inside the media query.

## Embeds

I wrote a Vue component that takes in a single URL, then spits out another Vue component based on what that URL is. Embed
support includes YouTube, Streamable, HTML5, and a play/pause for GIFs. This is done like so:

```md
<EmbedVideo src="https://www.youtube.com/watch?v=Lrj2Hq7xqQ8"></EmbedVideo>
```

It means that my posts are no longer pure markdown, but its the only *easy* way I could think of doing this.

## Other design changes

I've changed the font to Inter. It was always my plan to use Inter as the font - but now it should actually work.
This applies everywhere unless you're on an Apple device, where it uses the default Apple font - because San Francisco
just looks gorgeous.

The monospace font also got changed to IBM Plex Mono. This was a recent choice, and it means that code looks consistent
across different platforms.

Dates and times are now calculated correctly. Before, they would get calculated on the server first and then on the client,
but now it's all just client-sided.

I've also added a link back to [my main website](https://gu3.me/) on the home page.

*UPDATE 04/05/2021*: I've removed support for Streamable (and replaced all Streamable media) because they delete your stuff
after 3 months. I'll just be using Discord as a host instead because it's fast & I already pay for it - and it also doesn't
need some crappy embed in order to function.