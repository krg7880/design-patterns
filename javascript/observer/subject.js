var Observers = require('./observers');

var Subject = function() {
  this.observers = new Observers();
};

Subject.prototype = {
  register: function(obj) {
    this.observers.register(obj);
  },

  unregister: function(obj) {
    this.observers.unregister(this.observers.indexOf(obj));
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