---
title: Assignment Task 2, Conceptualisation.
published_at: 2025-03-27
snippet: I am very excited. :D
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [General Notes](#general-notes)
   - [Ideas](#ideas)
2. [Requirements](#requirements)
3. [A Response to Information & Thinking by Michel Serres:](#a-response-to-information--thinking-by-michel-serres)
4. [How does this relate to AT2?](#how-does-this-relate-to-at2)
5. [Code Block Drafts](#code-block-drafts)

- [Draft 1](#draft-1)
- [Draft 2](#draft-2)
- [Draft 3](#draft-3)
  - [Maths](#maths)
- [Draft 4](#draft-4)
- [Draft 5](#draft-5)
- [Draft 6](#draft-6)
- [Draft 7; All Visuals Working](#draft-7-all-visuals-working)
- [Draft 8](#draft-8)

# General Notes:

Tom I am very excited for this new unit. LET'S GOOOOOOO! [^1]

## Ideas:

- [Recursion](https://blog.science.family/240321_recursion)

I want to do smth like this [turquiose & hot pink water droplet.](https://blog.science.family/250413_shaders#adding-interactions) or smth like this [Concentric Circles](https://blog.science.family/250413_shaders#1-concentric-circles), where user interactions creates disturbance and or chaos. Not this [Radial vs Linear Patterns](https://blog.science.family/250413_shaders#3-radial-vs-linear-patterns), because I want to do smth with a fractual tree, and using this shader will be too chaotic.

# Requirements:

- Must use either: "fractal, moire, glitch, and 3D techniques."
- Responds to one of the following essays:
  1. Information & Thinking by Michel Serres
  2. What Is It Like to Be A Fungus? by Merlin Sheldrake
  3. Xenofemenism: A Politics for Alienation by Laboria Cuboniks

# A Response to Information & Thinking by Michel Serres:

Serres states that everything "emits information, receives it, stores it and processes it", and that humans are not unique in the Universe because by their definition Rocks, trees, fungi, machines, and stars all “think”.

A counter-argument to the Serres' rejection of the anthropocentrism ideal. Is that humans although not special in the grand scheme of things, they are sapient. This sapience makes us special in a weird way. I would break down sapience into 2 categories; which I would define as "Sapience" (Human-like sapience), and "Proto-sapience" animal-like sapience.

Also ChatGPT defines sapience as:

> "Refers to beings with advanced intellectual abilities: abstract reasoning, judgment, self-reflection, planning."

I define sapience as:

> "If you have enough of a conscious/'abstract reasoning/judgement' to do evil or in a less eloquent term; 'Fuck around and find out.' Or you have a central nervous systems, you are sapient."

So humans are in the Human-like sapience. And animals like; pigs[^2], dolphins, elephants, great apes, crows, parrots, are in the animal-like sapience. Any everything else in the animal kingdom are like in the sentient & concious category.

# How does this relate to AT2?

The concept that I want to tackle is "Processing ≠ Thinking", just because you process something doesn't mean you understand it. "Hearing ≠ listening."

- I want to create something that when the user interacts with that thing it responds "human-like", now my brain is like: "How about you create smth like a LLM?" I said no cus I have 2 weeks to code this thing.
- So I might use an array and maybe an area in which the user can drop down "responses" to the code and the code respones using pre-determined information.
- Since drop-down menus are painful to code, and I do not have enough determination in week 7, I might just use smth like "IfMouseIsPressed".

- I still want to use recursion, so maybe on user input recursion happens.
- This [turquiose & hot pink water droplet.](https://blog.science.family/250413_shaders#adding-interactions) but I want the water droplet to distort some kind of noise/perlin noise background. And on user click it creates either fractual trees, and or more distortions.

Smth like this: [P5.js - Creating a 2D starfield using P5.js | Starry Night Background](https://youtu.be/xbmwfg5U9-s?si=zOxnLPkHqoLTwaEx) But the stars "zoom in" on the user mouse click.

I want somethings like a star/night sky background attached to a perlin noise field smth like this:

<iframe id="Noisey-Disco" src="https://editor.p5js.org/Lanchu2hen9/full/KVWP32eXI"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Noisey-Disco`)
    iframe.width  = 400
    iframe.height = 400

</script>

But instead of the squares grids I want it to be like stars. I also like the fact that the squares change size over time. So I want the background to be this but stars.

I want it so that `zoff += 0.001;` (The changing of the pattern through time.) Speeds up to smth like "`zoff += 0.01;`, on user input. I want everything to be calm at first, and then bam it hits you with the chaos. I want it to start off as a low energy system and then it hits you with high energy.

Here's the embedded code btw:

```js
// Video Tutorial from: https://youtu.be/sN7JotC3vdM?si=KcZAmjH5M8YtabG3
// Might fuck with these values at the later date. 30 March Lanchu.

let sizes = [];
let cols;
let rows;
let size = 15; //Determines no. of rows and columns.
let xoff;
let yoff;
let zoff = 0;
let inc = 10;

let BackgroundMusic;

function preload() {}

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  cols = width / size;
  rows = height / size;
}

function draw() {
  background(220);

  xoff = 0;
  for (let i = 0; i < cols; i++) {
    sizes[i] = [];
    yoff = 0;
    for (let j = 0; j < rows; j++) {
      sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, size * 1.7);
      yoff += inc;

      let r = noise(zoff) * 255;
      let g = noise(zoff + 10) * 255;
      let b = noise(zoff + 20) * 255;

      fill(r, g, b);
      noStroke();
    }
    xoff += inc;
    zoff += 0.001;
    //The changing of the pattern through time.
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(size / 2 + i * size, size / 2 + j * size, sizes[i][j], sizes[i][j]);
    }
  }
}
```

I also want this high energy to be localised to the mouse's position.

Also when I mean star I mean smth like this shape => ✨. Might need to use WEBGL For this.

I want on the user's click the stars burst/go "supernova" and send out an array of sciencey words related to astronomy. - The word part of AT2 is supposed to represent's humanity's ability to reason and make a judgement about the universe around us.

I also want these text to hit the edge of the screen and then bounce off the edges of the screen like a screensaver. And it will be interesting to use recursion within the "textbounce" to make it split off and duplicate smaller versions of itself. Might have to limit the smaller versions of this text to a certain amount so that the browser doesn't lag.

Sound smth inspired by this [NASA | Sun Sonification (raw audio)](https://youtu.be/-I-zdmg_Dno?si=_mvisp07Ys-S7q4Z), but I want spikes of corruption and or glitch where spikes of either silence or smth interupting a soundtrack.

# Code Block Drafts:

- I actually asked ChatGPT about this and there's a bunch of stuff I need fiddle with including the setup function.

## Draft 1:

```Js
document.body.style.margin = "0";
document.body.style.overflow = "hidden";

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

//cnv.width = 600;
// cnv.height = 400;

const ctx = cnv.getContext("2d");

let stars = [];

function setup() {
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
  requestAnimationFrame(draw_frame);
}

const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  //   ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  const seconds = ms / 1000;
  //   console.log(seconds.toFixed(2));

  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }

  requestAnimationFrame(draw_frame);
};

requestAnimationFrame(draw_frame);

class Star {
  constructor(x, y, size, speed) {
    this.x = random(innerWidth);
    this.y = random(innerHeight);
    this.size = random(1, 5);
    this.speed = random(1, 3);
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  update() {
    // Should technically move the stars.
    this.x += this.speed;

    // Should reset the stars positions when they go off screen.
    if (this.x < -this.size) {
      this.x = innerWidth + this.size;
      this.y = random(innerHeight);
    }
  }
}

// draw_frame();

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
};
```

## Draft 2:

Vanilla Javascripted it.

Although the above code works in p5.js, I would need to plain-vanilla Javascriptify the p5.js code. What I need to do:

- I need to vanillise the p5.js `random();`, as in define as actually focking define `function random() {...}`.
- Actually draw the circles/"ellipses" with the following:

```Js
ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
```

## Draft 3:

```js
document.body.style.margin = "0";
document.body.style.overflow = "hidden";

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

let stars = [];
// Creates an array to store the Star objects.

function random(arg1, arg2) {
  // Defines two arguments array parameters
  //  within the function random.

  if (arguments.length == 1) {
    // If the the length of the arguments array
    // is equals roughly to 1.

    const max = arg1;
    // Then define max as arg1.

    return Math.random() * max;
    // Stops the function from executing
    // and gives a random number
    // between 0 and max.
  } else if (arguments.length == 2) {
    // If the length of the arguments arrays
    // is roughly equal to 2.

    const min = arg1;
    // Define min as arg1.

    const max = arg2;
    // Define max as arg2.

    const range = max - min;
    // Define range as max - min.

    return Math.random() * range + min;
    // Stops the function from executing,
    // and outputs a random number.
  }
}
// In general, this is the randomiser function
// that randomises values inputted into it.

class Star {
  constructor(x, y, size, speed) {
    this.x = random(innerWidth);
    this.y = random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.size = random(1, 8);
    this.speed = random(1, 2.5);
  }
  // Constructor function, that defines
  // the instance variables of the Star object.

  show() {
    ctx.save();
    // Save the current state of the shape.

    ctx.translate(this.x, this.y);
    // translate the shape, by this.x
    // and this.y as defined in the constructor.

    ctx.beginPath();
    // Start drawing the shape.

    const arms = 8;
    // The star shape has 8 arms.

    for (let i = 0; i < arms; i++) {
      // Count from 0 to arms, where
      // arms the max number of arms
      // the star can have.

      const angle = ((Math.PI * 2) / arms) * i;
      // The angle between each of the arms,
      // is 2π ÷ no. of arms.

      const x = Math.cos(angle) * this.size;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      const y = Math.sin(angle) * this.size;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      ctx.moveTo(0, 0);
      // Move the drawing cursor to the "centre" of the star.

      ctx.lineTo(x, y);
      // Draws each arm of the Star.
    }

    ctx.strokeStyle = "white";
    // Make the lines drawn be white.

    ctx.lineWidth = 1;
    // The thicccness of the lines drawn is 1.
    ctx.stroke();
    // Defines the colour of the lines drawn.

    ctx.restore();
    // Restores the start state of the shape.
    // So basically, it spews out another Star,
    // for the update() function to move.
  }

  update() {
    this.x -= this.speed;
    // Moves the Star.

    // Resets the Star positions when they go off screen.
    if (this.x < -this.size) {
      // If the centre of the star is less than the right-
      // side of the Star, then the star is off screen.

      this.x = innerWidth + this.size;
      // Then yeet it to the right side of the screen.

      this.y = random(innerHeight);
      // Places Star on a random position on the y-axis,
      // of the canvas.
    }
  }
}
// This is the Star object.

function setup() {
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}

const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  // Set the background colour to black.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire canvas with black. And resizes the canvas to be
  // the same size as the window.

  const seconds = ms / 1000;
  // Converts the milliseconds to seconds.

  //   console.log(seconds.toFixed(2));

  for (let i = 0; i < stars.length; i++) {
    // For every star in the stars array.

    stars[i].show();
    // Draw the stars.

    stars[i].update();
    // Move the stars's position.
  }

  requestAnimationFrame(draw_frame);
};

setup();

requestAnimationFrame(draw_frame);

// draw_frame();

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
};
```

### Maths:

Just wanted to put the code block with the uneditted, non-concise code comments here. Purely just for myself.

```js
function random(arg1, arg2) {
  // Defines two arguments array parameters
  //  within the function random.

  if (arguments.length == 1) {
    // If the the length of the arguments array
    // is equals roughly to 1.

    const max = arg1;
    // Then define max as arg1.

    return Math.random() * max;
    // Stops the function from executing
    // and gives a random number
    // between 0 and max.
  } else if (arguments.length == 2) {
    // If the length of the arguments arrays
    // is roughly equal to 2.

    const min = arg1;
    // Define min as arg1.

    const max = arg2;
    // Define max as arg2.

    const range = max - min;
    // Define range as max - min.

    return Math.random() * range + min;
    // Stops the function from executing,
    // and outputs a random number.

    // 1. Math.random(), outputs => [0,1)
    // 2. * range, outputs => [0, range). "Un-decimally-pointing Math.random()"
    // 2a. [0 + min, range + min)
    // 3. + min, outputs => [min, max). "See step 2a."
  }
}
```

## Draft 4:

```js
document.body.style.margin = "0";
document.body.style.overflow = "hidden";

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

// AT2-V1.0.js
export function run(simplex) {
  console.log(simplex.noise2D(0.1, 0.2)); // you can now use it here!

  const noise = new SimplexNoise();
  let stars = [];
  // Creates an array to store the Star objects.

  function random(arg1, arg2) {
    // Defines two arguments array parameters
    //  within the function random.

    if (arguments.length == 1) {
      // If the the length of the arguments array
      // is equals roughly to 1.

      const max = arg1;
      // Then define max as arg1.

      return Math.random() * max;
      // Stops the function from executing
      // and gives a random number
      // between 0 and max.
    } else if (arguments.length == 2) {
      // If the length of the arguments arrays
      // is roughly equal to 2.

      const min = arg1;
      // Define min as arg1.

      const max = arg2;
      // Define max as arg2.

      const range = max - min;
      // Define range as max - min.

      return Math.random() * range + min;
      // Stops the function from executing,
      // and outputs a random number.
    }
  }
  // In general, this is the randomiser function
  // that randomises values inputted into it.

  class Star {
    constructor(x, y, BaseSize, speed, zoff) {
      this.x = random(innerWidth);
      this.y = random(innerHeight);
      // (this.x, this.y) are the "centre point",
      // of the star.

      this.BaseSize = random(1, 8);
      this.speed = random(1, 2.5);
      this.zoff = random(1000);
    }
    // Constructor function, that defines
    // the instance variables of the Star object.

    show() {
      ctx.save();
      // Save the current state of the shape.

      ctx.translate(this.x, this.y);
      // translate the shape, by this.x
      // and this.y as defined in the constructor.

      this.zoff += 0.01;

      const noiseVal = noise.noise2D(this.x * 0.01, this.zoff);
      const mappedSize = this.BaseSize + noiseVal * 2;

      const r = Math.floor(noise.noise2D(this.zoff, 0) * 127 + 128);
      const g = Math.floor(noise.noise2D(this.zoff + 100, 0) * 127 + 128);
      const b = Math.floor(noise.noise2D(this.zoff + 200, 0) * 127 + 128);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

      ctx.beginPath();
      // Start drawing the shape.

      const arms = 8;
      // The star shape has 8 arms.

      for (let i = 0; i < arms; i++) {
        // Count from 0 to arms, where
        // arms the max number of arms
        // the star can have.

        const angle = ((Math.PI * 2) / arms) * i;
        // The angle between each of the arms,
        // is 2π ÷ no. of arms.

        const x = Math.cos(angle) * mappedSize;
        // Start drawing the star at x-coordinate,
        // which is cos(angle) * size of the Star.

        const y = Math.sin(angle) * mappedSize;
        // Start drawing the star at x-coordinate,
        // which is cos(angle) * size of the Star.

        ctx.moveTo(0, 0);
        // Move the drawing cursor to the "centre" of the star.

        ctx.lineTo(x, y);
        // Draws each arm of the Star.
      }

      ctx.strokeStyle = "white";
      // Make the lines drawn be white.

      ctx.lineWidth = 1;
      // The thicccness of the lines drawn is 1.
      ctx.stroke();
      // Defines the colour of the lines drawn.

      ctx.restore();
      // Restores the start state of the shape.
      // So basically, it spews out another Star,
      // for the update() function to move.
    }

    update() {
      this.x -= this.speed;
      // Moves the Star.

      // Resets the Star positions when they go off screen.
      if (this.x < -this.size) {
        // If the centre of the star is less than the right-
        // side of the Star, then the star is off screen.

        this.x = innerWidth + this.BaseSize;
        // Then yeet it to the right side of the screen.

        this.y = random(innerHeight);
        // Places Star on a random position on the y-axis,
        // of the canvas.
      }
    }
  }
  // This is the Star object.

  function setup() {
    for (let i = 0; i < 100; i++) {
      // For one star every time, i interates from
      // 0 to 100.

      stars.push(new Star());
      // Push the created Star objects into the stars array.
    }
    requestAnimationFrame(draw_frame);
    // Calls the draw_frame function.
  }

  const draw_frame = (ms) => {
    ctx.fillStyle = "black";
    // Set the background colour to black.

    ctx.fillRect(0, 0, innerWidth, innerHeight);
    // Fills the entire canvas with black. And resizes the canvas to be
    // the same size as the window.

    const seconds = ms / 1000;
    // Converts the milliseconds to seconds.

    //   console.log(seconds.toFixed(2));

    for (let i = 0; i < stars.length; i++) {
      // For every star in the stars array.

      stars[i].show();
      // Draw the stars.

      stars[i].update();
      // Move the stars's position.
    }

    requestAnimationFrame(draw_frame);
  };

  setup();

  requestAnimationFrame(draw_frame);

  // draw_frame();

  onresize = () => {
    cnv.width = innerWidth;
    cnv.height = innerHeight;
  };
}
```

Current console issues:

> Uncaught SyntaxError: Unexpected token 'export' (at VM569 AT2-V1.0.js:11:1)Understand this error AT2-V1.0.js:14 Uncaught ReferenceError: SimplexNoise is not defined
> at run (AT2-V1.0.js:14:17)
> at AT2-V1.0.html:13:5

Import statement or something to do with importing the module/API is probably messed up. Will fix. 🫡

## Draft 5:

```js
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js";

// import { run } from "./AT2-V1.0.js";

const simplex = new SimplexNoise();
// AT2-V1.0.js
function run(simplex) {
  console.log(simplex.noise2D(0.1, 0.2)); // you can now use it here!

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";

  const cnv = document.getElementById("cnv_element");
  cnv.width = innerWidth;
  cnv.height = innerHeight;

  const ctx = cnv.getContext("2d");

  const noise = new SimplexNoise();
  let stars = [];
  // Creates an array to store the Star objects.

  function random(arg1, arg2) {
    // Defines two arguments array parameters
    //  within the function random.

    if (arguments.length == 1) {
      // If the the length of the arguments array
      // is equals roughly to 1.

      const max = arg1;
      // Then define max as arg1.

      return Math.random() * max;
      // Stops the function from executing
      // and gives a random number
      // between 0 and max.
    } else if (arguments.length == 2) {
      // If the length of the arguments arrays
      // is roughly equal to 2.

      const min = arg1;
      // Define min as arg1.

      const max = arg2;
      // Define max as arg2.

      const range = max - min;
      // Define range as max - min.

      return Math.random() * range + min;
      // Stops the function from executing,
      // and outputs a random number.
    }
  }
  // In general, this is the randomiser function
  // that randomises values inputted into it.

  class Star {
    constructor(x, y, BaseSize, speed, zoff, r, g, b) {
      this.x = random(innerWidth);
      this.y = random(innerHeight);
      // (this.x, this.y) are the "centre point",
      // of the star.

      this.BaseSize = random(1, 8);
      // Determines the size of the star, from
      // size 1 start to size 8 star.

      this.speed = random(1, 2.5);
      // Determines the speed of the star moving left
      // across the screen.

      this.zoff = random(1000);
      // Determines how fast the noise field animates across the
      // screen.

      // Higher values, the slower the flickering of the stars is
      // slower.

      // Lower values, the faster the flickering of the stars is.
    }
    // Constructor function, that defines
    // the instance variables of the Star object.

    show() {
      ctx.save();
      // Save the current state of the shape.

      ctx.translate(this.x, this.y);
      // translate the shape, by this.x
      // and this.y as defined in the constructor.

      this.zoff += 0.01;
      // Animates how fast the stars flicker.

      const NoiseEffect = noise.noise2D(this.x * 0.01, this.zoff);
      // Generates a noise value outputted by the .noise2D();
      //  NoiseEffect is a noise field that outputs [-1, 1].

      const TransformedSize = this.BaseSize + NoiseEffect * 2;
      // Transformed the BaseSize of the star, based on the NoiseEffect
      // generated by the Simplex Noise field.

      this.r = Math.floor(noise.noise2D(this.zoff, 0) * 170 + 250);
      // Generates a random red value, based on the noise field.

      // For the red channel value
      // Round down the generated noise value to the nearest integer.
      // Step 1. Input zoff value in .nosee2D() function, this is how
      // the star flickers animates over time.
      // Step 2. Multiply the generated noise value by 127, this
      // converts the noise value to a range of [-127, 127].
      // Step 3. [-127 + 128, 127 + 128], which gives [1, 255]

      this.g = Math.floor(noise.noise2D(this.zoff + 100, 0) * 170 + 250);
      // Generates a random green value, based on the noise field.

      this.b = Math.floor(noise.noise2D(this.zoff + 200, 0) * 170 + 250);
      // Generates a random blue value, based on the noise field.

      ctx.beginPath();
      // Start drawing the shape.

      const arms = 8;
      // The star shape has 8 arms.

      for (let i = 0; i < arms; i++) {
        // Count from 0 to arms, where
        // arms the max number of arms
        // the star can have.

        const angle = ((Math.PI * 2) / arms) * i;
        // The angle between each of the arms,
        // is 2π ÷ no. of arms.

        const x = Math.cos(angle) * TransformedSize;
        // Start drawing the star at x-coordinate,
        // which is cos(angle) * size of the Star.

        const y = Math.sin(angle) * TransformedSize;
        // Start drawing the star at x-coordinate,
        // which is cos(angle) * size of the Star.

        ctx.moveTo(0, 0);
        // Move the drawing cursor to the "centre" of the star.

        ctx.lineTo(x, y);
        // Draws each arm of the Star.
      }

      ctx.strokeStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
      // Make the lines drawn be white.

      ctx.lineWidth = 1;
      // The thicccness of the lines drawn is 1.
      ctx.stroke();
      // Defines the colour of the lines drawn.

      ctx.restore();
      // Restores the start state of the shape.
      // So basically, it spews out another Star,
      // for the update() function to move.
    }

    update() {
      this.x -= this.speed;
      // Moves the Star.

      // Resets the Star positions when they go off screen.
      if (this.x < -this.BaseSize) {
        // If the centre of the star is less than the right-
        // side of the Star, then the star is off screen.

        this.x = innerWidth + this.BaseSize;
        // Then yeet it to the right side of the screen.

        this.y = random(innerHeight);
        // Places Star on a random position on the y-axis,
        // of the canvas.
      }
    }
  }
  // This is the Star object.

  function setup() {
    for (let i = 0; i < 100; i++) {
      // For one star every time, i interates from
      // 0 to 100.

      stars.push(new Star());
      // Push the created Star objects into the stars array.
    }
    requestAnimationFrame(draw_frame);
    // Calls the draw_frame function.
  }

  const draw_frame = (ms) => {
    ctx.fillStyle = "black";
    // Set the background colour to black.

    ctx.fillRect(0, 0, innerWidth, innerHeight);
    // Fills the entire canvas with black. And resizes the canvas to be
    // the same size as the window.

    const seconds = ms / 1000;
    // Converts the milliseconds to seconds.

    //   console.log(seconds.toFixed(2));

    for (let i = 0; i < stars.length; i++) {
      // For every star in the stars array.

      stars[i].show();
      // Draw the stars.

      stars[i].update();
      // Move the stars's position.
    }

    requestAnimationFrame(draw_frame);
  };

  setup();

  requestAnimationFrame(draw_frame);

  // draw_frame();

  onresize = () => {
    cnv.width = innerWidth;
    cnv.height = innerHeight;
  };
}

run(simplex);
```

So in the Stars object I will be define an instance method that takes the user's input and or mouse-x, and mouse-y, and intensifies the "170" value in:

```js
this.r = Math.floor(noise.noise2D(this.zoff, 0) * 170 + 250);
this.g = Math.floor(noise.noise2D(this.zoff + 100, 0) * 170 + 250);
this.b = Math.floor(noise.noise2D(this.zoff + 200, 0) * 170 + 250);
```

Which should "brighten" my star colours. I'll probably use the same `this.zoff` value to animate it across time. Or use the same concept but define it as a different variable.

Now at this point in my coding process, I've only done the following:

- Variables ✓
- Iteration ✓
- Functions ✓
- Boolean Logic ✓
- Arrays ✓
- Classes ✓
- **Recursion ✗**
- Code Comments ✓
- **Interactivity ✗**
- **Sound ✗**

We don't talk about the blogging aspect. I want it so that when the user clicks the colours to brighten, and no. of stars increase. And smth like fractual trees to come off the point in which the user clicks on the canvas.

And as for the sound, I want it based on the x,y coordinates of the mouse to change. Space sounds?

The following is an instance method within the Star object, that explains what I want to do.

```Js
    OnUserClick() {
      // Within this instance method, we want to have it
      // so that when the user clicks the this.r, this.g, this.b
      // changes/brightens. Specifically, the "170" value.\

      // We also want either fractual trees or "lightning" to shoot
      // of the point in which the user clicks, so we might need to use
      //mouseX and mouseY to get the coordinates of the mouse click.
    }
```

Putting it in the Star Object is bad idea, since I'm creating an eventlistener each for each **focking** Star Object in stars array.

## Draft 6:

The below code works, right now the alpha/opacity of the star just decreases as the user clicks. Which I only want applied to the lightning.

```Js
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js";

// import { run } from "./AT2-V1.0.js";

const simplex = new SimplexNoise();

const noise = new SimplexNoise();
let stars = [];
// Creates an array to store the Star objects.

let Zeus = [];
// Creates an array to store the ThunderStrikes objects.

let IsClicked = false;
// Defining a boolean variable, to check if the
// user has clicked on the canvas.

let StarBrightness = 170;
// Variable that defines the default brightness
// of the stars.

let FlickerSize = 2;
// Variable that defines the default flicker size.

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

// AT2-V1.0.js
function run(simplex) {
  console.log(simplex.noise2D(0.1, 0.2)); // you can now use it here!

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  setup();
}

//#region Objects:

//#region Star Object
class Star {
  constructor(x, y, BaseSize, speed, zoff, r, g, b) {
    this.x = Random(innerWidth);
    this.y = Random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.BaseSize = Random(1.5, 9);
    // Determines the size of the star, from
    // size 1 start to size 8 star.

    this.speed = Random(1, 2.5);
    // Determines the speed of the star moving left
    // across the screen.

    this.zoff = Random(1000);
    // Determines how fast the noise field animates across the
    // screen.

    // Higher values, the slower the flickering of the stars is
    // slower.

    // Lower values, the faster the flickering of the stars is.
  }
  // Constructor function, that defines
  // the instance variables of the Star object.

  show() {
    ctx.save();
    // Save the current state of the shape.

    ctx.translate(this.x, this.y);
    // translate the shape, by this.x
    // and this.y as defined in the constructor.

    this.zoff += 0.01;
    // Animates how fast the stars flicker.

    const NoiseEffect = noise.noise2D(this.x * 0.01, this.zoff);
    // Generates a noise value outputted by the .noise2D();
    //  NoiseEffect is a noise field that outputs [-1, 1].

    const TransformedSize = this.BaseSize + NoiseEffect * FlickerSize;
    // Transformed the BaseSize of the star, based on the NoiseEffect
    // generated by the Simplex Noise field.

    this.r = Math.floor(noise.noise2D(this.zoff, 0) * StarBrightness + 250);
    // Generates a random red value, based on the noise field.

    // For the red channel value
    // Round down the generated noise value to the nearest integer.
    // Step 1. Input zoff value in .nosee2D() function, this is how
    // the star flickers animates over time.
    // Step 2. Multiply the generated noise value by 127, this
    // converts the noise value to a range of [-127, 127].
    // Step 3. [-127 + 128, 127 + 128], which gives [1, 255]

    this.g = Math.floor(
      noise.noise2D(this.zoff + 100, 0) * StarBrightness + 250
    );
    // Generates a random green value, based on the noise field.

    this.b = Math.floor(
      noise.noise2D(this.zoff + 200, 0) * StarBrightness + 250
    );
    // Generates a random blue value, based on the noise field.

    ctx.beginPath();
    // Start drawing the shape.

    const arms = 8;
    // The star shape has 8 arms.

    for (let i = 0; i < arms; i++) {
      // Count from 0 to arms, where
      // arms the max number of arms
      // the star can have.

      const angle = ((Math.PI * 2) / arms) * i;
      // The angle between each of the arms,
      // is 2π ÷ no. of arms.

      const x = Math.cos(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      const y = Math.sin(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      ctx.moveTo(0, 0);
      // Move the drawing cursor to the "centre" of the star.

      ctx.lineTo(x, y);
      // Draws each arm of the Star.
    }

    ctx.globalAlpha = 1;
    ctx.strokeStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
    // Make the lines drawn be white.

    ctx.lineWidth = 1;
    // The thicccness of the lines drawn is 1.
    ctx.stroke();
    // Defines the colour of the lines drawn.

    ctx.restore();
    // Restores the start state of the shape.
    // So basically, it spews out another Star,
    // for the update() function to move.
  }

  update() {
    this.x -= this.speed;
    // Moves the Star.

    // Resets the Star positions when they go off screen.
    if (this.x < -this.BaseSize) {
      // If the centre of the star is less than the right-
      // side of the Star, then the star is off screen.

      this.x = innerWidth + this.BaseSize;
      // Then yeet it to the right side of the screen.

      this.y = Random(innerHeight);
      // Places Star on a random position on the y-axis,
      // of the canvas.
    }
  }
}
// This is the Star object.
//#endregion

//#region Lightning Object
class LigthningStrikes {
  constructor(x, y, length, depth, alphas) {
    this.x = x;
    this.y = y;
    this.length = length;

    this.depth = depth;

    this.angle = Math.random() * Math.PI * 2;
    // Chooses a random angle for the lightning strike.

    this.alphas = 1;
    // The transparency of the lightning strike.

    this.child = null;

    this.createChild();
  }

  createChild() {
    if (this.length > 10 && this.depth < 4) {
      const NewX = this.x + Math.cos(this.angle) * this.length;
      const NewY = this.y + Math.sin(this.angle) * this.length;
      this.child = new LigthningStrikes(
        NewX,
        NewY,
        this.length * 0.6,
        this.depth + 1
      );
    }
  }
  update() {
    this.alphas -= 0.02;

    if (this.child) this.child.update();
  }
  draw(ctx) {
    if (this.alphas <= 0) return;

    ctx.globalAlpha = this.alphas;

    ctx.strokeStyle = `rgba(255, 255, ${this.alphas})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    const EndX = this.x + Math.cos(this.angle) * this.length;
    const EndY = this.y + Math.sin(this.angle) * this.length;
    ctx.lineTo(EndX, EndY);
    ctx.stroke();

    if (this.child) this.child.draw(ctx);

    ctx.globalAlpha = 1;
  }
  isDead() {
    return this.alphas <= 0;
  }
}
// requestAnimationFrame(draw_frame);

//#endregion

// #endregions

//#region Setup Function
function setup() {
  OnUserClick();
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}

//#region Random Function
function Random(arg1, arg2) {
  // Defines two arguments array parameters
  //  within the function random.

  if (arguments.length == 1) {
    // If the the length of the arguments array
    // is equals roughly to 1.

    const max = arg1;
    // Then define max as arg1.

    return Math.random() * max;
    // Stops the function from executing
    // and gives a random number
    // between 0 and max.
  } else if (arguments.length == 2) {
    // If the length of the arguments arrays
    // is roughly equal to 2.

    const min = arg1;
    // Define min as arg1.

    const max = arg2;
    // Define max as arg2.

    const range = max - min;
    // Define range as max - min.

    return Math.random() * range + min;
    // Stops the function from executing,
    // and outputs a random number.
  }
}
// In general, this is the randomiser function
// that randomises values inputted into it.
//#endregion
//#endregion

//#region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  // Set the background colour to black.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire canvas with black. And resizes the canvas to be
  // the same size as the window.

  const seconds = ms / 1000;
  // Converts the milliseconds to seconds.

  //   console.log(seconds.toFixed(2));

  for (let i = 0; i < stars.length; i++) {
    // For every star in the stars array.

    stars[i].show();
    // Draw the stars.

    stars[i].update();
    // Move the stars's position.
  }

  requestAnimationFrame(draw_frame);
};

//#region LightningYeeter Function:
function LightningYeeter() {
  requestAnimationFrame(() => LightningYeeter(ctx));
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  for (let i = Zeus.length - 1; i >= 0; i--) {
    Zeus[i].update();
    Zeus[i].draw(ctx);
    if (Zeus[i].isDead()) Zeus.splice(i, 1);
  }
}

//#region OnUserClick Function
function OnUserClick() {
  cnv.addEventListener("mousedown", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    IsClicked = true;
    StarBrightness = 360;
    FlickerSize = 370;

    for (let i = 0; i < 20; i++) {
      Zeus.push(new LigthningStrikes(x, y, 100, 0));
    }

    LightningYeeter();

    setTimeout(() => {
      IsClicked = false;
      StarBrightness = 170;
      FlickerSize = 2;
    }, 1700);
  });

  // Within this instance method, we want to have it
  // so that when the user clicks the this.r, this.g, this.b
  // changes/brightens. Specifically, the "170" value.\

  // We also want either fractual trees or "lightning" to shoot
  // of the point in which the user clicks, so we might need to use
  //mouseX and mouseY to get the coordinates of the mouse click.
}
//#endregion
//#endregion

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
};

run(simplex);
```

## Draft 7; All visuals working:

```js
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js";

const simplex = new SimplexNoise();

const noise = new SimplexNoise();

//#region Global Variables
let stars = [];
// Creates an array to store the Star objects.

let Zeus = [];
// Creates an array to store the ThunderStrikes objects.

let StarBrightness = 170;
// Variable that defines the default brightness
// of the stars.

let FlickerSize = 2;
// Variable that defines the default flicker size.

let IsClicked = false;

let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];

//#region Canvas Centre:
// let CanvasCentreX = innerWidth / 2;
// // Calculates the "x-coordinate" centre
// // of the canvas.

// let CanvasCentreY = innerHeight / 2;
// // Calculates the "y-coordinate" centre
// // of the canvas.
//#endregion

//#endRegion

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

// AT2-V1.0.js
function run(simplex) {
  console.log(simplex.noise2D(0.1, 0.2)); // you can now use it here!

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  setup();
}

// Bro you need to slap the preload, and other stuff from Week7a.js for the sound here.

//#region Preload Audio
function preload() {
  YSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/386067__dudeawesome__shuttle-to-station-sounds-sound-bites.flac"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/386068__dudeawesome__missions-sounds-sound-bites-launch-morse-code-passing-comet.flac"
    ),
  ];
  // YSoundsStart is an array that will hold the sound objects
  // attached to the +y-axis of the canvas.

  YSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/95822__pixelmasseuse__atlas3q-1fm-16bit.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/59899__robinhood76__00309-crowd-2.wav"
    ),
  ];
  // YSoundsEnd is an array that will hold the sound objects
  // attached to the -y-axis of the canvas.
  XSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/567994__malg0isx__wolf-howle.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/456123__burghrecords__birds-in-the-forest.wav"
    ),
  ];

  // XSoundsStart is an array that will hold the sound objects
  // attached to the +x-axis of the canvas.

  XSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/756754__newlocknew__ambforst_autumna-quiet-forestwind-in-the-pines-and-birches.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/450634__kyles__waves-ocean-crash-on-beach-nearby-wide-big-metallic-sound.flac"
    ),
  ];
  // XSoundsStart is an array that will hold the sound objects
  // attached to the -x-axis of the canvas.
}
// You're using an audio element here, to play around so technically speaking you should be able to find the
// volume attribute connected to the audio element to nudge the volume up and down.
// See https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume (AI recommendated this)
// Or see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio, to investigate the
// audio element further.
//#endregion

//#region Objects:

//#region Star Object
class Star {
  constructor(x, y, BaseSize, speed, zoff, r, g, b) {
    this.x = Random(innerWidth);
    this.y = Random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.BaseSize = Random(1.5, 9);
    // Determines the size of the star, from
    // size 1 start to size 8 star.

    this.speed = Random(1, 2.5);
    // Determines the speed of the star moving left
    // across the screen.

    this.zoff = Random(1000);
    // Determines how fast the noise field animates across the
    // screen.

    // Higher values, the slower the flickering of the stars is
    // slower.

    // Lower values, the faster the flickering of the stars is.
  }
  // Constructor function, that defines
  // the instance variables of the Star object.

  show() {
    ctx.save();
    // Save the current state of the shape.

    ctx.translate(this.x, this.y);
    // translate the shape, by this.x
    // and this.y as defined in the constructor.

    this.zoff += 0.01;
    // Animates how fast the stars flicker.

    const NoiseEffect = noise.noise2D(this.x * 0.01, this.zoff);
    // Generates a noise value outputted by the .noise2D();
    //  NoiseEffect is a noise field that outputs [-1, 1].

    const TransformedSize = this.BaseSize + NoiseEffect * FlickerSize;
    // Transformed the BaseSize of the star, based on the NoiseEffect
    // generated by the Simplex Noise field.

    this.r = Math.floor(noise.noise2D(this.zoff, 0) * StarBrightness + 250);
    // Generates a random red value, based on the noise field.

    // For the red channel value
    // Round down the generated noise value to the nearest integer.
    // Step 1. Input zoff value in .nosee2D() function, this is how
    // the star flickers animates over time.
    // Step 2. Multiply the generated noise value by 127, this
    // converts the noise value to a range of [-127, 127].
    // Step 3. [-127 + 128, 127 + 128], which gives [1, 255]

    this.g = Math.floor(
      noise.noise2D(this.zoff + 100, 0) * StarBrightness + 250
    );
    // Generates a random green value, based on the noise field.

    this.b = Math.floor(
      noise.noise2D(this.zoff + 200, 0) * StarBrightness + 250
    );
    // Generates a random blue value, based on the noise field.

    ctx.beginPath();
    // Start drawing the shape.

    const arms = 8;
    // The star shape has 8 arms.

    for (let i = 0; i < arms; i++) {
      // Count from 0 to arms, where
      // arms the max number of arms
      // the star can have.

      const angle = ((Math.PI * 2) / arms) * i;
      // The angle between each of the arms,
      // is 2π ÷ no. of arms.

      const x = Math.cos(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      const y = Math.sin(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      ctx.moveTo(0, 0);
      // Move the drawing cursor to the "centre" of the star.

      ctx.lineTo(x, y);
      // Draws each arm of the Star.
    }

    ctx.strokeStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
    // Make the lines drawn be white.

    ctx.lineWidth = 2;
    // The thicccness of the lines drawn is 1.
    ctx.stroke();
    // Defines the colour of the lines drawn.

    ctx.restore();
    // Restores the start state of the shape.
    // So basically, it spews out another Star,
    // for the update() function to move.
  }

  update() {
    this.x -= this.speed;
    // Moves the Star.

    // Resets the Star positions when they go off screen.
    if (this.x < -this.BaseSize) {
      // If the centre of the star is less than the right-
      // side of the Star, then the star is off screen.

      this.x = innerWidth + this.BaseSize;
      // Then yeet it to the right side of the screen.

      this.y = Random(innerHeight);
      // Places Star on a random position on the y-axis,
      // of the canvas.
    }
  }
}
// This is the Star object.
//#endregion

//#region Lightning Object
class LigthningStrikes {
  constructor(x, y, length, generation, alphas) {
    this.x = x;
    // The x-coordinate of where the Lightning strike
    // starts from.

    this.y = y;
    // The y-coordinate of where the Lightning strike
    // starts from.

    this.length = length;
    // How long the Lightning strike is.`

    this.generation = generation;
    // Contains the generation of the Lightning strike.
    // And where in the lightning the bolt branches off
    // from.

    this.angle = Math.random() * Math.PI * 2;
    // Chooses a random angle for the lightning strike.

    this.alphas = 1;
    // The transparency of the lightning strike.

    this.child = null;
    // Placeholder to hold the generate child lightning
    // strikes

    this.createChild();
    // Create the a secondary lightning strike, branching
    // off from the main lightning strike.
  }

  createChild() {
    if (this.length > 10 && this.generation < 4) {
      // Maybe make the lightning longer?

      // If the length of the lightning strike
      // is more than 10 pixels, then create a child,
      // stop after the 4th generation is born.

      //Finds the end of each newly created lightning strike,
      // and prepares the (NewX, New Y) coordinates to create
      // the next lightning strike.
      const NewX = this.x + Math.cos(this.angle) * this.length;
      // The new x-coordinate of the child lightning strike.

      const NewY = this.y + Math.sin(this.angle) * this.length;
      // The new y-coordinate of the child lightning strike.

      this.child = new LigthningStrikes(
        NewX,
        NewY,
        this.length * 0.6,
        this.generation + 1
      );
      // Recursively creates a child lightning strike.
    }
  }
  update() {
    this.alphas -= 0.00925;
    // Makes the lightning more transparent over time.

    if (this.child) this.child.update();
    // Also fades away the child lightning strike.
  }
  draw(ctx) {
    if (this.alphas < 0) return;
    // If the lightning strike is transparent,
    // then don't bother drawing it.

    ctx.save();

    ctx.strokeStyle = `rgba(255, 255, 225, ${this.alphas})`;

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // the starting drawing point of the lightning strike.
    // to the specified coordinates.

    const EndX = this.x + Math.cos(this.angle) * this.length;
    // Stop drawing the lightning strike at this EndX coordinate.

    const EndY = this.y + Math.sin(this.angle) * this.length;
    // Stop drawing the lightning strike at this EndY coordinate.

    ctx.lineTo(EndX, EndY);
    // Draw the line from the starting point to the end point.

    ctx.stroke();

    if (this.child) this.child.draw(ctx);
    // Draws the child lightning strike rescursively.

    ctx.restore();
  }
  isDead() {
    return this.alphas <= 0;
  }
}
//#endregion

// #endregions

//#region Setup Function
function setup() {
  preload();
  OnUserClick();
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }
  // MouseTracker();
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}

//#region Random Function
function Random(arg1, arg2) {
  // Defines two arguments array parameters
  //  within the function random.

  if (arguments.length == 1) {
    // If the the length of the arguments array
    // is equals roughly to 1.

    const max = arg1;
    // Then define max as arg1.

    return Math.random() * max;
    // Stops the function from executing
    // and gives a random number
    // between 0 and max.
  } else if (arguments.length == 2) {
    // If the length of the arguments arrays
    // is roughly equal to 2.

    const min = arg1;
    // Define min as arg1.

    const max = arg2;
    // Define max as arg2.

    const range = max - min;
    // Define range as max - min.

    return Math.random() * range + min;
    // Stops the function from executing,
    // and outputs a random number.
  }
}
// In general, this is the randomiser function
// that randomises values inputted into it.
//#endregion
//#endregion

//#region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  // Set the background colour to black.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire canvas with black. And resizes the canvas to be
  // the same size as the window.

  const seconds = ms / 1000;
  // Converts the milliseconds to seconds.

  //   console.log(seconds.toFixed(2));

  for (let i = Zeus.length - 1; i >= 0; i--) {
    Zeus[i].update();
    // Update the position of the lightning strikes.

    Zeus[i].draw(ctx);
    // Draw the lightning strikes.

    if (Zeus[i].isDead()) {
      Zeus.splice(i, 1);
    }
    // If the lightning strike is dead, remove it from the array.
  }

  ctx.globalAlpha = 1;

  for (let i = 0; i < stars.length; i++) {
    // For every star in the stars array.

    stars[i].show();
    // Draw the stars.

    stars[i].update();
    // Move the stars's position.
  }

  requestAnimationFrame(draw_frame);
};

//#region LightningYeeter:
function LightningYeeter() {
  // requestAnimationFrame(() => LightningYeeter(ctx));
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  for (let i = Zeus.length - 1; i >= 0; i--) {
    Zeus[i].update();
    Zeus[i].draw(ctx);
    if (Zeus[i].isDead()) Zeus.splice(i, 1);
  }
}
//#endregion

//#region OnUserClick Function
function OnUserClick() {
  cnv.addEventListener("mousedown", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    IsClicked = true;
    StarBrightness = 360;
    FlickerSize = 370;

    for (let i = 0; i < 15; i++) {
      Zeus.push(new LigthningStrikes(x, y, 100, 0));
    }

    LightningYeeter();

    setTimeout(() => {
      IsClicked = false;
      StarBrightness = 170;
      FlickerSize = 2;
    }, 1000);
  });

  // Within this instance method, we want to have it
  // so that when the user clicks the this.r, this.g, this.b
  // changes/brightens. Specifically, the "170" value.\

  // We also want either fractual trees or "lightning" to shoot
  // of the point in which the user clicks, so we might need to use
  //mouseX and mouseY to get the coordinates of the mouse click.
}
//#endregion

//#region MouseTracker:
function MouseTracker() {
  cnv.addEventListener("mousemove", (e) => {});
}
//#endregion

//#region SoundEnabler:

function SoundEnabler() {}

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;

  // CanvasCentreX = innerWidth / 2;
  // CanvasCentreY = innerHeight / 2;
};

document.onpointerdown = () => {
  const div = document.getElementById("start");
  div.remove();
  // Sound play logic here.
  // SoundEnabler();
  document.onpointerdown = null;
  run(simplex);
};
```

## Draft 8:

All the sounds should technically work now, its just fiddling with the audio volume, audio clips, and other visual randomness to make them more "Zany". It doesn't work.

```js
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js";

const simplex = new SimplexNoise();

const noise = new SimplexNoise();

//#region Global Variables
let stars = [];
// Creates an array to store the Star objects.

let Zeus = [];
// Creates an array to store the ThunderStrikes objects.

let StarBrightness = 170;
// Variable that defines the default brightness
// of the stars.

let FlickerSize = 2;
// Variable that defines the default flicker size.

let IsClicked = false;
let soundIsEnabled = false;

let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];

let RelMouseX = 0;
let RelMouseY = 0;

let XDistance = 0;
let YDistance = 0;

//#region Canvas Centre:
let CanvasCentreX = innerWidth / 2;
// Calculates the "x-coordinate" centre
// of the canvas.

let CanvasCentreY = innerHeight / 2;
// Calculates the "y-coordinate" centre
// of the canvas.
// #endregion

//#endRegion

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

// AT2-V1.0.js
function run(simplex) {
  console.log(simplex.noise2D(0.1, 0.2)); // you can now use it here!

  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  setup();
}

// Bro you need to slap the preload, and other stuff from Week7a.js for the sound here.

//#region Preload Audio
function preload() {
  YSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/386067__dudeawesome__shuttle-to-station-sounds-sound-bites.flac"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/386068__dudeawesome__missions-sounds-sound-bites-launch-morse-code-passing-comet.flac"
    ),
  ];
  // YSoundsStart is an array that will hold the sound objects
  // attached to the +y-axis of the canvas.

  YSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/95822__pixelmasseuse__atlas3q-1fm-16bit.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/59899__robinhood76__00309-crowd-2.wav"
    ),
  ];
  // YSoundsEnd is an array that will hold the sound objects
  // attached to the -y-axis of the canvas.
  XSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/567994__malg0isx__wolf-howle.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/456123__burghrecords__birds-in-the-forest.wav"
    ),
  ];

  // XSoundsStart is an array that will hold the sound objects
  // attached to the +x-axis of the canvas.

  XSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/756754__newlocknew__ambforst_autumna-quiet-forestwind-in-the-pines-and-birches.wav"
    ),
    new Audio(
      "/ExperiementFiles/audio/ExpAudio/450634__kyles__waves-ocean-crash-on-beach-nearby-wide-big-metallic-sound.flac"
    ),
  ];
  // XSoundsStart is an array that will hold the sound objects
  // attached to the -x-axis of the canvas.
}
// You're using an audio element here, to play around so technically speaking you should be able to find the
// volume attribute connected to the audio element to nudge the volume up and down.
// See https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume (AI recommendated this)
// Or see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio, to investigate the
// audio element further.
//#endregion

//#region Objects:

//#region Star Object
class Star {
  constructor(x, y, BaseSize, speed, zoff, r, g, b) {
    this.x = Random(innerWidth);
    this.y = Random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.BaseSize = Random(1.5, 9);
    // Determines the size of the star, from
    // size 1 start to size 8 star.

    this.speed = Random(1, 2.5);
    // Determines the speed of the star moving left
    // across the screen.

    this.zoff = Random(1000);
    // Determines how fast the noise field animates across the
    // screen.

    // Higher values, the slower the flickering of the stars is
    // slower.

    // Lower values, the faster the flickering of the stars is.
  }
  // Constructor function, that defines
  // the instance variables of the Star object.

  show() {
    ctx.save();
    // Save the current state of the shape.

    ctx.translate(this.x, this.y);
    // translate the shape, by this.x
    // and this.y as defined in the constructor.

    this.zoff += 0.01;
    // Animates how fast the stars flicker.

    const NoiseEffect = noise.noise2D(this.x * 0.01, this.zoff);
    // Generates a noise value outputted by the .noise2D();
    //  NoiseEffect is a noise field that outputs [-1, 1].

    const TransformedSize = this.BaseSize + NoiseEffect * FlickerSize;
    // Transformed the BaseSize of the star, based on the NoiseEffect
    // generated by the Simplex Noise field.

    this.r = Math.floor(noise.noise2D(this.zoff, 0) * StarBrightness + 250);
    // Generates a random red value, based on the noise field.

    // For the red channel value
    // Round down the generated noise value to the nearest integer.
    // Step 1. Input zoff value in .nosee2D() function, this is how
    // the star flickers animates over time.
    // Step 2. Multiply the generated noise value by 127, this
    // converts the noise value to a range of [-127, 127].
    // Step 3. [-127 + 128, 127 + 128], which gives [1, 255]

    this.g = Math.floor(
      noise.noise2D(this.zoff + 100, 0) * StarBrightness + 250
    );
    // Generates a random green value, based on the noise field.

    this.b = Math.floor(
      noise.noise2D(this.zoff + 200, 0) * StarBrightness + 250
    );
    // Generates a random blue value, based on the noise field.

    ctx.beginPath();
    // Start drawing the shape.

    const arms = 8;
    // The star shape has 8 arms.

    for (let i = 0; i < arms; i++) {
      // Count from 0 to arms, where
      // arms the max number of arms
      // the star can have.

      const angle = ((Math.PI * 2) / arms) * i;
      // The angle between each of the arms,
      // is 2π ÷ no. of arms.

      const x = Math.cos(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      const y = Math.sin(angle) * TransformedSize;
      // Start drawing the star at x-coordinate,
      // which is cos(angle) * size of the Star.

      ctx.moveTo(0, 0);
      // Move the drawing cursor to the "centre" of the star.

      ctx.lineTo(x, y);
      // Draws each arm of the Star.
    }

    ctx.strokeStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
    // Make the lines drawn be white.

    ctx.lineWidth = 2;
    // The thicccness of the lines drawn is 1.
    ctx.stroke();
    // Defines the colour of the lines drawn.

    ctx.restore();
    // Restores the start state of the shape.
    // So basically, it spews out another Star,
    // for the update() function to move.
  }

  update() {
    this.x -= this.speed;
    // Moves the Star.

    // Resets the Star positions when they go off screen.
    if (this.x < -this.BaseSize) {
      // If the centre of the star is less than the right-
      // side of the Star, then the star is off screen.

      this.x = innerWidth + this.BaseSize;
      // Then yeet it to the right side of the screen.

      this.y = Random(innerHeight);
      // Places Star on a random position on the y-axis,
      // of the canvas.
    }
  }
}
// This is the Star object.
//#endregion

//#region Lightning Object
class LigthningStrikes {
  constructor(x, y, length, generation, alphas) {
    this.x = x;
    // The x-coordinate of where the Lightning strike
    // starts from.

    this.y = y;
    // The y-coordinate of where the Lightning strike
    // starts from.

    this.length = length;
    // How long the Lightning strike is.`

    this.generation = generation;
    // Contains the generation of the Lightning strike.
    // And where in the lightning the bolt branches off
    // from.

    this.angle = Math.random() * Math.PI * 2;
    // Chooses a random angle for the lightning strike.

    this.alphas = 1;
    // The transparency of the lightning strike.

    this.child = null;
    // Placeholder to hold the generate child lightning
    // strikes

    this.createChild();
    // Create the a secondary lightning strike, branching
    // off from the main lightning strike.
  }

  createChild() {
    if (this.length > 10 && this.generation < 4) {
      // Maybe make the lightning longer?

      // If the length of the lightning strike
      // is more than 10 pixels, then create a child,
      // stop after the 4th generation is born.

      //Finds the end of each newly created lightning strike,
      // and prepares the (NewX, New Y) coordinates to create
      // the next lightning strike.
      const NewX = this.x + Math.cos(this.angle) * this.length;
      // The new x-coordinate of the child lightning strike.

      const NewY = this.y + Math.sin(this.angle) * this.length;
      // The new y-coordinate of the child lightning strike.

      this.child = new LigthningStrikes(
        NewX,
        NewY,
        this.length * 0.6,
        this.generation + 1
      );
      // Recursively creates a child lightning strike.
    }
  }
  update() {
    this.alphas -= 0.00925;
    // Makes the lightning more transparent over time.

    if (this.child) this.child.update();
    // Also fades away the child lightning strike.
  }
  draw(ctx) {
    if (this.alphas < 0) return;
    // If the lightning strike is transparent,
    // then don't bother drawing it.

    ctx.save();

    ctx.strokeStyle = `rgba(255, 255, 225, ${this.alphas})`;

    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // the starting drawing point of the lightning strike.
    // to the specified coordinates.

    const EndX = this.x + Math.cos(this.angle) * this.length;
    // Stop drawing the lightning strike at this EndX coordinate.

    const EndY = this.y + Math.sin(this.angle) * this.length;
    // Stop drawing the lightning strike at this EndY coordinate.

    ctx.lineTo(EndX, EndY);
    // Draw the line from the starting point to the end point.

    ctx.stroke();

    if (this.child) this.child.draw(ctx);
    // Draws the child lightning strike rescursively.

    ctx.restore();
  }
  isDead() {
    return this.alphas <= 0;
  }
}
//#endregion

// #endregions

//#region Setup Function
function setup() {
  preload();
  OnUserClick();
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }
  MouseTracker();
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}

//#region Random Function
function Random(arg1, arg2) {
  // Defines two arguments array parameters
  //  within the function random.

  if (arguments.length == 1) {
    // If the the length of the arguments array
    // is equals roughly to 1.

    const max = arg1;
    // Then define max as arg1.

    return Math.random() * max;
    // Stops the function from executing
    // and gives a random number
    // between 0 and max.
  } else if (arguments.length == 2) {
    // If the length of the arguments arrays
    // is roughly equal to 2.

    const min = arg1;
    // Define min as arg1.

    const max = arg2;
    // Define max as arg2.

    const range = max - min;
    // Define range as max - min.

    return Math.random() * range + min;
    // Stops the function from executing,
    // and outputs a random number.
  }
}
// In general, this is the randomiser function
// that randomises values inputted into it.
//#endregion
//#endregion

//#region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  // Set the background colour to black.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire canvas with black. And resizes the canvas to be
  // the same size as the window.

  const seconds = ms / 1000;
  // Converts the milliseconds to seconds.

  //   console.log(seconds.toFixed(2));

  for (let i = Zeus.length - 1; i >= 0; i--) {
    Zeus[i].update();
    // Update the position of the lightning strikes.

    Zeus[i].draw(ctx);
    // Draw the lightning strikes.

    if (Zeus[i].isDead()) {
      Zeus.splice(i, 1);
    }
    // If the lightning strike is dead, remove it from the array.
  }

  ctx.globalAlpha = 1;

  for (let i = 0; i < stars.length; i++) {
    // For every star in the stars array.

    stars[i].show();
    // Draw the stars.

    stars[i].update();
    // Move the stars's position.
  }

  requestAnimationFrame(draw_frame);
};

