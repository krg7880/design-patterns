var fs = require('fs');

var FileLoader = function() {};

FileLoader.prototype.load = function(filepath, cb) {
  var data = '';

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
    cb(null, data);
  }).on('error', function onError(e) {
    cb(e, null);
  });
};

module.exports = FileLoader;

