const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config.js');
const client = new MongoClient(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) return console.error(err)
  console.log('Connected to Database')
});

exports.client = client;



