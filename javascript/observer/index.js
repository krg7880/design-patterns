var Subject = require('./subject');
var Observer = require('./observer');

var observerOne = new Observer();
var observerTwo = new Observer();
var subject = new Subject();
subject.add(observerOne);
subject.add(observerTwo);
subject.notify({name: 'hello!'});
subject.remove(observerOne);