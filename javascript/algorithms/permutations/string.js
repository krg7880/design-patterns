var Permutation = function() {
  this.used = [];
  this.permutations = [];
  this.data = null;
  this.length = 0;
};

Permutation.prototype.run = function(data) {
  var len = data.length;
  var current = null;

  for (var i=0; i<len; i++) {
    current = data.splice(i, 1)[0];

    this.used.push(current);

    if (data.length === 0) {
      this.length++;
      this.permutations.push(this.used.slice());
    }

    this.run(data);

    data.splice(i, 0, current);

    this.used.pop();
  }
}

Permutation.prototype.permutate = function(data) {
  if (typeof data === 'string') {
    data = data.split('');
  } else if (!(data instanceof Array)) {
    return  [];
  }
  
  this.data = data;

  this.run(data);

  return this;
};

Permutation.prototype.results = function() {
  return this.permutations;
}

Permutation.prototype.count = function() {
  return this.length;
};

// Permutate an array of strings...
var permutation = new Permutation();
permutation.permutate(["a", "b", "c", "d"]);

console.log('results', permutation.results());
console.log('count',permutation.count())