---
layout: no-about-page
title: About Me
---

I'm a PhD student in the [Machine Learning
Group](http://learning.cs.toronto.edu/) at the University of Toronto,
focusing on computer vision and deep learning for
autonomous robotics.  I started in September 2017, under the supervision of
<a href="http://www.cs.toronto.edu/~urtasun">Professor Raquel Urtasun</a>.

In addition to this, I am also a full-time researcher at [Uber Advanced Technologies Group
(ATG)](https://www.uber.com/info/atg/) Toronto, also led by Professor Urtasun,
working on applying my research to the challenges associated with autonomous
driving in the real world.

In addition to machine learning and computer vision, my research interests
include robotics and long-term autonomy. I am also interested in machine
learning security, and I believe that more research is needed in this area
(together with its complementary subfield, interpretability), given the growing
influence of various machine learning-powered technologies on our daily lives.


<h2>Education</h2>

 * PhD Student at the <a href="http://learning.cs.toronto.edu" target="_blank">University
   of Toronto (Sep 2017--present)</a>
 * MSc. in Computer Science with Distinction from
   <a href="https://inf.ethz.ch" target="_blank">ETH Zürich</a> (Sep 2015--Aug 2017)
 * BSc. in Applied Computer Science from <a href="http://mateinfo.unitbv.ro"
   target="_blank">Transilvania University</a>, Brașov,
   Romania (Sep 2011--Jul 2014)


<h2> Publications </h2>

<div class="paper row">
<h3>
  <a href="https://arxiv.org/abs/1908.03274" target="_blank">
    Exploiting Sparse Semantic HD Maps for Self-Driving Vehicle Localization
    (<abbr title="International Conference on Intelligent Robots and Systems">IROS</abbr> 2019)
  </a>
</h3>
<div class="col-4">
  <img src="assets/images/iros-icon-v1.png" alt="Illustration." title="Illustration of the cues leveraged by our system: lane detection and traffic signs." />
</div>
<div class="col-8 details">
  {% include authors.html names="ma*, tartavull*, me*, wang*, bai, mattyus, homayounfar, lakshmikanth, pokrovsky, urtasun" %}
  <br/>
  International Conference on Intelligent Robots and Systems (<strong>IROS</strong>) 2019
  <br/>
  <strong>Note:</strong> <span>&#42;</span>denotes equal contribution.
  <br/>
  <a class="badge pdf" href="https://arxiv.org/abs/1908.03274" target="_blank">PDF (arXiv)</a>
  <a class="badge bibtex" href="/assets/bib/ma-sparse-maps-iros-19.bib">BibTeX</a>
  <a class="badge slides" href="/assets/pdf/talks/BARSAN-IoanAndrei-2019-IROS-SparseHDMaps-Talk-v6.pdf" target="_blank">Talk Slides (PDF)</a>
  <a class="badge slides" href="/assets/key/talks/BARSAN-IoanAndrei-2019-IROS-SparseHDMaps-Talk-v6.key"
     title="The Keynote slides have the original animations as well as a video not available in the PDF version."
     target="_blank">Talk Slides (Apple Keynote)</a>
</div>
</div>
  <!--p style="font-size: 80%">
    <b>TL;DR:</b> We use very sparse maps consisting in lane graphs (i.e., polylines) and stored
    traffic sign positions to localize autonomous vehicles. These maps take up ~0.5MiB/km<sup>2</sup>,
    compared to, e.g., LiDAR ground intensity images which
    can take over 150MiB/km<sup>2</sup>. We use these maps in the context of a histogram filter localizer, and show
    median lateral accuracy of 0.05m and median longitudinal accuracy of 1.12m on a highway dataset.
  </p -->

<div class="paper row">
<h3>
  <a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Wei_Learning_to_Localize_Through_Compressed_Binary_Maps_CVPR_2019_paper.html" target="_blank">Learning to Localize through Compressed Binary Maps (CVPR 2019)</a>
</h3>
<div class="col-4">
  <img src="assets/images/cvpr2019-icon-v0.png" alt="" title="" />
</div>
<div class="col-8">
  {% include authors.html names="wei*, me*, wang*, martinez, urtasun" %}
  <br/>
  International Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>) 2019
  <br/>
  Note: <span>&#42;</span>denotes equal contribution.
  <br/>
    <a class="badge pdf" href="https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Learning-to-Localize-through-Compressed-Binary-Maps.pdf" target="_blank">PDF</a>
    <a class="badge bibtex" href="/assets/bib/wei-binary-maps-cvpr-19.bib" target="_blank">BibTeX</a>
    <a class="badge poster" href="/assets/pdf/posters/BARSAN-IoanAndrei-2019-CVPR-CBC-Poster-v0.6.pdf" target="_blank">Poster</a>
    <a class="badge video" href="https://youtu.be/vL9F6qfwBFk" target="_blank">Video</a>
  <p style="font-size: 80%">
    <!-- TODO(andreib): Use proper CSS and consider making panels collapsible. -->
    <b>TL;DR:</b> High-resolution maps can take up a lot of storage.
    We use neural networks to perform task-specific compression to address this
    issue by learning a special-purpose compression scheme specifically for localization.
    We achieve two orders of magnitude of improvement (0.007 bits/px) over
    traditional methods like WebP (0.580 bits/px), as well as less than
    half the bitrate of a general-purpose learning-based compression scheme
    (0.016 bits/px). For reference, PNG ~ 4.94 bits/px on our dataset.
  </p>
</div>
</div>

<div class="paper row">
<h3>
<a href="http://proceedings.mlr.press/v87/barsan18a.html" target="_blank">Learning to Localize Using a LiDAR Intensity Map (CoRL 2018)</a>
</h3>
<div class="col-4">
  <img src="assets/images/deep_gil.png" alt="" title="" />
</div>
<div class="col-8">
     {% include authors.html names="me*, wang*, pokrovsky, urtasun" %}
     Proceedings of the Second Conference on Robot Learning (CoRL) 2018
     <br/>
     <strong>Note:</strong> <span>&#42;</span>denotes equal contribution.
     <br/>
     <a class="badge pdf" href="http://proceedings.mlr.press/v87/barsan18a.html" target="_blank">PDF</a>
     <a class="badge bibtex" href="/assets/bib/barsan-learning-to-localize-corl-18.bib" target="_blank">BibTeX</a>
     <a class="badge poster" href="/assets/pdf/posters/BARSAN-IoanAndrei-2018-CoRL-LearningToLocalize-Poster-v0.6.pdf" target="_blank">Poster</a>
     <a class="badge slides" href="/assets/pdf/talks/BARSAN-IoanAndrei-2018-CoRL-LearningToLocalize-Talk-v3.pdf" target="_blank">Talk Slides (PDF)</a>
     <a class="badge video" href="https://www.youtube.com/watch?v=ISQZzWZmbEs" target="_blank">Video</a>
    <p style="font-size: 80%">
      <b>TL;DR:</b> Matching-based localization methods using LiDAR can provide
        centimeter-level accuracy, but require careful beam intensity
        calibration in order to perform well. In this paper, we cast the
        matching problem as a learning task and show that it is possible to
        learn to match online LiDAR observations to a known map without
        calibrated intensities.
    </p>
</div>
</div> <!-- end .paper .row -->

<div class="paper row">
<h3>
<a href="/dynslam">Robust Dense Mapping for Large-Scale Dynamic Environments</a>
</h3>
<div class="col-4">
  <img src="assets/images/deep_gil.png" alt="" title="" />
</div>
<div class="col-8">
     {% include authors.html names="me, liu, pollefeys, geiger" %}
    Proceedings of the IEEE International Conference on Robotics and Automation (ICRA) 2018
    <br/>
    <a class="badge" href="dynslam/">Web</a>
    <a class="badge pdf" href="assets/dynslam/BARSAN-IoanAndrei-RobustDenseMapping-ICRA-2018-CameraReady.pdf"
       target="_blank">PDF</a>
    <a class="badge bibtex" href="/assets/bib/barsan-robust-dense-mapping-icra-18.bib"
       target="_blank">BibTeX</a>
    <a class="badge poster" href="/assets/pdf/posters/BARSAN-IoanAndrei-2018-ICRA-DynSLAM-Poster-v0.4.pdf" target="_blank">Poster</a>
    <a class="badge code" href="https://github.com/AndreiBarsan/DynSLAM" target="_blank">Code</a>
    <p style="font-size: 80%">
      <b>TL;DR:</b> A system for outdoor online mapping using a stereo camera
      capable of also reconstructing the dynamic objects it encounters, in
      addition to the static map. Supports map pruning to eliminate stereo
      artifacts and reduce memory consumption.
    </p>
</div>
</div> <!-- end .paper .row -->


<h2>Work Experience</h2>

<h3>Industry</h3>

 * Current: Full-time research scientist at **Uber ATG Toronto** (Jan 2018--present).
      * Helping develop scalable and robust centimeter-accurate
        localization methods for self-driving cars.
      * LiDAR-based map localization, visual localization, learning-based
        compression, large-scale machine learning (Apache Spark).
 * Previously, I did a series of software engineering internships in the US
     during my undergrad:
    * Internship: **Twitter** (Summer 2015, San Francisco, CA), Performance Ads
      - Developed Apache Storm and Hadoop data pipelines using Scala.
    * Internship: **Google** (Summer 2014, New York, NY), Data Protection
      - Co-developed a system for performing security-oriented static analysis
        of shell scripts used to run large numbers of cluster jobs.
    * Internship: **Microsoft** (Summer 2013, Redmond, WA), Server and Tools Business
      - Security and reliability analysis of a web service part of the Azure portal.

<h3>Industry</h3>

 * Teaching Assistant: Image Analysis and Understanding (CSC420), University of
     Toronto, Fall 2017.
 * Reviewer: **ICRA** 2019, **IROS** (2019, 2020), **ECCV** 2020


# Talks
 * <span class="badge new">New</span> &nbsp; <a href="http://allaboutselfdriving.com" target="_blank">
    <strong>All About Self-Driving CVPR2020 Tutorial (Speaker, 2020-06-14)</strong>
   </a>
    <ul>
    <li>
      I was a speaker at the CVPR2020 Tutorial on self-driving cars organized by our lab.
    </li>
    <li>I talked about hardware with {% include authors.html names="frossard" %}
        and localization with {% include authors.html names="martinez, wang" %}. (Including
        a crash course on monte carlo localization!)
    </li>
    </ul>

 * <a href="/assets/pdf/talks/BARSAN-IoanAndrei-2020-100k-Points.pdf" target="_blank">
     [PDF Slides] **Unsupervised Sequence Forecasting of 100,000 Points for Unsupervised Trajectory Forecasting**
  </a> (2020-04-10)
    * Paper I presented: <a href="https://arxiv.org/abs/2003.08376" target="_blank">
        [PDF] Weng et al., 2020
        </a>
 * <a href="/assets/pdf/talks/BARSAN-IoanAndrei-2019-Deep-Point-Cloud-Registration.pdf" target="_blank">
     [PDF Slides] **Deep Point Cloud Registration**
   </a> (2019-09-12)
   * In this talk, I give a brief overview of recent advances in learning-based methods for robust point cloud
       registration, including
       <a href="https://songshiyu01.github.io/pdf/L3Net_W.Lu_Y.Zhou_S.Song_CVPR2019.pdf" target="_blank">L<sup>3</sup>-Net</a>,
       <a href="https://songshiyu01.github.io/pdf/DeepVCP_W.Lu_S.Song_ICCV2019.pdf" target="_blank">DeepVCP</a>, and
       <a href="https://arxiv.org/abs/1905.03304" target="_blank">Deep Closest Point</a>. I cover the main ideas in
       these papers, as well as their strengths and weaknesses, and discuss some insights and possible avenues for future research.
 * <a href="/assets/pdf/talks/BARSAN-IoanAndrei-2019-ImitationLearning-SharedAutonomyViaDRL.pdf" target="_blank">
    [PDF Slides] **Shared Autonomy via Deep Reinforcement Learning**
  </a> (2019-02-22)
    * Paper I presented: <a href="https://arxiv.org/abs/1802.01744" target="_blank">
      [PDF] Reddy et al., RSS 2018
  </a>
    * Seminar Presentation for
    <a href="http://www.cs.toronto.edu/~florian/courses/imitation_learning/" target="_blank">
      CSC2621HS at UofT (Imitation Learning for Robotics)
    </a>
 * <a href="/assets/pdf/talks/BARSAN-IoanAndrei-2019-Qualifier-Geometry-Aware-Learning-Methods-for-Computer-Vision.pdf" target="_blank">
    [PDF Slides] **Geometry-Aware Learning Methods for Computer Vision**
  </a> (2019-01-18)
    * This talk was the first part of my PhD's qualifying oral examination. It's a bit barebones since it was meant to
      support the examination itself (i.e., lots of discussing beyond the slides), but may still be of interest.


# Other Projects

 * MetalNet, a small toolkit for scraping and processing metal lyrics, followed
   by training a language model to generate its own metal. (Source code and blog
   post coming soon™!)
 * [Yeti](https://github.com/andreibarsan/Yeti), an OpenGL 3D game engine with
 forward and deferred rendering support, real time shadow mapping and more.
 <!-- * [µShell](https://github.com/andreibarsan/uShell), an experimental, simple, -->
 <!-- lightweight, free POSIX shell implementation written in C++ -->
 * A bunch of old games I developed for fun can be found on my old
   [Ludum Dare page](http://ludumdare.com/compo/author/andreibarsan/). It may be
   tricky to build and run them, though, given the age of the code.


# Bio

Before starting my PhD, I completed my Master's in Computer Science at [ETH
Zurich](https://www.inf.ethz.ch/).
For my Master's Thesis, I developed
<a href="https://github.com/AndreiBarsan/DynSLAM">DynSLAM</a>, a dense mapping
system capable of simultaneously reconstructing dynamic and potentially dynamic
objects encountered in an environment, in addition to the background map, using
just stereo input. More details can be found on the <a href="/dynslam">
DynSLAM project page</a>.

Previously, while doing my undergraduate studies at
<a href="https://mateinfo.unitbv.ro/">Transilvania University</a>, in Brașov,
Romania, I interned at Microsoft (2013, Redmond, WA), Google (2014, New
York, NY) and Twitter (2015, San Francisco, CA), working on projects related to
privacy, data protection, and data pipeline engineering.

I am originally from Brașov, Romania, a lovely little town which I encourage
everybody to visit, together with the rest of Southeast Europe.


# Contact

Email me at iab (at) cs (dawt) toronto (dawt) edu.

Find me on
<a href="https://twitter.com/andreib" target="_blank">Twitter</a>,
<a href="https://github.com/AndreiBarsan" target="_blank">GitHub</a>,
<a href="https://scholar.google.com/citations?hl=en1user=nOj2GykAAAAJ"
   target="_blank">Google Scholar</a>,
<a href="https://linkedin.com/in/barsan" target="_blank">LinkedIn</a>, or
<a href="https://stackoverflow.com/users/1055295/andrei-b%C3%A2rsan"
   target="_blank">StackOverflow</a>.

