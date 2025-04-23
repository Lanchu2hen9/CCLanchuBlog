---
title: Javascript Concept Review
published_at: 2025-01-08
snippet: My stupid ass forgot how the basics of js worked, and now here I am re-learning them.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [General Math/Maths scripting Language](https://cclanchublo6.deno.dev/JavascriptConceptReview#general-mathmaths-scripting-language)
2. [General Notes](https://cclanchublo6.deno.dev/JavascriptConceptReview#general-notes)
3. [Colours](https://cclanchublo6.deno.dev/JavascriptConceptReview#colours)
4. [Iteration](https://cclanchublo6.deno.dev/JavascriptConceptReview#iteration)
5. [Object Orientated Coding](https://cclanchublo6.deno.dev/JavascriptConceptReview#object-orientated-coding)
   - [Encapsulation](https://cclanchublo6.deno.dev/JavascriptConceptReview#encapsulation)
   - [Classes](https://cclanchublo6.deno.dev/JavascriptConceptReview#classes)
   - [Syntax](https://cclanchublo6.deno.dev/JavascriptConceptReview#syntax)
   - [Constructor(){}](https://cclanchublo6.deno.dev/JavascriptConceptReview#constructor)
6. [Coding Practise Emeb](https://cclanchublo6.deno.dev/JavascriptConceptReview#coding-practise-emeb)
7. [Experiments](https://cclanchublo6.deno.dev/JavascriptConceptReview#experiments)
8. [Signals & Envelopes](https://cclanchublo6.deno.dev/JavascriptConceptReview#signals--envelopes)
   - [Ramps](https://cclanchublo6.deno.dev/JavascriptConceptReview#ramps)
     - [Triangle Wave](https://cclanchublo6.deno.dev/JavascriptConceptReview#triangle-wave)
9. [Modules](https://cclanchublo6.deno.dev/JavascriptConceptReview#modules)
   - [Example](https://cclanchublo6.deno.dev/JavascriptConceptReview#example)
     - [Export statement](https://cclanchublo6.deno.dev/JavascriptConceptReview#export-statement)
     - [Import Statement](https://cclanchublo6.deno.dev/JavascriptConceptReview#import-statement)
     - [Front-end & Back-end coding](https://cclanchublo6.deno.dev/JavascriptConceptReview#front-end--back-end-coding)
   - [API Libraries & ES Module-compatibility](https://cclanchublo6.deno.dev/JavascriptConceptReview#api-libraries--es-module-compatibility)
     - [Example 1](https://cclanchublo6.deno.dev/JavascriptConceptReview#example-1)
     - [Example 2](https://cclanchublo6.deno.dev/JavascriptConceptReview#example-2)
   - [Declaring API Libraries Globally](https://cclanchublo6.deno.dev/JavascriptConceptReview#declaring-api-libraries-globally)
   - [NPMs vs Modules](https://cclanchublo6.deno.dev/JavascriptConceptReview#npms-vs-modules)

# General Math/Maths scripting Language:

- 7 \*\* 2 is "7 to the power of 2."
- When doing the following:
  > function setup () {  
  >  const NotEqual = 7 _ 7 == 5 _ 5
  > console.log(NotEqual);
  > }
  - The console should print out false, I assume this is because the computer does the little mathy mathy, and gives out a false statement.
  - Same goes for print ();
- Remember that "${...}", allows you to do the following:
  - Insert strings
  - Do maths
  - Call functions
  - Call information stored within previously established variables.
  - Straight up use an array.
  - ~Manspreads~ Splays content over multiple lines of code.
- "FrameCount();" Pretty self-explaintory, it counts deez framez.
- `return`, returns value, stops executing code after the `return`.
- Integers:
  - Whole numbers. -1, 0, 1, 2, 3
- Floats:
  - **ANY NUMBER** with a decimal point attached to it.
  - Even -0.0

**Nullish coalescing operator** or `??` means if the thing on the left if null or undefined use the thing on the right instead.
So:

```js
let username = userInput ?? "Guest";
console.log(username);
```

If the user doesn't input anything on the left, then print the string `"Guest"` on the right. **Note do not mistake `??` for `||`.**

**`||` (Or)**, functionally means if the thing on the left is falsy then use the thing on the right. What is defined as _"falsy"_, falsy is as defined by ChatGPT as anything that is:

- false
- 0
- ""
- null
- undefined
- NaN (Not a number)
  - When the maths isn't mathing. Examples include:
    - `0 / 0` (Dividing zero by zero = undefined.)
    - `Math.sqrt(-1)` (Square root of negative = imaginary number.)
    - `Infinity - Infinity` (∞ minus ∞ is undefined.)
    - `"cat" * 3` (Can’t multiply a string.)
    - `"5" - "dog"` ( "5" is fine, but "dog" breaks the math.)
    - `true * undefined` (Booleans can be numbers, but undefined is not.)
    - `parseInt("hello")` (Can’t turn "hello" into a number.)
    - `parseFloat("abc123")` (Can’t turn "abc123" into a number.)
    - `Number("notANumber")`
    - `undefined + 1` (undefined is not a number.)
    - `let x; x + 5` (x is undefined, so math breaks.)
    - `NaN + 1` (Still NaN, once it’s NaN, it spreads.)

# General Notes:

- Don't use print ();, use console.log(``);
  - Because useing print (); outside of the setup () {} function actually prints out things.

# Colours:

- **Paradigms:** fancy ass for different colour modes. There are two modes:
  - Your RGB mode. (Default)
  - HSB mode.
- **Color objects:** You can store "color(...);" within variables and extract the red, green and blue channels of said stored variable.

# Iteration:

- The while loop code is below, be careful, running conditional logic can lock up your browser.
- See ["for" loops](https://cclanchublo6.deno.dev/second-blog-post)

# Object-Orientated coding:

**Before you watch this video, Tom said that this way of refactoring code is very old. I don't where they're heading with this so. 🤷🏻‍♀️ Guess I'd die.**

See video tutorial: ["6.2: Classes in JavaScript with ES6 - p5.js Tutorial"](https://youtu.be/T-HGdc8L-7w?si=8uE07jv2jK-lgjCE) by Coding train. My notes are as listed below:

- **Javascript literal objects:** A box used to store information.
- Modulation in creative coding/Javascript is like where you have the properties of an object, for example:
  - Sound
  - Colour
  - Vector
  - User interaction
- As sliders on a synthesizer, you can slide properties up and down, and even put some properties on zero.  
  ChatGPT[^1] states:

  > "**A Variable is Like a Knob on a Synthesizer.**
  > If you have a synthesizer, a variable is like the knob that controls volume.
  > It adjusts one property, but doesn’t "exist" as an object in space—it’s just a number somewhere."

- Modulation also adds usability to your code.

## Encapsulation:

- Encapulating an object's sliders, all its properties.
- ** ITS EXISTENCE, IT BEING, ITS FUNDEMENTAL ESSCENCE.**
  `Class Bubble {...Everything it it means to be a Bubble...}`
- The idea of "Encapsulation" is to encapsulate data and function into an object.

Think of it this way:
Bubble is a person, and in `Class Bubble {...}` in your separate script, thereby called "Classes.js", you are defining the person's personality, identity, and behaviour.

And later on in your script.js file you are essentially telling the script.js[^2] to drag the "Bubble" person into the room (your script.js file), and giving "Bubble" intructions to do smth.

(Side note: A less long-winded explaination of this is that `class Bubble{}` is the factory, and `Bubble` is the cookie cutter.)

- `Class Bubble {...}` => The template.
- `Function Setup () { Bubble = new bubble();}`, `Function Draw () { Bubble.move();}`, the actual fucking person.
  - Can have multiple instancåes of the same Instance/persons.

## Classes:

- Think of it as the word "template" or "blueprint".
- "Bubble" in `Class Bubble {...}` is also referred to as the cookie cutter sometimes.
- "Bubble" in `Function Setup () { Bubble = new bubble();}` are called instance.

## Syntax:

- `new bubble();`, "new" creates a object instance.[See mozilla database "new" reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
  - `new` is a fancy function that "constructs" a new object.
- `this.x = 100,` the `this` keyword is like assigning a property within the `constructor(){}`, it attached `x = 100` to the context of the template of `class Bubble {constructor(){}}`.
  - You're basically assigning a personality trait to the "Bubble" person.
  - See [mozilla database "this." reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### Constructor(){}

- Just like any old function definition.
- `constructor(){}` is kind of like the object's `setup(){}` where you initialise/"set-up" things, and later `draw(){}` animates things.
- If we're going by the same "person" analogy as before, `constructor(){}` is like the first first thoughts/words of the "Bubble" person, when they first enter into the room.

## Coding Practise Emeb:

<iframe id="Bubble" src="https://editor.p5js.org/Lanchu2hen9/full/TCVv-n70j"></iframe>

<script type="module">

    const iframe  = document.getElementById (`Bubble`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

The web editor/code version is [here](https://editor.p5js.org/Lanchu2hen9/sketches/TCVv-n70j), please out of good faith, do not edit my code. Duplicate it. You can also find the original lesson file in the description of Daniel's ["6.2: Classes in JavaScript with ES6 - p5.js Tutorial"](https://youtu.be/T-HGdc8L-7w?si=8uE07jv2jK-lgjCE).

# Recursion:

- Function that calls itself.

# Experiments:

[Print & Console.log](https://editor.p5js.org/Lanchu2hen9/sketches/IFmbUaFe0)  
[FrameCount](https://editor.p5js.org/Lanchu2hen9/sketches/SuYTKxWHq)  
[Colour](https://editor.p5js.org/Lanchu2hen9/sketches/BDZ7gXE-z)  
[While](https://editor.p5js.org/Lanchu2hen9/sketches/61098iznH)

# Signals & Envelopes:

See Tom's blog on [Signals & Envelopes](https://blog.science.family/250406_signals_&_envelopes)

For the below example refer to the equation $y = sin(x)$

_Signals;_ A signal in the context of maths/the equation $y = sin(x)$, is the whole graph itself.
_Evelopes;_ An envelope in the context of the maths and "$y = sin(x)$", is the rate of change/derivative of a point on the graph.

So if we're using a non-maths analogy[^3];

> The signal is the rapid vibration — the actual **sound** that makes the tone.
> The envelope is the shape of how that sound starts, sustains, and fades away.

## Ramps:

### Triangle Wave:

`const sig = 1 - Math.abs (p * 2 - 1)` Is essentially related to: $y = |(x - 2) - 1|$ where, the equation of $|(x - 2) - 1|$ is absolute so you have the "negative" version of it. See below the blue line is just the equation: $y = (x - 2) - 1$, where the green line is the equation $y = -((x - 2) - 1)$

![Triangle Graph](Meth.png)

# Modules:

_tl;dr: Modules are a way of slicing your code up and importing it and exporting from different libraries and people._

Think of modules as individual books within a library. Each time you import/export a book from a library you "borrowing" a book from the library. Think of the library, like a library like p5.js, or q5.js or RiTa.js. But instead of p5.js you have like libraries like: "Lodash, Axios"[^4].

ChatGPT states:

> Imagine you’re in a library, and the library has many different books. Each book contains information about different topics (e.g., one book on history, one on coding, one on cooking). The books are kept in separate sections of the library (just like files in your project).

> **The Books (Modules):** Each book is like a module. You don’t need to read all the books at once, but you can check out specific ones when you need the information.

> **The Library (Project):** The library is your project, and inside the library, there are many books (modules) to help you with different tasks.

> **Checking Out a Book (Importing a Module):** When you need information from a specific book, you check it out (import it) into your study room (your code). You only borrow the chapters (pieces of functionality) you need.

> **Sharing Books (Exporting):** If you write your own book (create a module), you can make it available to other people (export it), so they can use it in their study rooms (other parts of the code).

## Example:

Honestly there's like different older versions of modular coding, and this is a whole ass rabbit hole[^5] you can dive down into. If you see some modular coding with `const greet = require('./book.js');` syntax, that's probably the older version of modular coding. The below examples are called ES modules. (Short for ECMAScript Modules.)

### Export statement:

```js
// book.mjs
export const greet = () => {
  return "Hello from ES Modules!";
};
```

### Import Statement:

```js
// main.mjs
import { greet } from "./book.mjs";
console.log(greet()); // Outputs: Hello from ES Modules!
```

## Front-end & Back-end coding:

From my understanding of modular coding it is mostly used for back-end coding. When I mean modular coding, I mean like import/export statements and like Javascript coding. For front-end coding its like your HTML, CSS. Like making stuff look pretty. Its still good to have some back-end coding knowledge[^6] in your back-pocked.

## API Libraries & ES Module-compatibility:

In order to use an API library like p5.js or c6.js or RiTa.js it has to be ES Module-compatibile. Which is a fancy term that says if a library is importable via the "modern" way of modular coding into your script.

Importing the API library without the import statement is like slapping a random ass script tag into the HTML File.

### Example 1:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
```

This bit is the sketch.js file in the p5.js web editor.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

### Example 2:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
  </head>
  <body>
    <main>
    </main>

    <script type="module" src="sketch.js"></script>
    <!-- Your chunk of code here in the module, see NPMs vs Modules. -->
  </body>
</html>
```

This is the "sketch.js file

```js
// Import p5.js library and p5.sound.js as ES Modules
import p5 from "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js";
import "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js";

function setup() {
  createCanvas(400, 400, P2D, cnv);
}

function draw() {
  background(220);
}
```

Example 1 & 2 are functionally the same thing. But by technicality they use different methods.

## Declaring API Libraries Globally:

In example 1 you have declared `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>` `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js"></script>` libraries globally. And then used it in the p5 sketch.js scripting. This makes your scripting/coding glitchy, and is generally not the best way of coding.

## NPMs vs Modules:

- A NPM is like a library, for example `<script src="https://cdn.jsdelivr.net/npm/rita"></script>`
- Whereas a module is like a chunk of code, for example:

```Js
<script type ="module">
  import * as THREE from '/scripts/three.js/build/three.module.js';
  console.log (THREE)

  const container = document.getElementById (`three.js_container`)
  const width = container.parentNode.scrollWidth
  const height = width * 9 /16

  import { GUI } from '/scripts/three.js/examples/jsm/libs/lil-gui.module.min.js';

    import { OrbitControls } from '/scripts/three.js/examples/jsm/controls/OrbitControls.js';
    import { TeapotGeometry } from '/scripts/three.js/examples/jsm/geometries/TeapotGeometry.js';

    let camera, scene, renderer;
    let cameraControls;
    let effectController;
    const teapotSize = 400;
    let ambientLight, light;

    let tess = - 1;	// force initialization
    let bBottom;
    let bLid;
    let bBody;
    let bFitLid;
    let bNonBlinn;
    let shading;

    let teapot, textureCube;
    const materials = {};

    init();
    render();

    function init() {



      const canvasWidth = width;
      const canvasHeight = height;

      // CAMERA
      camera = new THREE.PerspectiveCamera( 45, width / height, 1, 80000 );
      camera.position.set( - 600, 550, 1300 );

      // LIGHTS
      ambientLight = new THREE.AmbientLight( 0x7c7c7c, 2.0 );

      light = new THREE.DirectionalLight( 0xFFFFFF, 2.0 );
      light.position.set( 0.32, 0.39, 0.7 );

      // RENDERER
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( canvasWidth, canvasHeight );
      container.appendChild( renderer.domElement );

      // EVENTS
      window.addEventListener( 'resize', onWindowResize );

      // CONTROLS
      cameraControls = new OrbitControls( camera, renderer.domElement );
      cameraControls.addEventListener( 'change', render );

      // TEXTURE MAP
      const textureMap = new THREE.TextureLoader().load( '/scripts/three.js/examples/textures/uv_grid_opengl.jpg' );
      textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;
      textureMap.anisotropy = 16;
      textureMap.colorSpace = THREE.SRGBColorSpace;

      // REFLECTION MAP
      const path = '/scripts/three.js/examples/textures/cube/pisa/';
      const urls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ];

      textureCube = new THREE.CubeTextureLoader().setPath( path ).load( urls );

      materials[ 'wireframe' ] = new THREE.MeshBasicMaterial( { wireframe: true } );
      materials[ 'flat' ] = new THREE.MeshPhongMaterial( { specular: 0x000000, flatShading: true, side: THREE.DoubleSide } );
      materials[ 'smooth' ] = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide } );
      materials[ 'glossy' ] = new THREE.MeshPhongMaterial( { color: 0xc0c0c0, specular: 0x404040, shininess: 300, side: THREE.DoubleSide } );
      materials[ 'textured' ] = new THREE.MeshPhongMaterial( { map: textureMap, side: THREE.DoubleSide } );
      materials[ 'reflective' ] = new THREE.MeshPhongMaterial( { envMap: textureCube, side: THREE.DoubleSide } );

      // scene itself
      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xAAAAAA );

      scene.add( ambientLight );
      scene.add( light );

      // GUI
      setupGui();

    }

    // EVENT HANDLERS

    function onWindowResize() {

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      renderer.setSize( canvasWidth, canvasHeight );

      camera.aspect = canvasWidth / canvasHeight;
      camera.updateProjectionMatrix();

      render();

    }

    function setupGui() {

      effectController = {
        newTess: 15,
        bottom: true,
        lid: true,
        body: true,
        fitLid: false,
        nonblinn: false,
        newShading: 'glossy'
      };

      const gui = new GUI();
      gui.add( effectController, 'newTess', [ 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 40, 50 ] ).name( 'Tessellation Level' ).onChange( render );
      gui.add( effectController, 'lid' ).name( 'display lid' ).onChange( render );
      gui.add( effectController, 'body' ).name( 'display body' ).onChange( render );
      gui.add( effectController, 'bottom' ).name( 'display bottom' ).onChange( render );
      gui.add( effectController, 'fitLid' ).name( 'snug lid' ).onChange( render );
      gui.add( effectController, 'nonblinn' ).name( 'original scale' ).onChange( render );
      gui.add( effectController, 'newShading', [ 'wireframe', 'flat', 'smooth', 'glossy', 'textured', 'reflective' ] ).name( 'Shading' ).onChange( render );

    }


    //

    function render() {

      if ( effectController.newTess !== tess ||
        effectController.bottom !== bBottom ||
        effectController.lid !== bLid ||
        effectController.body !== bBody ||
        effectController.fitLid !== bFitLid ||
        effectController.nonblinn !== bNonBlinn ||
        effectController.newShading !== shading ) {

        tess = effectController.newTess;
        bBottom = effectController.bottom;
        bLid = effectController.lid;
        bBody = effectController.body;
        bFitLid = effectController.fitLid;
        bNonBlinn = effectController.nonblinn;
        shading = effectController.newShading;

        createNewTeapot();

      }

      // skybox is rendered separately, so that it is always behind the teapot.
      if ( shading === 'reflective' ) {

        scene.background = textureCube;

      } else {

        scene.background = null;

      }

      renderer.render( scene, camera );

    }

    // Whenever the teapot changes, the scene is rebuilt from scratch (not much to it).
    function createNewTeapot() {

      if ( teapot !== undefined ) {

        teapot.geometry.dispose();
        scene.remove( teapot );

      }

      const geometry = new TeapotGeometry( teapotSize,
        tess,
        effectController.bottom,
        effectController.lid,
        effectController.body,
        effectController.fitLid,
        ! effectController.nonblinn );
      teapot = new THREE.Mesh( geometry, materials[ shading ] );
      scene.add( teapot );
    }
</script>
```

[^1]: Take everything ChatGPT says with a grain of salt. Sometimes chatGPT bullshits. ChatGPT is the definition of: "Fake it til you make it." Like me, 🥲 but I haven't made it yet.
[^2]: This is both the room and the instructions at the same time.
[^3]: Coughs, this is not my analogy. Cough ChatGPT, cough.
[^4]: On a side note, I have no idea what I am yapping about, this might be complete bullshit. Consult a professional, I am not a professional.
[^5]: Would not reccommend going down this rabbit hole unless you're really passionate about coding, and or have a good grasp of what the coding technical terms mean.
[^6]: Big Knowledge, increase brain. Brain big, brain stronk.
