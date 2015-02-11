var List = function() {
  this.list = [];
  this._count = 0
};

List.prototype = {
  add: function(obj) {
    this.list.push(obj);
    this._count += 1;
    return this;
  },

  get: function(idx) {
    if (idx > -1 && idx < this._count) {
      return this.list[idx];
    }
  },

  removeAt: function(idx) {
    if (idx > -1 && idx < this._count) {
      console.log('Splicing...');
      this.list.splice(idx, 1);
      this._count -= 1;
    }
  },

  count: function() {
    return this._count;
  },

  indexOf: function(obj) {
    var pos = 0;

    while(pos++ < this._count) {
      if (this.list[pos] === obj) {
        return pos;
      }
    }

    return -1;
  }
};

module.exports = List;