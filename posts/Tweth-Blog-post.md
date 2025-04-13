---
title: Week 6 (Tuesday) Homework
published_at: 2025-04-13
snippet: This is homework 6a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Tweth-Blog-post#task-1)
2. [Task 2](https://cclanchublo6.deno.dev/Tweth-Blog-post#task-2)
   - [3D model Generation](https://cclanchublo6.deno.dev/Tenth-blog-post#3d-model-generation)
   - [Interaction](https://cclanchublo6.deno.dev/Tenth-blog-post#interaction)
   - [Audio](https://cclanchublo6.deno.dev/Tenth-blog-post#audio)
3. [Task 3](#)
4. [Task 4](#)

# Task 1:

**For each of the Javascript libraries; "[q5.js](https://q5js.org/home/), [c2.js](https://c2js.org/), and [svg.js](https://svgjs.dev/docs/3.2/)". What are they used for? And in which ways are they different?**

q5.js is basically p5.js but more lightweight on the browser. Gives more "frames" use the WebGPU, and uses no external API libraries. The only downside to this is that q5.js is not as a widely supported/adopted library, and the WebGPU function might not work on older computers.

c2.js is a Javascript library that does "computational geometry, physics simulation, evolutionary algorithms and modular design" among other things. Quote ChatGPT, on what c2.js is: "p5.js for math nerds"

svg.js is an Javascript API library that animates SVGs (Scalable Vector Graphics), it relies on no other API libraries. It works predominately on the DOM of the HTML, and uses the CPU.

I mean the differences are kind of obviously stated above. API libraries listed from least taxing on the computer/browser to most taxing on the browser/computer.

1. q5.js
2. svg.js
3. c2.js
4. p5.js

# Task 2:

**Can we use these libraries from within a javascript module? Explain why / why not?**
Yes if the API library is ES Module-compatible. Explain why/why not? Tom I have a whole ass explaination on API script tags and contaminating the global scale. See [this](https://cclanchublo6.deno.dev/JavascriptConceptReview#api-libraries--es-module-compatibility).

**In what situations might a tool like [esm.sh](https://esm.sh/#tsx) be useful?**
Converts traditional NPM packages and urls/those script tags into importable modules. So I don't have to pray to the Repo Maintainer and hope that the API library is ES module-compatiable.
