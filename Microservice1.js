const express = require('express');
const app = express();

app.get('/microservice1', (req, res) => {
    res.send("This is the first microservice.")
})

app.listen(3000, () => {
    console.log('Microservice 1 listening on port 3000')
})