var Subject = require('./subject');
var Observer = require('./observer');
var subject = new Subject();

// add some observers
var max = 1000;
for (var i=0; i<max; i++) {
  subject.addObserver(new Observer({name: 'one_' + i}));
}

// notify the observers
subject.notify({}, {name: 'hello!'})
  .removeObserver(0);

// observer_0 was removed...
console.log(subject.getAt(0));
