var singleton = (function() {
  var _instance;

  // there will only be one instance of "single"
  var single = function() {
    function internal() {
      console.log('I am a private method!');
    }

    var _random = Math.random();
    var _internal = 'I am a private variable';

    // public interface
    return {
      pubVar: 'I am a public variable',

      pub: function() {
        console.log('I am public method');
      },

      random: function() {
        console.log('random', _random);
      }
    };
  };

  // public interface
  return {
    
    // returns an instance of single()
    get: function() {
      if (!_instance) {
        _instance = single();
      }

      return _instance;
    }
  }
})();

singleton.get().random();
singleton.get().random();