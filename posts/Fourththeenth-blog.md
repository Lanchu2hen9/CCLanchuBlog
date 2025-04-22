---
title: Week 7 (Tues) Homework
published_at: 2025-04-15
snippet: This is homework 7b. Apparently homework 7a doesn't exist for some reason.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-1)
2. [Task 2 & 3](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-2)
   - [Passage 1](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-1)
   - [Passage 2](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-2)
   - [Passage 3](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-3)
3. [Task 4](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-4)

# Task 1:

I'm not going to be use q5.js for the first task. Think of this task more as a warm-up. [p5 web editor code](https://editor.p5js.org/Lanchu2hen9/sketches/_q0Bg5fmG) Draw smth in the below canvas.

<iframe id="TheTism" src="https://editor.p5js.org/Lanchu2hen9/full/_q0Bg5fmG"></iframe>

<script type="module">

    const iframe  = document.getElementById (`TheTism`)
    iframe.width  = 400
    iframe.height = 400

</script>

`q.createCanvas(width, height, q.WEBGL).parent(cnv);` trying to parent the created canvas to the cnv element, so that the embbed doesn't end up at the bottom of the blog. Still need to work on this. It works perflectly fine with `q.createCanvas(width, height, q.WEBGL);` tho, it turns q5.js can actually support WebGL.

(The embed is still messed up, can't unstick it from the bottom of the page. Which annoys me.)

# Task 2:

I choose "_Information & Thinking by Michel Serres_"  
**pick three passages from the text that speak to you the loudest**

## Passage 1:

> "We still decorate the planet with a web of hertz - an electronic web –with a thousand and one names, repeating...a hominid practice that is at least a thousand years [old]."

## Passage 2:

> "No, we are not so exceptional; we are not the only ones endowed with the capability to see, read or write: the wind traces its[elf]...over...the desert...dust engraves cliffs...sculpted...by erosion...The living leave
> their remains, be it only bones. We are not the only ones endowed with the capability to count or remember; the trees calculate their years, crowned in their wood."

## Passage 3:

> "I am a diamond, made of hard carbon that is at times pure, transparent or granular, reflecting a thousand times over the thousand and one hues of the rainbow, shining out of the multiple things of the world and of the thousands of people and living things I have ever met."

Seeing that task 2 & 3 is literally just creating a rough draft of AT2, I'll creating my ideas (as well as most of task 2 & 3) in this page, [Assignment Task 2, Conceptualisation.](https://cclanchublo6.deno.dev/AT2-Concept).

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

# Task 4:

Okay had a brief scan of the assignment brief it turns out there is no physical limitation to what API library I can use for AT2. I just have to do it in this [repo](https://github.com/Lanchu2hen9/TheSpiral_AT2). Here's also the link to the [Repo website](https://lanchu-thespiral-a-50-pqfxhzd0q8h2.deno.dev/). Its nothing fancy, just a turquoise with buttons on it. (Yes the texts are actually buttons/interactable, they just physically don't look like buttons. And no I'm not changing the visuals of this.)
