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

<script src="./scripts/p5.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rita"></script>

<canvas id="p5_example"></canvas>

<script>
const cnv = document.getElementById ("p5_example")

let grammar, poem;

function setup() {
   // cnv = createCanvas (400, 400)
   createCanvas (500, 500, P2D, cnv)
   // cnv.parent("p5_example");

   const rules = {
      "start": [
         "I listen to the created shell, and wonder if the sound housed within, is a meer fake or not? I feel the imperfections of the seashells, and wonder if these imperfections are convincing enough to those who have come before."
      ],
      "created": ["manufactured","constructed","artificial", "assembled", "contrived", "spurious", "counterfeit", "factitious", "simulated" ],
      "sound": ["Ocean", "filtered static", "life", "existence", "entity", "individual", "soul", "creature", "history", "story", "the experiences"],
      "fake": ["Simularcrum", "effigy", "representation", "account", "declaration", "rendering", "mimicry", "imitation", "impersonation", "impression", "mockery", "parody"],
      "imperfections": ["imperfections", "blemishes", "marks", "spots", "scratches", "indentations", "notches", "flaws", "errors"],
      "convincing": ["convincing", "persuasive", "plausible", "believable", "feasible", "reasonable", "acceptable", "credible", "suasive"]
   };

   grammar = RiTa.grammar(rules);
   poem = grammar.expand();

   textAlign(CENTER);
   textSize(16);
}

function draw() {
  background(220);
  text(poem, width/2, height/2);
  noLoop();
  
}
</script>
