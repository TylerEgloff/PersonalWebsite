# Winning My First Hackathon
## How a risky idea can be shipped in 24 hours with proper planning
## Tyler Egloff | January 2026

### Introduction
Fidelity Investments partnered with NKU to sponsor a 24-hour hackathon for over 40 students. Teams were prompted to develop an educational platform teaching users about stock options trading. After a lot of caffeine and 24 hours of development continuing throughout the night, our team was shocked to be awarded first place.

### Preparation
I was a last minute sign-up for the event, so I reached out to a classmate who spoke about the event and joined up to create a group of three. I was lucky that we all shared an interest in developing a video game for this event. Aside from that, our group did not enter the event with any concrete plan on what we would be making or how we would do it.
As the event started, we picked up two more teammates who were unable to attend the entire event, but we were still able to effectively leverage their skills in the few hours we had with them. With this rag-tag team of five, we watched the clock hit 2:00 P.M., and got to work.

### The Hackathon Begins
As the hackathon kicked off, our team still had a critical issue: we had not settled on an idea. This led to our first priority being a lengthy discussion about what we would spend the next 24 hours developing. 

##### The Idea
Our brainstorming culminated in two options: A video game inspired by *Papers, Please.*, where the player recommends stock option trades based on clues, or an interactive educational platform similar to Khan Academy. There were concerns in both ideas that had to be addressed. I transcribed the pros and cons list that we created into the following tables:

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; max-width: 100%;">
<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Video Game</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Broad Appeal</td><td>Complexity</td></tr>
<tr><td>Engaging</td><td>Lacking Game Developers</td></tr>
<tr><td>Creative Expression</td><td></td></tr>
</tbody>
</table>
<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Educational Platform</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Simpler</td><td>Safe Choice</td></tr>
<tr><td>Strong Web Developers</td><td>Less Innovative</td></tr>
<tr><td>Proven Format</td><td></td></tr>
</tbody>
</table>
</div>

We decided that if we leveraged our resources and delegated tasks effectively, that the more daunting idea to develop a video game could be possible. And thus, *Papers, Please.* was born.

##### The Execution
After deciding upon our idea, we shifted into a drafting phase. Out of our core three members, we delegated one to initialize our codebase, another to layout the game design and content, and myself to work between those two, creating a unified software requirement document. This setup provided us a three way exchange of technical requirements along with game design requirements. I will dedicate the next section to discuss this documentation process further.

##### The Documentation
Pulling on the knowledge I have gained as an undergraduate researcher, I decided two create two pieces of documentation: A *game loop flowchart*, capturing every state and transition the game should have. And a *software requirement specification*, listing the functional requirements and use cases of the program. These two pieces of documentation provided two crucial benefits: 
1. **A single source of truth**: Essential to collaboration in any discipline, we ensured that the entire team was united on one vision.
2. **The perfect prompt for GPT-4.0**: There are two approaches for software engineers to prompt a generative model. You can either tell it to build *an* app for you, or you can tell it to build *this* app for you.
In the time that I spent working on this documentation, another teammate was initializing a phaser web application and researching the framework. We came together, providing both pieces of documentation to GPT-4.0 on our empty project and had at least 75% of our application built from a single prompt. Moreover, we could have found even greater success leveraging AI if my documentation wasn't terribly sloppy and unfinished. See **Figure 1**, or view the GitHub repository [here](https://github.com/HackathonFidelity2025/Documentation).

<figure style="border: 1px solid #4b5563; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0; background-color:rgba(75, 85, 99, 0.15);">

```mermaid
flowchart LR-TD
    A{5. Spawn Client & Populate clues, from JSON} --> B[6. Player makes decision]
    B -->|Approve Call/Put| C[7. Execute Trade]
    B --> D[Etc.]
```

<figcaption style="text-align: center; color: #9ca3af; font-size: 0.85rem; font-style: italic; margin: 0.5rem 0 0 0;">Game loop flowchart (partial)</figcaption>
</figure>

##### The Sprint
After we had the backbone of our application built, things turned into a caffeine-driven frenzy. We were coding the clue systems, making game content, fixing bugs. We even had a teammate recording voice lines on his phone to squeeze every bit of polish we could into those 24 hours. To keep the scope of this post contained, I will save other details about our implementation for a different place. To conclude the event, our team presented *Papers, Please* to be evaluated for five aspects:
  - Research & Creativity
  - Design & Technology
  - Business Value
  - Presentation & Storytelling
  - Overall "Wow" Factor

Our game received praise for it's creativity and scalability to various age demographics if game content is tailored for varying education levels. We also received an invitation to showcase our demo at Fidelity Investments. Feel free to play the game [here](https://hackathonfidelity2025.github.io/options_please/), or view the GitHub repository [here](https://github.com/HackathonFidelity2025/options_please).

### Advice
- Do not refrain from dedicating a considerable amount of time to planning and discussion phases. Our team spent over an hour before a GitHub repository was even initialized. This was vital in our race against the clock because we were able to minimize technical debt and oversights that would have had be fixed later.
  
- Anyone who enjoys working in Markdown should check out [Mermaid](https://mermaid.js.org/). It allows you to create diagrams extremely quickly using simple syntax, and most modern IDEs or Markdown editors have extensions to render Mermaid diagrams. Plus, most AI models can interpret Mermaid’s Markdown directly as context.