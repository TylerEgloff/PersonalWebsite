# Winning My First Hackathon
## How risky ideas can be made safe through structure
## Tyler Egloff | January 2026

### Introduction
I placed first in the 2025 Fidelity Investments sponsored hackathon held at NKU. Teams were given 24 hours to develop an informative platform revolving around stock options. Our team gambled on an ambitious video game idea, then relied on proper documentation, delegation, and planning to see our vision through.

### Choosing Risk
Before touching a computer, our team sat down eliminating ideas until we were left with two. Firstly was an e-learning platform, Khan Academy style. And second was a video game where players made financial decisions given various clues. From here, a simple pros and cons list went a long way for us:

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; max-width: 100%;">
<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Video Game</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Broad Appeal</td><td>Technical Complexity</td></tr>
<tr><td>Actually Innovative</td><td>Team Lacks Game Developers</td></tr>
</tbody>
</table>
<table style="flex: 1 1 45%; min-width: 200px;">
<thead>
<tr><th colspan="2" style="text-align: center; font-size: 1.1rem;">Educational Platform</th></tr>
<tr><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>Simpler Implementation</td><td>Safe Choice</td></tr>
<tr><td>Strong Web Developers</td><td>Less Innovative</td></tr>
<tr><td>Proven Format</td><td></td></tr>
</tbody>
</table>
</div>

Hackathons reward projects that compel and innovate, and we believed that the video game would make for a much stronger showing. At the same time, we knew that this option carried significantly more risk: we would have to build a servicable game in under 24 hours with a newly formed team of non-game developers. 

### Structure In Action


##### Frontload the Thinking
Picking an idea was far from the only planning required to deliver this project on time. Discussing technical requirements, judging criteria, limiting the project's scope, and so many other things were discussed at length both before and throughout our build phase. In general, the more time spent thinking about the problem generally reduces the amount of time solving the problem.
##### "'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.' - Abraham Lincoln"

##### Delegate Tasks
The phrase, "aces in their places" was a core principle in delegating tasks. Specifically, we had one member begin to initialize a project and explore technical demands. In parallel, we had another teammate laying out the core game design and content. I positioned myself between the other teammates, creating documentation to unify our vision for the project.

##### Document Everything
I created two pieces of documentation: A *game loop flowchart*, capturing every state and transition the game should have. And a *software requirement specification*, listing the functional requirements and use cases of the program. These two pieces of documentation provided two crucial benefits: 
1. **A single source of truth**: Essential to collaboration in any discipline, we ensured that the entire team was united on one vision.
2. **The perfect prompt for GPT-4.0**: There are two approaches for software engineers to prompt a generative AI model. You can either tell it to build *an* app for you, or you can tell it to build *this* app for you. For us, our documentation was comprehensive enough to just become our prompt.

<figure style="border: 1px solid #4b5563; border-radius: 0.5rem; padding: 1rem; margin: 1rem 0; background-color:rgba(75, 85, 99, 0.15);">

```mermaid
flowchart LR-TD
    A{5. Spawn Client & Populate clues, from JSON} --> B[6. Player makes decision]
    B -->|Approve Call/Put| C[7. Execute Trade]
    B --> D[8. Reject Trade]
```

<figcaption style="text-align: center; color: #9ca3af; font-size: 0.85rem; font-style: italic; margin: 0.5rem 0 0 0;">Game loop flowchart (partial)</figcaption>
</figure>