var List = require('./list');

var Subject = function() {
  this.observers = new List();
};

Subject.prototype = {
  add: function(obj) {
    this.observers.add(obj);
  },

  remove: function(obj) {
    this.observers.removeAt(this.observers.indexOf(obj));
  },

  get: function(idx) {
    return this.observers.get(idx);
  },

  notify: function(ctx) {
    var count = this.observers.count();
    for (var i=0; i< count; i++) {
      this.observers.get(i).update(ctx);
    }
  }
};

module.exports = Subject;