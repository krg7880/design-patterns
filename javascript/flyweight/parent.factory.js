var Parent = require('./parent');

/**
Singleton Factory for building flyweight parent
objects.

*/
var ParentFactory = (function() {
  var parents = {};
  var count = 0;

  return {
    get: function(parentId, parentUrl, parentName) {
      if (!parents[parentId]) {
        parents[parentId] = new Parent(parentId, parentUrl, parentName);
        count += 1;
      }

      return parents[parentId];
    },
    count: function() {
      return count;
    }
  }
})();

module.exports = ParentFactory;