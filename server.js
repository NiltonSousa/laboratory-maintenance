const express = require('express');
const serviceLaboratory = require('./src/use-cases/laboratory-service.js');
const app = express();

app.listen(3001, function () {
    console.log('listening on 3001')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/find-actives-laboratory', serviceLaboratory.getAllActivesLaboratory);
app.post('/insert-laboratory', serviceLaboratory.insertNewLaboratory);
app.put('/update-laboratory', serviceLaboratory.updateLaboratory);
app.delete('/delete-laboratory/:id', serviceLaboratory.deleteLaboratory);


