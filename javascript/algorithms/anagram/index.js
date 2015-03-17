'use strict';

function anagram(str1, str2) {
    // base case
    if (typeof str1 === 'undefined' || typeof str2 === 'undefined') {
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

/**
 Determines if the strings provided
 are anagrams.

 Complexity: O(2n)

 @param {String} a
 @param {String} b
 @return {Boolean}
 */
function anagramHashmap(a, b) {
    // base case
    if (typeof a === 'undefined' || typeof b === 'undefined') {
        return false;
    }

    if (a === b) {
        return true;
    }

    a = a.split('');
    b = b.split('');

    var map = {};
    var len = a.length;
    var len2 = b.length;
    var isAnagram = true;
    var current1 = null;
    var current2 = null;

    for (var i=0; i<len; i++) {
        current1 = a[i];
        map[current1] = (map[current1]) ? map[current1] += 1 : 1;
    }

    for (var j=0; j<len2; j++) {
        current2 = b[j];
        if (!map[current2]) {
            isAnagram = false;
            break;
        } else {
            map[current2]--;
        }
    }

    return isAnagram;
}