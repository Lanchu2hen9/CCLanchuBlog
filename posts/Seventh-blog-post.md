---
title: Homework 3b.
published_at: 2022-11-04
snippet: Existing but at what cost?
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [A1 Overview](https://cclanchublo6.deno.dev/fourth-blog-post#a1-overview)
2. [Cute Visuals](https://cclanchublo6.deno.dev/fourth-blog-post#cute-visuals)
3. [Cute Sounds](https://cclanchublo6.deno.dev/fourth-blog-post#cute-sounds)
4. [Cute Interactions](https://cclanchublo6.deno.dev/fourth-blog-post#cute-interactions)
5. [Code Implementations & Experiements](https://cclanchublo6.deno.dev/fourth-blog-post#code-implementationexperiement)
   - [Png & Button code](https://cclanchublo6.deno.dev/fourth-blog-post#png--button-code)
6. [Final Sketch](https://cclanchublo6.deno.dev/fourth-blog-post#final-sketch)

# Task 1:

**Please describe how your AT1 will use each of the following concepts:**

**Variables:**  
I'll be declaring`const DuckNotes` and `const Duckies` variables globally so that my functions are able to access my variable.

- There's not need for these variables to be let since, they'll be containg the sprites (duck .png), and .wav files of my ducks xylophones.

**Functions:**

- `function setup(){}` to initalise the function.
- `function draw(){}` to animate things that happen when the experience is loaded.

**Iteration:**

**Boolean logic:**

- Don't really need boolean logic if, you count `DuckNotes[4].stop;` and `DuckNotes[4].play;` as boolean logic than sure.

**Arrays:**

- My `const DuckNotes` and `const Duckies` are arrays, I'll be using `DuckNotes.push (loadSound('CNote.wav'));` and `Duckies.push (loadImage('ducktest1.png'));` to push the respective .png and .wav files into their respective arrays.

**Classes:**

- Asked ChatGPT if I should re-factor the DuckBtns code, the bot said yes, and Classes are worth 10% of the assignment, so here I am.

  _ChatGPT's response:_
  ![Asking ChatGPT if I should re-factor my code.](ChatGPT_Refactoring.png)

# Task 2:

[CC_Assignment 1, WIP](https://editor.p5js.org/Lanchu2hen9/sketches/wc1DKZ-x1).
