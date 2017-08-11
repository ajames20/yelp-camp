var mongoose = require('mongoose');
var passportLocalePlugin = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalePlugin);

module.exports = mongoose.model('User', UserSchema);