'use strict';

var Fibonacci = function Fibonacci() {
    if (!(this instanceof Fibonacci)) {
        return new Fibonacci();
    }

    this.memo = null;
};

/**
 * Resets the memo before each run
 */
Fibonacci.prototype.reset = function reset() {
    this.memo = [0, 1];
};

/**
 * Generates a sequence of fibonacci numbers
 * computed to nth upper bound.
 *
 * @return void
 */
Fibonacci.prototype.generate = function generate(n) {
    this.reset();

    var self = this;
    var idx = 0;

    return run.call(this, n);
};

/**
 * Returns the sequence of Fibonacci numbers computed
 * to nth bound.
 *
 * @return void
 */
Fibonacci.prototype.getSequence = function getSequence() {
    return this.memo;
};

/*** Private Methods ***/
var compute = function(fn, n) {
    var results = fn(n - 1) + fn( n - 2 );
    return results;
};

var run = function run(n) {
    var current = this.memo[n];
    if (typeof(current) !== 'number') {
        current = compute(run.bind(this), n);
        this.memo[n] = current;
    }

    return current;
};

var fib = new Fibonacci();
var max = fib.generate(10);
console.log('sequence: ', fib.getSequence());
console.log('max: ', max);


// var memoize = function (fn, results) {
//     var memo = [0, 1];

//     // closure
//     return function compute(n) {
//         var current = memo[n];

//         // avoid false truthy test by ensuring type if a number
//         // instead of !current as it could be 0|1
//         if (typeof current !== 'number') {
//             current = fn(compute, n);
//             memo[n] = results[results.length] = current;
//         }

//         return current;
//     };
// };

// var compute = function(fn, n) {
//     var results = fn(n - 1) + fn( n - 2 );
//     return results;
// };

// var sequence = [];
// var printSequence = memoize(compute, sequence);
// printSequence(10);
// console.log(sequence);
