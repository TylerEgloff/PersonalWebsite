# Winning My First Hackathon
## How risky ideas can be made safe through structure
## Tyler Egloff | March 2026

### Introduction
I placed first in the 2025 Fidelity Investments-sponsored hackathon held at NKU. Teams were given 24 hours to develop an informative platform revolving around stock options. Our team gambled on an ambitious video game idea, then relied on proper documentation, delegation, and planning to see our vision through.

### Choosing Risk
Before beginning development, our team narrowed down our ideas to two finalists. The first was an e-learning platform similar to Khan Academy. And second was a video game in which players made financial decisions based on various clues. From here, a simple pros and cons list went a long way for us:

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; max-width: 100%;">
<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Video Game</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Broad Appeal</td><td>Technical Complexity</td></tr>
<tr><td>Actually Innovative</td><td>Team Lacked Game Devs</td></tr>
<tr><td>High User Engagement</td><td>Untested Format</td></tr>
</tbody>
</table>

<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Educational Platform</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Technical Simplicity</td><td>Safe Choice</td></tr>
<tr><td>Strong Web Developers</td><td>Less Innovative</td></tr>
<tr><td>Proven Format</td><td>Limited User Engagement</td></tr>
</tbody>
</table>
</div>

Hackathons reward projects that compel and innovate, and we believed that the video game would make for a much stronger showing. At the same time, we knew that this option carried significantly more risk: we would have to build a serviceable game in under 24 hours with a newly formed team of non-game developers. 

### Structure In Action
With an idea in hand, we then had to focus on the best way to bring our vision to life. Our team found success by following a few key principles:

##### Frontload the Thinking
Technical requirements, judging criteria, project scope, and many other aspects of the project were discussed at length both before and during our build phase. This extra time up front helped us to spot potential pitfalls early and clarify responsibilities before coding began.
##### "'If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.' - Albert Einstein"

##### Delegate Tasks
As a shift lead at McDonald’s, I learned the principle of “aces in their places.” We applied this mindset by assigning tasks based on each team member’s strengths. One teammate began initializing the project and exploring technical requirements, while another focused on developing the core game design and content. I positioned myself between these efforts, creating documentation to unify our vision and keep the team on track.

##### Document Everything
I created two pieces of documentation: a *game loop flowchart* (see **Figure 1**), capturing every state and transition the game should have, and a *software requirements specification*, listing the functional requirements and use cases of the program. These two pieces of documentation provided two crucial benefits: 
1. **A single source of truth**: Essential to collaboration in any discipline, we ensured that the entire team was united on one vision.
2. **The perfect prompt for a coding agent**: There are two approaches for software engineers to prompt a generative AI model: you can ask it to build *an* app for you, or you can ask it to build *this* app for you. The difference comes down to specificity. Because our documentation explicitly defined both gameplay and technical needs, we had already made an excellent AI prompt.

<figure style="border: 1px solid #4b5563; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0; background-color:rgba(75, 85, 99, 0.15);">

```mermaid
flowchart LR-TD
    A[4. Day start] --> B[5. Spawn customer & new clues]
    B --> C[6. User makes trade decision]
    C --> D[Etc.]
    D --> B
```

<figcaption style="text-align: center; color: #9ca3af; font-size: 0.85rem; font-style: italic; margin: 0.5rem 0 0 0;">Game loop flowchart (partial)</figcaption>
</figure>

### Executing on That Structure
With this structure in place, we were able to move directly into implementation. Our division of labor paid off enormously: game design, technical setup, and documentation converged to create a shared understanding of the project and our best path forward for actually building it.

Even with this added clarity, running out of time was a constant fear. While reflecting after the event, we agreed that without this methodical approach, we likely would have finished with a half-baked product unworthy to show off.

##### AI as an execution tool
With all of our project’s requirements formalized, we used a coding agent to generate most of the initial scaffolding on top of the already initialized project. Within the first few hours, the core architecture was in place, allowing us to move quickly from setup into actually iterating on our ideas.

##### Finalizing the Project
With our surplus of time, we focused on refining the project. We fixed bugs, improved the user interface, and added new gameplay systems. In the end, we had additional time to thoroughly playtest the game and refine our final presentation for judging.

The final product is a clue-based deduction game where virtual clients come to you for financial advice with various hints scattered across a desk. Each in-game day, players piece together the evidence, make recommendations, and receive feedback on their decisions. The game was ultimately recognized for its creativity and broad appeal.

<figure style="border: 1px solid #4b5563; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0 0 0; background-color:rgba(75, 85, 99, 0.15);">

<img src="posts/img/Hackathon-screenshot.png" style="border-radius:0.5rem; width:80vw;max-width:500px">

<figcaption style="text-align: center; color: #9ca3af; font-size: 0.85rem; font-style: italic; margin: 0.5rem 0 0 0;">Final Product</figcaption>
</figure>

<div style="text-align: center;">
<a href="https://hackathonfidelity2025.github.io/options_please/">Play it</a> or
<a href="https://github.com/HackathonFidelity2025/options_please">Visit the Repo</a>
</div>

### Additional Advice
- **You don't need proprietary tools**
Our team used entirely free and/or open-source software to build this project. Some examples are: **GIMP** for image editing, **Obsidian** for editing Markdown, **Phaser** for a JavaScript game framework, and more.
- **Get out there and build something**
None of us were exceptional software engineers or veteran project managers. We simply had an idea and got to work on it. Just like us, you may be surprised by what you're capable of delivering if you just get started.
- **Check out Mermaid if you work in Markdown**
Mermaid served our team very well for its ability to quickly create flowcharts and diagrams embedded directly in Markdown files. Our team converted a handwritten flowchart into Mermaid and used it as context for our AI coding agent.