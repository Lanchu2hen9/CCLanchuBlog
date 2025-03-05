---
title: Week 1 Homework
published_at: 2025-01-05
snippet: An example of a blog post.
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
colorMode (HSB)  
rectMode (CENTER)  
noStroke ()  
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

![a drippy lemon](/IMG_8737.jpg)
