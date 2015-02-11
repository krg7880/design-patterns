
var Observers = function() {
  this.collection = [];
  this._count = 0;
};

Observers.prototype.register = function(obj) {
  if (!this.exists(obj)) {
    this.collection.push(obj);
    this._count += 1;
  }

  return this;
};

Observers.prototype.exists = function(obj) {
  var idx = this.indexOf(obj);
  if (idx > -1) {
    if (this.get(idx)) {
      return true;
    }
  }

  return false;
};

Observers.prototype.getAt = function(idx) {
  if (idx > -1 && idx < this._count) {
    return this.collection[idx];
  }
};

Observers.prototype.unregister = function(idx) {
  if (idx > -1 && idx < this._count) {
    this.collection.splice(idx, 1);
    this._count -= 1;
  }

  return this;
};

Observers.prototype.count = function() {
  return this._count;
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