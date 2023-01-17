const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/microservice1', (req, res) => {
    console.log("Client connected to microservice1")
    res.json("This is the first microservice.")
})

app.listen(3000, () => {
    console.log('Microservice 1 listening on port 3000')
})