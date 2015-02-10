var SponsoredFactory = require('./sponsored.factory');
var ParentFactory = require('./parent.factory');

/**
Object represents a channel. Note the use
of the flyweight objects to avoid data
duplication and redundancy.
*/
var Channel = function(channel) {
  var id = parseInt(channel.id, 10);
  var displayName = channel.name;
  var publishUrl = channel.publish_url;

  // flyweight factories used for sponsor and parent data
  // as these may be redundant per channel
  var sponsored = SponsoredFactory.get(channel.sponsored, channel.sponsoredBy);
  var parent = ParentFactory.get(channel.parent_id, channel.parent_url, channel.parent_name);

  return {
    getId: function() {
      return id;
    },
    getDisplayName: function() {
      return displayName;
    },
    getPublishUrl: function() {
      return publishUrl
    },
    getIsSponsored: function() {
      return sponsored.sponsored;
    },
    getSponsoredBy: function() {
      return sponsored.sponsoredBy;
    },
    getParentId: function() {
      return parent.parentId;
    },
    getParentName: function() {
      return parent.parentName;
    },
    getParentUrl: function() {
      return parent.parentUrl;
    }
  }
};

module.exports = Channel;