---
profile: purple
date: 7/17/22
title: Cost Minimization with Simulated Annealing
blurb: How real-world particle physics translate to computational optimization.
---

It's been over 2 years since I last published anything here! Ironic, considering all the ideas I had to write about. A lot has changed in the last two years - I graduated high school, pivoted to low-level software and hardware, and - perhaps the most shocking revelation - I dropped neovim for Doom EMACS. That being said, I hope I can bring myself to write regularly this time - there's still plenty I'd like to write about!

Case in point - earlier this summer, I was working on a cost-optimization problem. Perhaps it'd be prudent to first establish a singular definition for what that means:

> Given an arbitrary function $c$ and accepts $n$ parameters of an arbitrary type, we can refer to it as the "cost function". We must algorithmically find the optimal function input of n parameters such that the output of cost function $c$ is minimized.  

Now for those of you that have taken elementary calculus, you can apply it to find a basic solution to this problem - approximate the derivative and double derivative at an arbitrary starting point, then approximate the function using those terms. Once that's been done, replace your starting point with the minima of the approximated function, then rinse and repeat until you've hit an absolute minima. This is in fact the basis for the "gradient descent" method of minimization - more specifically, Newton's method. However, this method has a few drawbacks, three of which I'll mention here:

- The double derivative gets computationally expensive once you start scaling up the number of input variables. The Gauss-Newton method makes this more computationally feasible to some degree.
- Gradient descent algorithms in general can get stuck on local minima. This is something inherent to the nature of quadratic function approximations.
- This method establishes a *numerical* relationship. In some cases, especially cases where you evaluate the cost of a graph, calculating the derivative isn't exactly logically feasible. 

So to combat these shortcomings, we require a method that is computationally feasible, can find the absolute minima despite finding a local minima, and works on graph evaluations. One of the most popular methods that fulfills all these criteria is ***simulated annealing***. As the name suggests, this heuristic is akin to metallurgical annealing, like that done in the production of a katana. At high temperatures, atoms may shift unpredictably  and eliminate impurities from the metal's structure - to take advantage of this, blacksmiths would heat the blade then allow it to cool multiple cycles over.

To mimic this behavior, we can create an arbitrary starting temperature - say `1` for simplicity - and check the probability of whether the system should stay in its current state or switch to another arbitrary state. If the arbitrary state is less costly, we should always switch to it. As we do this over and over again, we artificially make the temperature decay to emulate a cooling effect. Fundamentally speaking, we can reduce the algorithm to the following cycle:

1. If temperature below exit threshold, return current state
2. Generate new state
3. Check if new state has lower cost than current state
   1. Yes: default to new state
   2. No: randomly determine whether to swap to new state or not.
4. Decay temperature (either subtract a fixed constant or multiply it by a coefficient)

From the above decomposition, we can understand the algorithm is logically simple. However there are some key components that must be fulfilled to make it functional:

* We require a way to generate new arbitrary states (a swap function, per se)
  * The swap states generated become closer and closer in spread to the current point as the system cools

* In the event that the arbitrary state is *not* optimal in comparison to the current state, we need to be able to find the probability that the system should default to the non-optimal state.

We can first deal with the latter, by looking at how this probability model presents itself in nature. At an atomic level, an atom's probability to shift unpredictably can be explained by the **Boltzmann distribution**. It, at a very basic overview, models how certain atomic configurations may be more or less likely based on the current temperature of the system based on how much "energy" they contain. Normally, lower energy states are more likely. However, at higher temperatures, the system has more energy, thus higher-energy states become more likely. By treating the "cost" of a function as an energy of sorts, we can find the probability that our system should occupy the higher energy, or *more costly* configuration.  This facet of random variation allows our algorithm to "get out" of a minima if it is ever necessary.

Assuming the temperature to be $t$, the current state cost to be $c_1$, and the new state cost to be $c_2$ where $c_2 \gt c_1$, we can find the swap probability to be the following:
$$
p = e^{-\frac{c_2 - c_1}{t}}
$$


With that done, we should address the former. However, the swap function you use will vary greatly depending on the problem scenario. For a graph-based cost function, you may prefer to randomly swap out or rotate two nodes. For large-scale functions, you may want to randomly add or subtract 1000. But for functions with a smaller relevant domain, that may be too great of a magnitude. Thus, this section of the algorithm is something that you must decide for yourself.

## In Conclusion...

I probably should have written out a working example of this algorithm. But to be quite honest, there's enough google resources available on the internet for that already.

But in all seriousness, I find it crazy how Mother Nature's optimization algorithm for particle states is so good, that we purposefully try to mimic it in our own code.  Personally, I think it's beautiful that even the most simple chemical and physical interactions can be predicated on a computational marvel fundamentally ingrained into the workings of matter and the world 