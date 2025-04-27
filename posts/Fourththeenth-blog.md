---
title: Week 7 (Tues) Homework
published_at: 2025-04-15
snippet: This is homework 7a. Apparently homework 7a doesn't exist for some reason.
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

**How will you make the sound design for your AT2 function in a chaotic aesthetic register?**

**What does it mean to be chaotic in the sonic domain? In your discussion, please make reference effective complexity, paying particular attention to the following:**
**1. Structure - what structures our perception of sound?**
In terms of structure humans are pattern recognition machines, humans in terms of both scientific understanding and art in general seek to find patterns, musical motifs, tempos, beats and structure. Pure chaos in this section is to have a lack of recongisable structure by the human ear.

**2. Noise - what differentiates noise from sound, or music?**
Music is when order is injected into chaos. The line between chaos music is those really experimental sound stuff. Like Merzbow or free jazz[^1]. Where there's an inherent randomness to the sound/music as obviously produced by the musician.

**3. Voice - what makes voice a separate category of sound?**
Voice is when information, and structure is injected into noise/a sound. When mixed with the other two categories, Voice brings an inherent randomness to sound.

In yapping about Sound and every, I would like to say I am not a sound person in general, I dislike loud sounds, and anything that's not either white noise or black noise distracts me. But for AT2, I am legally obligated to use sound, so I will use sound. I'll probably do something simple, get two arrays, one for the x-axis and the other for the y-axis. Have it so that whenever the browser is opened 2 random audio clips from the arrays are chosen. And have it according to where you position your mouse on the canvas something the two is mixed differently. Actually I want one audio to shift from one audio to another on the y-axis.

So probably smth like 3 arrays:

```js
let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];

preload() {
   // Push said audio clips into the array.
}
```

ChatGPT says this about the role of de-familiarisation in Natalie Loveless' talk:

> "De-familiarisation means making everyday things feel strange so we notice and care about them again. Loveless says artists can use this to help people see their deep connections with nature."

