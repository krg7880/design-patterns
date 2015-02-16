'use strict';

var path = require('path');
var Iterator = require( path.normalize(path.dirname('.') + '/../../util/iterator.js'));

var Set = function(set) {
  if (!(set instanceof Array)) {
    throw new TypeError('The provided set should be an array!');
  }

  this.collection = new Iterator(this.filter(set)) || new Iterator();

  // returns the size of the collection
  this.size = (function() {
    return this.collection.size();
  }.bind(this))();
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

var s = new Set([1, 3, 4, 5, {}]);

console.log('has 1', s.has(1));
console.log('add 1',s.add(1));
console.log('add 1',s.add(1));
console.log('add object', s.add({}))
console.log('add kirk', s.add('kirk'));
console.log('add kirk again', s.add('kirk'));
console.log('get size', s.size);