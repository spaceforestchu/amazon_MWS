var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String, default: ''},
  password: {type: String, default: ''},
  timestamp: {type: String, default: Date.now}
});

module.exports = mongoose.model('UserSchema', UserSchema);
