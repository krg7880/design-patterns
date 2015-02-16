var Subject = require('./subject');
var Observer = require('./observer');
var subject = new Subject();

// add some observers
var max = 1000;
for (var i=0; i<max; i++) {
  subject.addObserver(new Observer({id: i, name: 'one_' + i}));
}

//notify the observers
subject.notify({name: 'hello!'})
  .removeObserver(0);

// observer_0 was removed...

//console.log(subject.observers.collection);
console.log(subject.observers.count())
console.log(subject.observers.indexOf(subject.observers.getAt(3)));
