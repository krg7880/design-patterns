var Observers = function() {
  this.collection = [];
  this._count = 0;
};

Observers.prototype = {
  register: function(obj) {
    if (typeof(obj) !== 'object') {
      throw new Error('Invalid type exception - Object expected');
    }

    this.collection.push(obj);
    this._count += 1;
    return this;
  },

  get: function(idx) {
    if (idx > -1 && idx < this._count) {
      return this.collection[idx];
    }
  },

  unregister: function(idx) {
    if (idx > -1 && idx < this._count) {
      this.collection.splice(idx, 1);
      this._count -= 1;
    }

    return this;
  },

  count: function() {
    return this._count;
  },

  indexOf: function(obj) {
    if (typeof(obj) !== 'object') {
      throw new Error('Invalid type exception - Object expected');
    }

    var pos = -1;

    while(pos++ < this._count) {
      if (this.collection[pos] === obj) {
        return pos;
      }
    }

    return -1;
  }
};

module.exports = Observers;