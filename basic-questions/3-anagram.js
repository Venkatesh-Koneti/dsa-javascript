/*
    242. Valid Anagram

    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Example 1:

        Input: s = "anagram", t = "nagaram"
        Output: true

    Example 2:

        Input: s = "rat", t = "car"
        Output: false
*/

var isAnagram = function(s, t) {
    // let isAnagram = false
    // if (s.length === t.length) {
    //     isAnagram = true
    // }
    // if (isAnagram) {
    //     for (const char of t) {
    //         if (s.includes(char)) {
    //             s = s.replace(char, "");
    //             isAnagram = true
    //         } else {
    //             isAnagram = false
    //             break;
    //         }
    //     }
    // }

    // return isAnagram

    if (s.length !== t.length) return false;

    const charCounts = new Map()

    for (const char of s){
        const currentCount = charCounts.get(char) || 0
        charCounts.set(char, currentCount + 1)
    }

    for (const char of t) {
        if (!charCounts.has(char)) return false;

        const currentCount = charCounts.get(char)

        const updatedCount = currentCount - 1

        if (updatedCount < 0) return false;

        charCounts.set(char, updatedCount);
    }

    return true;
};

const result = isAnagram("aacc", "ccac")
console.log(result);