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
5. [Experiments](https://cclanchublo6.deno.dev/JavascriptConceptReview#experiments)
   - [Png & Button code](#)
6. [Final Sketch](#)

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

  - `Class Bubble {...}` => The template.
  - `Function Setup () { Bubble = new bubble();}`, `Function Draw () { Bubble.move();}`, the actual fucking person.
    - Can have multiple instancåes of the same Instance/persons.

  ## Classes:

  - Think of it as the word "template" or "blueprint".
  - "Bubble" in `Class Bubble {...}` is also referred to as the cookie cutter sometimes.

- "Bubble" in `Function Setup () { Bubble = new bubble();}` are called instance.

# Experiments:

[Print & Console.log](https://editor.p5js.org/Lanchu2hen9/sketches/IFmbUaFe0)  
[FrameCount](https://editor.p5js.org/Lanchu2hen9/sketches/SuYTKxWHq)  
[Colour](https://editor.p5js.org/Lanchu2hen9/sketches/BDZ7gXE-z)  
[While](https://editor.p5js.org/Lanchu2hen9/sketches/61098iznH)

[^1]: Take everything ChatGPT says with a grain of salt. Sometimes chatGPT bullshits. ChatGPT is the definition of: "Fake it til you make it." Like me, 🥲 but I haven't made it yet.
[^2]: This is both the room and the instructions at the same time.
