const repository = require('../repository/repository.js');

exports.insertNewLaboratory = async function (req, res, next) {
    const laboratoryCollection = repository.client.db("laboratory-maintenace").collection("laboratory");
    console.log(req.body);
    laboratoryCollection.insertOne(req.body)
        .then(result => {
            
        })
        .catch(error => console.error(error))
}