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
