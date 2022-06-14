---
title: Kami
profile: blue
link-gh: https://github.com/pradyungn/kami
link-dp: https://devpost.com/software/kami
beta: on
---
One of the largely overlooked problems in today's technological era is information overload - information has become so pervasive and easy-to-access that our lifestyles demand us to consume increasing amounts of information in a rapidly declining amount of time. With our submission to BridgeHacks, we hoped to alleviate some of this strain by allowing users to more efficiently and rapidly intake and process information - condensing endless filler down to its most important points.
* We first made an API that was served using the Flask framework. Its function was twofold.
  * We utilized the PyTesseract OCR engine to read image input and convert it to rawtext.
  * We used NLTK's tokenization function to deconstruct the rawtext. By using the TF/IDF algorithms, we were able to weight each clause (indicating how "important" it is to the document as a whole). By setting a threshold for set weight, we were able to condense the input text.
* Our backend API was hosted on AWS, using one of their EC2 machines. We used Gunicorn to convert our development Flask server into a production web server, then served that using nginx.
* Users were able to interact with our API using an array of applications that we made during the competition period.
  * We offered native iOS/Android apps by using the Flutter framework. From a user perspective, these apps could take a picture of any document, convert it into rawtext, then summarize that text.
  * We also had a web application made with Angular.js.
