const express = require('express');
const serviceLaboratory = require('../use-cases/laboratory-service.js');
const serviceExam = require('../use-cases/exam-service.js');
const serviceAssociation = require('../use-cases/association-service.js');
const app = express();
const config = require('../config/config.js');
let PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`listening on ${PORT}`);
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Laboratory
app.get(`${config.defaultRouteLaboratory}`, serviceLaboratory.getAllActivesLaboratory);
app.post(`${config.defaultRouteLaboratory}`, serviceLaboratory.insertNewLaboratory);
app.put(`${config.defaultRouteLaboratory}`, serviceLaboratory.updateLaboratory);
app.delete(`${config.defaultRouteLaboratory}`, serviceLaboratory.deleteLaboratory);

//Exam
app.get(`${config.defaultRouteExam}`, serviceExam.getAllActivesExam);
app.post(`${config.defaultRouteExam}`, serviceExam.insertNewExam);
app.put(`${config.defaultRouteExam}`, serviceExam.updateExam);
app.delete(`${config.defaultRouteExam}:id`, serviceExam.deleteExam);

//Associations
app.get(`${config.defaultRouteAssociation}`, serviceAssociation.getAllLaboratoryByExamName); 
app.post(`${config.defaultRouteAssociation}`, serviceAssociation.insertAssociation);
app.delete(`${config.defaultRouteAssociation}:id`, serviceAssociation.deleteAssociation);

