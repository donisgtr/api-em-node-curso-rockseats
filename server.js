const express = require('express');
const mongoose = require('mongoose')
const app  = express();

//mongoose.connect('mongodb2://localhost:27017/nodeapi' );

app.get("/", (res, req) => {
    req.send("Hello World Donis");
});



app.listen(3001);