//#region LightningYeeter:
function LightningYeeter() {
  // requestAnimationFrame(() => LightningYeeter(ctx));
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  for (let i = Zeus.length - 1; i >= 0; i--) {
    Zeus[i].update();
    Zeus[i].draw(ctx);
    if (Zeus[i].isDead()) Zeus.splice(i, 1);
  }
}
//#endregion

//#region OnUserClick Function
function OnUserClick() {
  if (!soundIsEnabled) {
    soundIsEnabled = true;
  }

  cnv.addEventListener("mousedown", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    IsClicked = true;
    StarBrightness = 360;
    FlickerSize = 370;

    for (let i = 0; i < 15; i++) {
      Zeus.push(new LigthningStrikes(x, y, 100, 0));
    }

    LightningYeeter();

    setTimeout(() => {
      IsClicked = false;
      StarBrightness = 170;
      FlickerSize = 2;
    }, 1000);

    let SoundX =
      XDistance >= 0
        ? XSoundsStart[Math.floor(Random(0, XSoundsStart.length))]
        : XSoundsEnd[Math.floor(Random(0, XSoundsEnd.length))];
    // 1. Create a variable called SoundX.
    // 2. if the mouse is larger than or equal to 0, then choose a random sound from the XSoundsStart array.
    // 3. If not, then choose a random sound from the XSoundsEnd array.

    //Lanchu for "XSoundsEnd[Math.floor(Random(0, XSoundsEnd.length))];"
    // Since XSoundsEnd[i], this the identity of an index in the
    // array
    // You are basically saying within the identity of the "index", within the []
    // Pick a random "index" number from 0 to the max length of the array.
    // Then round that shit down, so that the index is a whole number and doesn't have
    // floats.

    let SoundY =
      YDistance >= 0
        ? YSoundsStart[Math.floor(Random(0, YSoundsStart.length))]
        : YSoundsEnd[Math.floor(Random(0, YSoundsEnd.length))];
    // 1. Create a variable called SoundX.
    // 2. if the mouse is larger than or equal to 0, then choose a random sound
    // from the XSoundsStart array.
    // 3. If not, then choose a random sound from the XSoundsEnd array.
    // //The following code should play the sound

    if (!soundIsEnabled) return;
    // This checks if the sound is enabled, if it is it continues the code onto the
    // next couple of lines. If not the stops the code at line 199.

    SoundX.play();
    SoundY.play();
  });

  // Within this instance method, we want to have it
  // so that when the user clicks the this.r, this.g, this.b
  // changes/brightens. Specifically, the "170" value.\

  // We also want either fractual trees or "lightning" to shoot
  // of the point in which the user clicks, so we might need to use
  //mouseX and mouseY to get the coordinates of the mouse click.
}
//#endregion

