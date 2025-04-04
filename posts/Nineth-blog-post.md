---
title: Week 5 (Thurs) Homework
published_at: 2025-04-03
snippet: This is homework 4b.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Eighth-blog-post#task-1)
   - [High Compressibility](https://cclanchublo6.deno.dev/Eighth-blog-post#high-compressibility)
   - [Low Compressibility](https://cclanchublo6.deno.dev/Eighth-blog-post#low-compressibility)
   - [High effective complexity](https://cclanchublo6.deno.dev/Eighth-blog-post#high-effective-complexity)
2. [Task 2](https://cclanchublo6.deno.dev/Eighth-blog-post#task-2)
3. [Task 3](https://cclanchublo6.deno.dev/Eighth-blog-post#task-3)
   - [Randomness](https://cclanchublo6.deno.dev/Eighth-blog-post#randomness)
   - [Structure](https://cclanchublo6.deno.dev/Eighth-blog-post#structure)

# Task 1:

```js
<div id="drop_zone"></div>

<script type="module">

   const data_div = document.getElementById (`drop_zone`)
   // Gets the div tag from the HTML DOM with the id tag "drop_zone".

   data_div.width = data_div.parentNode.scrollWidth
   // Makes the width of the canvas/"the place in which you drop your image." the same width as its parent node.

   data_div.style.height = `${ data_div.width * 9 / 16 }px`
   // Height of "drop_zone" be the width of the box times 9 divide by 16px.

   data_div.style.backgroundColor = `deeppink`
   data_div.style.color = `white`
   data_div.style.overflow = `hidden`
   data_div.style.fontFamily = `monospace`
   data_div.style.fontWeight = `bold`
   data_div.style.fontSize = `xx-small`
   data_div.style.wordBreak = `break-all`
   // Bunch of styling things of how you want the background colour of the "drop_zone" and color, font, overflow, size and wordbreak of the text to be.

   data_div.ondragover = e => e.preventDefault ()
   //Prevents whatever the default state of the "drop_zone" div is. I presume its opening a new window with the JPEG image in it.

   data_div.ondrop = e => {
      const file_array = [ ...e.dataTransfer.files ]
      // Transfer data/string of the image into an array.

      const reader = new FileReader ()
      // 1. Creates FileReader Object/Reads the image file.

      reader.onload = d => start_draw (d.target.result)
      file_array.forEach (f => reader.readAsDataURL (f))
      // 2. Reads data of the image in the file_array and encodes
      // it to base64, something that the computer can use.

      e.preventDefault ()
   }

   let data_text

   const start_draw = r => {
      data_text = r.length < 100000 ? r : r.slice (0, 100000)
      // Prevents computer from lagging, and also limits the
      // string length of the image to 100,000.
      // Basically what the above code does: "if condition ? is true then do a : if_false then do b"
      draw_frame ()
   }

   const draw_frame = () => {
      data_div.innerText = data_text
      data_text = data_text.slice (135, data_text.length)
      requestAnimationFrame (draw_frame)
   }

</script>
```

## Event: preventDefault() method

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  // const test = "This is without preventDefault()!\n"
  // document.getElementById("output-box").innerText += test;

  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

When the function `checkboxClick(event){}` is executed `event.preventDefault();` still executes the code but doesn't tick the tickbox.

Also can be expressed as `const checkboxClick = event => {}`, arrows function are like mouldable "dough"/"personality traits" they take on whatever instance variable is used on a previous line. For example: `const obj = new Example("Charlie"); obj.arrowFunction();` outputs Charlie. See [Encapsulation](https://cclanchublo6.deno.dev/JavascriptConceptReview#encapsulation)

## Glitchy Self-Portrait:

[Self-Portrait Product](https://lanchu-thespiral-a-50-004gtr45tswx.deno.dev/ExperiementFiles/index3.html)

This my code annotated:

```js
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

const cnv = document.getElementById(`cnv_element`);
cnv.width = cnv.parentNode.scrollWidth;
cnv.height = (cnv.width * 9) / 16;
cnv.style.backgroundColor = `hotpink`;

const ctx = cnv.getContext(`2d`);

let ImgData;
// Declaring a let variable to store the image's unspecified/undefined blob of data.

const draw = (i) => ctx.drawImage(i, 0, 0, cnv.width, cnv.height);
// Draws an existing image onto the canvas.

const img = new Image();
// Creates a new imag object. The class for this image object
// is stored in the Javascript DOM API.

img.onload = () => {
  console.log(`Image loaded`); // Logs when the image is loaded.

  cnv.height = (cnv.width * img.height) / img.width;
  // Adjust the height of the canvas to maintain the aspect ratio of the image.

  draw(img);
  // Draws image onto the canvas.

  ImgData = cnv.toDataURL(`image/jpeg`);
  // Stores and transform the data into a based64 encoded string specifically in
  // the jpeg format.

  add_glitch();
  // Calls the function to add glitch effects to the image.
};
img.src = `./img/LannyGlasses.JPG`;
// Get the (hopefully) correct source of the image. (The path)

//img.src = `./img/LannyGlasses.JPG`;

const RandInt = (max) => Math.floor(Math.random() * max);
//tl;dr, RandInt is the randomiser.

// Returns random integer => Rounds down to nearest whole no.((≈)* max)
// max is a random ass number that makes sure that the value  outputted by the
// Maths.random() is large enough to be rounded down into a whole number.

// Everytime you call the RandInt arrow function you are essientally "redefining"
// the max value.

// If the max is removed:
// Maths.floor(Maths.random()) ==> Maths.random() ==> Outputs a value that is [0, 1),
// for example 0.4 ==> Maths.floor(), then rounds 0.4 down ==> result will always be 0.

const Glitchify = (ImgData, chunk_max, repeats) => {
  const ChunkSize = RandInt(chunk_max / 4) * 4;
  // Declares the const variable ChunkSize, and determines the size of the removed chunks
  // based on the RandInt.
  // The number generated by this line of code will always be divisble by 4. This is
  // because of the "*4" which always makes the number a multiple of 4.
  // Also determines how much of the image data you want to glitch.

  const i = RandInt(ImgData.length - 24 - ChunkSize, ImgData.length) + 24;
  // Go the 24th position of the base64 encoded string, select a chunk of data,
  // which is randomised by the RandInt function, to glitchify. Then add 24 to the
  // glitched chunk of data.

  // The 24 is there because the first 24 characters of the base64 encoded string is
  // metadata of the image. And if you remove it, the browser will commit suicide and
  // not display the image.

  // The above function also determines the "index"/position in which you want to slice
  // things in the future.

  const front = ImgData.slice(0, i);
  // Declares variable front = and then cuts the data from the start of the base64 blob
  // of data to the "i" value/index value as defined on the previous line.

  const back = ImgData.slice(i + ChunkSize, ImgData.length);
  // Does the same thing as the previous line of code, but you're slicing the ImgData
  // blob from the ass end of it.

  const result = front + back;
  // Result = the head and the ass added together.

  return repeats == 0 ? result : Glitchify(result, chunk_max, repeats - 1);
  // If the value of repeats is exactly equals to 0, then stop the glitchify function,
  // if not then continue the Glitchify value.
  // See line 116.
};
// Glitchify functions functionally removes chunks of the base64 encoded data,
// this leads visual dstortion of the image.

const glitch_arr = [];
// Empty array to store the glitched images.

const add_glitch = () => {
  if (!ImgData) {
    console.error("ImgData is not set. Cannot create glitch.");
    return;
  }
  // Logs the ImgData if the image is not available to be set.

  const img = new Image();
  // Creates a new Image Object.

  img.onload = () => {
    glitch_arr.push(img);
    // Pushes the glitched images into the glitch_arr image.

    if (glitch_arr.length < 12) add_glitch();
    // if the number of the glitched images in the array is
    // less than 12. Then add glitch if not,
    else draw_frame();
    // Then start the animation.
  };

  //img.src = Glitchify(ImgData, 96, 26);
  img.src = Glitchify(ImgData, 96, 7);

  // img.src =
  // Glitchify(ImgData, the maximum ChunkSize of the image
  // that you want to be glitched, The inital amount of repeats);
};
// Stores up to 12 different glitched versions of the images generated by
// the glitchify function. The images are stored in the array called glitch_arr.

let is_glitching = false;
// Boolean variable to see if the image is glitching or not.

let glitch_i = 0;
// Index for the glitch_arr.

const draw_frame = (ms) => {
  if (is_glitching) draw(glitch_arr[glitch_i]);
  // If the image is glitching, then draw it glitching.
  else draw(img);
  // If not glitching, draw the original image.

  //const prob = is_glitching ? 0.1 : 0.05;
  const prob = is_glitching ? 0.05 : 0.02;
  // Probability of the image glitching.

  if (Math.random() < prob) {
    //If the a value of [0, 1) is less than 0.05 or 0.02,
    glitch_i = RandInt(glitch_arr.length);
    // then choose a random glitched image from the 'glitch_arr',

    is_glitching = !is_glitching;
    // and then it turns/toggles the glitching effect on/off.
  }
  requestAnimationFrame(draw_frame);
};
// Does the flickering between the distored version of the image
// and the original image.
// The flickering is done by using a random number generator to determine

draw_frame();

onresize = () => {
  cnv.width = innerWidth;
  cnv.height = innerHeight;
  draw(img);
};
```

# Task 2:

**How does rendering your likeness in this way affect its aesthetic register? In your discussion.**
The asethetic register of the above sits in Ngai's aesthetic registers of Zany and Interesting. Zany by Ngai's definition is an aesthetic bound up in the performance of instability. The latter aesthetic "Interesting" is an artwork that is engaging due to its incompleteness, irregularity, or ambiguity. The fact that the above code is deliberately glitching an image of myself, it creates a sense of irregularity for the viewer.

Additionally, glitch art in Menkman's _A Phenomenology Of Glitch Art_ states through her examples of Jodis' artwork _untitled game (1996-2001)_ & _<$blogtitle$>_, that glitch art in essence is a rebellion against/exposing the norms/conventions of the medium in which they are created in. For example, _untitled game (1996-2001)_ is a "wholly non-Newtonian, visually nonsensical" version of FPS game Quake 1 that the artist Jodi has made 11 modifications to. _untitled game (1996-2001)_ aims to exposes and challenges the conventions of what makes a FPS game a FPS game.

Similarily, in the above example the very fact that the code is taken out in `ChunkSize` and randomly glitched by `const RandInt = (max) => Math.floor(Math.random() * max);`, it exposes the medium and the fallibility of the web browser through the removal and glitching the string data of the image. It essientally removes me from the context of being a subject an actual person and transforms into a "blob" of data in flux.

## Effective Complexity:

- Structure: My face my actual being, the image of my likeness. Faces are something that humans are trained to recongised/see the pattern in.
- The randomness is added with the glitching of the image of my likeness.
