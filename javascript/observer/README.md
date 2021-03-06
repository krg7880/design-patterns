## Observer Pattern

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. It is mainly used to implement distributed event handling systems. The Observer pattern is also a key part in the familiar model–view–controller (MVC) architectural pattern.[1] The observer pattern is implemented in numerous programming libraries and systems, including almost all GUI toolkits.

The observer pattern can cause memory leaks, known as the lapsed listener problem, because in basic implementation it requires both explicit registration and explicit deregistration, as in the dispose pattern, because the subject holds strong references to the observers, keeping them alive. This can be prevented by the subject holding weak references to the observers.

[Source](http://en.wikipedia.org/wiki/Observer_pattern)

## Example
```javascript
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
```