body { padding: 100px; width: 1000px; margin: auto; text-align: left; font-weight: 300; font-family: 'Open Sans', sans-serif; color: #121212; } h1, h2, h3, h4 { font-family: 'Source Sans Pro', sans-serif; } CS 184 Final Project  

CS 184: Computer Graphics and Imaging, Spring 2018
==================================================

Final Project Proposal: Position Based Fluids
=============================================

### Anna Brewer, Yining Chen, Regina Ongowarsito

Title, Summary and Team Members
-------------------------------

### Position Based Fluids: Real-time Water Simulation

In this project we will create an iterative density solver, integrated into the Position Based Dynamics framework (framework repository in resources). We hope to be able to create a method that allows for similar incompressibility and convergence to modern smoothed particle hydrodynamic solvers, but inherits the stability of the geometric, position based dynamics method, allowing large time steps suitable for real-time applications.

Team: Anna Brewer-3031870635, Yining Chen-25115899, Regina Ongowarsito-25605679

Problem Description
-------------------

The main problem in creating a water simulation like this is being able to simulate the fluid to match its real physical properties, which often times is computationally expensive and has impractical time step efficiency. However, accurate stimulations of fluids can be applied in anything between animation cinema to microfluidic modelling, which is why we are driven to pursue this technical challenge. On top of that, we thought that since in most of the projects so far have been focusing on solid objects, creating something to do with fluids could be an interesting and challenging final project for us to tackle.

Goals and Deliverables
----------------------

Our baseline goal for this project is being able to create water/fluidic behavior between particles in a simulated environment. We expect to find some difficulties in correctly implementing the physics of the fluids, as well as making the particles have water like properties, and quantify the accuracy of our simulation by comparing its visual similarity to real life examples or real life observations. Ideally, we would be able to run a real time simulation, but that would be a bit more of a reach if we are ahead of schedule. Some other future goals we were thinking of are interactions between multiple bodies of water (ie dropping a large blob of water into a body of water) and simulating interactions between different Newtonian fluids.

Questions
---------

Can we use the existing [PositionBasedDynamics](https://github.com/InteractiveComputerGraphics/PositionBasedDynamics) framework? If so, it seems like it's already handling the physics part of water simulation. If we then decide to consider one of our subgoals as a main goal instead, which is best fit for the amount of time we have?

If we instead plan on implementing the physics part ourselves, which of the subgoals would be a good one to aim for first? In terms of the shorter timeframe in addition to implementing the water physics and the additional information we would need to implement it.

Schedule
--------

Week 1: plan/read papers, outline pseudocode if possible, learn dependencies

Week 2: Code - get basic physics working

Week 3: Code - water appearance, pick 1 subgoal: blob behavior, interface between fluids, realtime, more subgoals if we have time

Week 4: Debug, don’t add any more features

We’ll do the write-up as we go along.

Resources
---------

*   [Position Based Fluids paper](http://mmacklin.com/pbf_sig_preprint.pdf) in conjunction with [PositionBasedDynamics framework](https://github.com/InteractiveComputerGraphics/PositionBasedDynamics).
*   We might possibly need to use hive computers if it requires more cpu to run.
*   Learn how to use [OpenGL](http://www.opengl-tutorial.org/).
*   Potentially import everythin into [Mitsuba](http://www.mitsuba-renderer.org/) for easier and better rendering.
*   For more thorough reading if google fails us: [Smoothed Particle Hydrodynamics: A Meshfree Particle Method](https://www.worldscientific.com/worldscibooks/10.1142/5340#t=aboutBook/) By Gui-Rong Liu, M. B. Liu
