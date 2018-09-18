//Node desctructure in place, same as require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server...');
  }
  console.log('Connected to MongoDB Server');

  var db = client.db('TodoApp');

  var doc = {
    text: 'Something to do',
    completed: false
  };

  // db.collection("Todos").insertOne(doc, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo: ', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });
  db.collection('Todos').insertOne(doc, (err, res) => {
    if (err) return Console.log('Unable to insert user');
    console.log(JSON.stringify(res.ops, undefined, 2));
  });
  client.close();
});
