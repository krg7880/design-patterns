var Observer = function(data) {
  this.name = data.name;
};

Observer.prototype = {
  update: function(data) {
    console.log('Got an update');
  }
};

module.exports = Observer;