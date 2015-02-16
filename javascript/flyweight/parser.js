'use strict';

var fs = require('fs');
var util = require('util');
var events = require('events');
var path = require('path');
var FileLoader = require( path.normalize(path.dirname('.') + '/../util/file.loader.js'));

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
  var loader = new FileLoader();
  loader.load(filepath, function onFileLoad(e, data) {
    if (e) {
      throw e;
    }

    parse.call(this, data);
  }.bind(this));
};

module.exports = Parser;