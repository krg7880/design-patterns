'use strict';

var path = require('path');
var Iterator = require( path.normalize(path.dirname('.') + '/../../util/iterator.js'));

var Set = function(set) {
  if (!(set instanceof Array)) {
    throw new TypeError('The provided set should be an array!');
  }

  var data = new Iterator(this.filter(set)) || new Iterator();

  return {
    add: function(data) {
      if (this.has(data)) {
        return false;
      }

      data.add(data);
      return true;
    }

    ,has: function(item) {
      return data.contains(item);
    }

    ,clear: function() {
      data = new Iterator();
    }

    ,clone: function() {
      return new Iterator(data.collection.slice());
    }

    ,diff: function(set) {
      var len = 0;
      var diff = [];
      var tmp = this.clone();

      while(tmp.hasNext()) {
        var item = tmp.next();
        if (!set.has(item)) {
          diff[len++] = item;
        }
      }

      return diff;
    }

    ,union: function(set) {
      var index = 0;
      var tmp = this.clone();

      while(set.hasNext()) {
        var item = set.next();
        if (!tmp.has(item)) {
          tmp.add(item);
        } 
      }

      return tmp;
    }

    ,hasNext: data.hasNext
    ,next: data.next
    ,size: data.size
    ,sort: data.collection.sort
  }
};


/**
Filter the initial collection for duplicate items

@param {Array} set Array of elements to filter
for duplicate elements.
@return {Array}
*/
Set.prototype.filter = function(data) {
  var tmp = [];
  var len = data.length;
  var index = 0;

  for (var i=0; i<len; i++) {
    if (tmp.indexOf(data[i]) < 0) {
      tmp[index++] = data[i];
    }
  }

  return tmp;
};

var s = new Set([1, 3, 4, 5]);
var b = new Set([2, 5, 10]);

var union = b.union(s);
var diff = s.diff(b);

console.log('diff', diff);
console.log('union', union);
