const { ObjectId } = require('bson');
const repository = require('../repository/repository.js');
const serviceExam = require('../use-cases/exam-service.js');

exports.insertAssociation = async function (req, res) {
    const associationCollection = repository.client.db("laboratory-maintenace").collection("association");

    associationCollection.insertOne(req.body)
        .then(result => {
            if (result)
                res.status(200).send('Associação realizada com sucesso!');
        })
        .catch(error => console.error(error))
}

exports.deleteAssociation = async function (req, res) {
    const associationCollection = repository.client.db("laboratory-maintenace").collection("association");
    let queryToFind = { examId: (`${req.params.id}`) };

    associationCollection.deleteOne(queryToFind)
        .then(result => {
            if (result)
                res.status(200).send('Desassociação realizada com sucesso!');
        })
        .catch(error => callback.send(error))
}

exports.getAllLaboratoryByExamName = async function (req, res) {
    try {
        getExamByName(req.query.name, res);
    } catch (error) {
        callback.send(error);
    }
}

async function getExamByName(paramName, callback) {
    try {
        let queryToFind = { name: `${paramName}` };
        const examCollection = repository.client.db("laboratory-maintenace").collection("exam").find(queryToFind);

        await examCollection.toArray()
            .then(result => {
                if (result) {
                    getAllAssociationsByExamId(result[0]._id.toString(), callback);
                }
            });
    } catch (error) {
        callback.send(error);
    }

}

async function getAllAssociationsByExamId(objectId, callback) {
    try {
        let queryToFind = { examId: `${objectId}` };
        const associationsCollection = repository.client.db("laboratory-maintenace").collection("association").find(queryToFind);

        await associationsCollection.toArray()
            .then(result => {
                if (result) {
                    let arrayLaboratoryIds = mapLaboratoryIds(result);
                    getAllLaboratory(arrayLaboratoryIds, callback);
                }
            });
    } catch (error) {
        callback.send(error);
    }

}

async function getAllLaboratory(ids, callback) {
    try {
        const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory").find({ "_id": { "$in": ids } });
        await laboratoryCollection.toArray()
            .then(result => {
                if (result) {
                    callback.send(result);
                }
            });
    } catch (error) {
        callback.send(error);
    }
}

function mapLaboratoryIds(arrayLaboratories) {
    let returnIds = [];

    arrayLaboratories.forEach(lab => {
        returnIds.push(ObjectId(lab.laboratoryId));
    });

    return returnIds;
}