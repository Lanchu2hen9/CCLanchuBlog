---
title: Week 3 (Thurs) Homework
published_at: 2025-02-21
snippet: This is homework 3b.
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

[CC_Assignment 1, WIP](https://editor.p5js.org/Lanchu2hen9/sketches/wc1DKZ-x1). Very old version of my Assignment 1, I really wouldn't recommend using this link.

## Previous Drafts:

- Tom wants duck button reactions.

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

## Waves:

- Cooking~25 March 2025
  ![A cos wave generated from code..](Cos.png)

[Waves p5 file](https://editor.p5js.org/Lanchu2hen9/sketches/xiz9X7J1b).

### Code Drafts:

This block of code is me explain the wave function to myself. See below:

```js
let x = []; // Empty array to store x-coordinates.

let y = []; // Empty array for y-coordinates.

let amplitude = 50;
// Will control how far the squares wiggle on the x-axis.
// How "high" you want the peaks of the cosine waves to be.

let angle = 0; // Starting angle for the cosine wave.

let num; // Num is dependent on the size.

let size = 5; // size of each square.

let period = 2; // Controls how many full cycles or hills
// of a cosine graph fits on the canvas.

let shift = 0;
//Shifts the cos sign left on the x-axis.
// Up and down because of the translate();

function setup() {
  createCanvas(400, 400);
  num = height / size;
  // Number of squares that can be vertically drawn on the canvas.
  // Calculates based of "size" variable. Creates the "wave"

  angleMode(DEGREES); //Good to investigate later in the p5 library.
  //Sets the angle mode to degrees.
}

function draw() {
  background(220);
  translate(width / 2, 0);
  //Shifts origin of cosine graph (0,0) to the middle
  // of the canvas.

  //Draw squares beginning from no squares i=0, i=1,
  // i=2...i=9, i≠10, oops let's stop drawing squares.
  for (let i = 0; i < num; i++) {
    angle = (i / (num - 1)) * 360 * period;
    // One full rotation of the cosine wave,
    // is equal the number of squares - 1.

    x[i] = amplitude * cos(angle + shift);
    // Draws the formula of x = a*cos(360° + shift).
    // The cosine graph is visually drawn vertically
    // from top to bottom, because of the
    // "translate(width/2, 0);"

    // You've also mapped the x-values to the x-
    // values generated by the a*cos(360° + shift)
    // formula.

    y[i] = i * size;
    // Determines the y-coordinate value of the
    // square based on the index generated from the
    // loop.

    rect(x[i], y[i], size, size);
    // Draws the squares based on the previously
    // generated x-axis, and y-axis coordinates
    // as defined in the previous two lines.
  }

  //Animates the wave motion.
  shift += 1;

  line(0, 0, 0, height);
}
```

Need to fix this issue:

> 🌸 p5.js says: [sketch.js, line 19] lerpColor() was expecting p5.Color for the second parameter, received string instead. (http://p5js.org/reference/p5/lerpColor)

```js
let waves;
let waves1;
let waves2;

let BlueSet = ["#A1DCD0", "#169EF2", "#0F88F2", "#0B4FD9", "#073BD9"];
let GreenSet = [
  "#C1E5AC",
  "#88E4C5",
  "#03C19C",
  "#0FBF8D",
  "#41A6A6",
  "#41A6A6",
];

let SandyFloor = ["#E8E3D0", "#F5D9A7", "#E2C9BC", "#D9B3AE", "#F0A7A6"];

function setup() {
  createCanvas(550, 550);
  background(164, 241, 244, 30);
  angleMode(DEGREES); //Good to investigate later in the p5 library.
  //Sets the angle mode to degrees.

  waves = new Pack(8, 0, lerpColor(random(BlueSet), random(GreenSet), 0.5));
  waves1 = new Pack(8, 90, lerpColor(random(BlueSet), random(GreenSet), 0.5));
  waves2 = new Pack(8, 30, lerpColor(random(BlueSet), random(GreenSet), 0.5));
}

function draw() {
  background(164, 241, 244, 30);
  waves.display();
  waves1.display();
  waves2.display();
}
```

So I fixed that issue by doing this:

```js
function setup() {
  createCanvas(550, 550);
  background(164, 241, 244, 30);
  angleMode(DEGREES); //Good to investigate later in the p5 library.
  //Sets the angle mode to degrees.

  let BlueSet = color(
    random(["#A1DCD0", "#169EF2", "#0F88F2", "#0B4FD9", "#073BD9"])
  );
  let GreenSet = color(
    random(["#C1E5AC", "#88E4C5", "#03C19C", "#0FBF8D", "#41A6A6", "#41A6A6"])
  );

  waves = new Pack(8, 0, lerpColor(BlueSet, GreenSet, 0.5));
  waves1 = new Pack(8, 90, lerpColor(BlueSet, GreenSet, 0.5));
  waves2 = new Pack(8, 30, lerpColor(BlueSet, GreenSet, 0.5));
}
```

Now my variables are p5.colour object, its just not lerping the colours correctly. And next I then tried this:

```js
let waves;
let waves1;
let waves2;

let BlueColours = ["#A1DCD0", "#169EF2", "#0F88F2", "#0B4FD9", "#073BD9"];

let GreenColours = [
  "#C1E5AC",
  "#88E4C5",
  "#03C19C",
  "#0FBF8D",
  "#41A6A6",
  "#41A6A6",
];

let BlueSet = color(random(BlueColours));
let GreenSet = color(random(GreenColours));

let SandyFloor = ["#E8E3D0", "#F5D9A7", "#E2C9BC", "#D9B3AE", "#F0A7A6"];

function setup() {
  createCanvas(550, 550);
  background(164, 241, 244, 30);
  angleMode(DEGREES); //Good to investigate later in the p5 library.
  //Sets the angle mode to degrees.

  waves = new Pack(8, 0, lerpColor(BlueSet, GreenSet, 0.5));
  waves1 = new Pack(8, 90, lerpColor(BlueSet, GreenSet, 0.5));
  waves2 = new Pack(8, 30, lerpColor(BlueSet, GreenSet, 0.5));
}

function draw() {
  background(164, 241, 244, 30);
  waves.display();
  waves1.display();
  waves2.display();
}
```

Which gave me these errors of:

- "ReferenceError: color is not defined at /sketch.js:12:17
- ReferenceError: Cannot access 'BlueSet' before initialization
  - at setup (/sketch.js:24:36)
  - at \_setup (https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js:66280:25)
  - at \_runIfPreloadsAreDone (https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js:66226:27)
  - at p5.\_decrementPreload (https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js:66237:25)
  - at p5.<anonymous> (https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js:2:98292)

> 🌸 p5.js says: [sketch.js, line 12] "color" is not defined in the current scope. If you have defined it in your code, you should check its scope, spelling, and letter-casing (JavaScript is case-sensitive).
>
> - More info: https://p5js.org/tutorials/variables-and-change/ Did you just try to use p5.js's color() function? If so, you may want to move it into your sketch's setup() function.
> - More info: https://github.com/processing/p5.js/wiki/p5 js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup

> 🌸 p5.js says: [sketch.js, line 24] "BlueSet" is used before declaration. Make sure you have declared the variable before using it.
>
> - More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declara

Now despite my love of ✨learning✨ & ✨perfectionism✨, I'm going to be resorting back to my previous copy with the issue of the p5.colour object issue, because I have deadlines to meet.

Thanks you Tom for solving my p5.colour object issue. File is [here.](https://editor.p5js.org/capogreco/sketches/vTLhUEDM0b).

## Waves ~ Part B:

<iframe id="Wave_PartB" src="https://editor.p5js.org/Lanchu2hen9/full/xiz9X7J1b"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Wave_PartB`)
    iframe.width = 550;
    iframe.height = 550;

</script>

A really rough draft, its only like 50% done. Haven't done the wave background yet.

<iframe id="CC_Assignment 1" src="https://editor.p5js.org/Lanchu2hen9/full/wc1DKZ-x1"></iframe>

<script type="module">

    const iframe  = document.getElementById (`CC_Assignment 1`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

### Different Versions of AT1:

Thought that I might as well embed some previous older versions of my AT1 that lead to the Final version. Enjoy the janky nature of these versions.

<iframe id="Assignment 1-1.5" src="https://editor.p5js.org/Lanchu2hen9/full/CBxbKChhAd"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Assignment 1-1.5`)
    iframe.width = 450;
    iframe.height = 450;

</script>

# Task 2:

**1. how well did you achieve cuteness in the visual, sonic, and interactive domains?**  
Considering that I still need to do the following:

- Draw duck sprites for my buttons.
- Overlay/edit the notes with the duck notes audio.
- Create the wave background.

I think I did pretty well, since in terms of the interaction domains, I believe that so far my AT1 is very playful.

This is Lanchu a day before the Sunday Deadline, I think I did pretty well in the visual, sonic and interactive domains of AT1. For AT1, I didn't want to do anything too overally complex, as you see week 1 Lanchu thought that this would be difficult to code, it is not. I do want to do something a bit more ambitious for AT2, but that is tbc.

**2. what communities and learning resources did you draw on to do the bulk of your learning for this project?**

- [The p5 reference library](https://p5js.org/reference/)
- [Mdn Wed Docs/Mozilla.org website](https://developer.mozilla.org/en-US/)

Sometimes I find that this online library is a bit wordy, and its coding terms are a bit needlessly complex for me to understand personally.

For example to a person, (me) who learns better through creating/doing, and I read:

> "Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same **temporal dead zone restrictions** as let or const and behave as if they are not hoisted."

on the Class page on the Mdn website, I go like: "Wtf is a **temporal dead zone restriction?!**"

So I ask ChatGPT to explain methods/termology to me, even though ChatGPT does sometimes pull concepts/explainations out of its ass sometimes. That's where common sense, and my general understanding of coding logic and the p5 library is applicable.

- The coding train/ Youtube
  - Particularly this [video](https://youtu.be/T-HGdc8L-7w?si=VItXX0axkKsEvdXk), really helped me to understand how classes work in p5.
- ChatGPT.

**3. what aspects have you enjoyed the most about this process? What have you found to be most surprising?**  
Coding logic, if my code is correct and I input a value/interaction, the code should technically speaking output a value/result that I want it to do. What I found the most surpising is that p5 is honestly so easy to code in. An example is that to convert Hex codes into p5 colour objects, I don't have to do like 30 mins+ of research youtub-ing and ChatGPT-ing to figure out some convoluted way of converting Hex codes into colour objects. (Thanks Tom for this btw, save me so much time.)

**4. what aspects have you struggled with the most? What have you found the most confusing?**  
Probably `for` and `while` loops specifically, its not that I don't understand the concept its just like to my brain, understanding how to use `for`/`while` loops is not as easy to understand as how to use `if{...} else{...}`. I know the `for`/`while` is iterating through something as time passes, it just doesn't come as easily to my brain.
