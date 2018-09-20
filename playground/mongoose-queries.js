const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ba321d3b36ee9265e5834fd';
if (!ObjectID.isValid(id)) {
  console.log('Id not valide');
}

Todo.find({
  _id: id
}).then((todos) => {
  if (!todos) {
    return console.log('Id not found');
  }
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo findOne', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo find by id', todo);
}).catch((e) => console.log(e));
