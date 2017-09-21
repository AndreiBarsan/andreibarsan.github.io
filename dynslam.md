---
layout: page
title: Robust Dense Mapping for Large-Scale Dynamic Environments
permalink: /dynslam/
gc_thresholds:
  - '0'
  - '1'
  - '2'
  - '3'
  - '4'
  - '5'
  - '6'
  - '7'
  - '8'
  - '10'
  - '15'
  - '20'
extra_css:
  - '/assets/css/slick.css'
  - '/assets/css/slick-theme.css'
---


<!-- use poster="poster.jpg" for video poster -->
<div style="text-align: center">

<a href="http://www.cs.toronto.edu/~iab">Andrei Bârsan</a>,
<a href="http://people.inf.ethz.ch/liup/">Peidong Liu</a>,
<a href="https://www.inf.ethz.ch/personal/marc.pollefeys/">Marc Pollefeys</a>,
<a href="http://cvlibs.net">Andreas Geiger</a>

<p>
Companion webpage to our ICRA 2018 submission.
</p>

<!-- some ugly breaks since otherwise the spacing gets messed up by our mixing
of Markdown and HTML... -->

<br/>

<video width="580" height="354" controls preload>
    <source src="/assets/dynslam/dynslam-video-v0.4.1.reencoded.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
    <source src="/assets/dynslam/dynslam-video-v0.4.1.webm"
            type='video/webm; codecs="vp8, vorbis"' />
</video>

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
them accurately.

A map pruning technique is further developed to improve
reconstruction accuracy and reduce memory consumption, leading to increased
scalability.

We evaluate our system thoroughly on the well-known KITTI Vision
Benchmark Suite. Our system is capable of near real-time operation on a PC at
approximately 2.5Hz, with the primary bottleneck being the instance-aware
semantic segmentation, which is a limitation we hope to address in future
work.


## Additional Results

This section presents additional qualitative and (detailed) quantitative
results for which there was no room in the paper.

<!-- TODO -->

### Reconstruction Accuracy

<!-- TODO -->

### Voxel Garbage Collection

#### Additional Qualitative Results

The reconstruction of an intersection under different regularization strengths
can be seen below. Larger values of $$k$$ correspond to more aggressive noise
thresholds.

<br/>

<div class="voxel-gc-slider">
  {% for k in page.gc_thresholds %}
  <div>
  <img src="/assets/dynslam/gc-dispnet/odo-05-intersection-gc-w-{{ k }}.png">
  <br/>
  <h3 style="text-align:center">Voxel GC with $$k={{ k }}$$</h3>
  </div>
  {% endfor %}
</div>

<br/>


### Reduced Input Spatial Resolution

<!-- TODO -->

### Reduced Input Temporal Resolution

<!-- TODO -->


<!-- ## Bibtex -->
<!-- TODO, if applicable -->

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="/assets/js/slick.min.js"></script>
<script type="text/javascript">
$('.voxel-gc-slider').slick({
    fade: true,
    speed: 100,
    arrows: true,
    dots: true,
    infinite: true,
});
</script>


