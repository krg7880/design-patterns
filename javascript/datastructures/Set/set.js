'use strict';

var path = require('path');
var Iterator = require( path.normalize(path.dirname('.') + '/../../util/iterator.js'));

var Set = function(set) {
  if (!(set instanceof Array)) {
    throw new TypeError('The provided set should be an array!');
  }

  this.data = new Iterator(this.filter(set)) || new Iterator();

  return {
    data: this.data
    ,add: this.add
    ,has: this.has
    ,clear: this.clear
    ,diff: this.diff
    ,union: this.union
    ,clone: this.clone
    ,hasNext: this.data.hasNext
    ,next: this.data.next
    ,size: this.data.size
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

  this.data.add(data);
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
  return this.data.contains(data);
};

Set.prototype.clear = function() {
  this.data = new Iterator();
};

Set.prototype.hasNext = function() {
  return this.data.hasNext()
};

Set.prototype.next = function() {
  return this.data.next();
};

Set.prototype.clone = function() {
  return new Set(this.data.collection.slice());
};

/**
Returns the difference from comparing
two Set collections.

@returns {Array} Array of difference.
*/
Set.prototype.diff = function(set) {
  var len = 0;
  var diff = [];
  var tmp = this.clone();

  while(tmp.data.hasNext()) {
    var item = tmp.data.next();
    if (!set.has(item)) {
      diff[len++] = item;
    }
  }

  return diff;
};


/**
Returns a new Set with distint elements
from both collections
*/
Set.prototype.union = function(set) {
  var index = 0;
  var tmp = this.clone();

  while(set.data.hasNext()) {
    var item = set.data.next();
    if (!tmp.has(item)) {
      tmp.add(item);
    } 
  }

  return tmp;
};

var s = new Set([1, 3, 4, 5]);
var b = new Set([2, 5, 10]);

var union = b.union(s);
var diff = s.diff(b);

console.log('diff', diff);
console.log('union', union.data.collection.sort());
