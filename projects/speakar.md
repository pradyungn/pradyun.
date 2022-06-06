---
title: SpeakAR
profile: cyan
---

My submission to DVHacks in January 2019! SpeakAR was a project that projected the translated name of an object in AR above the object. In simple terms, if you put the camera in front of, for example, a key, it would put the translation of key into a different language in 3d block letters above the object. The language for translation could be configured using the settings menu. Unfortunately, due to the unstable nature of Flutter at the time, our project became corrupted.

* As stated before, this was written in the Flutter framework using Dart. We were one of the early adopters, using flutter a mere 2 weeks after release
* The ML was handled in two ways - initially we tried to compile a tensoflow lite model, but due to incompatibilities with our system, we were unable to do so (and this is when I ditched Windows).
* We instead handled the AI using Firebase's object detection model
