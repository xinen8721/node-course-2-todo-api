var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = {User};
