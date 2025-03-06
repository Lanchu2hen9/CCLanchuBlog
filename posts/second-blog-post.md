---
title: Week 1 (Tues) Homework
published_at: 2025-01-05
snippet: This the homework to the first class of Semester 1 2025.
disable_html_sanitization: true
allow_math: true
---

# Task 1

**Aim:** To create a grid.  
**Goal** To use loops efficiently to create a grid.  
Note I will do this the _"acceptable way"_ before ChatGPT'n'g it. I don't actually copy mindless from ChatGPT. I learn.

## "For" Function:

### Initialisation:

Initialisation within the context of:

> let str = "";  
>  for (let i = 0; i < 9; i++) {  
>  str = str + i;  
>  }  
>  console.log(str);

"let i = 0;", Initialisation are there to declare the variables used within the "for" function. This is the same as declare the function globally at the start prior to any fancy function stuff. But, declaring the variable outside the function makes things a lot more messy and or janky.

**KEEP IN MIND LANCHU THE FOLLOWING** declaring variables within function, only make that variable applicable/usable in that specific function. **🫵🏻 Remember this.**

You can also cannot use const variables in initialisation, because const variables are **constant.**

### Condition:

Pretty much what it says on it tin, if i is <9

#### Note:

"+" in Javascript slaps the two variables together. It does not add them.

### Afterthought/Counter

Used to update and or increment the Afterthought/Counter variable, in the case of the example above its "i".

## Break'n'g it down

function setup() {  
createCanvas(innerWidth, 200);  
colorMode (HSB)[^1]  
rectMode (CENTER)[^2]  
noStroke ()[^3]  
}

function draw()  
{  
const t = frameCount / 25  
background(`turquoise`);  
fill (`deeppink`)  
const total\*squares = 10  
const size = width / total_squares

for (let i = 0; i < total_squares; i++)  
{  
square (width * (i + 0.5) / total*squares, height / 2, t \* (i + 1) % size)  
}  
}

"innerWidth" essentially is viewport width of the small window of the preview. "Width" holds whatever values the browser specifies the "innerWidth" of the Preview to be.

![Formula diagram.](/IMG_8737.jpg)  
Correction the H and W are not the height and width of the squares generated. It decides where the squares are located on the x-axis and the y-axis.

## Attempt 1:

Below is Attempt number one without the help of ChatGPT. Its not _"efficient"_

<iframe id="falling_falling" src="https://editor.p5js.org/Lanchu2hen9/full/r2yY9hMko"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Attempt 2:

ChatGPT assisted. ChatGPT states:

![A response from ChatGPT on how to do task 1.](/ChatGPT.png)

<iframe id="p5js2" src="https://editor.p5js.org/Lanchu2hen9/full/eCm_owgZ5"></iframe>

<script type="module">

    const iframe  = document.getElementById (`p5js2`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

# Task 2:

What ChatGPT says:
![A response from ChatGPT on how to do task 2.](/ChatGPT2.png)

## Resources:

- The p5js2 Reference Library `https://p5js.org/reference/`
- The Coding Train (Daniel Shiffman) `https://www.youtube.com/c/TheCodingTrain`
- ChatGPT and the entirety of the Internet.

[^1]: Changes the way that colours are defined in p5.js, by default uses RGB (Red, Green, Blue) colour values.
[^2]: Draws the square from the centre of the square. There are other rectMode(); that draw the square from different points in the square, but I can't be fcked to type them down.
[^3]: Removes outlines from shapes.
