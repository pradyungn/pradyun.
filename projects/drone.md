---
title: The Drone
profile: pink
---
Our submission for CodeDay BA, Spring 2019! This project involved the devision of a raspberry-pi-powered drone, using stepper motors and a wooden frame. This drone was heavily engineered to be IoT-focused, with features like a web dashboard to monitor its diagnostics (altitude, speed, yaw, pitch, etc.), a live video feed that could be patched into a VR Headset (on multiple devices), and more! This project won us the best hardware hack at CDBA!

* We used DNSmasq to use the Raspberry Pi as a router - essentially allowing the raspi to act as a WiFi hotspot
* There were two webservers involved:
  * The JS server we used to serve our dashboard, coded in React.js
  * The Flask server used to serve video feed in both a website (which we didn't have time to style) and a video feed, experienced in VR
* The flight controller's code was written in C++, with some early object detection code written in python.
