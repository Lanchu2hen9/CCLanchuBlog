---
title: Week 2 (Tues) Homework
published_at: 2022-11-04
snippet: This is homework 2a.
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

# A1 Overview:

So for broad plan, it also might be a very ambitious plan, but it is what it is. Is to to create a wave-like kind of screen-saver p5 sketch where lilypads and or ducks float around the waves. (Yes I might need to scope this down, I know.) Whenever the user interactions/clicks on the waves it makes the waves change colour, from a set of pre-define hex codes within an array.

To see what techniques and concepts I would use see: ["Concepts & Techniques"](https://cclanchublo6.deno.dev/third-blog-post#concepts--techniques), I would additionally like to add that Rania said that I might need to use `sin();` and `cos();` to ensure smooth animations. (See ["Classmate Consulations"](https://cclanchublo6.deno.dev/third-blog-post#classmate-consulations)) [^1]

# Cute Visuals:

For the cute visuals click this [link,](https://pin.it/4l2Y3nUXe) to my Pinterest board. The Pinterest board is divided into 2 sections, "Dark Blue" and "Light Blue", I am going to be colour-picking colours from the image held within these two sections and storing them in two arrays. The first array "Dark Blue" is going to be a selection of colours that the waves cycle through without the user's input. The second array "Light Blue" is going to be a selection of colours that changes based on user input.

![Cute Illustrated duck floating on back, with frog.](DUck-1.jpg)
|:----------------------:|
|Credit to: Ksenia on Pinterest, [link.](https://pin.it/2RsGsiq26) |

![Cute duck on pond looking at frog.](duck%202.jpg)
|:----------------------:|
|Credit to: PointerClicker on Pinterest, [link.](https://pin.it/1XA6EpW0o) |

[^1]: Side note I might need to think more about what I am going to do in terms of sound. I am not really an auditory person.

# Cute Sounds:

Duck playground xylophone. You click on a duck, and the duck plays a note that ranges from C - D - E - G - A. The duck is floating on a pond/wave that changes colour when clicked.
![ChatGPT Response to Duck xylophone.](ChatGPT_Duck1.png)
![ChatGPT Response to Duck xylophone 2.](ChatGPT_Duck2.png)
![ChatGPT Response to Duck xylophone 3.](ChatGPT_Duck3.png)

# Cute Interactions:

See above.

# Code Implementation/Experiement:

- Found the sketch files, section of the web editor, am very excited.  
  ![Sketchfiles of web editor.](Sketchfiles.png)

## Png & Button code:

As you can see the button and the png of the duck has been inserted into the web editor.
![Sketchfiles of web editor.](PngBtn.png)

# Final Sketch:

<iframe id="DuckPondTest" src="https://editor.p5js.org/Lanchu2hen9/full/BfNvD-mzw"></iframe>

<script type="module">

    const iframe  = document.getElementById (`DuckPondTest`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42
</script>

You can see the web editor version [here.](https://editor.p5js.org/Lanchu2hen9/sketches/BfNvD-mzw) Please do not edit my code willy nilly. Add comments and or run it past me first.

So for the duck xylophone, I'm going to be doing something like this:
![ChatGPT creating a sample duck xylophone javascript code for me.](DuckXylophone.png)
Ignore the fact that ChatGPT used two arrays to store both the .mp3 sound of the notes, and the sound files of the ducks. (I'm going to be creating .wav files pitched to the notes of "C, D, E, G, A" and storing them in one singular array.)

For the waves see this [tutorial](https://youtu.be/nqvJDkKsYYI?si=o4m5xbUzHIWzzB91).

# Ideas:

- You could use:

`const colours = [ 'black', 'purple', 'hotpink', 'skyblue' ]`

`function setup() {`  
`createCanvas(400, 400);`  
`noStroke ()`  
`frameRate (5)`  
`}`

`function draw() {`  
`background('turquoise');`  
`square (25, random (100, 300), 100)`  
`}`

# Kindred Spirits:

1. My Phone
2. My room
3. Drawing tablet.
