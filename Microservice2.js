const express = require('express');
const app = express();

app.get('/microservice2', (req, res) => {
    res.send("This is the second microservice.")
})

app.listen(3001, () => {
    console.log('Microservice 2 listening on port 3001')
})