/** 
Implementation of a binary heap (min heap)
-- Binary Tree (Structure)
-- Heap property (Parent priority <= to child nodes)
*/

var splice = function(arr, idx) {
  var len = array.length;
  var count = 0;
  var tmp = [];

  for (var i=0; i<len; i++) {
    if (i !== idx) {
      tmp[count++] = arr[i];
    }
  }

  return tmp;
};

var BinaryHeap = function(comparator, max) {
  this.heap = [];
  this.comparator = comparator;
  this.length = 0;
};

BinaryHeap.prototype.size = function() {
  return this.length;
};

BinaryHeap.prototype.isEmpty = function() {
  return (this.length < 1);
};

BinaryHeap.prototype.peek = function() {
  return (this.size() > 0) ? this.heap[0] : null;
};

/**
Returns the parent index for element at position n

@param {Number} idx Index of child element
@return {Number} Index of parent element
*/
BinaryHeap.prototype.getParentIndex = function(idx) {
  return ((idx >> 1) | 0); // floor the value
};

/**
Returns the left child index of parent n

@param {Number} idx Parent Index
@return {Number} index of the child
*/
BinaryHeap.prototype.getLeftChildIndex = function(idx) {
  return (((idx << 1)) | 0); // floor the value
};

/**
Returns the right child index of parent n

@param {Number} idx Index of parent element
@return {Number} The index of the child element
*/
BinaryHeap.prototype.getRightChildIndex = function(idx) {
  return (((idx << 1) + 1) | 0); // floor the value
}

/**
Returns the left child element at position n

@param {Number} idx Index of element to return
@return {Object} Node element
*/
BinaryHeap.prototype.getLeftChild = function(idx) {
  return this.heap[this.getLeftChildIndex(idx)];
};

/**
Returns the right child element at position n

@param {Number} idx The index of the child element
@param {Object} Node element
*/
BinaryHeap.prototype.getRightChild = function(idx) {
  return this.heap[this.getRightChildIndex(idx)];
};

BinaryHeap.prototype.getParent = function(idx) {
  return this.heap[this.getParentIndex(idx)];
};

BinaryHeap.prototype.enqueue = function(item) {
  this.heap[this.length++] = item;
  this.bubbleUp(this.length - 1);

  return this;
};

BinaryHeap.prototype.inRange = function(idx) {
  return (idx >= 0 && idx < this.size());
};

BinaryHeap.prototype.getAt = function(idx) {
  return (this.size() > 0 && this.inRange(idx)) ? this.heap[idx] : null;
};

/**
Removes the given node from the queue

@param {Object} item Item to remove
@return {Object} this
*/
BinaryHeap.prototype.remove = function(item) {
  if (typeof item === 'undefined') {
    return null;
  }

  for (var i=0; i<this.size(); i++) {
    if (this.heap[i] === item) {
      var end = this.heap.pop();
      this.heap.slice(i, 1);
      this.length--;
      this.heap[i] = end;
      this.bubbleUp(i);
      this.sink(i);
      break;
    }
  }

  return this;
};

BinaryHeap.prototype.bubbleUp = function(idx) {
  var item = this.heap[idx];
  var score = this.comparator(item);
  while (idx > 0) {
    // get the parent of the current element
    var parent = this.getParent(idx);
    var parentIdx = this.getParentIndex(idx);

    // if the item score is greater than
    // it's parent, break out!
    if (score >= this.comparator(parent)) {
      break;
    }

    // swap parent with child element
    this.heap[parentIdx] = item;
    this.heap[idx] = parent;

    // keep it moving
    idx = parentIdx;
  }

  return this;
};

BinaryHeap.prototype.dequeue = function() {
  var item = this.peek();

  if (this.size() > 0) { 
    this.heap[0] = this.heap.pop();
    this.length -= 1;
    this.sink(0);
  }

  return item;
};

BinaryHeap.prototype.swap = function(a, b) {
  var tmp = this.heap[b];
  this.heap[b] = this.heap[a];
  this.heap[a] = tmp;
  return this;
};

BinaryHeap.prototype.sink = function(idx) {
  var len = this.length;
  var item = this.heap[idx];
  var score = this.comparator(item);
  var leftChild = null;
  var rightChild = null;
  var leftChildScore = NaN;
  var rightChildScore = NaN;
  var swap = null;
  var leftIndex= 0;
  var rigthIndex = 0;

  while(true) {
    // reinitialize to null
    swap = null;

    // get child indexes
    rightIndex = this.getRightChildIndex(idx); 
    leftIndex = this.getLeftChildIndex(idx);

    // reinitialize scores to NaN
    rightChildScore = NaN;
    leftChildScore = NaN;

    if (leftIndex < len) {
      leftChild = this.getAt(leftIndex);
      leftChildScore = this.comparator(leftChild);

      // swap the item with the left child
      if (leftChildScore < score) {
        swap = leftIndex;
      }
    }

    if (rightIndex < len) {
      rightChild = this.getAt(rightIndex)
      rightChildScore = this.comparator(rightChild);

      if (rightChildScore < (isNaN(leftChildScore) ? score : leftChildScore)) {
        swap = rightIndex;
      }
    }

    // nothing to swap, so exit!
    if (swap === null) {
      break;
    }

    // move the swappable element into the current index position
    this.heap[idx] = this.heap[swap];

    // move the item into the swappable element's position...
    this.heap[swap] = item;

    // make the current index the swappable element's index
    idx = swap;
  }
};

module.exports = BinaryHeap;

//var max = 10;
//
//// /// TEST ////
//var heap = new BinaryHeap(function(task) {
//  return task.priority;
//});
//
//for (var i=0; i<max; i++) {
//  heap.enqueue({
//    task: i
//    ,priority: i
//  });
//}
//
//while(heap.size() > 0) {
//   console.log(heap.dequeue());
//};
