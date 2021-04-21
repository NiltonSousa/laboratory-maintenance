const repository = require('../repository/repository.js');
const examModel = require('../entities/exam-model.js');
const { ObjectId } = require('bson');

exports.insertNewExam = async function (req, res) {
    const examCollection = repository.client.db("laboratory-maintenace").collection("exam");
    examCollection.insertOne(req.body)
        .then(result => {
            if (result)
                res.status(200).send('Exame inserido com sucesso!');
        })
        .catch(error => console.error(error))
}

exports.getAllActivesExam = async function (req, res) {
    let query = { status: "ativo"};
    const examCollection = repository.client.db("laboratory-maintenace").collection("exam").find(query);
    examCollection.toArray()
        .then(result => {
            if (result) 
                res.status(200).send(result);
        });
}

exports.updateExam = async function (req, res) {
    const examCollection = repository.client.db("laboratory-maintenace").collection("exam");
    let queryToFind = { _id: ObjectId(`${req.body._id}`) };

    mapExamToUpdate(req.body);

    let newValues = {$set: {name: examModel.name, type: examModel.type, status: examModel.status}};
    examCollection.updateOne(queryToFind, newValues)
        .then(result => {
            if (result)
                res.status(200).send('Exame atualizado com sucesso!');
        })
        .catch(error => console.error(error))
}

exports.deleteExam = async function (req, res) {
    const examCollection = repository.client.db("laboratory-maintenace").collection("exam");
    let queryToFind = { _id: ObjectId(`${req.params.id}`) };
    
    examCollection.deleteOne(queryToFind)
        .then(result => {
            if (result)
                res.status(200).send('Exame excluido com sucesso!');
        })
        .catch(error => console.error(error))
}

function mapExamToUpdate(body) {
    examModel.name = body.name;
    examModel.type = body.type;
    examModel.status = body.status;
}