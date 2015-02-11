var Observers = function() {
  this.list = [];
  this._count = 0;
};

Observers.prototype = {
  register: function(obj) {
    if (typeof(obj) !== 'object') {
      throw new Error('Invalid type exception - Object expected');
    }

    this.list.push(obj);
    this._count += 1;
    return this;
  },

  get: function(idx) {
    if (idx > -1 && idx < this._count) {
      return this.list[idx];
    }
  },

  unregister: function(idx) {
    if (idx > -1 && idx < this._count) {
      this.list.splice(idx, 1);
      this._count -= 1;
    }
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
      console.log('p', pos);
      if (this.list[pos] === obj) {
        console.log(pos);
        return pos;
      }
    }

    return -1;
  }
};

module.exports = Observers;