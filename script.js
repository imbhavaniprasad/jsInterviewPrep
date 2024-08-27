//sliding window
//longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    //2 indices,start,end
    //first check the len of word without repeat
    //move start till next to the repeated letter of the end
    let start = 0, end = 0, len = s.length;
    let map = new Map();
    let maxLen = 0;
    while (end < len) {
        if (map.has(s[end])) {
            maxLen = Math.max(maxLen, end - start);
            while (s[start] != s[end]) {
                map.delete(s[start])
                start++;
            }
            start++;
        }
        map.set(s[end], 1);
        end++;
    }
    return Math.max(maxLen, end - start);
};