//#region MouseTracker:
function MouseTracker() {
  cnv.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    // mouseX variable that holds the x-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    const mouseY = e.clientY;
    // mouseY variable that holds the y-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    RelMouseX = mouseX - CanvasCentreX;
    // The horizontal distance of the mouse from the relative
    // to the centre of the canvas.

    RelMouseY = mouseY - CanvasCentreY;
    // The vertical distance of the mouse from the relative
    // to the centre of the canvas.

    // Flipping the "positive" y-axis of the Canvas API
    // so that the "positive" y-axis, is UP.
    // Ditto for the x-axis.

    let MaxDistance = Math.sqrt(CanvasCentreX ** 2 + CanvasCentreY ** 2);
    // Essentially pythagorean theorem. Where in a^2 + b^2 = c^2, a is the
    // vertical distance (y-value, CanvasCentreY) and b is the horizontal
    // distance (x-value, CanvasCentreX).

    XDistance = RelMouseX / CanvasCentreX;
    // Calculates the "percentage"/"fraction" of the x-distance from the
    // centre of the canvas. (0,0)
    YDistance = RelMouseY / CanvasCentreY;
    // Calculates the "percentage"/"fraction" of the y-distance from the
    // centre of the canvas. (0,0)

    // This makes it so that the distance from the mouse from the centre
    // of the canvas is independent of whatever value the width and height
    // of the canvas is.

    blendX = Math.abs(XDistance);
    // Creates variable called blendX, and assigning it the absolute value of
    // of XDistance.

    blendY = Math.abs(YDistance);
    // Creates variable called blendY, and assigning it the absolute value of
    // of Distance.
  });
}
//#endregion

//#region SoundEnabler:

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;

  // CanvasCentreX = innerWidth / 2;
  // CanvasCentreY = innerHeight / 2;
};

document.onpointerdown = () => {
  const div = document.getElementById("start");
  div.remove();
  // Sound play logic here.
  OnUserClick();
  document.onpointerdown = null;
  run(simplex);
};
```

[Top ⬆︎](#)

[^1]: Update its the 17th April 2025 Lanchu here, I am very tired. The sem broke me, before I broke it.
[^2]: A pig would eat a human if given the chance. And dolphins have pretty privilege.
