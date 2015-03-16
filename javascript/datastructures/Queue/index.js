var LinkedList = require(__dirname + '/../LinkedList/');

function FastQueue() {
    var queue = new LinkedList();

    this.size = function() {
        return queue.size();
    };

    this.enqueue = function(item) {
        queue.add(item);
    };

    this.dequeue = function() {
        var item = queue.removeAt(0);

        return item;
    };

    this.isEmpty = queue.isEmpty;

    this.requeue = function(item) {
        //if (queue.size() > 0) {
        //    var item = queue.peek();
        //    this.enqueue({task: item, position: (item.position-1)});
        //} else {
        //    this.enqueue(item);
        //}
    };

    this.dump = function() {
        return queue.start;
    }
}

module.exports = FastQueue;

var max = 10;
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

/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
function Queues(){

    // initialise the queue and offset
    var queue  = [];
    var offset = 0;

    // Returns the length of the queue.
    this.size = function(){
        return (queue.length - offset);
    }

    // Returns true if the queue is empty, and false otherwise.
    this.isEmpty = function(){
        return (queue.length == 0);
    }

    /* Enqueues the specified item. The parameter is:
     *
     * item - the item to enqueue
     */
    this.enqueue = function(item){
        queue.push(item);
    }

    /* Dequeues an item and returns it. If the queue is empty, the value
     * 'undefined' is returned.
     */
    this.dequeue = function(){

        // if the queue is empty, return immediately
        if (queue.length == 0) return undefined;

        // store the item at the front of the queue
        var item = queue[offset];

        // increment the offset and remove the free space if necessary
        if (++ offset * 2 >= queue.length){
            queue  = queue.slice(offset);
            offset = 0;
        }

        // return the dequeued item
        return item;

    }

    /* Returns the item at the front of the queue (without dequeuing it). If the
     * queue is empty then undefined is returned.
     */
    this.peek = function(){
        return (queue.length > 0 ? queue[offset] : undefined);
    }

}


var q = new FastQueue();
//var q = new Queues();

var max = 30000000;
//var q = [];
for (var i=0; i<max; i++) {
    q.enqueue(i);
    //q.push(i);
}

//console.log('size', q.size());
//console.log('dump', q.dump());

//process.exit();

while(!q.isEmpty()) {
    q.dequeue();
}