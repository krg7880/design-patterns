/**
 * @see https://www.hackerrank.com/contests/javascript-week2/challenges/day-1-loops
 * Submissions will no longer be placed on the leaderboard. 
 * You may still attempt this problem for practice.
 *
 * Objective 
 * In this challenge, we use for, while, and do-while loops on a given string.
 * 
 * Task
 * Given string ss composed of lowercase letters [a-z][a-z], 
 * print all the vowels together, followed by all the consonants, 
 * in the order that they appear in the string.
 *
 * The code for handling the input is provided for you in the editor. 
 * You have to complete the vowelsAndConsonantsvowelsAndConsonants function.
 *
 * Note: Vowels are a, e, i, o and u.
 * 
 * Sample Input
 * javascriptloops
 * 
 * Sample Output 
    a
    a
    i
    o
    o
    j
    v
    s
    c
    r
    p
    t
    l
    p
    s
 */
function vowelsAndConsonants(s) {
  var vowels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};
  var str_array = s.split("");
  var vowels_array = [];
  var constants_array = [];
  var char = null;

  while(str_array.length > 0) {
    char = str_array.shift();
    if (vowels[char]) {
      vowels_array.push(char);
    } else {
      constants_array.push(char);
    }
  }
  
  return [].concat(vowels_array, constants_array).join('\n');
}

var max = 1000000;
var res = '';
for (var i=0; i<max; i++) {
  res = vowelsAndConsonants('javascriptloops');
}

console.log(res);

