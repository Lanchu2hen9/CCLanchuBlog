---
title: Assignment Task 2, Final.
published_at: 2025-05-05
snippet: This is the final version of AT2.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Final Assignment Task 2](#final-assignment-task-2)
2. [Week 7, Homework 7b Task 2 questions](#week-7-homework-7b-task-2-questions)
3. [Final Code](#final-code)

   - [Variables/Array Usage](#variablesarray-usage)
   - [Iteration](#iteration)
   - [Functions](#functions)
   - [Boolean Logic](#boolean-logic)
   - [Classes](#classes)
   - [Recursion](#recursion)

4. [How does this relate to your chosen text?](#how-does-this-relate-to-your-chosen-text)

   - [My Ideas](#my-ideas)

5. [Do you think its Post-digital?](#do-you-think-its-post-digital)
6. [References](#references)

# Final Assignment Task 2:

The final version of Assignment Task 2 is [here](https://lanchu-thespiral-a-50.deno.dev/ExperiementFiles/AT2-V1.0.html).

To read more about the process and development behind this go [this](https://cclanchublo6-bbkd5ncbjcth.deno.dev/AT2-Concept). I wouldn't reccomend it as **light-reading**, its a very long blog.

# Final Code:

````js
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@3.0.0/dist/esm/simplex-noise.js";

const simplex = new SimplexNoise();

const noise = new SimplexNoise();
/**------------------------------------------------------------------------
 *                           Global Variables
 *------------------------------------------------------------------------**/
//#region Global Variables

// Below are arrays used to store the Star, LightningStrikes Objects and html
// audio elements.
let stars = [];
let Zeus = [];

let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];

// let variables that assigns the default value of the Star object's
// brightness & how they flicker.
let StarBrightness = 170;
let FlickerSize = 2;

// Boolean variables to check if the user has clicked their mouse on the
// canvas or has the sound enabled.
let IsClicked = false;
let soundIsEnabled = false;

// Variables within MouseTracker(); but assigned Globally, so I don't get
// a "this variable is not defined" error.
let RelMouseX = 0;
let RelMouseY = 0;

let XDistance = 0;
let YDistance = 0;

let blendX = 0;
let blendY = 0;

// Is there a better way of declaring the variables for the MouseTracker();
// function, Yes probably, but will I figure out how to do/use the "better"
// way no.

/**============================================
 *               Canvas Centre
 *=============================================**/

// The variables CanvasCentreX and CanvasCentreY are
// the centre point of the opened browser window.
let CanvasCentreX = innerWidth / 2;
let CanvasCentreY = innerHeight / 2;
//#endRegion

const cnv = document.getElementById("cnv_element");
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext("2d");

/**------------------------------------------------------------------------
 *                           Run Function
 *------------------------------------------------------------------------**/
// A function that runs the imported Simplex API,
// and calls the setup(); at the start.

//#region Run Simplex
function run(simplex) {
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  setup();
}
//#endregion

/**------------------------------------------------------------------------
 *                           Preload Function
 *------------------------------------------------------------------------**/
// A function that preloads my audio clips before the web browser opens and loads

//#region Preload Audio
function preload() {
  YSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosYSounds/NASA2-PosY3.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosYSounds/NasaLiftOff-PosY4.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosYSounds/Sun-PosY1.mp3"
    ),
  ];
  // YSoundsStart is an array that will hold the sound objects
  // attached to the +y-axis of the canvas.

  YSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegYSounds/SeismicEarth-NegY1.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegYSounds/TartarusLoop-NegY2.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegYSounds/Volcano-NegY5.mp3"
    ),
  ];
  // YSoundsEnd is an array that will hold the sound objects
  // attached to the -y-axis of the canvas.

  XSoundsStart = [
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosXSounds/BeachPosX1.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosXSounds/BirbsPosX3.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/PosXSounds/WaterfallPosX4.mp3"
    ),
  ];

  // XSoundsStart is an array that will hold the sound objects
  // attached to the +x-axis of the canvas.

  XSoundsEnd = [
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegXSounds/CrowdNegX5.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegXSounds/MexcioCityNegX4.mp3"
    ),
    new Audio(
      "/ExperiementFiles/audio/AT2-AudioFiles/NegXSounds/OfficeNegX2.mp3"
    ),
  ];
  // XSoundsStart is an array that will hold the sound objects
  // attached to the -x-axis of the canvas.
}
//#endregion

/**------------------------------------------------------------------------
 *                           Objects Section
 *------------------------------------------------------------------------**/
//#region Star Object
class Star {
  constructor(x, y, BaseSize, speed, zoff, r, g, b) {
    this.x = Random(innerWidth);
    this.y = Random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.BaseSize = Random(1.5, 9);
    // Determines the size of the star, from
    // size 1 start to size 9 star.

    this.speed = Random(1, 2.5);
    // Determines the speed of the star moving left
    // across the screen.

    this.zoff = Random(1000);
    // Determines how fast the noise field animates across the
    // screen.

    //Is used to create the flickering effect for the stars.

    // The higher the this.zoff value = slower flickering for stars.
    // Lower this.zoff value the faster the flickering of the stars.
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
      // Then move it to the right side of the screen.

      this.y = Random(innerHeight);
      // Places Star on a random position on the y-axis,
      // of the canvas.
    }
  }
}
//#endregion

//#region Lightning Object
class LigthningStrikes {
  constructor(x, y, length, generation, alphas, sound) {
    this.x = x;
    // The x-coordinate of where the Lightning strike
    // starts from.

    this.y = y;
    // The y-coordinate of where the Lightning strike
    // starts from.

    this.length = length;
    // How long the Lightning strike is.

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
    if (this.length > 55 && this.generation < 5) {
      // If the length of the lightning strike
      // is more than 55 pixels, then create a child,
      // stop after the 4th generation is born.

      //Finds the end of each newly created lightning strike,
      // and prepares the (NewX, NewY) coordinates to create
      // the next lightning bolt.
      const NewX = this.x + Math.cos(this.angle) * this.length;
      // The new x-coordinate of the child lightning strike.

      const NewY = this.y + Math.sin(this.angle) * this.length;
      // The new y-coordinate of the child lightning strike.

      this.child = new LigthningStrikes(
        NewX,
        // The new X coordinate of the next bolt, essientally the
        // starting point.
        NewY,
        // The new Y coordinate of the next bolt, essientally the
        // starting point.

        this.length * 0.6,
        // Increase the length of each subsequential lightning
        // bolt by x0.6.

        this.generation + 1
        // Adds a new generation.
      );
      // This instance method creates a new LighningStrike object and assigns it
      // the this.child instance variable.
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
    //Saves the current state of the Canvas.

    ctx.strokeStyle = `rgba(255, 255, 225, ${this.alphas})`;
    // The colour of the lightningstrikes is `R:255, G:255, B:255, this.alpha```

    ctx.lineWidth = 4;
    // The width of the lightningstrikes is 3.

    ctx.beginPath();
    // Cleans the Canvas of all the previous paths, and starts a new path.
    // "Path" as in ✨fancy✨ lines used to draw shapes.

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
    //Draws the stroke of the ligthningStrike shape.

    if (this.child) this.child.draw(ctx);
    // if the current branch as a child, then draw a child.

    ctx.restore();
    // Restores the saved Canvas state as indicated previous in
    // ctx.save();
  }
  isDead() {
    return this.alphas <= 0;
    // Sets alpha/"transparency" of LightningStrike to 0.
  }
}
//#endregion

/**------------------------------------------------------------------------
 *                           Setup Function
 *------------------------------------------------------------------------**/
//#region Setup Function
// The setup function initalises the code by preloading, setting up and creating
// the eventlisteners, and creating the animated effects.

function setup() {
  preload();
  // Initalise the preload function.

  OnUserClick();
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }

  MouseTracker();
  // Initialises the MouseTracker(); function and creates
  // the eventlistener for the MouseTracker();
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}
//#endregion

/**--------------------------------------------
 *               Random Function
 *---------------------------------------------**/

// A function that takes the two values, arg1 and
// arg2 and choose random values between those two
// arguments.

// arg2 is always larger than arg1.

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
//#endregion

/**------------------------------------------------------------------------
 *                           draw function
 *------------------------------------------------------------------------**/
// The draw_frame function draws and updates the animation every loop.

//#region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = "black";
  // Set the background colour to black.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire canvas with black.

  const seconds = ms / 1000;
  // Converts the milliseconds to seconds.

  //   console.log(seconds.toFixed(2));
  for (let i = Zeus.length - 1; i >= 0; i--) {
    // for each of the elements in the Zeus array,

    Zeus[i].update();
    // Update fade the elements out.

    Zeus[i].draw(ctx);
    // Draw the lightning strikes.

    if (Zeus[i].isDead()) {
      Zeus.splice(i, 1);
    }
    // If the lightning strike is dead, remove it from the array.
  }

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
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  // Sets the background with a semi-transparent
  // black background.

  ctx.fillRect(0, 0, innerWidth, innerHeight);
  // Fills the entire background with the semi-
  // transparent black background.

  for (let i = Zeus.length - 1; i >= 0; i--) {
    // for each element in the Zeus array,

    Zeus[i].update();
    // Fades the LigthningStrikes away.

    Zeus[i].draw(ctx);
    // Draw the main branche of the LightningStrike
    // Object.

    if (Zeus[i].isDead()) Zeus.splice(i, 1);
    // If the LightningStrike, remove it from the
    // Zeus array.
  }
}
//#endregion

//#region OnUserClick Function
function OnUserClick() {
  if (!soundIsEnabled) {
    soundIsEnabled = true;
  }
  // Check if the sound is not enabled.
  // If it is  not enable it then enabled.

  // When the user clicks on the canvas, then
  cnv.addEventListener("mousedown", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // Assigns the mouse x and y coordinates to the
    // const variables of x and y.

    if (!IsClicked) {
      // If "IsClicked" is false?

      IsClicked = true;
      // Then set "IsClicked" to true.

      StarBrightness = 360;
      // Then set the StarBrightness to 360.

      FlickerSize = 370;
      // Then set the FlickerSize of the Star object
      // to 370.
    }

    // Then after 60000 miliseconds,
    setTimeout(() => {
      IsClicked = false;
      // Set the state of "IsClicked" to false.

      StarBrightness = 170;
      // Set the StarBrightness variable to 170.

      FlickerSize = 2;
      // Set the FlickerSize of the Star Object to 2.
    }, 4000);

    // Creates 15 Ligthningstrikes
    for (let i = 0; i < 15; i++) {
      Zeus.push(new LigthningStrikes(x, y, 800, 0));
      // At the user's mouse x and mouse y position, with
      // an initial branch length of 800, and don't branch
      // off the LightningStrikes that much.
    }
    LightningYeeter();
    // Calls the LightningYeeter(); Function
  });
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

    let TotalBlend = blendX + blendY;
    // The total "loudness" of the audio clips is blendX + blendY.

    let blendXProportion = blendX / TotalBlend;
    // The "proportion" of the loudness of the audio is in relation
    // to the x-axis.

    let blendYProportion = blendY / TotalBlend;
    // The "proportion" of the loudness of the audio is in relation
    // to the y-axis.

    AudioHandler(blendXProportion, blendYProportion);
    // Calls the function AudioHandler.
  });
}
//#endregion

//#startregion AudioBlender
function AudioHandler(blendXProportion, blendYProportion) {
  let SoundX =
    XDistance >= 0
      ? XSoundsStart[Math.floor(Random(0, XSoundsStart.length))]
      : XSoundsEnd[Math.floor(Random(0, XSoundsEnd.length))];
  // 1. Create a variable called SoundX.
  // 2. if the mouse is larger than or equal to 0, then choose a random sound from the XSoundsStart array.
  // 3. If not, then choose a random sound from the XSoundsEnd array.

  let SoundY =
    YDistance >= 0
      ? YSoundsStart[Math.floor(Random(0, YSoundsStart.length))]
      : YSoundsEnd[Math.floor(Random(0, YSoundsEnd.length))];
  // 1. Create a variable called SoundX.
  // 2. if the mouse is larger than or equal to 0, then choose a random sound
  // from the XSoundsStart array.
  // 3. If not, then choose a random sound from the XSoundsEnd array.

  if (!soundIsEnabled) return;
  // This checks if the sound is enabled, if it is it continues the code onto the
  // next couple of lines. If not the stops the code at line 661.

  SoundX.play();
  // Plays the HTML Audio Element that is called SoundX.

  SoundY.play();
  // Plays the HTML Audio Element that is called SoundY.

  SoundX.volume = blendXProportion;
  // The volume of SoundX is equals to the blendXProportion.

  SoundY.volume = blendYProportion;
  // The volume of SoundY is equals to the blendYProportion
}
//#endregion

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;

  CanvasCentreX = innerWidth / 2;
  // CanvasCentreX is redefined here as to recalulate the
  // centre of the Canvas everytime the "window"/browser page
  // is re-sized.

  CanvasCentreY = innerHeight / 2;
  // CanvasCentreY is redefined here as to recalulate the
  // centre of the Canvas everytime the "window"/browser page
  // is re-sized.
};

document.onpointerdown = () => {
  const div = document.getElementById("start");
  // Get the element div with the ID tag called "start"

  div.remove();
  // remove said div.

  MouseTracker();
  // Call the MouseTracker function.

  document.onpointerdown = null;
  // Deletes the event.handler of the onpointerdown function.

  run(simplex);
  // class the run simplex function.
};
````

# Week 7, Homework 7b Task 2 questions:

For the below question refer to the above code.

**Write an accompaniment to your AT2, using examples of how you used; variables, iteration, functions, boolean logic, arrays, classes and recursion.**

## Variables/Array Usage:

In general arrays were used to hold the Star/LightningStrike objects created by their respective classes. If we're talking more specifically about variables that are not Arrays or Booleans, I've used `const x = e.clientXconst` and `const y =  e.clientY;` within the `cnv.addEventListener("mousedown", (e) => {...}` to essientally "track" the mouse's x and y location when the mouse clicks on the canvas. A similar thing is done for the `MouseTracker();` function where `const mouseX = e.clientX;` and `const mouseY = e.clientY;`.

## Iteration:

This is within the draw_frame function. I think I've explained what my code does in the accompanying code comments pretty well.

```js
for (let i = 0; i < stars.length; i++) {
  // For every star in the stars array.

  stars[i].show();
  // Draw the stars.

  stars[i].update();
  // Move the stars's position.
}
```

## Functions:

I've called other functions within the `setup();` function to intialise other functions at the start.

```js
function setup() {
  preload();
  // Initalise the preload function.

  OnUserClick();
  for (let i = 0; i < 100; i++) {
    // For one star every time, i interates from
    // 0 to 100.

    stars.push(new Star());
    // Push the created Star objects into the stars array.
  }

  MouseTracker();
  // Initialises the MouseTracker(); function and creates
  // the eventlistener for the MouseTracker();
  requestAnimationFrame(draw_frame);
  // Calls the draw_frame function.
}
```

## Boolean Logic:

Essientally my boolean variables, `let IsClicked` and `let soundIsEnabled` checks to see if the user has clicked on the canvas, or if the sound has be enabled by some user gesture.

```js
let IsClicked = false;
let soundIsEnabled = false;

// Several lines of code later...

function OnUserClick() {
  if (!soundIsEnabled) {
    soundIsEnabled = true;
  }
  // Check if the sound is not enabled.
  // If it is  not enable it then enabled.

  // When the user clicks on the canvas, then
  cnv.addEventListener("mousedown", (e) => {
    // Blah Blah code here.
    if (!IsClicked) {
      // If "IsClicked" is false?
      // Code A
    }
    // Blah Blah more code here.
  });
}

function MouseTracker() {
  cnv.addEventListener("mousemove", (e) => {
    // Blah blah code logic here, which I'm shortening in
    // this .md file code block.

    AudioHandler(blendXProportion, blendYProportion);
    // Calls the function AudioHandler.
  });
}
//#endregion

//#startregion AudioBlender
function AudioHandler(blendXProportion, blendYProportion) {
  //Random choose sound logic here.

  if (!soundIsEnabled) return;
  // This checks if the sound is enabled, if it is it continues the code onto the
  // next couple of lines. If not the stops the code at this specific line.

  SoundX.play();
  // Plays the HTML Audio Element that is called SoundX.

  SoundY.play();
  // Plays the HTML Audio Element that is called SoundY.

  SoundX.volume = blendXProportion;
  // The volume of SoundX is equals to the blendXProportion.

  SoundY.volume = blendYProportion;
  // The volume of SoundY is equals to the blendYProportion
}
//#endregion
```

## Classes:

Templates used by the code to draw the Stars and LightningStrikes.

```js
class Star {
  constructor(x, y, BaseSize, speed, zoff, r, g, b) {
    this.x = Random(innerWidth);
    this.y = Random(innerHeight);
    // (this.x, this.y) are the "centre point",
    // of the star.

    this.BaseSize = Random(1.5, 9);
    // Determines the size of the star, from
    // size 1 start to size 9 star.

    this.speed = Random(1, 2.5);
    // Determines the speed of the star moving left
    // across the screen.

    this.zoff = Random(1000);
    // Determines how fast the noise field animates across the
    // screen.

    //Is used to create the flickering effect for the stars.

    // The higher the this.zoff value = slower flickering for stars.
    // Lower this.zoff value the faster the flickering of the stars.
  }
  // Constructor function, that defines
  // the instance variables of the Star object.
  show() {
    //Not going to paste the whole function here, because I don't
    // want the code block to get too large. Please refer to either
    // my github repo or the Final Code Header.
  }
  update() {}
}

class LigthningStrikes {
  constructor(x, y, length, generation, alphas, sound) {
    this.x = x;
    // The x-coordinate of where the Lightning strike
    // starts from.

    this.y = y;
    // The y-coordinate of where the Lightning strike
    // starts from.

    this.length = length;
    // How long the Lightning strike is.

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
  createChild() {}
  update() {}
  draw(ctx) {}
  isDead() {}
}
```

## Recursion:

Recursion is used within the `createChild();` and `draw(ctx);` instance methods. Within:

```js
class LigthningStrikes {
  constructor(x, y, length, generation, alphas, sound) {
    //Insert other Instance Variable here.

    this.child = null;
    // Placeholder to hold the generate child lightning
    // strikes

    this.createChild();
    // Create the a secondary lightning strike, branching
    // off from the main lightning strike.
  }
  createChild() {
    if (this.length > 55 && this.generation < 5) {
      // If the length of the lightning strike
      // is more than 55 pixels, then create a child,
      // stop after the 4th generation is born.

      //Finds the end of each newly created lightning strike,
      // and prepares the (NewX, NewY) coordinates to create
      // the next lightning bolt.
      const NewX = this.x + Math.cos(this.angle) * this.length;
      // The new x-coordinate of the child lightning strike.

      const NewY = this.y + Math.sin(this.angle) * this.length;
      // The new y-coordinate of the child lightning strike.

      this.child = new LigthningStrikes(
        NewX,
        // The new X coordinate of the next bolt, essientally the
        // starting point.
        NewY,
        // The new Y coordinate of the next bolt, essientally the
        // starting point.

        this.length * 0.6,
        // Increase the length of each subsequential lightning
        // bolt by x0.6.

        this.generation + 1
        // Adds a new generation.
      );
    }
  }
}
```

The `this.child = new LigthningStrikes(...);` basically creates a new ligthningStrike Object and assigns it to the placeholder this.child instance variable. And later on in the next instance method:

```js
  draw(ctx) {
    if (this.alphas < 0) return;
    // If the lightning strike is transparent,
    // then don't bother drawing it.

    ctx.save();
    //Drawing the main branch of the lightningStrike.
    ctx.stroke();
    //Draws the stroke of the ligthningStrike shape.

    if (this.child) this.child.draw(ctx);
    // The recursive bit. Basically saying:
    // If this lightning strike has a child, draw the child.

    ctx.restore();
    // Restores the saved Canvas state as indicated previous in
    // ctx.save();
  }
```

# How does this relate to your chosen text?

**How does your net art respond to the chosen text?**
See [A Response to Information & Thinking by Michel Serres](https://cclanchublo6-m9th1g1gm2tc.deno.dev/AT2-Concept#a-response-to-information--thinking-by-michel-serres), and [My Thought process](https://cclanchublo6-m9th1g1gm2tc.deno.dev/AT2-Concept#my-thought-process).

In a more formal summary, Serres from my understanding states that humans are not important, and we aren't the only things in the universe that can process and record the world around us. And that information forms around points in a web. That so called "web" of knowledge.

My counterpoint/response to Serres' text is that despite that humans aren't special, however they are "sapient"-enough to be able to process and understand the world/universe around us. So I basically wanted to simulate the Universe, and through the user's input the chaos is generated.

## My ideas:

- The Universe can be seen as an orderly, peaceful "system" by the actors within in.
- The actors who are "sapient"-enough seek to understand the "system", and their place in it.
  - The understanding part in my net art is the user interacting with the net art.
- Understanding/interaction/observation of the "system" and the fundemental laws it is based on creates chaos.

When I say system I am referring to the universe, when I say fundemental laws, I mean physicals, how stars work and all that maths stuff that comes with astronomy. Through human understanding and curiousity, we organise an inherently chaotic system into neat little categories.

# Do you think its Post-digital?

**Why you consider it to be post-digital?**
I mean I would call my net art inherently post-digital, I mean a piece of art work, either writing or physical art is very subjective. Like one person can take a look at a red painting, and be like: "Very nice painting", and another person can take a look at the same red painting and go like: "Ah yes the red symbolises the artist's pain as they grapple with their gender identity or smth." Sometimes, people create for the joy of creating.

I guess if I **_had_** to place it physically in a post-digital category, I would as it focuses on human experiences, and our places in the universe. And what it means to be a "sapient" processing "unit" of the universe.

# References:

Keep in mind some of these references are a bit outdated so....

waves ocean crash on beach nearby wide big metallic sound.flac by kyles. (2018). Freesound. https://freesound.org/people/kyles/sounds/450634/

AMBForst_Autumn.A Quiet Forest.Wind In The Pines And Birches.Pine Creaking 1_EM by newlocknew. (2024). Freesound. https://freesound.org/people/newlocknew/sounds/756754/

‌wolf howle.wav by malg0isx. (2021). Freesound. https://freesound.org/people/malg0isx/sounds/567994/

‌Birds In The Forest by BurghRecords. (2019). Freesound. https://freesound.org/people/BurghRecords/sounds/456123/

‌00309 crowd 2.wav by Robinhood76. (2025). Freesound. https://freesound.org/people/Robinhood76/sounds/59899/

‌Shuttle to Station Sounds & Sound Bites by DudeAwesome. (2017). Freesound. https://freesound.org/people/DudeAwesome/sounds/386067/

‌Missions Sounds & Sound Bites ~ Launch, Morse Code, Passing Comet by DudeAwesome. (2017). Freesound. https://freesound.org/people/DudeAwesome/sounds/386068/

‌volcanoeruption.wav by vumseplutten1709. (2025). Freesound. https://freesound.org/people/vumseplutten1709/sounds/242914/

‌Hidden waterfall.WAV by BassmanJourney. (2022). Freesound. https://freesound.org/people/BassmanJourney/sounds/632107/

Amazon jungle day crickets birds and frogs from boat on river great spread2 +some occasional boat rocking.flac by kyles. (2018). Freesound. https://freesound.org/people/kyles/sounds/450532/

‌Mexico City Metro Ambient Sounds.mp3 by ciudadreptil. (2021). Freesound. https://freesound.org/people/ciudadreptil/sounds/610770/

‌city traffic highway distant haze cars and trucks pass Montreal, Canada.flac by kyles. (2022). Freesound. https://freesound.org/people/kyles/sounds/637365/

‌The Office by qubodup. (2025). Freesound. https://freesound.org/people/qubodup/sounds/211945/

‌Backrooms Ambience by Resaural. (2022). Freesound. https://freesound.org/people/Resaural/sounds/626096/

‌Earth tectonic movements by EKVelika. (2023). Freesound. https://freesound.org/people/EKVelika/sounds/668067/

‌EARTH.wav by samsmyname. (2025). Freesound. https://freesound.org/people/samsmyname/sounds/51363/

‌Tartarus Loop.wav by BaDoink. (2021). Freesound. https://freesound.org/people/BaDoink/sounds/563628/

Underground seismic sound effects. by rahulsawla*. (2024). Freesound. https://freesound.org/people/rahulsawla*/sounds/748245/

1960s_Space_Program_Radio_Background_Ambiance by SoundsofTheMachine. (2025). Freesound. https://freesound.org/people/SoundsofTheMachine/sounds/791968/

‌retro-NASA dead-air remix of deqsterslab’s freesound 754209 by Timbre. (2024). Freesound. https://freesound.org/people/Timbre/sounds/755116/

‌Sun Sonification. (2018). SoundCloud. https://soundcloud.com/nasa/sun-sonification

‌THUN_Whipping Thunder Strikes.Lightning And Flash.LFE Sweetener.Artificial_EM.mp3 by newlocknew. (2023). Freesound. https://freesound.org/people/newlocknew/sounds/696391/

‌Low Rumble.wav by CGEffex. (2025). Freesound. https://freesound.org/people/CGEffex/sounds/127976/

‌

‌

[Top ⬆︎](#)

[^1]: Update its the 17th April 2025 Lanchu here, I am very tired. The sem broke me, before I broke it.
[^2]: A pig would eat a human if given the chance. And dolphins have pretty privilege.
