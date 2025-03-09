---
title: Week 1 (Thurs) Homework
published_at: 2025-01-06
snippet: This is the homework for the second class of Week 1, Sem 1.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [06/01/2025 After Class note.](https://cclanchublo6.deno.dev/third-blog-post#before-week-1-thursday-homeworkk)
2. [How Does it Work?](https://cclanchublo6.deno.dev/third-blog-post#how-does-house-by-rafa%C3%ABl-rozendaal-work)
3. [Concepts & Techniques:](https://cclanchublo6.deno.dev/third-blog-post#concepts--techniques)
   - [Scale](https://cclanchublo6.deno.dev/third-blog-post#scale)
   - [Vectors](https://cclanchublo6.deno.dev/third-blog-post#vectors)
   - [Translate](https://cclanchublo6.deno.dev/third-blog-post#translate)
   - [Interaction](https://cclanchublo6.deno.dev/third-blog-post#interaction)  
      [Colours](https://cclanchublo6.deno.dev/third-blog-post#colours)
     [Random](https://cclanchublo6.deno.dev/third-blog-post#random)  
      [Arrays](https://cclanchublo6.deno.dev/third-blog-post#arrays)
   - [Sound](https://cclanchublo6.deno.dev/third-blog-post#sound)
4. [Youtube Resources](https://cclanchublo6.deno.dev/third-blog-post#youtube-resources)
5. [Classmate Consulations](https://cclanchublo6.deno.dev/third-blog-post#classmate-consulations)
6. [Implementing the Concept](https://cclanchublo6.deno.dev/third-blog-post#concept-implementation)

# Before Week 1, Thursday Homework.

I wish to change my inspiration for A1 to House by [House by Rafaël Rozendaal](https://www.newrafael.com/house). Do **"detailed"** research on this Lanchu.

**Kindred concept:** Waves. That or a duck floating on waves, not sure difficult this would be to code, but that's an issue for future me.

# How does "House" By Rafaël Rozendaal work?

![An image of Lanchu asking ChatGPT how, Rafaël Rozendaal's House artwork works in code.](ChatGPT3.png)

Now the above is an summary of how Rozendaal's might work under the hood. It's telling me to use, HTML, CSS and Javascript concepts like: "transform, clip-path, scaleX(); and or translateX();" which I am not going to do considering the aim of A1 is to use p5 to code this thing.

## Concepts & Techniques:

**Transformations are reset at the beginning of the draw loop, calling scale(); within the draw function will not allow continous growth of the shape.**

### Scale:

- "Scale();", [see](https://p5js.org/reference/p5/scale/).
  - Should use this if you want to be more specific about the amount of scaling that you want shapes to do.
  - "scale(x, y, z);" scales the square and or shapes by a define factor. For example:
    `scale(2, 0.5, 1);` scales the "shape"/square by the x-axis by 2, y-axis by 0.5 and z-axis by 1.

### Vectors:

- You could use `scale(myVector.x, myVector.y, myVector.z);`, if you want your transformations to be more dynamic over time.

I'll probably need to get really into the weeds/do a deep dive if I want to use vectors. Had a quick look at the Vector/"createVector();" pages in the p5 reference library. Seem not too difficult. ~Last famous words.~ Attached below, Lanchu is for your own viewing pleasure:

- [createVector();](https://p5js.org/reference/p5/createVector/)
- [p5 Vectors](https://p5js.org/reference/p5/p5.Vector/)

On second read of the "translate();" in p5, I might actually genuinely need to get into Vectors if I wanted to create an dynamic wave sorta of effect.

### Translate:

- `translate(x, y, z);`, same concept as scale. See [translate();](https://p5js.org/reference/p5/translate/)
- There's also a Vector version of the the translate method, `translate(myVector.x, myVector.y, myVector.z);`. Look pleasant, future me will really enjoy coding this at like 1 hour right before the deadline.
- Might need to also use `lerp();` and `slerp();` if I wanted an shape to move between two different points on the canvas. See [lerp](https://p5js.org/reference/p5.Vector/lerp/) and [slerp](https://p5js.org/reference/p5.Vector/slerp/)

> `lerp()`: "Who are you?"  
> `slerp()`: "I'm you but round."[^1]

### Interaction:

- [mousePressed();](https://p5js.org/reference/p5/mousePressed/)
  - Stuff happens when you click **everywhere** on the canvas.
- See [myElement.mousePressed();](https://p5js.org/reference/p5.Element/mousePressed/)

  - Stuff happens when you click on a **specific** element on the canvas.

#### Colours:

If you wanted the colours to change `mousePressed();`, based on a selection of pre-chosen colours, you might need to insert the HSB/RGB values and or hex codes into an array, and call upon that array within a function. For example something like:

    let colors = ["...", "...", "..."];
    let currentColor;

    function setup(){
        createCanvas(windowWidth, windowHeight);
        currentColor = random(colors);
    }

    function draw() {
        background(currentColor);
    }

    function mousePressed(){
        currentColor = random(colors);
    }

The above is ChatGPT generated. Click the following links for the following topics:

#### Random:

- [random();](https://p5js.org/examples/calculating-values-random/)
- [Tom's explaination on random();](https://blog.science.family/240312_random)

#### Arrays:

Just in case you need an refresher: [Arrays](https://blog.science.family/240312_arrays)

### Sound:

- [17.1: Loading and Playing - p5.js Sound Tutorial (video)](https://youtu.be/Pn1g1wjxl_0?si=ftrc9yfyfpzaYQFZ)
- [17.5: Adding Sound Effects - p5.js Sound Tutorial (video)](https://youtu.be/40Me1-yAtTc?si=XxqYWehjygertOYr)
- [The entirety of the p5 sound reference library.](https://p5js.org/reference/p5.sound/)[^2]

## Youtube Resources:

- [p5.js Coding Tutorial | Oscillating Waves](https://youtu.be/nqvJDkKsYYI?si=uYsERi_4Ek33Qsbd)
- These ones which is a lot more in the weeds:
  - [Make Water Surface Effect in p5.js 1/2](https://youtu.be/kUexPZMIwuA?si=_mkku41cogQpajRx)
  - [Make Water Surface Effect in p5.js 2/2](https://youtu.be/H7CEy5mgKFY?si=IbRnHgjY6vtlbk-t)

# Classmate Consulations:

Travis states:

> "i reckon Rafaël has a class or an object he calls for each iteration of the house, which he just feeds a color and a falling direction.. i'm not sure how he's accomplished the appearence of having them fall over in different directions, but it's almost certainly a random direction."

> "if i had to guess how they were shown to fall downwards, i would imagine that each corner is programmed to move towards the other horizontally, and the ground vertically, both vertical and horizontal calculated with a small offset to make it seem like they are falling in 3d space, instead of just 2d squishing."

# Concept Implementation:

[^1]: Slerp(); is lerp(); but for circular paths/non-linear paths.
[^2]: 9 of March 2025 here, I'm sorry but its time for you to suffer.
