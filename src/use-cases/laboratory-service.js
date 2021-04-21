const repository = require('../repository/repository.js');
const laboratoryModel = require('../entities/laboratory-model.js');
const { ObjectId } = require('bson');

exports.insertNewLaboratory = async function (req, res) {
    const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory");
    laboratoryCollection.insertOne(req.body)
        .then(result => {
            if (result)
                res.status(200).send('Laboratório inserido com sucesso!');
        })
        .catch(error => console.error(error))
}

exports.getAllActivesLaboratory = async function (req, res) {
    let query = { status: "ativo"};
    const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory").find(query);
    laboratoryCollection.toArray()
        .then(result => {
            if (result)
                res.status(200).send(result);
        });
}

exports.updateLaboratory = async function (req, res) {
    const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory");
    let queryToFind = { _id: ObjectId(`${req.body._id}`) };

    mapLaboratoryToUpdate(req.body);

    let newValues = {$set: {name: laboratoryModel.name, address: laboratoryModel.address, status: laboratoryModel.status}};
    laboratoryCollection.updateOne(queryToFind, newValues)
        .then(result => {
            if (result)
                res.status(200).send('Laboratório atualizado com sucesso!');
        })
        .catch(error => console.error(error))
}

exports.deleteLaboratory = async function (req, res) {
    const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory");
    let queryToFind = { _id: ObjectId(`${req.params.id}`) };
    
    laboratoryCollection.deleteOne(queryToFind)
        .then(result => {
            if (result)
                res.status(200).send('Laboratório excluido com sucesso!');
        })
        .catch(error => console.error(error))
}

function mapLaboratoryToUpdate(body) {
    laboratoryModel.name = body.name;
    laboratoryModel.address = body.address;
    laboratoryModel.status = body.status;
}