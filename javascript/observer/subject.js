var Observers = require('./observers');

var Subject = function() {
  this.observers = new Observers();
};

Subject.prototype = {
  register: function(obj) {
    this.observers.register(obj);
    return this;
  },

  unregister: function(arg) {
    if (typeof(arg) === 'object') {
      this.observers.unregister(this.observers.indexOf(arg));
    } else if (typeof(arg) === 'number') {
      this.observers.unregister(arg);
    } else {
      throw new Error('Invalid argument exception - Expected an object or number');
    }

    return this;
  },

  get: function(idx) {
    return this.observers.get(idx);
  },

  notify: function(ctx) {
    var count = this.observers.count();
    for (var i=0; i< count; i++) {
      this.observers.get(i).update(ctx);
    }

    return this;
  }
};

module.exports = Subject;