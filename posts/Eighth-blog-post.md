---
title: Week 4 (Tues & Thurs) Homework
published_at: 2025-03-30
snippet: This is homework 4a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Seventh-blog-post#task-1)
2. [Updates](https://cclanchublo6.deno.dev/Seventh-blog-post#updates)
   - [Previous Drafts](https://cclanchublo6.deno.dev/Seventh-blog-post#previous-drafts)
   - [Waves](https://cclanchublo6.deno.dev/Seventh-blog-post#waves)
     - [Code Drafts](https://cclanchublo6.deno.dev/Seventh-blog-post#code-drafts)
   - [Waves ~ Part B:](https://cclanchublo6.deno.dev/Seventh-blog-post#waves--part-b)
3. [Task 2](https://cclanchublo6.deno.dev/Seventh-blog-post#task-2)
4. [Cute Interactions](https://cclanchublo6.deno.dev/fourth-blog-post#cute-interactions)
5. [Code Implementations & Experiements](https://cclanchublo6.deno.dev/fourth-blog-post#code-implementationexperiement)
   - [Png & Button code](https://cclanchublo6.deno.dev/fourth-blog-post#png--button-code)
6. [Final Sketch](https://cclanchublo6.deno.dev/fourth-blog-post#final-sketch)

# Task 1:

## High Compressibility:

Tried to code smth in the Canvas API, here hope that this is good enough of a example for high compressibility:

[Task 1a Sketch](https://lanchu-thespiral-a-50-81ssb0cys6e1.deno.dev/ExperiementFiles/index2.html)

## Low Compressibility:

<iframe id="CocoMelon" src="https://editor.p5js.org/Lanchu2hen9/full/KVWP32eXI"></iframe>

<script type="module">

    const iframe  = document.getElementById (`CocoMelon`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## High effective complexity:

<iframe id="Micheal" src="https://editor.p5js.org/Lanchu2hen9/full/mKAl3iqZt"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Micheal`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**Tutorial:** [Coding Challenge #14: Fractal Trees - Recursive](https://youtu.be/0jjeOYMjmDU?si=iOhXBEbY_KQAvfWw)

# Task 2:

<iframe id="Helen" src="https://editor.p5js.org/Lanchu2hen9/full/mKAl3iqZt"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Helen`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**In your third example, what concepts and code are responsible for creating structure, in this sense?**  
The concept of a fractual tree is based on the idea that a pattern and or a line is repeated and loops in on itself. This repetition of the fractual tree's pattern/branches is generated from a recursive loop, see:

```js
function micheal(len) {
  line(0, 0, 0, - len);
  // Drawing bottom line

  translate(0, -len)
  // translating the line to the top.

  if (len > 4) {
      push();
      rotate(angle);
      micheal(len * 0.67);
  //Calls the function again.
      pop();

      push();
      rotate(-angle);
      micheal(len * 0.67);
      pop();

    rotate(angle);
    // rotate line and draw line left.
  }
```

The fact that the above code is something so simple and creates a pattern that is so complex, and ordered like tessellation. Lends to that idea of Effective Complexity, and having order in disorder. (Also user interactions adds a degree of randomness to the fractual tree.)

Meanwhile in my Low Compressibility example, although the squares in a grid give it order, subjectively speaking the "randomness" of the `sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, size *1.7);` perlin noise field, and `let r = noise(zoff) * 255; let g = noise(zoff + 10) * 255; let b = noise(zoff + 20) * 255;` rgb fields of the square adds more information content, and random deviation.

And my high compressibility is just a orange and blue house, quite simple, quite organised. Less information content, and random deviation.
