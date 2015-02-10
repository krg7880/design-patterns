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
    getName: function() {
      return name;
    },

    // returns the version
    getVersion: function() {
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


console.log('Module name', scoped.getName());

console.log('Module version', scoped.getVersion());

scoped.setName('new name');

console.log(scoped.getName());

scoped.callInternal();