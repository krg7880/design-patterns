var memoize = function (fn, results) {
    var memo = [0, 1];

    // closure
    return function compute(n) {
        var current = memo[n];

        // avoid false truthy test by ensuring type if a number
        // instead of !current as it could be 0|1
        if (typeof current !== 'number') {
            current = fn(compute, n);
            memo[n] = results[results.length] = current;
        }

        return current;
    };
};

var cb = function(fn, n) {
    var results = fn(n - 1) + fn( n - 2 );
    return results;
};

var sequence = [];
var printSequence = memoize(cb, sequence);
printSequence(10);

console.log(sequence);
