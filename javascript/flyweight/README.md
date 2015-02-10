## Flyweight Design Pattern

In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the flyweight objects temporarily when they are used.

A classic example usage of the flyweight pattern is the data structures for graphical representation of characters in a word processor. It might be desirable to have, for each character in a document, a glyph object containing its font outline, font metrics, and other formatting data, but this would amount to hundreds or thousands of bytes for each character. Instead, for every character there might be a reference to a flyweight glyph object shared by every instance of the same character in the document; only the position of each character (in the document and/or the page) would need to be stored internally.

(Source)[http://en.wikipedia.org/wiki/Flyweight_pattern]


### Example
```javascript
var Parser = require('./parser');
var parser = new Parser();
var file = './data.json';

// channel collection (singleton, in this case)
var Collection = require('./channels.collection');

// factories
var SponsoredFactory = require('./sponsored.factory');
var ParentFactory = require('./parent.factory');

// bind to "channel" events. Dispatched when
// a new channel is parsed
parser.on('channel', function onChannel(channel){
  Collection.add(channel);
})

// bind to the complete event
.on('complete', function onComplete() {
  console.log('Collection count', Collection.count());
  console.log('Number of sponsored channels', SponsoredFactory.count());
  console.log('Number of parent channels', ParentFactory.count());
  console.log('Number of children for 0000000022255', Collection.getChildrenIds("0000000022255").length);
})

// initiate loading the JSON file
.load(file);
```

