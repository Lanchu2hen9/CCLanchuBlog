---
title: Week 6 (Tues) Homework
published_at: 2025-04-15
snippet: This is homework 6b.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Tenth-blog-post#task-1)
2. [Task 2](https://cclanchublo6.deno.dev/Tenth-blog-post#task-2)
   - [3D model Generation](https://cclanchublo6.deno.dev/Tenth-blog-post#3d-model-generation)
   - [Interaction](https://cclanchublo6.deno.dev/Tenth-blog-post#interaction)
   - [Audio](https://cclanchublo6.deno.dev/Tenth-blog-post#audio)
3. [Task 3](https://cclanchublo6.deno.dev/Tenth-blog-post#task-3)

# Task 1:

<canvas id="q5_test"></canvas>

<script type="module">
  import Q5 from './my-q5-project/q5/q5.js'
  const cnv = document.getElementById (`q5_test`)
   const width = cnv.parentNode.scrollWidth
   const height = width * 9 / 16
//   const width = 700
//   const height = 700

  const q = new Q5 ("instance")
  console.log (q)

  q.setup = () => {
   q.createCanvas(width, height, q.WEBGL);
   // q.createCanvas(width, height, q.WEBGL).parent(cnv);
   // console.log(q.WEBGL);
   // q.createCanvas (width, height, cnv)
   q.noStroke ()
   q.fill (`navy`)
  }

  q.draw = () => {
   q.background (`lightblue`)
  }
</script>
