var path = require('path');
var Iterator = require( path.normalize(path.dirname('.') + '/../util/iterator.js'));

var Observers = function() {
  this.collection = new Iterator();
};

Observers.prototype.addObserver = function(obj) {
  if (!this.exists(obj)) {
    this.collection.add(obj);
  }

  return this;
};

Observers.prototype.exists = function(obj) {
  return this.collection.contains(obj);
};

Observers.prototype.getAt = function(idx) {
  return this.collection.getAt(idx);
};

Observers.prototype.removeObserver = function(idx) {
  this.collection.remove(idx);
  return this;
};

Observers.prototype.count = function() {
  return this.collection.size();
};

Observers.prototype.indexOf = function(obj) {
  return this.collection.indexOf(obj);
};

module.exports = Observers;