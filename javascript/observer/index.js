var Subject = require('./subject');
var Observer = require('./observer');

var observerOne = new Observer({name: 'one'});
var observerTwo = new Observer({name: 'two'});
var subject = new Subject();

subject.register(observerOne);

subject.register(observerTwo);

subject.notify({name: 'hello!'});

subject.unregister(observerTwo);

console.log(subject.get(0));
