---
title: rJSON
profile: red
link-gh: https://github.com/pradyungn/rJSON
---

Over quarantine I tried to pick up some new skills and technologies - half out of curiosity, half to preserve my sanity. One of the first things I learned was rust. To become more comfortable with the language, I tried to make a database in rust.
  * This database essentially stores anonymous JSON-formatted records per user-based HTTP requests - hence the name r[ust]JSON.
    * Requests are authenticated using a dynamically generated API key - users can fetch a new key by going to the homepage of the API.
  * HTTP requests are routed using the "actix-web" framework - one can think of it like rust's version of flask, albeit with a bit more work needed to deserialize and sanitize JSON loads.
