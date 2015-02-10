/**
Scoped function to keep
certain properties private
and expose APIs for mutable
properties.

In this example, name can
be changed, but version 
cannot be. 

To expose properties and methods
publicly, add them to the returned
object
*/
var scoped = (function() {
  var name = 'scoped';

  var version = '1.0.0';

  var internal = function() {
    console.log('I am only accessible internally!');
  };

  return {
    // returns the name 
    name: function() {
      return name;
    },

    // returns the version
    version: function() {
      return version;
    },

    // exposed interface for changing name
    setName: function(newName) {
      name = newName;
    },

    callInternal: function() {
      internal();
    }
  };
})();

console.log(scoped.name());
console.log(scoped.version());
scoped.setName('new name');
console.log(scoped.name());
scoped.callInternal();