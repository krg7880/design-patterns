var LinkedList = require(__dirname + '/../LinkedList/');

function Queue() {
    var queue = new LinkedList();

    this.size = function() {
        return queue.size();
    };

    this.enqueue = function(item) {
        queue.add(item);
    };

    this.dequeue = function() {
        return queue.shift();
    };

    this.isEmpty = function() {
       return queue.isEmpty();
    };

    this.unshift = function(item) {
        queue.addFirst(item);
    };

    this.dump = function() {
        return queue.start();
    };
}

module.exports = Queue;


/**
 * Quick Test
 * @TODO Move tests to proper testing
 * framework.
 * @type {Queue}
 */
var q = new Queue();
var max = 30000000;
for (var i=0; i<max; i++) {
    q.enqueue(i);
}

while(!q.isEmpty()) {
    q.dequeue();
}
