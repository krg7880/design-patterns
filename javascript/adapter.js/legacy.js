var RegisterLegacy = function() {};
RegisterLegacy.prototype.setUsername = function(username) {
  this.username = username;
  return this;
};

RegisterLegacy.prototype.setEmail = function(email) {
  this.email = email;
  return this;
};

RegisterLegacy.prototype.register = function() {
  // send an HTTP(s) request to register user
  return this;
};

RegisterNew = function() {};
RegisterNew.prototype.register = function(username, email) {
  this.username = username;
  this.email = email;
  // send AJAX request
};

RegisterAdapter = function() {};
RegisterAdapter.prototype.setUsername = function(username) {
  this.username = username;
  return this;
};

RegisterAdapter.prototype.setEmail = function(email) {
  this.email = email;
  return this;
};

RegisterAdapter.prototype.register = function() {
  var register = new RegisterNew(this.username, this.email);
};
