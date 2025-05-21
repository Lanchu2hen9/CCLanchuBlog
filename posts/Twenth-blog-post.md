---
title: Week 10 (Tues) Homework
published_at: 2025-05-21
snippet: This is homework 10a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](#task-1)
   - [Prompt 1](#prompt-1)
   - [Ollama](#ollama)
     - [Ollama Conclusion](#ollama-conclusion)
   - [Gemini](#gemini)
     - [Gemini Conclusion](#gemini-conclusion)
   - [New Prompt](#claude-35-sonnet)
     - [Ideas that I like](#ideas-that-i-like)
   - [Claude 3.5 Sonnet](#new-prompt)
     - [Project Concept: Instagram Desktop Reinvention](#project-concept-instagram-desktop-reinvention)
2. [Task 2](#task-2)
   - [Copilot Prompt Setup](#copilot-prompt-setup)
   - [Learning](#learning)
   - [Experiement 1](#experiement-1)
   - [Final Code](#final-code)
   - [Final Gif](#final-gif)

# Task 1:

From my understanding [WebRTC (Web Real-Time Communication)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) API is literally just Zoom but with websites and using servers not connected to the main wifi/firewall & [The WebSocket API (WebSockets)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), is the message/"chat-room" equvilent of WebRTC.

There's the ASCII typing board website thing, where one website vistor types something onto the website and what they've typed is like a message that they've left behind. The website is also like a scrollable map thingy like miroboard, where you can click and drag to see other messages on the canvas that other vistors has left behind.

- [Scream Into the void](https://screamintothevoid.com/)

Maybe something like a open book where when some visits the website and types/clicks smth it leaves a trail of effects or messages behind for the next user to see.

## Idea 1:

**This will done via "WebSockets API"**
I want to create a website that looks like a digital year book. When the user/my friends first opens the "digital year book" they are greeted with a screen with different "profile picture avatars" that they can choose to represent themselves the most. Once a "profile picture avatar" is chosen from that screen. That "profile picture avatar" is taken and put into a design of a year book in which I will create.

### For the quotes page:

User1 would be able to log onto with another user, say User2. Both User1 and User2 Would have their chosen "profile picture avatar" put into the photo part of the year book quotes section. And as each of the user types, the "quotes text" box will highlight, and it will be like they're communicating through the year book.

### Standard Year book page:

This would be designed like a standard yearbook page, but instead of the depicting people in the pictures show in yearbooks, it would depict the options/animals I give as the "profile picture avatars". At the start screen.

For example, with one page I plan to have a quotes page, but instead of the "student's image" its just cute stylised images of the "profile picture avatars" on the start screen.

Headings, text and things will be interactable on this page. For example when a user clicks on the heading on this page, the heading will collapse, sending all the elements into an anti-gravity mode like in [this example](https://mrdoob.com/projects/chromeexperiments/google-gravity/).

## Idea 2:

**This will be done via WebRTC API.**  
Will take the form of a standard video call website where 2 users will be able to connect regardless of what device they are on. But the buttons will do funny/fun things when the user try to click on it.

### Fun Interactions:

When either user clicks/taps on the mute button it will run away from the user's mouse or try to escape from the user's finger on mobile _(not exactly sure how this will work on touchscreen devices, but it doesn't have to work on touchscreen devices.)_ You will have to catch the mute button in order to mute yourself.

When the camera off button is pressed the camera will briefly turn off then on and then their faces will be pixelated like they're in some anonymous documentary thing/witness protection. (Glitch is optional here.)

Leave button just closes the website like exiting out a call. I'm not adding more stuff for me to code.

And the share screen button allows you to draw things on the screen.

## A.I. Prompt:

These are the following ideas that I have for my Assignment 3 task due 8th of June 2025, its currently 21th of May 2025. Keep in might that I have 2 additional assignments to do. Keep in mind I wrote them in an .md file in VScode. So used the context of .md notation.

Read ahead if you want to its all A.I. generated.

<font color="green">

Okay, let's break down your two ideas for Assignment 3, keeping in mind your current workload, the due date of June 8, 2025, and your previous assignments. It's May 21, 2025, so you have about 2.5 weeks.

Now, for your Assignment 3 ideas:

## Analysis of Idea 1: Digital Yearbook (WebSockets API)

**Core Concept:** A digital yearbook website where users choose avatars, and then these avatars appear in a yearbook design. A "quotes page" uses WebSockets for real-time typing/communication, and a "standard yearbook page" depicts avatars. Interaction includes a Google Gravity-like effect for headings.

### Pros:

**Highly Creative & Unique:** This is a very memorable and personal project.

**Strong Technical Learning:** Using WebSockets for real-time typing on the quotes page is a fantastic application of the API and demonstrates advanced technical understanding. You're right, WebSockets are primarily used for real-time communication like text messaging.

**Directly Applicable to Design Skills:** The "yearbook design" aspect (layout, typography, imagery) is core to your Graphic Design course. You can showcase your P2 (Typography) and P3 (Identity) skills directly within the yearbook's design.

**Addresses "Interactive" Aspect:** The Google Gravity effect is a fun, interactive element that goes beyond standard web design.
Good Portfolio Piece: This would be a unique and impressive piece for your portfolio, showcasing both design and development skills.
Cons/Challenges (Given your Time & Other Assignments):

**Significant Development Scope:**
User Authentication/Session Management (Implicit): To have User1 log on with User2 and remember their avatars, you'll need some form of user identification, even if it's just session-based for a demo. This adds complexity.

**Real-time Typing (WebSockets):** While feasible, implementing WebSockets securely and effectively for multiple users and syncing text boxes can be time-consuming. You'll need a backend server (Node.js with ws library, Python with Flask-SocketIO, etc.) to handle these connections.

**Avatar Selection & Storage:** Storing chosen avatars and associating them with users requires a backend and potentially a database.

**Dynamic Yearbook Generation:** Populating the yearbook design dynamically with chosen avatars and messages adds front-end JavaScript complexity.

**Google Gravity Effect:** While cool, implementing this physics-based animation accurately can take a fair bit of JavaScript, potentially leveraging libraries or custom physics.

**Time Commitment:** This idea is very ambitious for ~2.5 weeks, especially with two other assignments looming. The backend development for WebSockets, user handling, and the front-end dynamic rendering could easily consume all your available time and more.

**Potential for Feature Creep:** It's easy to get carried away with making every element "interactable" in a project like this.
</font>
