function permutations(perm, used, data) {
  var len = data.length;

  // stores the current character 
  // per iteration
  var current = null;

  for (var i=0; i<len; i++) {

    current = data.splice(i, 1)[0];

    // add current to used stack
    used.push(current);

    if (data.length === 0) {
      perm.push(used.slice());
    }

    // recursively permutate the
    // data...
    permutations(perm, used, data);

    // replace char at i with "current"
    data.splice(i, 0, current);

    used.pop();
  }

  return perm;
}

console.log(p([], [], ["a", "b", "c", "d"]));