I guess with De-familiarisation, and this [example](https://mynoise.net/NoiseMachines/thunderNoiseGenerator.php), you're taking the natural almost everyday occurance of "stormy/rain/thunder" and divorcing it from its original context, and increasing people's everyday connection to nature. Because unironically at lot of ppl use this in their everyday life like for their "high-quality work" and study.

## Task 2:

Both for efficiency and AT2 I am going to be creating what I imagine the sound for AT2 to be. I'm going to be referring/studying this [Samples](https://blog.science.family/250409_web_audio_api_samples).

This is the idea if I explained it very poorly earlier in this post.
![AT2, Sound design idea](AT2-Sound-Idea.jpg)

So I yapped to Chatgpt about my sound design idea, ChatGPT said these are the areas that I have to investigate into order to create said idea.

- AudioBufferSourceNode
- GainNode
- PannerNode (optional) for spatial sound movement.
- start() and stop() method handling (especially when blending and switching random sounds) How to smoothly adjust gain.value for blending without pops/clicks
- Maybe linearRampToValueAtTime for smoother gain transitions.

### Broad Steps for Your System:

1. Load all sounds into AudioBuffer objects.
2. Create an AudioBufferSourceNode for each sound.
3. Create a GainNode for each source, and connect it to the audio context’s destination.
4. On mouse move, calculate relative position.
5. Based on position, choose random samples from the correct arrays (YSoundStart, YSoundEnd, etc).
6. Lerp the gain values between selected sounds based on proximity to center or edges.
7. Update the gainNode.gain.value properties in real-time.

### ChatGPT's skeleton code:

```js
// Set up
let YSoundsStart = [...]; // +Y sounds
let YSoundsEnd = [...];   // -Y sounds
let XSoundsStart = [...]; // +X sounds
let XSoundsEnd = [...];   // -X sounds

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Find center
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

// Handle mouse move
canvas.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Find relative position from center
    let relativeX = mouseX - centerX;
    let relativeY = centerY - mouseY; // Flip Y so UP = positive

    // Normalize distances
    let maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    let distanceX = relativeX / centerX; // Between -1 and 1
    let distanceY = relativeY / centerY; // Between -1 and 1

    // Pick random sounds
    let soundX = distanceX >= 0
        ? pickRandom(XSoundsStart)
        : pickRandom(XSoundsEnd);

    let soundY = distanceY >= 0
        ? pickRandom(YSoundsStart)
        : pickRandom(YSoundsEnd);

    // Calculate blending
    let blendX = Math.abs(distanceX); // 0 to 1
    let blendY = Math.abs(distanceY); // 0 to 1

    // Apply volumes
    soundX.volume = blendX;
    soundY.volume = blendY;

    // Play or adjust sounds
    soundX.play();
    soundY.play();
});

// Utility
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
```

Not sure if its cheating if I copy the maths part from ChatGPT. Some things that it wrote are not the best way of writing code. But what can I say? I've already shook the devil's hand in terms of coding with AI before.

### Interactive Sound Piece Draft 1:

If this blasts your ears out its not my problem since its a **Draft 1** and its supposed to be not good. The interactive sound design experiment is [here.](https://lanchu-thespiral-a-50-es441hettssd.deno.dev/ExperiementFiles/Week7a.html)

```js
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.getElementById(`cnv_element`);
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext(`2d`);

//#region Global Variables:
let YSoundsStart = [];
// YSoundsStart is an array that will hold the sound objects
// attached to the +y-axis of the canvas.

let YSoundsEnd = [];
// YSoundsEnd is an array that will hold the sound objects
// attached to the -y-axis of the canvas.

let XSoundsStart = [];
// XSoundsStart is an array that will hold the sound objects
// attached to the +x-axis of the canvas.

let XSoundsEnd = [];
// XSoundsStart is an array that will hold the sound objects
// attached to the -x-axis of the canvas.
//#endregion

//#region  Canvas Centre
let CanvasCentreX = innerWidth / 2;
// Calculates the "x-coordinate" centre
// of the canvas.

let CanvasCentreY = innerHeight / 2;
// Calculates the "y-coordinate" centre
// of the canvas.
//#endregion

//#region Randomiser

// arg1 is the lower bound in which you want the "random"
// content to be picked from.
// arg2 is the upper bound in which you want the "random"
// content to be picked from.
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

// #region Setup Function
function setup() {
  OnUserClick();
  // Calls the OnUserClick function.

  MouseTracker();
  // Calls the MouseTracker function.
}
//#endregion

// #region MouseMove Function
function MouseTracker() {
  cnv.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    // mouseX variable that holds the x-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    const mouseY = e.clientY;
    // mouseY variable that holds the y-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    let RelMouseX = mouseX - CanvasCentreX;
    // The horizontal distance of the mouse from the relative
    // to the centre of the canvas.

    let RelMouseY = mouseY - CanvasCentreY;
    // The vertical distance of the mouse from the relative
    // to the centre of the canvas.

    // Flipping the "positive" y-axis of the Canvas API
    // so that the "positive" y-axis, is UP.
    // Ditto for the x-axis.

    let MaxDistance = Math.sqrt(CanvasCentreX ** 2 + CanvasCentreY ** 2);
    // Essentially pythagorean theorem. Where in a^2 + b^2 = c^2, a is the
    // vertical distance (y-value, CanvasCentreY) and b is the horizontal
    // distance (x-value, CanvasCentreX).

    let XDistance = RelMouseX / CanvasCentreX;
    // Calculates the "percentage"/"fraction" of the x-distance from the
    // centre of the canvas. (0,0)
    let YDistance = RelMouseY / CanvasCentreY;
    // Calculates the "percentage"/"fraction" of the y-distance from the
    // centre of the canvas. (0,0)

    // This makes it so that the distance from the mouse from the centre
    // of the canvas is independent of whatever value the width and height
    // of the canvas is.

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

    let blendX = Math.abs(XDistance);
    // Creates variable called blendX, and assigning it the absolute value of
    // of XDistance.

    let blendY = Math.abs(YDistance);
    // Creates variable called blendY, and assigning it the absolute value of
    // of Distance.

    //=== Might give the listener an aneurysm here with the volume. I am aware. Also willl tinker with this code later.===//

    SoundX.volume = blendX;
    // The volume of the audio clip is the value of blendX.

    SoundY.volume = blendY;
    // The volume of the audio clip is the value of blendY.

    SoundX.play();
    // Play the sound object in the SoundX variable.

    SoundY.play();
    // Play the sound object in the SoundX variable.
  });
}
//#endregion

// #region Click Function
function OnUserClick() {
  cnv.addEventListener("mousedown", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log("The mouse was clicked on the canvas");
    console.log("the mouse was clicked at", e.clientX, e.clientY);

    // I was advised by ChatGPT to use to use mouseMove to track the mouse position
    // in real time, as mousedown only tracks the position/snapshot of the mouse at
    // point of click.
  });
}
//#endregion

// #region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = `turquoise`;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  const seconds = ms / 1000;
  console.log(seconds.toFixed(2));

  requestAnimationFrame(draw_frame);
};
// #endregion

draw_frame();

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
};
```

Yep I did forget to preload the audio clips. Preloading the audio clips did not help cus modern browsers don't like it when there no "valid user interaction, conceptually, and physically excluding the "no valid user interaction" thing this code:

```js
// I didn't write the following code.
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.getElementById(`cnv_element`);
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext(`2d`);

// Array to store buttons and their properties (text, coordinates, target path)
const buttons = [
  {
    text: "Week 4a Task",
    x: 100,
    y: 100,
    width: 300,
    height: 40,
    path: "/ExperiementFiles/index2.html", // Path for button 1
  },
  {
    text: "Week 4b Task",
    x: 100,
    y: 200,
    width: 300,
    height: 40,
    path: "/ExperiementFiles/index3.html", // Path for button 2
  },
  {
    text: "AT2 Task",
    x: 100,
    y: 300,
    width: 300,
    height: 40,
    path: "/ExperiementFiles/AT2-V1.0.html", // Path for button 3
  },
  {
    text: "Week 7a task",
    x: 100,
    y: 400,
    width: 300,
    height: 40,
    path: "/ExperiementFiles/Week7a.html", // Path for button 3
  },
];

// Function to draw the frame and buttons
const draw_frame = (ms) => {
  // Set background color
  ctx.fillStyle = `turquoise`;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  // Display the time in seconds in the console (for debugging)
  const seconds = ms / 1000;
  console.log(seconds.toFixed(2));

  // Draw each button
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";

  buttons.forEach((button) => {
    ctx.fillText(button.text, button.x, button.y);
  });

  requestAnimationFrame(draw_frame);
};

// Draw initial frame
draw_frame();

// Resize handler
onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
};

// Event listener for click events on the canvas
cnv.addEventListener("click", (event) => {
  // Get the mouse coordinates
  const x = event.clientX;
  const y = event.clientY;

  // Check if the click is within any button's bounds
  buttons.forEach((button) => {
    if (
      x >= button.x &&
      x <= button.x + button.width &&
      y >= button.y - button.height &&
      y <= button.y
    ) {
      // Redirect to the corresponding path
      window.location.href = button.path;
    }
  });
});
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.getElementById(`cnv_element`);
cnv.width = innerWidth;
cnv.height = innerHeight;

const ctx = cnv.getContext(`2d`);

//#region Audio Clip References
// Missions Sounds & Sound Bites ~ Launch, Morse Code, Passing Comet by DudeAwesome. (2017). Freesound. https://freesound.org/people/DudeAwesome/sounds/386068/
// Short Wave Radio Noise 1 by zmobie. (2025). Freesound. https://freesound.org/people/zmobie/sounds/257880/
// Shuttle to Station Sounds & Sound Bites by DudeAwesome. (2017). Freesound. https://freesound.org/people/DudeAwesome/sounds/386067/
// atlas3q-1FM-16bit.wav by pixelmasseuse. (2025). Freesound. https://freesound.org/people/pixelmasseuse/sounds/95822/
// Birds In The Forest by BurghRecords. (2019). Freesound. https://freesound.org/people/BurghRecords/sounds/456123/
// wolf howle.wav by malg0isx. (2021). Freesound. https://freesound.org/people/malg0isx/sounds/567994/
// AMBForst_Autumn.A Quiet Forest.Wind In The Pines And Birches.Pine Creaking 1_EM by newlocknew. (2024). Freesound. https://freesound.org/people/newlocknew/sounds/756754/
// waves ocean crash on beach nearby wide big metallic sound.flac by kyles. (2018). Freesound. https://freesound.org/people/kyles/sounds/450634/

//#endregion
//#region Global Variables:
let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];
//#endregion

//#region  Canvas Centre
let CanvasCentreX = innerWidth / 2;
// Calculates the "x-coordinate" centre
// of the canvas.

let CanvasCentreY = innerHeight / 2;
// Calculates the "y-coordinate" centre
// of the canvas.
//#endregion

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
//#endregion

//#region Randomiser

// arg1 is the lower bound in which you want the "random"
// content to be picked from.
// arg2 is the upper bound in which you want the "random"
// content to be picked from.
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

// #region Setup Function
function setup() {
  preload();
  OnUserClick();
  // Calls the OnUserClick function.

  MouseTracker();
  // Calls the MouseTracker function.
}
//#endregion

// #region MouseMove Function
function MouseTracker() {
  cnv.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    // mouseX variable that holds the x-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    const mouseY = e.clientY;
    // mouseY variable that holds the y-coordinate of the mouse,
    // relative to the top left corner of the canvas.

    let RelMouseX = mouseX - CanvasCentreX;
    // The horizontal distance of the mouse from the relative
    // to the centre of the canvas.

    let RelMouseY = mouseY - CanvasCentreY;
    // The vertical distance of the mouse from the relative
    // to the centre of the canvas.

    // Flipping the "positive" y-axis of the Canvas API
    // so that the "positive" y-axis, is UP.
    // Ditto for the x-axis.

    let MaxDistance = Math.sqrt(CanvasCentreX ** 2 + CanvasCentreY ** 2);
    // Essentially pythagorean theorem. Where in a^2 + b^2 = c^2, a is the
    // vertical distance (y-value, CanvasCentreY) and b is the horizontal
    // distance (x-value, CanvasCentreX).

    let XDistance = RelMouseX / CanvasCentreX;
    // Calculates the "percentage"/"fraction" of the x-distance from the
    // centre of the canvas. (0,0)
    let YDistance = RelMouseY / CanvasCentreY;
    // Calculates the "percentage"/"fraction" of the y-distance from the
    // centre of the canvas. (0,0)

    // This makes it so that the distance from the mouse from the centre
    // of the canvas is independent of whatever value the width and height
    // of the canvas is.

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

    let blendX = Math.abs(XDistance);
    // Creates variable called blendX, and assigning it the absolute value of
    // of XDistance.

    let blendY = Math.abs(YDistance);
    // Creates variable called blendY, and assigning it the absolute value of
    // of Distance.

    SoundX.pause();
    SoundX.currentTime = 0;
    SoundX.play();

    SoundY.pause();
    SoundY.currentTime = 0;
    SoundY.play();

    //  SoundX.volume = blendX;
    //  // The volume of the audio clip is the value of blendX.

    //  SoundY.volume = blendY;
    //  // The volume of the audio clip is the value of blendY.

    //  SoundX.play();
    //  // Play the sound object in the SoundX variable.

    //  SoundY.play();
    //  // Play the sound object in the SoundX variable.
  });
}
//#endregion

// #region Click Function
function OnUserClick() {
  cnv.addEventListener("mousedown", (e) => {
    YSoundsStart.forEach((sound) => sound.play().catch(() => {}));
    YSoundsEnd.forEach((sound) => sound.play().catch(() => {}));
    XSoundsStart.forEach((sound) => sound.play().catch(() => {}));
    XSoundsEnd.forEach((sound) => sound.play().catch(() => {}));

    const x = e.clientX;
    const y = e.clientY;
    console.log("The mouse was clicked on the canvas");
    console.log("the mouse was clicked at", e.clientX, e.clientY);

    // I was advised by ChatGPT to use to use mouseMove to track the mouse position
    // in real time, as mousedown only tracks the position/snapshot of the mouse at
    // point of click.
  });
}
//#endregion

// #region Draw Function
const draw_frame = (ms) => {
  ctx.fillStyle = `turquoise`;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  const seconds = ms / 1000;
  //   console.log(seconds.toFixed(2));

  requestAnimationFrame(draw_frame);
};
// #endregion

draw_frame();

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;

  CanvasCentreX = innerWidth / 2;
  CanvasCentreY = innerHeight / 2;
};

setup();
```

Ignore the mess of a code, did not refer to the blog. Winged it, winging was not a good idea. Current errors:

> Week7a.js:216 Uncaught (in promise) NotSupportedError: The element has no supported sources. (anonymous) @ Week7a.js:216

> Week7a.js:212 Uncaught (in promise) NotSupportedError: The element has no supported sources. (anonymous) @ Week7a.js:212

And this error, when I click on the canvas:

> Week7a.js:212 Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD Week7a.js:216

Also these, which mean path issue[^2]:

> GET http://127.0.0.1:3000/ExperiementFiles/audio/ExpAudio 450634**kyles**waves-ocean-crash-on-beach-nearby-wide-big-metallic-sound.flac 404 (Not Found)

[^1]: ChatGPT suggested this to me, I'm not a musical and or sound person.
[^2]: If I had a penny for every time I had a path issue, I would be a very rich woman indeed.
