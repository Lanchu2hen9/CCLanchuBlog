---
title: Week 5 (Thurs) Homework
published_at: 2025-04-04
snippet: This is homework 5a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Tenth-blog-post#task-1)
2. [Task 2](https://cclanchublo6.deno.dev/Tenth-blog-post#task-2)
   - [3D model Generation](https://cclanchublo6.deno.dev/Tenth-blog-post#3d-model-generation)
   - [Interaction](https://cclanchublo6.deno.dev/Tenth-blog-post#interaction)
   - [Audio](https://cclanchublo6.deno.dev/Tenth-blog-post#audio)
3. [Task 3](#)

# Task 1:

_Listening to the Ocean on a Shore of Gypsum Sand 2014_ by [Phillip David Stearns](https://phillipstearns.com/). Is a 3D printed seashell, the seashell's 3D models are algorithmically generated for the sole purpose of "listening to the 'ocean'."

I think that this artwork is post-digital, because post-digital art is all about the treating digital technologies as ordinary, ubiquitous tools for art creation. Another aspect of post-digital art is about examining the relationship of the viewer/the individual to the digital medium.

Likewise, _Listening to the Ocean on a Shore of Gypsum Sand 2014_ examines the boundary between the "simulated ocean experience" and the "actual ocean experience" and what preconceptions a person who have either experienced the former or the latter have when experiencing this artwork for the first time.

# Task 2:

## 3D model Generation:

The WEBGL library particularly:

- [Three.js](https://threejs.org/)
- To generate the shells algorithmically [maths.js](https://mathjs.org/).
- To generate different variations in the shell's surface. [OpenSimplex Noise](https://www.npmjs.com/package/open-simplex-noise)

## Interaction:

- [OrbitControls.js](https://threejs.org/examples/jsm/controls/OrbitControls.js). Allows users to rotate and zoom in on the shell.
- [GLTFLoader.js](https://gist.github.com/bumbeishvili/56e34b4f943392e4fcc474c7d8a3c040). Loads pre-existing 3D models.

## Audio:

- Web Audio API, Processes sound dynamically in the browser.
- [GLTFLoader.js](https://tonejs.github.io/).

# Task 3:

Trying to do some text replacement with Rita here, its not working obviously.

```js
const cnv = document.getElementById("p5_example");

let grammar, poem;

function setup() {
  createCanvas(500, 500, P2D);
  cnv.parent("p5_example");

  const rules = {
    start: [
      "I listen to the <created> shell, and wonder if the <sound> housed within, is a meer <fake> or not? I feel the <imperfections> of the seashells, and wonder if these <imperfections> are <convincing> enough to those who have come before.",
    ],
    created: [
      "manufactured",
      "constructed",
      "artificial",
      "assembled",
      "contrived",
      "spurious",
      "counterfeit",
      "factitious",
      "simulated",
    ],
    sound: [
      "Ocean",
      "filtered static",
      "life",
      "existence",
      "entity",
      "individual",
      "soul",
      "creature",
      "history",
      "story",
      "the experiences",
    ],
    fake: [
      "Simularcrum",
      "effigy",
      "representation",
      "account",
      "declaration",
      "rendering",
      "mimicry",
      "imitation",
      "impersonation",
      "impression",
      "mockery",
      "parody",
    ],
    imperfections: [
      "imperfections",
      "blemishes",
      "marks",
      "spots",
      "scratches",
      "indentations",
      "notches",
      "flaws",
      "errors",
    ],
    convincing: [
      "convincing",
      "persuasive",
      "plausible",
      "believable",
      "feasible",
      "reasonable",
      "acceptable",
      "credible",
      "suasive",
    ],
  };

  grammar = RiTa.grammar(rules);
  poem = grammar.expand("start");
  // poem = grammar.expand("start");
}

function draw() {
  background(220);
  textAlign(LEFT, TOP);
  textWrap(WORD);
  textSize(16);

  text(poem, 20, 20, 460);
  noLoop();
}
```

Exploring the tokenize method in RiTa.js, below code should split and then join the sentence with spaces.

```js
<script src="./scripts/p5.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rita"></script>

<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")

function setup() {
  createCanvas (400, 400, P2D, cnv)
  rectMode(CENTER);

  window.addEventListener("keydown", function(event) {
   if (event.key === "Enter") {
      console.log("The Enter key was pressed!")
      Emily();
   }
  });
}

function Emily() {
  let sentence = "I listen to the created shell, and wonder if the sound housed within, is a meer fake or not? I feel the imperfections of the seashells, and wonder if these imperfections are convincing enough to those who have come before.";
  words = RiTa.tokenize(sentence, { regex: "\\s"});
  // Splits sentence in bits that have whitespace/spaces.

  // console.log(words);

  // let output = '';
  // for (let i = 0; i < words.length; i++) {
  //   output += words[i];
  // }
  // console.log(output);

  // Does the same things as the for loop above,
  // and joins the tokens in the string back together
  let output = words.join('');
  console.log(output);
}

function draw() {
  background(220);
}
</script>
```

Hit enter.

<script src="https://cdn.jsdelivr.net/npm/rita"></script>
<script src="./scripts/p5.js"></script>

<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")

let output = '';

function setup() {
  createCanvas (500, 500, P2D, cnv)
  rectMode(CENTER);


  window.addEventListener("keydown", function(event) {
   if (event.key === "Enter") {
      console.log("The Enter key was pressed!")
      Emily();
   }
  });
}

function Emily() {
  let sentence = "I listen to the manufactured shell, And wonder if the ocean within will tell, Is this conch a mere mimicry or not, A reflection, a story, or a thought? I feel the blemishes on the shell, Are these signs of the sea so true, Or just impressions passing through? Each mark, each spot, each little flaw, A tale of time, a history raw. These imperfections, deep and round—Do they hold the truth we’ve found? ";

    let words = RiTa.tokenize(sentence);
    let pos = RiTa.pos(sentence);

    output = '';

    const Pronouns = ['I', 'You', 'He', 'She', 'They', 'We']

    for (let i = 0; i < words.length; i++) {
      if (pos[i] === 'prp') {
        output += Pronouns[Math.floor(Math.random() * Pronouns.length)] + ' ';
      } else if (pos[i] === 'jj') {
        output += RiTa.randomWord({pos: 'jj'})  + ' ';
      } else if (pos[i] === 'rb') {
        output += RiTa.randomWord({pos: 'rb'}) + ' ';
      } else {
        output += words[i] + ' ';
      }
    }
    console.log(output.trim());
    loop();

  // console.log(output);
  // Console.logs the outputted sentence of the for and if loop.
}

function draw() {
  background('#f2e2d2');
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  textSize(16);

  let x = width / 2;
  let y = height / 2;

  fill('#75958E');
  text(output, x, y, width - 40, height - 40);
  noLoop();
}
</script>
