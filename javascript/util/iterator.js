var Iterator = function(collection) {
  if (!(this instanceof Iterator)) {
    return new Iterator(collection);
  }

  this.index = 0;
  this.keys = {};
  this.collection = collection || [];
  this.length = 0;

  if ((collection instanceof Array)) {
    this.defaultIterator();
  } else if (typeof(collection) === 'object') {
    this.objIterator();
  }
};

Iterator.prototype.hasNext = function() {
  return (this.index < this.length);
};

Iterator.prototype.hasPrevious = function() {
  return (this.index > 0 && this.index < this.length);
};

Iterator.prototype.size = function() {
  return this.length;
};

Iterator.prototype.defaultIterator = function() {
  this.length = this.collection.length;

  this.next = function() {
    if (this.hasNext()) {
      return this.collection[this.index++];
    }

    return null;
  };

  this.previous = function() {
    if (this.hasPrevious()) {
      return this.collection[--this.index];
    }

    return null;
  };

  this.current = function() {
    return this.collection[this.index];
  };

  this.contains = function(item) {
    return (this.collection.indexOf(item) > -1);
  };

  this.add = function(item) {
    this.collection[this.length] = item;
    this.length++;
    return this;
  };
};

Iterator.prototype.objIterator = function() {
  this.keys = Object.keys(this.collection);
  this.length = this.keys.length;

  this.next = function() {
    if (this.hasNext()) {
      return this.collection[this.keys[this.index++]];
    }

    return null;
  };

  this.previous = function() {
    if (this.hasPrevious()) {
      return this.collection[this.keys[--this.index]];
    }
  };

  this.current = function() {
    return this.collection[this.keys[this.index]];
  };

  this.add = function(key, val) {
    this.collection[key] = val;
    this.keys = Object.keys(this.collection);
    this.length = this.keys.length;
  };
};

module.exports = Iterator;
