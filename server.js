const express = require('express');

const app  = express();

app.get("/", (res, req) => {
    req.send("Hello World Donis");
});

app.listen(3001);