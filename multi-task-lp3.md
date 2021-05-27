---
layout: no-about-page
title: "Deep Multi-Task Learning for Joint Localization, Perception, and Prediction"
permalink: /multi-task-lp3/
---
<!-- use poster="poster.jpg" for video poster -->
<div style="text-align: center">
  {% include authors.html names="phillips*, martinez*, me*, casas, sadat, urtasun" %}
  <p>Companion webpage to our <b>CVPR 2021</b> publication. Asterisks denote equal contribution.</p>
  <video width="580" height="354" controls preload>
      <source src="/assets/multi-task-lp3/video-TBD.mp4"
              type='video/mp4' />
      <source src="/assets/multi-task-lp3/video-TBD.webm"
              type='video/webm' />
  </video>
  <div>
    [<a href="/assets/multi-task-lp3/PHILLIPS-DeepMultiTask-LocalizationPerception-Prediction-CVPR-2021-CameraReady.pdf" download>Paper PDF</a>]
    [<a href="https://arxiv.org/abs/2101.06720" target="_blank">arXiv</a>]
    [<a href="/assets/multi-task-lp3/video-TBD.mp4">Video Download</a>]
    [<a href="#">Poster (Coming Soon)</a>]
  </div>
</div>


<br/>

## Abstract

Over the last few years, we have witnessed tremendous progress on many subtasks of autonomous driving, including
perception, motion forecasting, and motion planning. However, these systems often assume that the car is accurately
localized against a high-definition map. 

In this paper we question this assumption, and investigate the issues that
arise in state-of-the-art autonomy stacks under localization error. Based on our observations, we design a system that
jointly performs perception, prediction, and localization. Our architecture is able to reuse computation between both
tasks, and is thus able to correct localization errors efficiently. We show experiments on a large-scale autonomy
dataset, demonstrating the efficiency and accuracy of our proposed approach.

<br/>


<!-- 
 ## The Effects of Localizer Error

 TODO(andrei): Add this, plus gifs of the videos that make up the main video. Make sure the legend is clear!

<br/>
-->


## Joint Localization, Perception, and Prediction

| ![The architecture of the combined localization, perception, and prediction (LP2) model.](/assets/multi-task-lp3/lp3-diagram.png ) |
|:--:| 
| **Proposed Architecture.** We propose a joint architecture for localization, perception, and prediction (LP2) from LiDAR data. Please refer to the video above or our paper for additional information.|


<br/>


## BibTeX

<!-- the 'linguist' plugin does not know what bibtex is... -->
```latex
{% include_relative assets/bib/phillips-multi-task-cvpr-21.bib  %}```

