/**
Insertion Sort Algorithm

I N S E R T I O N S O R T
I N S E R T I O N S O R T
I N S E R T I O N S O R T
E I N S R T I O N S O R T
E I N R S T I O N S O R T
E I N R S T I O N S O R T
E I I N R S T O N S O R T
E I I N O R S T N S O R T
E I I N N O R S T S O R T
E I I N N O R S S T O R T
E I I N N O O R R S S T T
*/
 
function swap(collection, a, b) {
  var ta = collection[a];
  collection[a] = collection[b];
  collection[b] = ta;
}
 
/**
Sorts an array of elements

@param {Array} collection
@return {Array}
*/
function insertion_sort(collection) {
  var i,j = 0; 
  var n = collection.length;
 
  // base case
  if (n === 1) {
    return collection;
  }
 
  for (var i=1; i<n; i++) {
    j = i;
 
    while((j>0) && collection[j] < collection[(j-1)]) {
      swap(collection, j, (j-1));
      j -= 1;
    }
  }
 
  return collection;
}
 
// Test it!
var names = ["Kate", "Ann", "Ricky", "Paul", "Mike", "Rose"];
console.log(insertion_sort(names));
 
var age = [100, 50, 200, 56, 76, 3];
console.log(insertion_sort(age));
 
/** Running in Node.JS **/
// time node insertion_sort.js 
// [ 'Ann', 'Kate', 'Mike', 'Paul', 'Ricky', 'Rose' ]
// [ 3, 50, 56, 76, 100, 200 ]
// real	0m0.066s
// user	0m0.046s
// sys	0m0.020s
