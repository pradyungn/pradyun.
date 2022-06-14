---
title: Vital
profile: green
link-dp: https://devpost.com/software/vital-b1msah
---

Our submission to LaunchHacks I. As implied by its name, Vital aggregated and reported the "vitals" of a plant - like environmental humidity/temperature, soil moisture, light levels, etc. - and made that data easily available to users. We tried to make Vital more than a simple "fetch and report" project by offering the most integrations we could produce within the time constraints - including Google Assistant skills, Amazon Alexa routines, and more.

* We used an Arduino to collect the readings from our "test plant", then forwarded that data to a Raspberry Pi
* These were then stored and updated in real time via a Firestore server
    * Our Firebase was configured such that any hardware and applications would be user-specific - i.e all our software had per-user storage and devices
    * We also took advantage of Firebase's Authentication SDK to make a robust user-account implementation
* This data was then accessible on cross-platform applications - despite our limited time, we were able to create native iOS/Android applications as well as a Web App
    * These applications allowed users to track multiple plants, view the plant data graphed over an extended period of time, receive push notifications when their plants were in "danger" conditions, etc.
