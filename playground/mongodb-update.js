//Node desctructure in place, same as require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server...');
  }
  console.log('Connected to MongoDB Server');

  var db = client.db('TodoApp');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b9c2f1c5767724cf0b294b8")
  }, {
    $set: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })
  client.close();
});
