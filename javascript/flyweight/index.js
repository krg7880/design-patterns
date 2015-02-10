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
  console.log('Number of children for 1194811622255', Collection.getChildrenIds(1194811622255).length);
})

// initiate loading the JSON file
.load(file);
