/**
 * UnionFind Algorithm to solve
 * dynamic connectivity problem.
 *
 * Data structure:
 *
 * - Weighted Compressed Forest Tree
 *
 * Create a forest tree where
 * connected items are parent->child
 * relationships.
 *
 * Unconnected objects is the root
 * of it's own tree.
 *
 * This is a weighted tree where
 * we keep track of the number
 * of child elements each tree
 * has.
 *
 * When two trees are connected,
 * we put the tree with the least
 * number of connections as
 * child of the larger tree.
 *
 * This avoids having really tall
 * trees where most items are near
 * the root of the tree.
 *
 * Applications:
 * - Graphics processing
 * - Image processing
 * - Physics
 * - Percolation
 * -- Model for physical systems
 * -- n-by-n grid
 * -- Each site is open with probability p (or blocked with probability 1-p)
 * -- Systems percolates IFF top and bottom are connected by open sites
 *
 * @NOTE THIS IS NOT USABLE YET
 * @param int
 * @constructor
 */
var UnionFind = function(int) {
    /**
     * @type {Array}
     */
    this.values = int ? new Array(int) : [];

    /**
     * Keeps track of the tree size
     * @type {Array}
     */
    this.size = this.values;
};

UnionFind.prototype.root = function(p) {
    var i = null;
    while ((i !== this.values[p])) {
        // set the root of the each element which
        // makes finding the root faster.
        this.values[p] = this.values[this.values[i]];

        i = this.values[i];
    }

    return i;
};

/**
 * Implements a quick-find algorithm
 * to locate an item.
 *
 * Complexity: O(1)
 */
UnionFind.prototype.find = function(p) {
    return (this.values[p])
};

/**
 * Joins two objects together
 *
 * Complexity: O(lg N)
 *
 * @return UnionFind
 */
UnionFind.prototype.union = function(p, q) {
    var i = this.root(p);
    var j = this.root(q);

    if (i === j) {
        return;
    }

    if (this.size[i] < this.size[j]) {
        this.values[i] = j; this.size[j] += this.size[i];
    } else {
        this.values[j] = i; this.size[i] += this.size[j];
    }
    this.values[i] = j;
};

/**
 * Checks if p is connected to q
 *
 * @param p
 * @param q
 * @returns {boolean}
 */
UnionFind.prototype.connected = function(p, q) {
    return (this.root(p) === this.root(q));
};