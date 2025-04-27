---
title: Week 7 (Tues) Homework
published_at: 2025-04-15
snippet: This is homework 7a. Apparently homework 7a doesn't exist for some reason.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-1)
2. [Task 2 & 3](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-2)
   - [Passage 1](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-1)
   - [Passage 2](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-2)
   - [Passage 3](https://cclanchublo6.deno.dev/Thirdteenth-blog#passage-3)
3. [Task 4](https://cclanchublo6.deno.dev/Thirdteenth-blog#task-4)

# Task 1:

**How will you make the sound design for your AT2 function in a chaotic aesthetic register?**

**What does it mean to be chaotic in the sonic domain? In your discussion, please make reference effective complexity, paying particular attention to the following:**
**1. Structure - what structures our perception of sound?**
In terms of structure humans are pattern recognition machines, humans in terms of both scientific understanding and art in general seek to find patterns, musical motifs, tempos, beats and structure. Pure chaos in this section is to have a lack of recongisable structure by the human ear.

**2. Noise - what differentiates noise from sound, or music?**
Music is when order is injected into chaos. The line between chaos music is those really experimental sound stuff. Like Merzbow or free jazz[^1]. Where there's an inherent randomness to the sound/music as obviously produced by the musician.

**3. Voice - what makes voice a separate category of sound?**
Voice is when information, and structure is injected into noise/a sound. When mixed with the other two categories, Voice brings an inherent randomness to sound.

In yapping about Sound and every, I would like to say I am not a sound person in general, I dislike loud sounds, and anything that's not either white noise or black noise distracts me. But for AT2, I am legally obligated to use sound, so I will use sound. I'll probably do something simple, get two arrays, one for the x-axis and the other for the y-axis. Have it so that whenever the browser is opened 2 random audio clips from the arrays are chosen. And have it according to where you position your mouse on the canvas something the two is mixed differently. Actually I want one audio to shift from one audio to another on the y-axis.

So probably smth like 3 arrays:

```js
let YSoundsStart = [];
let YSoundsEnd = [];
let XSoundsStart = [];
let XSoundsEnd = [];

preload() {
   // Push said audio clips into the array.
}
```

ChatGPT says this about the role of de-familiarisation in Natalie Loveless' talk:

> "De-familiarisation means making everyday things feel strange so we notice and care about them again. Loveless says artists can use this to help people see their deep connections with nature."

I guess with De-familiarisation, and this [example](https://mynoise.net/NoiseMachines/thunderNoiseGenerator.php), you're taking the natural almost everyday occurance of "stormy/rain/thunder" and divorcing it from its original context, and increasing people's everyday connection to nature. Because unironically at lot of ppl use this in their everyday life like for their "high-quality work" and study.

## Task 2:

Both for efficiency and AT2 I am going to be creating what I imagine the sound for AT2 to be. I'm going to be referring/studying this [Samples](https://blog.science.family/250409_web_audio_api_samples). The interactive sound design experiment is [here.](#)

This is the idea if I explained it very poorly earlier in this post.
![AT2, Sound design idea](AT2-Sound-Idea.jpg)

So I yapped to Chatgpt about my sound design idea, ChatGPT said these are the areas that I have to investigate into order to create said idea.

- AudioBufferSourceNode
- GainNode
- PannerNode (optional) for spatial sound movement.
- start() and stop() method handling (especially when blending and switching random sounds) How to smoothly adjust gain.value for blending without pops/clicks
- Maybe linearRampToValueAtTime for smoother gain transitions.

### Broad Steps for Your System:

1. Load all sounds into AudioBuffer objects.
2. Create an AudioBufferSourceNode for each sound.
3. Create a GainNode for each source, and connect it to the audio context’s destination.
4. On mouse move, calculate relative position.
5. Based on position, choose random samples from the correct arrays (YSoundStart, YSoundEnd, etc).
6. Lerp the gain values between selected sounds based on proximity to center or edges.
7. Update the gainNode.gain.value properties in real-time.

### ChatGPT's skeleton code:

```js
// Set up
let YSoundsStart = [...]; // +Y sounds
let YSoundsEnd = [...];   // -Y sounds
let XSoundsStart = [...]; // +X sounds
let XSoundsEnd = [...];   // -X sounds

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Find center
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

// Handle mouse move
canvas.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Find relative position from center
    let relativeX = mouseX - centerX;
    let relativeY = centerY - mouseY; // Flip Y so UP = positive

    // Normalize distances
    let maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    let distanceX = relativeX / centerX; // Between -1 and 1
    let distanceY = relativeY / centerY; // Between -1 and 1

    // Pick random sounds
    let soundX = distanceX >= 0
        ? pickRandom(XSoundsStart)
        : pickRandom(XSoundsEnd);

    let soundY = distanceY >= 0
        ? pickRandom(YSoundsStart)
        : pickRandom(YSoundsEnd);

    // Calculate blending
    let blendX = Math.abs(distanceX); // 0 to 1
    let blendY = Math.abs(distanceY); // 0 to 1

    // Apply volumes
    soundX.volume = blendX;
    soundY.volume = blendY;

    // Play or adjust sounds
    soundX.play();
    soundY.play();
});

// Utility
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
```

Not sure if its cheating if I copy the maths part from ChatGPT. Some things that it wrote are not the best way of writing code. But what can I say? I've already shook the devil's hand in terms of coding with AI before.

[^1]: ChatGPT suggested this to me, I'm not a musical and or sound person.
