'use strict';

var path = require('path');
var Iterator = require( path.normalize(path.dirname('.') + '/../../util/iterator.js'));

var Set = function(set) {
  if (!(set instanceof Array)) {
    throw new TypeError('The provided set should be an array!');
  }

  this.collection = new Iterator(this.filter(set)) || new Iterator();

  this.size = (function() {
    return this.collection.size();
  }.bind(this))();

  return {
    collection: this.collection
    ,add: this.add
    ,has: this.has
    ,clear: this.clear
    ,diff: this.diff
    ,union: this.union
  }
};


/**
Filter the initial collection for duplicate items

@param {Array} set Array of elements to filter
for duplicate elements.
@return {Array}
*/
Set.prototype.filter = function(collection) {
  var tmp = [];
  var len = collection.length;
  var index = 0;

  for (var i=0; i<len; i++) {
    if (tmp.indexOf(collection[i]) < 0) {
      tmp[index++] = collection[i];
    }
  }

  return tmp;
};

/**
Add a new element to the collection
- If the collection is an object,
the property is added as key=>value

In the case of this Set class,
the collection is of type array

@param {mixed} data 
@return {boolean} True if the element was added
  or false otherwise.
*/
Set.prototype.add = function(data) {
  if (this.has(data)) {
    return false;
  }

  this.collection.add(data);
  return true;
};

/**
Check if this data element already
exists in the collection.

@param {mixed} data
@return {boolean} True if the element exists
  in the collection or false otherwise.
*/
Set.prototype.has = function(data) {
  return this.collection.contains(data);
};

Set.prototype.clear = function() {
  this.collection = new Iterator();
};

/**
Returns the difference from comparing
two Set collections.

@returns {Array} Array of difference.
*/
Set.prototype.diff = function(set) {
  var len = 0;
  var diff = [];
  var tmp = this.collection.clone()
  while(tmp.hasNext()) {
    var item = tmp.next();
    if (!set.has(item)) {
      diff[len++] = item;
    }
  }

  return diff;
};

Set.prototype.union = function(set) {
  var tmp = [];
  var index = 0;
  var tmp = set.collection;

  while(tmp.hasNext()) {
    var item = tmp.next();
    if (!this.has(item)) {
      tmp[index++] = item;
    } 
  }

  return tmp.collection;
};

var s = new Set([1, 3, 4, 5, {}]);
var b = new Set([2, 3, 6, 5, {name: 'food'}]);

var union = s.union(b);
var diff = s.diff(b);

console.log('diff', diff);
console.log('union', union);
