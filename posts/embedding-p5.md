---
title: Embedding p5 sketches
published_at: 2025-04-03
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

<script src="./scripts/p5.js"></script>
<!--This is essientally the "<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />" chunk-->

<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")


// Video Tutorial from: https://youtu.be/sN7JotC3vdM?si=KcZAmjH5M8YtabG3
// Might fuck with these values at the later date. 30 March Lanchu.

let sizes = [];
let cols;
let rows;
let size = 15; //Determines no. of rows and columns.
let xoff;
let yoff;
let zoff = 0;
let inc = 10;

let BackgroundMusic;

function preload() {
}


function setup() {
    createCanvas (innerWidth, innerHeight, P2D, cnv)
  rectMode(CENTER);
  cols = width/size;
  rows = height/size;
}

function draw() {
  background(220);
  
    xoff = 0;
  for (let i=0; i<cols; i++) {
    sizes[i] = [];
    yoff = 0;
    for (let j=0; j<rows; j++){
      sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, size *1.7);
      yoff += inc;
      
      let r = noise(zoff) * 255;
      let g = noise(zoff + 10) * 255;
      let b = noise(zoff + 20) * 255;
      
      fill(r, g, b);
      noStroke();
    }
    xoff += inc;
    zoff += 0.0015;
    //The changing of the pattern through time.
  }
  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      rect(size/2 + i*size, size/2 + j*size, sizes[i][j], sizes[i][j]);
    }
  }
}
</script>
