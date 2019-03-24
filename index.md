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


# Education

 * PhD Student at the <a href="http://learning.cs.toronto.edu" target="_blank">University
   of Toronto (Sep 2017--present)</a>
 * MSc. in Computer Science with Distinction from 
   <a href="https://inf.ethz.ch" target="_blank">ETH Zürich</a> (Sep 2015--Aug 2017)
 * BSc. in Applied Computer Science from <a href="http://mateinfo.unitbv.ro"
   target="_blank">Transilvania University</a>, Brașov,
   Romania (Sep 2011--Jul 2014)


# Publications

 * Learning to Localize through Compressed Binary Maps <br/>
     Xinkai Wei, **Ioan Andrei Bârsan**, 
     <a href="https://www.cs.ubc.ca/~julm/" target="_blank">Julieta Martinez</a>,
     <a href="https://www.cs.toronto.edu/~slwang" target="_blank">Shenlong Wang</a>,
     <a href="https://www.cs.toronto.edu/~urtasun" target="_blank">Raquel Urtasun</a>
    <br/>
    International Conference on Computer Vision and Pattern Recognition (CVPR) 2019
    <br/>
    [PDF Coming Soon]
    <p style="font-size: 80%">
      <!-- TODO(andreib): Use proper CSS and consider making panels collapsible. -->
      <b>TL;DR:</b> High-resolution maps, while allowing extremely accurate
      localization, can also take up a lot of storage. In this paper, we use
      neural networks to perform task-specific compression to address this 
      issue by learning a special-purpose compression scheme for the specific
      task of localization.
      We achieve two orders of magnitude of improvement (0.007 bits/px) over 
      traditional methods like WebP (0.580 bits/px), as well as less than 
      half the bitrate of a general-purpose learning-based compression scheme 
      (0.016 bits/px). For reference, a lossless PNG uses 4.94 bits/px in our
      dataset.
    </p>

 * [Learning to Localize Using a LiDAR Intensity Map](http://proceedings.mlr.press/v87/barsan18a.html) <br/>
     <b>Ioan Andrei Bârsan<span>&#42;</span></b>,
     <a href="https://www.cs.toronto.edu/~slwang" target="_blank">Shenlong Wang<span>&#42;</span></a>,
     <a href="https://scholar.google.com/citations?user=0jJgmHkAAAAJ&hl=en" target="_blank">Andrei Pokrovsky</a>,
     <a href="https://www.cs.toronto.edu/~urtasun" target="_blank">Raquel Urtasun</a>
     <br/>
     Proceedings of the Second Conference on Robot Learning (CoRL) 2018
     <br/>
     Note: <span>&#42;</span>denotes equal contribution.
     <br/>
     [<a href="http://proceedings.mlr.press/v87/barsan18a.html"
     target="_blank">PDF</a>] [<a
     href="/assets/bib/barsan-learning-to-localize-corl-18.bib">BibTeX</a>]
    <p style="font-size: 80%">
      <b>TL;DR:</b> Matching-based localization methods using LiDAR can provide
        centimeter-level accuracy, but require careful beam intensity
        calibration in order to perform well. In this paper, we cast the
        matching problem as a learning task and show that it is possible to
        learn to match online LiDAR observations to a known map without
        calibrated intensities.
    </p>

 * [Robust Dense Mapping for Large-Scale Dynamic
     Environments](/dynslam) <br/>
    **Ioan Andrei Bârsan**, 
    <a href="http://people.inf.ethz.ch/liup/" target="_blank">Peidong Liu</a>,
    <a href="https://inf.ethz.ch/personal/marc.pollefeys/" target="_blank">Marc Pollefeys</a>, 
    <a href="http://www.cvlibs.net" target="_blank">Andreas Geiger</a>
    <br/>
    Proceedings of the IEEE International Conference on Robotics and Automation (ICRA) 2018
    <br/>
    [[Web](dynslam/)]
    [<a href="assets/dynslam/BARSAN-IoanAndrei-RobustDenseMapping-ICRA-2018-CameraReady.pdf" 
        target="_blank">PDF</a>]
     [<a href="https://github.com/AndreiBarsan/DynSLAM" target="_blank">Code</a>]
     [<a href="/assets/bib/barsan-robust-dense-mapping-icra-18.bib"
         target="_blank">BibTeX</a>]
    <p style="font-size: 80%">
      <b>TL;DR:</b> A system for outdoor online mapping using a stereo camera
      capable of also reconstructing the dynamic objects it encounters, in
      addition to the static map. Supports map pruning to eliminate stereo
      artifacts and reduce memory consumption.
    </p>


# Work Experience

### Industry

 * Current: Full-time researcher at **Uber ATG Toronto** (Jan 2018--present).
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

### Academic

 * Teaching Assistant: Image Analysis and Understanding (CSC420), University of
     Toronto, Fall 2017.
 * Reviewer: ICRA 2019, IROS 2019


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

