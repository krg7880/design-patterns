var Observers = require('./observers');

var Subject = function() {
  this.observers = new Observers();
};

Subject.prototype.register = function(obj) {
  if (typeof(obj) !== 'object') {
    throw new Error('Illegal argument exception - Object expected!');
  }

  this.observers.register(obj);
  return this;
};

Subject.prototype.unregister = function(arg) {
  if (typeof(arg) === 'object') {
    this.observers.unregister(this.observers.indexOf(arg));
  } else if (typeof(arg) === 'number') {
    this.observers.unregister(arg);
  } else {
    throw new Error('Invalid argument exception - Expected an object or number');
  }

  return this;
};

Subject.prototype.getAt = function(idx) {
  if (typeof(idx) !== 'number') {
    throw new Error('Invalid argument exception - number expected!');
  }
  
  return this.observers.getAt(idx);
};

Subject.prototype.notify = function(ctx, data) {
  var count = this.observers.count();
  for (var i=0; i< count; i++) {
    this.observers.getAt(i).update(ctx, data);
  }

  return this;
};

module.exports = Subject;