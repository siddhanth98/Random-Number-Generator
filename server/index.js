const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    'origin': true
}));

app.get('/generate', function(req, res) {
    console.log("Request received at route /generate");
    let randomNumber = Math.round(Math.random()*100);
    res.send({
        'random': randomNumber
    });
});

app.post('/increment', function(req, res) {
    let number = req.body.random;
    res.send({
        'random': (Number(number)+1)
    });
});

app.post('/decrement', function(req, res) {
    let newNumber = req.body.random;
    res.send({
        'random': Number(newNumber)-1
    });
});

app.listen('3001', function() {
    console.log("Server listening on port 3001...");
});
