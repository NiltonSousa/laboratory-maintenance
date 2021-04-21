const express = require('express');
const serviceLaboratory = require('../use-cases/laboratory-service.js');
const serviceExam = require('../use-cases/exam-service.js');
const app = express();
const config = require('../config/config.js');

app.listen(3001, function () {
    console.log('listening on 3001')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get(`${config.defaultRouteLaboratory}`, serviceLaboratory.getAllActivesLaboratory);
app.post(`${config.defaultRouteLaboratory}`, serviceLaboratory.insertNewLaboratory);
app.put(`${config.defaultRouteLaboratory}`, serviceLaboratory.updateLaboratory);
app.delete(`${config.defaultRouteLaboratory}:id`, serviceLaboratory.deleteLaboratory);

app.get(`${config.defaultRouteExam}`, serviceExam.getAllActivesExam);
app.post(`${config.defaultRouteExam}`, serviceExam.insertNewExam);
app.put(`${config.defaultRouteExam}`, serviceExam.updateExam);
app.delete(`${config.defaultRouteExam}:id`, serviceExam.deleteExam);
