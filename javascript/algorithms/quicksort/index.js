/**
Quickly sorts elements using recursion

@param {Array} collection
@return {Array}
*/
function quicksort(collection) {
  var i = 1;
  var n = collection.length;
  // first element of the collection 
  // used to test other entries against.
  var pivot = null;
  var left = [];
  var right = [];
  var current = null;
 
  if (n <= 1) { 
    return collection;
  }
 
  // assign first element of array
  pivot = collection[0];
 
  for (i; i<n; i++) {
    current = collection[i];
    if (current) {
      if (current < pivot) {
        left.push(current);
      } else {
        right.push(current);
      }
    }
  }
 
  // recursively break down the left and 
  // right and sort them
  return quicksort(left).concat(pivot, quicksort(right));
}
 
var names = ["Kate", "Ann", "Ricky", "Paul", "Mike", "Rose"];
console.log(quicksort(names));
 
var age = [100, 50, 200, 56, 76, 3];
console.log(quicksort(age));
