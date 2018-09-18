//Node desctructure in place, same as require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server...');
  }
  console.log('Connected to MongoDB Server');

  var db = client.db('TodoApp');

  var todos = db.collection('Users').find({name: 'Nen Xi'}).toArray().then((docs) => {
    // console.log('Users count: ', count);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('cannot fetch docs');
  });
  client.close();
});
