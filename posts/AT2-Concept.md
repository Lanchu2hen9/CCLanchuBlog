---
title: Assignment Task 2, Conceptualisation.
published_at: 2025-03-27
snippet: I am very excited. :D
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](#)
2. [Task 2](#)
   - [3D model Generation](#)
   - [Interaction](#)
   - [Audio](#)
3. [Task 3](#)

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

[^1]: Update its the 17th April 2025 Lanchu here, I am very tired. The sem broke me, before I broke it.
[^2]: A pig would eat a human if given the chance. And dolphins have pretty privilege.
