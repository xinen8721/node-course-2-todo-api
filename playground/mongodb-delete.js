//Node desctructure in place, same as require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server...');
  }
  console.log('Connected to MongoDB Server');

  var db = client.db('TodoApp');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Nen Xi'}).then((res) => {
  //   console.log(res);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ba08634de428eb313ff136a")}).then((res) => {
    console.log(res);
  });
  client.close();
});
