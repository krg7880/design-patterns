/** 
Implementation of a binary heap
-- Binary Tree (Structure)
-- Heap property (Parent priority <= to child nodes)
*/
var BinaryHeap = function(comparator) {
  this.heap = [];
  this.comparator = comparator;
  this.length = 0;
};

BinaryHeap.prototype.size = function() {
  return this.length;
};

BinaryHeap.prototype.isEmpty = function() {
  return this.length < 1;
};

BinaryHeap.prototype.peek = function() {
  return this.heap;
};

/**
Returns the left child index of parent n

@param {Number} idx Parent Index
@return {Number} index of the child
*/
BinaryHeap.prototype.getLeftChildIndex = function(idx) {
  return Math.floor((idx << 1));
};

/**
Returns the left child element at position n

@param {Number} idx Index of element to return
@return {Object} Node element
*/
BinaryHeap.prototype.getLeftChild = function(idx) {
  return this.heap[this.getLeftChildIndex(idx)];
};

/**
Returns the right child index of parent n

@param {Number} idx Index of parent element
@return {Number} The index of the child element
*/
BinaryHeap.prototype.getRightChildIndex = function(idx) {
  return Math.floor((idx << 1) + 1);
}

/**
Returns the right child element at position n

@param {Number} idx The index of the child element
@param {Object} Node element
*/
BinaryHeap.prototype.getRightChild = function(idx) {
  return this.heap[this.getRightChildIndex(idx)];
};

/**
Returns the parent index for element at position n

@param {Number} idx Index of child element
@return {Number} Index of parent element
*/
BinaryHeap.prototype.getParentIndex = function(idx) {
  return Math.floor((idx >> 1));
};

BinaryHeap.prototype.getParent = function(idx) {
  return this.heap[this.getParentIndex(idx)];
};

BinaryHeap.prototype.enqueue = function(item) {
  this.heap[(this.length++)] = item;
  this.bubbleUp(this.length - 1);

  return this;
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

  for (var i=0; i<this.length; i++) {
    if (this.heap[i] === node) {
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

    if (score >= this.comparator(parent)) {
      break;
    }

    this.heap[parentIdx] = item;
    this.heap[idx] = parent;
    idx = parentIdx;
  }

  return this;
};

BinaryHeap.prototype.dequeue = function() {
  var item = this.heap[0];
  var end = this.heap.pop();
  this.length -= 1;

  if (this.length > 0) {
    this.heap[0] = end;
    this.sink(0);
  }

  return item;
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
  var left = 0;
  var rigth = 0;

  while(true) {
    // reinitialize to null
    swap = null;

    // get child indexes
    right = this.getRightChildIndex(idx); 
    left = this.getLeftChildIndex(idx);

    // reinitialize scores to NaN
    rightChildScore = NaN;
    leftChildScore = NaN;

    if (left < len) {
      leftChild = this.heap[left];
      leftChildScore = this.comparator(leftChild);

      // swap the item with the left child
      if (leftChildScore < score) {
        swap = left;
      }
    }

    if (right < len) {
      rightChild = this.heap[right];
      rightChildScore = this.comparator(rightChild);

      if (rightChildScore < (isNaN(leftChildScore) ? score : leftChildScore)) {
        swap = right;
      }
    }

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

///// TEST ////
var heap = new BinaryHeap(function(task) { 
  return task.priority;
});

heap.enqueue({
  'task': 1
  ,priority: 10
});

heap.enqueue({
  'task': 2
  ,priority: 6
});

heap.enqueue({
  'task': 3
  ,priority: 9
});

var node = {
  'task': 4
  ,priority: 7
};

heap.enqueue(node);

heap.remove(node);

heap.enqueue(node);

while(heap.size() > 0) {
  console.log('tasks', heap.dequeue());
};

console.log('size', heap.size());

