---
title: Week 10 (Tues) Homework
published_at: 2025-05-13
snippet: This is homework 8a.
disable_html_sanitization: true
allow_math: true
---

[Home](https://cclanchublo6.deno.dev/)

# Table Of Contents:

1. [Task 1](#task-1)
2. [Task 2](#task-2)
   - [UX/UI Community](#uxui-community)
     - [Domain](#domain)
     - [Repertoire](#repertoire)
     - [Values](#values)
   - [Front-end Community](#front-end-community)
     - [Domain](#domain-1)
     - [Repertoire](#repertoire-1)
     - [Values](#values-1)
   - [Creative Coding Community](#creative-coding-community)
     - [Domain](#domain-2)
     - [Repertoire](#repertoire-2)
     - [Values](#values-2)
3. [Task 3](#task-3)

# Idea/Community:

- High school friends, study & call could do smth about video calling using the camera and web.
- You can do something with the high school burwood community.
- And like maybe re-created the instagram website, and sort of subvert the UX/UI within the Instagram website/app.
- You can create something like this artwork:

![image.png](Example1.png)

But there’s like filters and shit that the users/interactor can play found with.

# 20th May Ideas:

Have a video call function, where when you click the mute button or hover over it the mute button runs away or smth. The hide video button can glitch the video on click or smth. This idea might be a bit ambitious, so maybe rest on this idea, and turn it into a text chat version. Instead of a video call version.

# Building a Deno WebRTC Video Chat Application

WebRTC (Web Real-Time Communication) is a powerful technology that enables peer-to-peer communication directly in the browser, making it perfect for video chat applications. Combining this with Deno, a secure JavaScript/TypeScript runtime, creates a modern and secure foundation for your application.

## Key Components for a Deno WebRTC Video Chat

1. **Deno Server**: Acts as a signaling server to help peers discover each other and exchange connection information.
2. **WebRTC API**: Provides the core functionality for establishing peer connections, managing media streams, and handling data channels.
3. **Signaling Mechanism**: Facilitates the exchange of session description protocols (SDPs) and ICE candidates between peers.
4. **User Interface**: Displays video streams and provides controls for the chat experience.

## Architecture Overview

The typical architecture for a WebRTC application includes:

```mermaid
WebRTC Architecture.download-icon {
            cursor: pointer;
            transform-origin: center;
        }
        .download-icon .arrow-part {
            transition: transform 0.35s cubic-bezier(0.35, 0.2, 0.14, 0.95);
             transform-origin: center;
        }
        button:has(.download-icon):hover .download-icon .arrow-part, button:has(.download-icon):focus-visible .download-icon .arrow-part {
          transform: translateY(-1.5px);
        }
        #mermaid-diagram-r3l{font-family:var(--font-geist-sans);font-size:12px;fill:#000000;}#mermaid-diagram-r3l .error-icon{fill:#552222;}#mermaid-diagram-r3l .error-text{fill:#552222;stroke:#552222;}#mermaid-diagram-r3l .edge-thickness-normal{stroke-width:1px;}#mermaid-diagram-r3l .edge-thickness-thick{stroke-width:3.5px;}#mermaid-diagram-r3l .edge-pattern-solid{stroke-dasharray:0;}#mermaid-diagram-r3l .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-diagram-r3l .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-diagram-r3l .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-diagram-r3l .marker{fill:#666;stroke:#666;}#mermaid-diagram-r3l .marker.cross{stroke:#666;}#mermaid-diagram-r3l svg{font-family:var(--font-geist-sans);font-size:12px;}#mermaid-diagram-r3l p{margin:0;}#mermaid-diagram-r3l .label{font-family:var(--font-geist-sans);color:#000000;}#mermaid-diagram-r3l .cluster-label text{fill:#333;}#mermaid-diagram-r3l .cluster-label span{color:#333;}#mermaid-diagram-r3l .cluster-label span p{background-color:transparent;}#mermaid-diagram-r3l .label text,#mermaid-diagram-r3l span{fill:#000000;color:#000000;}#mermaid-diagram-r3l .node rect,#mermaid-diagram-r3l .node circle,#mermaid-diagram-r3l .node ellipse,#mermaid-diagram-r3l .node polygon,#mermaid-diagram-r3l .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-diagram-r3l .rough-node .label text,#mermaid-diagram-r3l .node .label text{text-anchor:middle;}#mermaid-diagram-r3l .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-diagram-r3l .node .label{text-align:center;}#mermaid-diagram-r3l .node.clickable{cursor:pointer;}#mermaid-diagram-r3l .arrowheadPath{fill:#333333;}#mermaid-diagram-r3l .edgePath .path{stroke:#666;stroke-width:2.0px;}#mermaid-diagram-r3l .flowchart-link{stroke:#666;fill:none;}#mermaid-diagram-r3l .edgeLabel{background-color:white;text-align:center;}#mermaid-diagram-r3l .edgeLabel p{background-color:white;}#mermaid-diagram-r3l .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-diagram-r3l .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#mermaid-diagram-r3l .cluster rect{fill:hsl(0, 0%, 98.9215686275%);stroke:#707070;stroke-width:1px;}#mermaid-diagram-r3l .cluster text{fill:#333;}#mermaid-diagram-r3l .cluster span{color:#333;}#mermaid-diagram-r3l div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:var(--font-geist-sans);font-size:12px;background:hsl(-160, 0%, 93.3333333333%);border:1px solid #707070;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-diagram-r3l .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#000000;}#mermaid-diagram-r3l .flowchart-link{stroke:hsl(var(--gray-400));stroke-width:1px;}#mermaid-diagram-r3l .marker,#mermaid-diagram-r3l marker,#mermaid-diagram-r3l marker *{fill:hsl(var(--gray-400))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-r3l .label,#mermaid-diagram-r3l text,#mermaid-diagram-r3l text>tspan{fill:hsl(var(--black))!important;color:hsl(var(--black))!important;}#mermaid-diagram-r3l .background,#mermaid-diagram-r3l rect.relationshipLabelBox{fill:hsl(var(--white))!important;}#mermaid-diagram-r3l .entityBox,#mermaid-diagram-r3l .attributeBoxEven{fill:hsl(var(--gray-150))!important;}#mermaid-diagram-r3l .attributeBoxOdd{fill:hsl(var(--white))!important;}#mermaid-diagram-r3l .label-container,#mermaid-diagram-r3l rect.actor{fill:hsl(var(--white))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-r3l line{stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-r3l :root{--mermaid-font-family:var(--font-geist-sans);}Client ASignaling Server (Deno)Client B
```

## Implementation Considerations

1. **Signaling Server**: You'll need to implement a WebSocket server in Deno to handle the signaling process.
2. **STUN/TURN Servers**: For NAT traversal, you'll need STUN servers (and possibly TURN servers for fallback).
3. **Media Constraints**: Consider what media constraints you'll support (video quality, audio settings, etc.).
4. **UI/UX Design**: Think about the user experience - room creation, joining, participant management, etc.
5. **Security**: Implement proper authentication and encryption for your signaling server.

## Getting Started

When you're ready to start coding, we can begin with:

1. Setting up the Deno server with WebSocket support
2. Implementing the signaling logic
3. Creating the client-side WebRTC connection code
4. Building the UI for the video chat

Would you like to focus on any particular aspect of this project first? Or would you like me to start generating some code for a specific component?

# Core Concept Frameworks:

For the concepts that I am talking about please refer to the Week10a homework blog. I'll be going with Idea 2.

[Top ⬆︎](#)
