---
title: Flameless
profile: red
---
My school's XREDU Club's submission to the Samsung Solve For Tomorrow. As one of the two members on the development team, I had an active role in the design and (obviously) development of our project. Flameless is a fire analytics system that aggregates fire data over a large area (in realtime, of course), plots this data on a map, and - in the even that it detects a fire - predicts where the fire may spread. We actively collaborated with the San Ramon Fire Department on this project, taking input and suggestions from them regarding the project design. The project functioned so well that we were the National Winners of the Samsung Solve for Tomorrow - endowing with our school's tech department with $100,000.
* We used the LoRa protocol (LoRaWAN) shields with Arduinos to act as 'nodes'. We chose the LoRa protocol for its relative cost efficiency and long ranges.
* These nodes would collect wind speed, temparature, and smoke (CO2 in air) data from the point they were planted at.
* These nodes relayed data to a Raspberry Pi 'hub' - one outfitted with a LoRa router
  * The Raspberry Pi aggregated the data from each node and determined whether or not there was a fire at those points.
  * We trained a regressional model using python, with our training data being from the UCI archives. This model determined whether there was a fire or not.
  * Based on the anemometer readings relayed back, the RasPi predicted where the fire would spread - and to what extent.

