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
Going to use a `for (let duck of ducks){}` to iterate through each `DuckButton` object that is created by the class, and I am going to use the `for (let duck of ducks){}` to both display each `DuckButton` on the canvas and to play sound.

**Boolean logic:**

- Don't really need boolean logic if, you count `DuckNotes[4].stop;` and `DuckNotes[4].play;` as boolean logic than sure.

**Arrays:**

- My `let DuckNotes` and `let Duckies` are arrays, I'll be using `DuckNotes.push (loadSound('CNote.wav'));` and `Duckies.push (loadImage('ducktest1.png'));` to push the respective .png and .wav files into their respective arrays.
- Would also be using the `let ducks` to store the respective pairs of Duckies .png, and DuckNotes .wav files. In the case of my code its the object created by the DuckButtons.

**Classes:**

- Asked ChatGPT if I should re-factor the DuckBtns code, the bot said yes, and Classes are worth 10% of the assignment, so here I am.

  _ChatGPT's response:_
  ![Asking ChatGPT if I should re-factor my code.](ChatGPT_Refactoring.png)

- Created a new `class DuckButton` class, it acts a template in which p5 uses to create each instance of notes that the user can play.

# Updates:

[CC_Assignment 1, WIP](https://editor.p5js.org/Lanchu2hen9/sketches/wc1DKZ-x1).

## Previous Drafts:

So, this was the original version of my duck xylophone, the unfactored version, called "sketch.1.0.js" in the p5 web editor. See below:

```js
const Duckies = [];
const DuckNotes = [];

function preload() {
  DuckNotes.push(loadSound("CNote.wav"));
  DuckNotes.push(loadSound("DNote.wav"));
  DuckNotes.push(loadSound("ENote.wav"));
  DuckNotes.push(loadSound("GNote.wav"));
  DuckNotes.push(loadSound("ANote.wav"));
  DuckNotes.push(loadSound("HighC.wav"));

  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("DuckTest2.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background("#0066FF");

  // Note to self I might need to use a for loop to space the ducks out evenly.

  //Duck 0 image & sound.
  DuckBtn = createImg("ducktest1.png", "A png image of a duck floating.");
  DuckBtn.position(107, height / 4);
  DuckBtn.size(100, 100);

  DuckBtn.mousePressed(() => {
    DuckNotes[0].stop();
    DuckNotes[0].play();
    console.log(`The C note has been played.`);
  });

  //Duck 1 image & sound.
  DuckBtn1 = createImg("DuckTest2.png", "A png image of a duck floating.");
  DuckBtn1.position(214, height / 4);
  DuckBtn1.size(100, 100);

  DuckBtn1.mousePressed(() => {
    DuckNotes[1].stop();
    DuckNotes[1].play();
    console.log(`The D note is played`);
  });

  //Duck 2 image & sound.
  DuckBtn2 = createImg("DuckTest2.png", "A png image of a duck floating.");
  DuckBtn2.position(321, height / 4);
  DuckBtn2.size(100, 100);

  DuckBtn2.mousePressed(() => {
    DuckNotes[2].stop();
    DuckNotes[2].play();
    console.log(`The note E has been played`);
  });

  //Duck 3 image & sound.
  DuckBtn3 = createImg("DuckTest2.png", "A png image of a duck floating.");
  DuckBtn3.position(107, height / 2);
  DuckBtn3.size(100, 100);

  DuckBtn3.mousePressed(() => {
    DuckNotes[3].stop();
    DuckNotes[3].play();
    console.log(`The Note G has played!`);
  });

  //Duck 4 image & sound.
  DuckBtn4 = createImg("DuckTest2.png", "A png image of a duck floating.");
  DuckBtn4.position(214, height / 2);
  DuckBtn4.size(100, 100);

  DuckBtn4.mousePressed(() => {
    DuckNotes[4].stop();
    DuckNotes[4].play();
    console.log(`The A note has played!`);
  });

  //Duck 5 image & sound.
  DuckBtn5 = createImg("DuckTest2.png", "A png image of a duck floating.");
  DuckBtn5.position(321, height / 2);
  DuckBtn5.size(100, 100);

  DuckBtn5.mousePressed(() => {
    DuckNotes[5].stop();
    DuckNotes[5].play();
    console.log(`High C note has been played!`);
  });
}

function draw() {
  background(220);
  background("#0066FF");
}
```

Second named: "sketch.2.0.js", see:

```js
let Duckies = [];
let DuckNotes = [];

// Empty array to store the image, sound file pair along with the positioning.
let ducks = [];

function preload() {
  DuckNotes.push(loadSound("CNote.wav"));
  DuckNotes.push(loadSound("DNote.wav"));
  DuckNotes.push(loadSound("ENote.wav"));
  DuckNotes.push(loadSound("GNote.wav"));
  DuckNotes.push(loadSound("ANote.wav"));
  DuckNotes.push(loadSound("HighC.wav"));

  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("DuckTest2.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));
  Duckies.push(loadImage("ducktest1.png"));

  for (let i = 0; i < Duckies.length; i++) {
    ducks.push(
      new DuckButton(100 * i + 50, height / 4, DuckNotes[i], i, Duckies)
    );
  }
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background("#0066FF");
}

function draw() {
  for (let duck of ducks) {
    duck.show();
  }
}

function mousePressed() {
  for (let duck of ducks) {
    duck.SoundPlayer();
  }
}

class DuckButton {
  constructor(x, y, noteName, index, Duckies) {
    this.index = index;
    this.image = Duckies[this.index];
    this.sound = noteName;
    this.x = x;
    this.y = y;
  }

  show() {
    image(this.image, this.x, this.y, 100, 100);
  }

  SoundPlayer() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 100 &&
      mouseY > this.y &&
      mouseY < this.y + 100
    ) {
      this.sound.stop();
      this.sound.play();
      console.log(`The sound ${this.sound.url} has been played.`);
    }
  }

  // Now, this is properly inside the class:
  NewPosition(NewX, NewY) {
    this.x = NewX;
    this.y = NewY;
  }
}
```

The final version for the duck xylophone, is the one activated in the editor. The below is a comment/note from 24 March 2025, Lanchu:
![A note from Lanchu, about background updates.](Lanny's_note_24:03:2025.png)
