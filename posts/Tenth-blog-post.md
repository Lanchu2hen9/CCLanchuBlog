---
title: Week 5 (Thurs) Homework
published_at: 2025-04-03
snippet: This is homework 4b.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Eighth-blog-post#task-1)
   - [High Compressibility](https://cclanchublo6.deno.dev/Eighth-blog-post#high-compressibility)
   - [Low Compressibility](https://cclanchublo6.deno.dev/Eighth-blog-post#low-compressibility)
   - [High effective complexity](https://cclanchublo6.deno.dev/Eighth-blog-post#high-effective-complexity)
2. [Task 2](https://cclanchublo6.deno.dev/Eighth-blog-post#task-2)
3. [Task 3](https://cclanchublo6.deno.dev/Eighth-blog-post#task-3)
   - [Randomness](https://cclanchublo6.deno.dev/Eighth-blog-post#randomness)
   - [Structure](https://cclanchublo6.deno.dev/Eighth-blog-post#structure)

# Task 1:

_Listening to the Ocean on a Shore of Gypsum Sand 2014_ by [Phillip David Stearns](https://phillipstearns.com/). Is a 3D printed seashell, the seashell's 3D models are algorithmically generated for the sole purpose of "listening to the 'ocean'."

I think that this artwork is post-digital, because post-digital art is all about the treating digital technologies as ordinary, ubiquitous tools for art creation. Another aspect of post-digital art is about examining the relationship of the viewer/the individual to the digital medium.

Likewise, _Listening to the Ocean on a Shore of Gypsum Sand 2014_ examines the boundary between the "simulated ocean experience" and the "actual ocean experience" and what preconceptions a person who have either experienced the former or the latter have when experiencing this artwork for the first time.

# Task 2:

## 3D model Generation:

The WEBGL library particularly:

- [Three.js](https://threejs.org/)
- To generate the shells algorithmically [maths.js](https://mathjs.org/).
- To generate different variations in the shell's surface. [OpenSimplex Noise](https://www.npmjs.com/package/open-simplex-noise)

## Interaction:

- [OrbitControls.js](https://threejs.org/examples/jsm/controls/OrbitControls.js). Allows users to rotate and zoom in on the shell.
- [GLTFLoader.js](https://gist.github.com/bumbeishvili/56e34b4f943392e4fcc474c7d8a3c040). Loads pre-existing 3D models.

## Audio:

- Web Audio API, Processes sound dynamically in the browser.
- [GLTFLoader.js](https://tonejs.github.io/).
