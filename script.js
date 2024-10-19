//sliding window

//brute force
// function maxOnesAfterFlip(arr) {
//     // The goal of the algorithm is to find the best subarray (a contiguous portion of the array) to flip so that the total number of 1s in the entire array becomes the highest 
//     let TOTALONES = 0;
//     let MAX = 0; // This will hold the maximum difference of 1s - 0s

//     // Calculate TOTALONES and explore all subarrays
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             TOTALONES++; // Count the total number of 1s
//         }

//         // Initialize COUNT1 and COUNT0 for the current subarray
//         let COUNT1 = 0;
//         let COUNT0 = 0;

//         // Inner loop to check all subarrays starting from i
//         for (let j = i; j < arr.length; j++) {
//             // Count the 1s and 0s in the current subarray after the current substring is flipped
//             if (arr[j] === 1) {
//                 COUNT0++;
//             } else {
//                 COUNT1++;
//             }

//             // Calculate the difference: COUNT1 - COUNT0
//             let difference = COUNT1 - COUNT0;

//             // Update MAX with the maximum difference found
//             MAX = Math.max(MAX, difference);
//         }
//     }

//     // The result is the total number of ones plus the maximum difference
//     return TOTALONES + MAX;
// }


//sliding window , track the best substring so far & store the so far best gain
//reset / modify the window size once we have current gain so far becomes -1
//reason: no reason to go with that substring which doesn't help in gaining so we reset to 0 (just like we forward to 1st index in find max sum subarray)
// Example usage

// function maxOnesAfterFlip(arr) {
//     let totalOnes = 0;
//     let maxGain = 0; // The maximum gain of flipping a substring
//     let currentGain = 0; // Current gain in the sliding window

//     // Calculate initial number of ones
//     for (let num of arr) {
//         if (num === 1) totalOnes++;
//     }

//     // Sliding window to find the best substring to flip
//     for (let i = 0; i < arr.length; i++) {
//         // Treat 1 as -1 (lose a one if flipped) and 0 as +1 (gain a one if flipped)
//         currentGain += arr[i] === 1 ? -1 : 1;

//         // If the current gain is negative, reset it
//         if (currentGain < 0) {
//             currentGain = 0; // currentGain +=1 since the continuing currentGain subarray is of no use so move forward/reset
//         }

//         maxGain = Math.max(maxGain, currentGain);
//     }

//     // The result is total ones + max gain from flipping
//     console.log(totalOnes + maxGain);
// }

// const arr = [1, 0, 0, 1, 0, 1];
// console.log(maxOnesAfterFlip(arr)); // Output: 5

//find substr of size k with unique chars
// var countGoodSubstrings = function (s) {
//     let l = 0;
//     let count = 0;
//     let k = 3;
//     for (let r = k - 1; r < s.length; r++) {
//         let str = s.substring(l, r + 1);
//         let set = new Set(str.split(""));
//         if (str.length == set.size) count++;
//         l++;
//     }
//     return count;
// };

//bruteforce with sliding window
// var countGoodSubstrings = function (s) {
//     //s="xyzzaz" =>1 => xyz
//     let count = 0;
//     let k = 3;
//     let a = s[0];
//     let b = s[1];
//     let c = s[2];
//     for (let r = k; r < s.length; r++) {
//         if (a != b && b != c && c != a) count++;
//         a = b;
//         b = c;
//         c = s[r];
//     }
//     if (a != b && b != c && c != a) count++;
//     return count;
// };

//min cost to buy candies

var minimumCost = function (cost) {
    cost.sort((a, b) => a - b);
    let sum = 0;
    let r = cost.length - 3;
    for (let l = cost.length - 1; l >= 0;) {
        if (cost[r]) sum += cost[r + 1] + cost[l]
        else {
            sum += cost.slice(0, l + 1).reduce((acc, val) => acc + val)
            break;
        }
        l = r - 1;
        r = r - 3;
    }
    console.log(sum)
    return sum;
};

//optimized 

var minimumCostOptimized = function (cost) {
    cost.sort((a, b) => a - b);
    let sum = 0;
    let ignore = 0;
    for (let l = cost.length - 1; l >= 0; l--) {
        if (ignore == 2) ignore = 0
        else {
            sum += cost[l];
            ignore++;
        }
    }
    console.log(sum)
    return sum;
};


//minimumCostOptimized([6, 5, 7, 9, 2, 2])
//longest substring without repeating characters
// function lengthOfLongestSubstring(s) {
//     //2 indices,start,end
//     //first check the len of word without repeat
//     //move start till next to the repeated letter of the end
//     let start = 0, end = 0, len = s.length;
//     let map = new Map();
//     let maxLen = 0;
//     while (end < len) {
//         if (map.has(s[end])) {
//             maxLen = Math.max(maxLen, end - start);
//             while (s[start] != s[end]) {
//                 map.delete(s[start])
//                 start++;
//             }
//             start++;
//         }
//         map.set(s[end], 1);
//         end++;
//     }
//     return Math.max(maxLen, end - start);
// };


//Q: Find a shortest substring with all chars of a string appears at least once
//bruteforce 
function findShortSub(str) {
    let start = 0;
    let arr = str.split("");
    let set = new Set(arr)
    let count = 0;
    let s = str;
    let ans = Number.MAX_SAFE_INTEGER;
    while (start < str.length - set.size) {
        set.delete(arr[start]);
        count++;
        start++;
        if (set.size == 0) {
            if (count < ans) {
                ans = count;
                s = str.substring(start - count, start)
            }
            start = start - count + 1;
            count = 0;
            set = new Set(arr);
        }
    }
    return s;
}
//console.log(findShortSub("abbbcbbbbabbc"))
//above solution gives TLE since the usage of initializations of set

//better approach using sliding window (variable)

function findShortSub(str) {
    let start = 0, minLen = Number.MAX_SAFE_INTEGER, minStr = "";
    let freqMap = new Map();
    let uniqueChars = new Set(str).size;  // Number of unique characters in the string
    let formed = 0;  // Number of unique characters in the current window

    // Sliding window with two pointers
    for (let end = 0; end < str.length; end++) {
        // Add the current character to the frequency map
        let endChar = str[end];
        freqMap.set(endChar, (freqMap.get(endChar) || 0) + 1);

        // If this character's frequency matches the unique character count
        if (freqMap.get(endChar) === 1) {
            formed++;
        }

        // Shrink the window from the left as long as all unique characters are in the window
        while (formed === uniqueChars) {
            // Check if this is the smallest window so far
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
                minStr = str.substring(start, end + 1);
            }

            // Try to remove the character at `start` to shrink the window
            let startChar = str[start];
            freqMap.set(startChar, freqMap.get(startChar) - 1);

            // If removing this character makes it no longer a complete set, reduce `formed`
            if (freqMap.get(startChar) === 0) {
                formed--;
            }

            start++;
        }
    }

    return minStr;
}

// Example usage
console.log(findShortSub("abbcac"));  // Output: "bac"
