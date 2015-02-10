var Sponsored = require('./sponsored');

/**
Factory for building sponsored objects.

If an object already exists with similar
properties, it is reused for one or more
channels. Otherwise, a new object will
be created.
*/
var SponsoredFactory = (function() {
  var sponsors = {};
  var count = 0;

  return {
    get: function(sponsored, sponsoredBy) {
      var key = ((sponsored) ? 't' : 'f');
      key += ((typeof(sponsoredBy) !== 'undefined') ? sponsoredBy : 'none');
      
      if (!sponsors[key]) {
        sponsors[key] = new Sponsored(sponsored, sponsoredBy);
        count += 1;
      }

      return sponsors[key];
    },
    count: function() {
      return count;
    }
  }
})();

module.exports = SponsoredFactory;