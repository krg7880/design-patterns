var Observer = function() {};

Observer.prototype = {
  update: function(data) {
    console.log('Got an update');
  }
};

module.exports = Observer;