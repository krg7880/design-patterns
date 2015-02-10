var Channel = require('./channel');

/**
Singleton collection for storing references
to channels as well as their children, if any.

The object makes it easy to look up a channel by 
name as well as locate children of a parent
channel.
*/
var ChannelsCollection = (function() {
  var channels = {};
  var childrenIds = {};
  var count = 0;

  return {
    add: function(channel) {
      var id = channel.id;
      if (!channels[id]) {
        channels[id] = new Channel(channel);
        count += 1;
      }
    },

    get: function(id) {
      return channels[id];
    },

    getChildrenIds: function(parentId) {
      if (childrenIds[parentId]) {
        return childrenIds[parentId];
      }

      var item = null;
      var _children = [];
      for (var channel in channels) {
        item = channels[channel];
        if (item && item.getParentId() === parentId) {
          _children.push(item.getId());
        }
      }

      if (_children.length > 0) {
        childrenIds[parentId] = _children;
      }

      return _children;
    },

    getChildren: function(ids) {
      var len = ids.length;
      var tmp = {};
      for (var i=0; i<len; i++) {
        tmp[ids[i]] = this.get(ids[i]);
      }

      return tmp;
    },

    count: function() {
      return count;
    }
  }
})();

module.exports = ChannelsCollection;