var fs = require('fs');
var util = require('util');
var events = require('events')

/** 
Parser object responsible for
load data from the FS and parsing
the contents.

Each channel parsed will emit an
event. Observers may use this 
information for their respective 
purposes. 

One example is adding the channel
to the ChannelCollection object.
*/
var Parser = function() {};

util.inherits(Parser, events.EventEmitter);

var parse = function(data) {
  data = (typeof(data) === 'object') ? data : JSON.parse(data);
  var root = data.root;
  var item = null;
  var child = null;

  for (var channel in root) {
    item = root[channel];
    if (item) {
      this.emit('channel', item);
    }
  }

  this.emit('complete');
};

Parser.prototype.load = function(filepath) {
  var data = '';
  var self = this;
  var stream = fs.createReadStream(filepath, { 
    flags: 'r',
    encoding: 'utf8',
    fd: null,
    mode: 0666,
    autoClose: true
  });
  stream.on('data', function onData(chunk) {
    data += chunk;
  }).on('end', function onEnd() {
    parse.call(self, data);
  });
};

module.exports = Parser;