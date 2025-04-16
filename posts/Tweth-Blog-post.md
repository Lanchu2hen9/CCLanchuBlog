---
title: Week 6 (Tuesday) Homework
published_at: 2025-04-13
snippet: This is homework 6a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Tweth-Blog-post#task-1)
2. [Task 2](https://cclanchublo6.deno.dev/Tweth-Blog-post#task-2)
3. [Task 3](#)
4. [Task 4](#)

# Task 1:

**For each of the Javascript libraries; "[q5.js](https://q5js.org/home/), [c2.js](https://c2js.org/), and [svg.js](https://svgjs.dev/docs/3.2/)". What are they used for? And in which ways are they different?**

q5.js is basically p5.js but more lightweight on the browser. Gives more "frames" use the WebGPU, and uses no external API libraries. The only downside to this is that q5.js is not as a widely supported/adopted library, and the WebGPU function might not work on older computers.

c2.js is a Javascript library that does "computational geometry, physics simulation, evolutionary algorithms and modular design" among other things. Quote ChatGPT, on what c2.js is: "p5.js for math nerds"

svg.js is an Javascript API library that animates SVGs (Scalable Vector Graphics), it relies on no other API libraries. It works predominately on the DOM of the HTML, and uses the CPU.

I mean the differences are kind of obviously stated above. API libraries listed from least taxing on the computer/browser to most taxing on the browser/computer.

1. q5.js
2. svg.js
3. c2.js
4. p5.js

# Task 2:

**Can we use these libraries from within a javascript module? Explain why / why not?**
Yes if the API library is ES Module-compatible. Explain why/why not? Tom I have a whole ass explaination on API script tags and contaminating the global scale. See [this](https://cclanchublo6.deno.dev/JavascriptConceptReview#api-libraries--es-module-compatibility).

**In what situations might a tool like [esm.sh](https://esm.sh/#tsx) be useful?**
Converts traditional NPM packages and urls/those script tags into importable modules. So I don't have to pray to the Repo Maintainer and hope that the API library is ES module-compatiable.

# Task 3:

Tried using import statements it did not work. I don't think q5.js is ES module-compatiable. Going with the old traditional way of script tags. Below is me being lazy and using ChatGPT, its not working cus ChatGPT is ass when it comes to code. ITS GOOGLE TIME! 👆🏻🤓. If all things fail, I'm just straight up using the HTML code, and linking it in my blog.

## ChatGPT's code:

The errors I get from the below code are:

> "Tweth-Blog-post:108 Uncaught ReferenceError: q5 is not defined at Tweth-Blog-post:108:3"

```js
<canvas id="q5_example"></canvas>

<script type="module">

   const sketch = (q) => {
    q.setup = () => {
      q.createCanvas(400, 400, q.P2D);
      q.noLoop();
    };

    q.draw = () => {
      q.background('silver');
      q.circle(100, 50, 80);
    };
  };

  new q5(sketch, document.getElementById('q5_example'));

</script>
```

```js
<!-- Try p5 compatibility mode (this might help too) -->
<script src="https://cdn.jsdelivr.net/gh/q5js/q5.js@main/q5.min.js"></script>

<canvas id="q5_example"></canvas>

<script>
  const sketch = (q) => {
    q.setup = () => {
      q.createCanvas(400, 400, q.P2D, document.getElementById("q5_example"));
    };

    q.draw = () => {
      q.background('lavender');
      q.fill('blue');
      q.ellipse(q.frameCount % 400, 200, 50, 50); // animation!
    };
  };

  // Wait for q5 to load before using it
  window.addEventListener('load', () => {
    if (window.q5) {
      new window.q5(sketch, document.getElementById("q5_example"));
    } else {
      console.error('🥲 q5 not defined. 🥲');
    }
  });
</script>
```

Okay now I'm getting somewhere. I have the console error of:

> GET http://localhost:8000/static/my-q5-project/q5/q5.mjs net::ERR_ABORTED 404 (Not Found)

Referenced this page; [q5js_to_esm.mjs](https://gist.github.com/GoToLoop/f3787d5ceab12ad5e1d26cca083f40df). Not sure if its correct tho. Things are for the most part aren't red, so I'm assuming I'm doing _something_ correct.

```js

<canvas id="q5_example"></canvas>

<script type="module">

import { Q5 } from './static/my-q5-project/q5/q5.mjs';
const cnv = document.getElementById("q5_example");

// Setup function for your canvas
function setup() {
   createCanvas(400, 400, P2D, cnv);  // Set the canvas size and type
   noLoop();  // Disable continuous drawing (you can remove if needed)
}

// Draw function for your canvas
function draw() {
   background('silver');  // Set the background color
   circle(100, 50, 80);  // Draw a circle at position (100, 50) with radius 80
}

// Call setup once and draw continuously
setup();
</script>
```

So it turns out the path for `import Q5 from ''` in the previous code block was wrong and was connecting to this file:
![The import statement connecting to the q5.js in the static > scripts > q5 > q5.js-main > q5.js file.](Wrong.png)

When it really should be connecting to this file:
![The import statement connecting to the q5.js file this time in my my-q5-project > q5 > q5.js](Right.png)

For the sake of not breaking my code, I am not going to mess with the entirety of my q5.js repo folder uploaded to VSCode.

The embed below is a cat screensaver. For reference this is the code:

```js
<canvas id="q5_test"></canvas>

<script type="module">
  import Q5 from './my-q5-project/q5/q5.js'
  const div = document.getElementById (`q5_test`)
  const width = 700
  const height = 700

  const q = new Q5 ("instance")
  console.log (q)

  const logos = [
    './assets/Car1.png',
    './assets/MaxwellCar.png',
    './assets/smudgecar.png',
  ]

  const BounceCar = logos[Math.floor(Math.random() * logos.length)]
  let img;

  const displayW = 105;
  const displayH = 85;

  q.preload = () => {
    img = q.loadImage(BounceCar);
  }

  const pos = {
    x: Math.random() * (width - displayW * 2) + displayW,
    y: Math.random() * (height - displayH * 2) + displayH,

    // x: 0,
    // y: 0,
    // Places the Car.png on a random position on the canvas.

    vx: (Math.random() < 0.5 ? -1 : 1) * 2,
    vy: (Math.random() < 0.5 ? -1 : 1) * 2,
    // Choose a random number [0,1), if the no. is less than 0.5 then
    // yeetus the catus in a negative "-1" direction, if not then yeetus
    // the catus in a positive direction "+1".
    // The "*2" is there to give the car a speed of "2 pixels per frame"
  }

  let phase = 0;
  const baseSpeed = 6;
  const exponent = 0.5;

  q.setup = () => {
    q.createCanvas (width, height)
    q.noStroke()
    q.imageMode(q.CENTER)

    // pos.x = Math.random() * (width - displayW) + displayW / 2
    // pos.y = Math.random() * (height - displayH) + displayH / 2
  }

  q.draw = () => {
    q.background (`lightblue`)

    const speedFactor = baseSpeed * Math.pow(phase, exponent)
    // Controls how fast the catus is yeetus.
    // (In more technical terms the steepness of the exponential curve.)
    phase += 0.01
    // increments the phase over time.

    // Updates & re-assigns the car.png on the canvas.
    pos.x += pos.vx * speedFactor
    pos.y += pos.vy * speedFactor

    // Variables used to contain the width and height of the cat images.
    const imgW = img?.width ?? 10
    const imgH = img?.height ?? 10

    if (pos.x < imgW / 10 || pos.x > width - imgW / 10) pos.vx *= -1
    if (pos.y < imgH / 10 || pos.y > height - imgH / 10) pos.vy *= -1
    // Creates a border around the edges of the canvas, so
    // that the png doesn't fly off into the distance.

    if (img) q.image(img, pos.x, pos.y, displayW, displayH)
    // if the image exists, then draw it on the canvas at the current (x,y) position.
  }
</script>
```

<canvas id="q5_test"></canvas>

<script type="module">
  import Q5 from './my-q5-project/q5/q5.js'
  const cnv = document.getElementById (`q5_test`)
  const width = 700
  const height = 700

  const q = new Q5 ("instance")
  console.log (q)

  const logos = [
    './assets/Car1.png',
    './assets/MaxwellCar.png',
    './assets/smudgecar.png',
  ]

  const BounceCar = logos[Math.floor(Math.random() * logos.length)]
  let img;

  const displayW = 105;
  const displayH = 85;

  q.preload = () => {
    img = q.loadImage(BounceCar);
  }

  const pos = {
    x: Math.random() * (width - displayW * 2) + displayW,
    y: Math.random() * (height - displayH * 2) + displayH,

    // x: 0,
    // y: 0,
    // Places the Car.png on a random position on the canvas.

    vx: (Math.random() < 0.5 ? -1 : 1) * 2,
    vy: (Math.random() < 0.5 ? -1 : 1) * 2,
    // Choose a random number [0,1), if the no. is less than 0.5 then
    // yeetus the catus in a negative "-1" direction, if not then yeetus
    // the catus in a positive direction "+1". 
    // The "*2" is there to give the car a speed of "2 pixels per frame"
  }

  let phase = 0;
  const baseSpeed = 6;
  const exponent = 0.5;

  q.setup = () => {
    q.createCanvas (width, height, cnv)
    q.noStroke()
    q.imageMode(q.CENTER)

    // pos.x = Math.random() * (width - displayW) + displayW / 2
    // pos.y = Math.random() * (height - displayH) + displayH / 2
  }

  q.draw = () => {
    q.background (`lightblue`)

    const speedFactor = baseSpeed * Math.pow(phase, exponent)
    // Controls how fast the catus is yeetus. 
    // (In more technical terms the steepness of the exponential curve.)
    phase += 0.01
    // increments the phase over time.

    // Updates & re-assigns the car.png on the canvas.
    pos.x += pos.vx * speedFactor
    pos.y += pos.vy * speedFactor

    // Variables used to contain the width and height of the cat images.
    const imgW = img?.width ?? 10
    const imgH = img?.height ?? 10

    if (pos.x < imgW / 10 || pos.x > width - imgW / 10) pos.vx *= -1
    if (pos.y < imgH / 10 || pos.y > height - imgH / 10) pos.vy *= -1
    // Creates a border around the edges of the canvas, so 
    // that the png doesn't fly off into the distance.
    
    if (img) q.image(img, pos.x, pos.y, displayW, displayH)
    // if the image exists, then draw it on the canvas at the current (x,y) position.
  }
</script>

# Task 4:

**In your own words, please give a brief summary of the following texts:**

## Information & Thinking by Michel Serres:

_Information & Thinking by Michel Serres_ states all things, however small or large emits, recieves, proccesses and stores the information. Serres also states that humans have a tendency to believe that we are at the centre of the universe, that we are the **_only_** things with the "the capability to see, read or write" the world around us. An interesting quote:

> "We are not the only ones endowed with the capability to count or remember; the trees calculate their years, crowned in their wood. Nor are we the only ones endowed with the capability to code; everything ultimately gets spelled out in the language of mathematics."

Serres also states that information is formed by the exchange/interactions of the participants within a network. Serres states that:

> "Where does this information circulate? Basically, in networks...[moreso] information network[s]...We still decorate the planet with a web of hertz an electronic web with a thousand and one names, repeating..."

Serres also explains that information or aptly put it knowledge, is formed around "multiple reference points" as precieved by the person and or thing, and this knowledge is often separate from the "scholarly disciplines"/academia as I understand.

Honestly speaking I love thinking of things in a grand scale, personally speak the vastness of the universe is what makes our existence so special, we are the universe's way of appriecating itself and loving itself. Also on a tangent, would totally reccomend watching this video [The Egg - A Short Story, by Kurzgesagt](https://youtu.be/h6fcK_fRYaI?si=jnYFCILFJWCsdAiK), gave me an epiphany of my place in the universe a couple of years back.

## Xenofeminism: A Politics for Alienation:

_Xenofeminism: A Politics for Alienation by Laboria Cuboniks_ is a feminist manifesto that rejects the idea of gender-roles (particularly feminine) present in society.

This manifesto calls for the collective to push for radical change in removing power imbalances in both capitalism and racism.

This manifesto is also champions people to build the infrastructure in which people can use HRT and other similar medical procedures to reclaim their own bodily autonomy.

Very chaotic article, I admire its energy of "Fuck around & find out."

## What Is It Like to Be a Fungus?:

_What Is It Like to Be a Fungus? By Merlin Sheldrake_ challenges the "singular"-ness idea that humans are isolated, self-contained individuals.

Sheldrake states that fungus are everywhere in the world, and have contributed a lot to humanity and nature as a whole.

- Penicillin => Gives health to humans.
- Mycoremediation => Cleans up environmental pollutants/oil spills.
- Mycofiltration => "A water treatment process that uses fungal mycelium, the...fungi...filter and remove contaminants from water."

It also blurs the identity of where the individual's identity ends and the human microbiome starts. For example, Candida albicans exist in our mircohiomes, they truly are fun-guys.[1^]

[1^]: Sorry not sorry for this pun.

## Embed:
