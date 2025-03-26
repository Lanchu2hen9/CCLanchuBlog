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

## Waves ~ Part B:

<iframe id="Wave_PartB" src="https://editor.p5js.org/Lanchu2hen9/full/xiz9X7J1b"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Wave_PartB`)
    iframe.width = 550;
    iframe.height = 550;

</script>

# Task 2:

Rough draft, its only like 50% done. Haven't done the wave background yet.

<iframe id="CC_Assignment 1" src="https://editor.p5js.org/Lanchu2hen9/full/wc1DKZ-x1"></iframe>

<script type="module">

    const iframe  = document.getElementById (`CC_Assignment 1`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

**1. how well did you achieve cuteness in the visual, sonic, and interactive domains?**  
Considering that I still need to do the following:

- Draw duck sprites for my buttons.
- Overlay/edit the notes with the duck notes audio.
- Create the wave background.

I think I did pretty well, since in terms of the interaction domains, I believe that so far my AT1 is very playful.

**2. what communities and learning resources did you draw on to do the bulk of your learning for this project?**

- The p5 referencel library.
- Mdn.
- The coding train, when I reviewed what classes are in p5.
- ChatGPT, I didn't blindly copy its code.

**3. what aspects have you enjoyed the most about this process? What have you found to be most surprising?**  
Coding in general, mostly using the arrays and seeing how I can use arrays in different ways. What did I find the be most surprising? Considering I have a very CSS/HTML approach to coding, as in moreso of "how do I make this look good?" over "I need this to be more functional.". I tend to enjoy the more visual parts of front-end coding. Suprisedly I am actually enjoying the logic of coding, like you input something into a function and something comes out.

**4. what aspects have you struggled with the most? What have you found the most confusing?**  
`for` and `while` loops specifically, its not that I don't understand what they are, its just that the idea of a `for` loop iterating over a set of values, does come as easily to me as something like if else statements. Also the maths[^1], I don't struggle with it, but its probably going to take up RAM when I code the waves part.

[^1]: Two years of VCE Maths Methods, will give you some repressed maths trauma. Maths~useful, coding~enjoyable, Maths Methods~painful and insomnia-inducing.
