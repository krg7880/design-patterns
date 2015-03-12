var Node = function() {
    this.data = null;
    this.next = null;
};

var Stack = function() {
    this.first = null;
};

Stack.prototype.hasContent = function() {
    return (this.first !== null);
}

Stack.prototype.push = function(item) {
    var node = new Node();
    node.data = item;

    if (this.first === null) {
        this.first = node;
        return this;
    }

    var old = this.first;
    this.first = node;
    this.first.next = old;
    return this;
};

Stack.prototype.pop = function() {
    if (!this.hasContent()) {
        return null;
    }

    var first = this.first;
    this.first = first.next;
    first.next = null;
    return first.data;
 };

/**
 * Test it!
 *
 * @type {Stack}
 */
var stack = new Stack();
var len = 1000000;
for (var i=0; i<len; i++) {
    stack.push("foo_" + i);
}

while(stack.hasContent()) {
    stack.pop();
}