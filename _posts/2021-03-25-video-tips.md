---
layout: post
title: Tips for Kickass Academic Videos
subtitle: 
date: 2021-03-25 21:56:00.00 -05:00
categories:
- Academia
tags:
- video-editing
- ffmpeg
- examples
- tips
status: publish
writing_status: "in-progress"
type: post
published: true
---

## Overview

Most academic papers can benefit from a short associated video, either
summarizing the main ideas or showcasing some qualitative results, and many machine
learning and computer vision venues recommend attaching a short video to
a paper submission.

Furthermore, many conferences, currently operating in a remote manner, ask
presenters to provide videos in advance to act as a replacement for the
live in-person presentation. While this is unfortunate in a way, as nothing can really
replace in-person sessions and networking, it does open the door to putting
a little bit more thought and creativity in one's talks: preparing more
interesting visualizations, doing more professional editing, etc.

| ![Inference architecture diagram from the PointFlow paper by Yang et al. (not mine!)](/assets/images/guandao-yang-pointflow-inference-architecture.gif) |
|:--:| 
| **Animated Inference Diagram from PointFlow.** This great animation from [PointFlow](https://www.guandaoyang.com/PointFlow/) by Yang et al. is a fantastic example of a crisp and descriptive animation which can instantly convey the gist of a method. |

However, there are many decisions which must be made in order to determine what
makes for a good video.  While I am still far from an expert in video editing
myself (many of my own videos could benefit from the advice in this post), over
time I learned a number of tips and tricks, and this post is meant to
gather them in one place.

Hopefully the tips and references will be helpful for people in the process of
putting together a paper video!

<!--more-->

## Tools 

I found that using the {% include a.html href="https://obsproject.com/"
title="OBS" text="Open Broadcaster Software (OBS)" %} gives the most
flexibility in terms of high-quality screen, audio, and video recording. It's
free, open-source, cross-platform, and very flexible (e.g., you can drag around
your webcam view to reposition yourself on the video so there is minimal
overlap with your slides).

In general, I would strongly advise against just using Zoom for this. Since
Zoom is optimized for video conferences, it compresses the video and audio
aggressively, producing serios artifacts and generally not-very-professional
results. It also takes a while for the Zoom recording to be available, while
OBS produces it instantly once the recording stops. Furthermore, you can
customize the output resolution, framerate, and format in OBS, which can't
easily be done with Zoom.

Something like OBS takes maybe 10 minutes to figure out the first time, and
then it's just as seamless, while also producing much higher quality outputs and
being more flexible.

[Screencast-o-Matic](https://screencast-o-matic.com) also seems like a nice tool for
Mac screen recording, closed captioning, basic editing, etc., and it’s
C$25/year, so seems worth it. However, I have not tried this yet. Relying on
Zoom for closed caption generation can be unreliable--sometimes it can take
over 24h to get the caption file.

### ffmpeg
While I do my primary video editing in Adobe Premiere, nothing beats
[ffmpeg](http://ffmpeg.org/documentation.html) when it comes to quick and
simple edits (e.g., crop 5s off the ending of a video) and re-encoding, e.g.,
to satisfy some conference's file size limit.

Modern codecs such as h.265 are extremely efficient. For embedding a video on
your website, it is definitely worth playing around with `ffmpeg` settings to
find a decent set of parameters for which the video still looks fine to humans;
often, you can achieve this while reducing the file size 5--10x, which can be
the difference between a slow-non responsive 50Mb webpage and a comparatively
nimble 5Mb one!

This can make an even bigger difference when posting many small videos on the
website, e.g., to show off an [awesome new image-based rendering
method](https://phog.github.io/snerg/).

Some simple tricks:

 * Compress a video to a fixed size budget, e.g., for Papercept or CMT, using
   the “two pass” method from [this wiki page](https://trac.ffmpeg.org/wiki/Encode/H.264):
   ```bash
  INPUT=YOUR_RAW_VIDEO.mp4; BITRATE=875k; 
  OUT="{INPUT%.mp4}.recoded-$BITRATE.mp4"; 
  ffmpeg -y -i $INPUT -c:v libx264 -preset veryslow -b:v $BITRATE -pass 1 -f mp4 /dev/null && \
  ffmpeg -i $INPUT -c:v libx264 -preset veryslow -b:v $BITRATE -pass 2 "$OUT"
  ```
  Where you'd set the bitrate by dividing the length of the video in seconds by
  the max allowed file size in Kb. Note that for videos that are not very long
  (&lt;3min) and
  file size limits &gt;50Mb, using `-crf 18` instead of the two-pass process is probably also fine (for `crf`, higher means more compression and thus more artifacts):
   ```bash
   ffmpeg -i YOUR_RAW_VIDEO.mp4 -crf 18 YOUR_RAW_VIDEO.re-encoded.mp4
   ```
 * I noticed lots of videos exported by MacOS's screen recorder, or even Adobe
   Premiere itself (!) are not compressed very efficiently. Often simply
   doing
   ```bash
   ffmpeg -i my_file.mp4 my_file.opt.mp4
   ```
   will significantly reduce a file's size. Of course, *always* check the
   output to make sure it looks OK!


## Hardware

A good microphone and camera combo can make a huge difference in the quality of
academic videos. While not all videos need a face cam, audio narration is
always a nice thing to have.

**Audio:** I recently purchased a FiFine T669 USB microphone kit, and I am
currently in the process of evaluating it. So far, I am very happy with it,
especially considering the C$95 price tag (microphone, boom arm, and pop filter).
Stay tuned for more details! :)

**Video:** I bought a [Logitech Brio](https://www.logitech.com/en-ca/products/webcams/brio-4k-hdr-webcam.960-001105.html) webcam, after getting tired of my old 720p Macbook camera. While quite pricey, at C$250+tax in February 2021, it is still much cheaper and easier to set up than a dedicated DSLR, while still offering 60FPS 1080p recording, 30FPS 4k, as well as HDR. I've recorded a few videos with it so far, and the footage quality is very good.

<!--
That being said, it's still a little frustrating that we only get 30FPS 4k with
a standalone camera, whereas most decent phones do 60FPS+ 4k these days, but eh,
you can't have it all I guess.
-->


## Examples of Great Academic Videos

Great paper videos which serve as inspiration to the aspiring academic video
editor! :)
 * [Smooth Rotation Belief Representations (UofT, RSS ‘20)](https://www.youtube.com/watch?v=iEp6amPkkKw)
 * All of [Jon Barron](https://jonbarron.info/)’s videos and talks, e.g., 
   “A General and Adaptive Robust Loss Function” (both [the
   video](https://youtu.be/BmNKbnF69eY) as well as [the talk](https://www.youtube.com/watch?v=4IInDT_S0ow&t=37m22s))
 * Abe Davis’s videos, like [Crowdsampling the Plenoptic
     Function](https://www.youtube.com/watch?v=MAVFKWX8LYo)
 * Qualcomm makes very professional videos with a blog post with top highlights
for every conference. {% include a.html href='https://www.qualcomm.com/news/onq/2020/12/03/neurips-2020-explore-our-latest-innovations-ai' text='Here is an example from NeurIPS 2020' %}. (Thanks to 
  {% include authors.html names="martinez" %}
  for pointing me to this page!)
 * For general examples on polished videos and attention to detail, the {% include a.html href='https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg' text='“Two Minute Papers” YouTube channel' %} is also a nice (albeit not very technical) reference.

<!-- More of a note to self.

**Audio:** Some animations may benefit from subtle sound effects. We could also
look into very low-volume royalty-free music to add to the videos.

-->



