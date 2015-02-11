var Subject = require('./subject');
var Observer = require('./observer');

var observerOne = new Observer({name: 'one'});
var observerTwo = new Observer({name: 'two'});
var subject = new Subject();
subject.add(observerOne);
subject.add(observerTwo);
subject.notify({name: 'hello!'});
subject.remove(observerTwo);

console.log(subject.get(0));
