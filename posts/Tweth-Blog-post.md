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

# Task 3:

Tried using import statements it did not work. I don't think q5.js is ES module-compatiable. Going with the old traditional way of script tags. Below is me being lazy and using ChatGPT, its not working cus ChatGPT is ass when it comes to code. ITS GOOGLE TIME! 👆🏻🤓. If all things fail, I'm just straight up using the HTML code, and linking it in my blog.

## ChatGPT's code:

The errors I get from the below code are:

> "Tweth-Blog-post:108 Uncaught ReferenceError: q5 is not defined at Tweth-Blog-post:108:3"

```js
<canvas id="q5_example"></canvas>

<script type="module">

   const sketch = (q) => {
    q.setup = () => {
      q.createCanvas(400, 400, q.P2D);
      q.noLoop();
    };

    q.draw = () => {
      q.background('silver');
      q.circle(100, 50, 80);
    };
  };

  new q5(sketch, document.getElementById('q5_example'));

</script>
```

```js
<!-- Try p5 compatibility mode (this might help too) -->
<script src="https://cdn.jsdelivr.net/gh/q5js/q5.js@main/q5.min.js"></script>

<canvas id="q5_example"></canvas>

<script>
  const sketch = (q) => {
    q.setup = () => {
      q.createCanvas(400, 400, q.P2D, document.getElementById("q5_example"));
    };

    q.draw = () => {
      q.background('lavender');
      q.fill('blue');
      q.ellipse(q.frameCount % 400, 200, 50, 50); // animation!
    };
  };

  // Wait for q5 to load before using it
  window.addEventListener('load', () => {
    if (window.q5) {
      new window.q5(sketch, document.getElementById("q5_example"));
    } else {
      console.error('🥲 q5 not defined. 🥲');
    }
  });
</script>
```

Okay we're getting somewhere.

<canvas id="q5_example"></canvas>

<script type="module">

import { Q5 } from './static/my-q5-project/q5/q5.mjs';
const cnv = document.getElementById("q5_example");

// Setup function for your canvas
function setup() {
   createCanvas(400, 400, P2D, cnv);  // Set the canvas size and type
   noLoop();  // Disable continuous drawing (you can remove if needed)
}

// Draw function for your canvas
function draw() {
   background('silver');  // Set the background color
   circle(100, 50, 80);  // Draw a circle at position (100, 50) with radius 80
}

// Call setup once and draw continuously
setup();
</script>
