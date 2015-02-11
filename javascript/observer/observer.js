var Observer = function(data) {
  this.name = data.name;
};

Observer.prototype = {
  update: function(ctx) {
    console.log('Got an update', ctx);
  }
};

module.exports = Observer;