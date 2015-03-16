/**
 * Map Implementation
 * @constructor
 */
function Map() {
    this.map = {};
    this.length = 0;
};

Map.prototype.size = function() {
  return this.length;
};

Map.prototype.isEmpty = function() {
    return (this.size() <= 0);
};

Map.prototype.containsKey = function(key) {
    return this.map.hasOwnProperty(key);
};

Map.prototype.containsValue = function(value) {
    var found = false;
    for (var i in this.map) {
        if (this.map[i] === value) {
            found = true;
            break;
        }
    }

    return found;
};

Map.prototype.get = function(key) {
    return this.map[key];
};

Map.prototype.put = function(k, v) {
    var previous = this.map[k];
    this.map[k] = v;
    this.length++;
    return previous;
};

Map.prototype.putAll = function(map) {
    if (!(map instanceof Map)) {
        throw new TypeError('Map expected');
    }

    for (var i in map) {
        this.map[i] = map[i];
    }

    // find a better solution if possible :-)
    this.length = Object.keys(this.map).length;
}

Map.prototype.remove = function(k) {
    var previous = this.map[k];
    this.map[k] = null;
    delete this.map[k];
    this.length--;
    return previous;
};

Map.prototype.clear = function() {
    this.map = {};
    this.length = 0;
};