const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({}).then((res) => {
//
// })

Todo.findByIdAndRemove('5ba321d3b36ee9265e5834fd').then((todo) => {
  console.log(todo);
});
