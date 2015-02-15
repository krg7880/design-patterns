var Observer = function(data) {
  this.name = data.name;
  this.id = data.id;
};

Observer.prototype.update = function(ctx) {
  //console.log('Got an update', ctx, this.name, this.id);
};

module.exports = Observer;