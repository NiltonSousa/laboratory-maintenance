const express = require('express');
const serviceLaboratory = require('./src/use-cases/laboratory-service.js');
const app = express();

app.listen(3001, function () {
    console.log('listening on 3001')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => { })

app.post('/insert-laboratory', serviceLaboratory.insertNewLaboratory);


