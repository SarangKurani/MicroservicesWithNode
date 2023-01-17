const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/microservice2', (req, res) => {
    console.log("Client connected to microservice 2")
    res.json("This is the second microservice.")
})

app.listen(3001, () => {
    console.log('Microservice 2 listening on port 3001')
})