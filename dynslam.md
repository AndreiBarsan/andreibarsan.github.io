---
layout: page
title: Robust Dense Mapping for Large-Scale Dynamic Environments
permalink: /dynslam/
---

<!-- use poster="poster.jpg" for video poster -->
<div style="text-align: center">

<a href="www.cs.toronto.edu/~iab">Andrei Bârsan</a>,
<a href="http://people.inf.ethz.ch/liup/">Peidong Liu</a>,
<a href="https://www.inf.ethz.ch/personal/marc.pollefeys/">Marc Pollefeys</a>,
<a href="https://cvlibs.net">Andreas Geiger</a>

<p>
Companion webpage to our ICRA 2018 submission.
</p>

<!-- some ugly breaks since otherwise the spacing gets messed up by our mixing
of Markdown and HTML... -->

<br/>

<video src="/assets/dynslam/dynslam-video-v0.4.1.webm" width="580" height="354" 
       controls preload></video>

 <div>
  [<a href="/assets/dynslam/robust-dense-mapping-paper-submission.pdf" download>Paper PDF</a>]
  [<a href="/assets/dynslam/dynslam-video-v0.4.1.webm" download>Video Download</a>]
  [<a href="https://github.com/AndreiBarsan/DynSLAM" target="_blank">Source Code</a>]
 </div>
</div>

<br/>


## Abstract

We present a stereo-based dense mapping algorithm for large scale dynamic
environments. In contrast to other existing algorithms, we simultaneously
reconstruct the static background, the moving objects and the potentially
moving but currently stationary objects separately, which is desirable for
high-level mobile robotics tasks such as path planning in crowded environments.
We use both instance-aware semantic segmentation and sparse scene flow to
classify objects as either background, moving or potentially moving, thereby
ensuring that the system is able to model objects transitioning from static to
dynamic, such as parked cars. Given camera poses estimated using visual
odometry, both the background and the (potentially) moving objects are
reconstructed separately by fusing the depth maps computed from the stereo
input. In addition to visual odometry, sparse scene flow is also used to
estimate the 3D motions of the detected moving objects, in order to reconstruct
them accurately. A map pruning technique is further developed to improve
reconstruction accuracy and reduce memory consumption, leading to increased
scalability. We evaluate our system thoroughly on the well-known KITTI Vision
Benchmark Suite. Our system is capable of near real- time operation on a PC at
approximately 2.5Hz, with the primary bottleneck being the instance-aware
semantic segmentation, which is a limitation we hope to address in future
work.


## Additional Results

<!-- TODO -->

### Reconstruction Accuracy

<!-- TODO -->

### Voxel Garbage Collection

<!-- TODO -->

### Reduced Input Spatial Resolution

<!-- TODO -->

### Reduced Input Temportal Resolution

<!-- TODO -->


<!-- ## Bibtex -->
<!-- TODO, if applicable -->


