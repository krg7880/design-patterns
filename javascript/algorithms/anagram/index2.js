/**
Slightly modified version
of the anagram found on Stackoverflow.
@see: http://stackoverflow.com/a/16577324/1707987

- Replaced str.substr with str.charAt
- Cached the length of the first string
- Check the cached len against match counter
*/
function anagram(a, b) {
  if (typeof a === 'string' && typeof b === 'string' && a === b) {
    return true;
  }
 
  if (a.length !== b.length) {
    return false;
  }
 
  var c = null;
  var i = 0;
  var n = a.length;
  var matches = 0;
  var idx = 0;
 
  while(i < n) {
 
    c = a.charAt( (i += 1) );
 
    idx = b.indexOf(c);
 
    if (idx < 0) {
      return false;
    }
 
    s2 = b.substr(0, idx) + b.substr( (idx += 1) );
 
    matches += 1;
  }
 
  return matches === n;
}
