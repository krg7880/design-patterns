var createTree = require("functional-red-black-tree")

var Observers = function() {
  this.collection = createTree();
};

Observers.prototype.addObserver = function(obj) {
  console.log('add', obj);
  if (!this.exists(obj.id)) {
    this.collection.insert(obj.id, obj);
  }

  return this;
};

Observers.prototype.exists = function(obj) {
  return this.collection.find(obj.id);
};

Observers.prototype.getAt = function(idx) {
  return this.collection.at(idx);
};

Observers.prototype.removeObserver = function(idx) {
  if (idx > -1 && idx < this._count) {
    this.collection.splice(idx, 1);
    this._count -= 1;
  }

  return this;
};

Observers.prototype.count = function() {
  return this.collection.length;
};

Observers.prototype.indexOf = function(obj) {
  var pos = -1;

  while(pos++ < this._count) {
    if (this.collection[pos] === obj) {
      return pos;
    }
  }

  return -1;
};

module.exports = Observers;