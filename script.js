//Time complexity , imagine you have 10 cars
// O(1): Constant time, like checking the first car.
// O(n): Linear time, like counting all cars.
// O(n^2): Quadratic time, like comparing each car with every other car.
// O(log n): Logarithmic time, like dividing cars into groups repeatedly.
// O(n log n): Linearithmic time, like sorting efficiently.Divide and Conquer: You split the cars into smaller groups, sort those groups, and then put them back together.
//---------

// Shallow Copy
// let originalArray = [1, 2, 3, 4, 5];
// let shallowCopy = originalArray.slice();
// let shallowCopy = [...originalArray];
// let shallowCopy = originalArray.concat()
// let shallowCopy = Array.from(originalArray);
// if it is an object
// let originalObject = { a: 1, b: 2, c: 3 };
// let shallowCopy = Object.assign({}, originalObject);
// let shallowCopy = { ...originalObject };


//sort ASC
// const x = [1, 4, 6, 0, -9, -5];
// x.sort(); // O(NlogN)
// console.log(x);
// //sort DESC
// x.sort((a, b) => b - a);
// console.log(x);
//FIND

// The find method in JavaScript is used to find the first element in an array that satisfies a 
// given condition (predicate function). It returns the value of the first element that passes the test.
//  If no elements pass the test, it returns undefined.
// let numbers = [1, 3, 5, 7, 8, 10, 12];
// let firstEven = numbers.find(number => number % 2 === 0);

// console.log(firstEven); // Output: 8

//Return array (1 index)
//answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
//TIP : in js , 0 means false & non zero value means true

// var fizzBuzz = function (n) {
//     return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
// };

//square root
// function mySqrt(x) {
//     let end = x;
//     let start = 0;
//     while (start <= end) {
//         const mid = Math.floor(start + (end - start) / 2); //floor the value here
//         if (mid * mid == x) return mid;
//         else if (mid * mid < x) {
//             start = mid + 1;
//         }
//         else end = mid - 1;
//     }
//     return end;
// };

//find longest length word
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
// let maxHeight = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxHeight) {
//         maxHeight = words[i].length;
//     }
// }
// console.log(maxHeight)
// const longestWordLength = words.reduce((maxLength, word) => {
//     const currentLength = word.length;
//     return currentLength > maxLength ? currentLength : maxLength;
// }, 0);

// console.log(longestWordLength); // Output: 11
//-------------------------------------
//return largest number factorial

// const numbers = [5, 2, 8, 4, 3];

// const largestFactorial = numbers.reduce((largest, num) => {
//     const currentFactorial = Array
//         .from({ length: num })
//         .map((_, i) => i + 1)
//         .reduce((fact, val) => fact * val, 1);

//     return currentFactorial > largest ? currentFactorial : largest;
// }, 1);

// console.log(largestFactorial); // Output: 40320 (8!)
//-----------------------------------------------------------------

//max in an array

// console.log(Math.max(...numbers))
//---------------------------------------------------

//factorial in general
// let ans = 1;
// for (let i = 1; i <= 8; i++) {
//     ans *= i;
// }
// console.log(ans);
//-------------------------------------

//calculate avg score of students who scored above 90
// const students = [
//     { name: 'John', score: 85 },
//     { name: 'Sarah', score: 92 },
//     { name: 'Michael', score: 88 },
//     { name: 'Emma', score: 95 },
//     { name: 'Daniel', score: 90 },
// ];
//my logic
// function getAvgScore() {
//     const scores = students.filter(student => student.score > 90)
//     return scores.reduce((init, val) => init + val.score, 0) / scores.length;
// }
//crazy logic
// const above90StudentsAverage = students
//     .filter((student) => student.score > 90)
//     .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);

// console.log(getAvgScore())
//----------------------------------------

//Filter out books published before the year 2000 and return their titles
// const books = [
//     { title: 'Book 1', year: 1998 },
//     { title: 'Book 2', year: 2003 },
//     { title: 'Book 3', year: 1995 },
//     { title: 'Book 4', year: 2001 },
// ];

// console.log(books.filter(book => book.year < 2000).map(book => book.title))
//----------------------------

//Capitalize the first letter of each word in the array
// const strings = ['hello world', 'i am openai', 'welcome to javascript'];

// console.log(strings.map(string => string.charAt(0).toUpperCase() + "" + string.slice(1)))
//------------
//String length
// const str = "bhaani"
// console.log(str.length)
//--------

//find first index of a string
//using sliding window concept, below is java code.
//   public int strStr(String haystack, String needle) {
//         // empty needle appears everywhere, first appears at 0 index
//         if (needle.length() == 0)
//             return 0;
//         if (haystack.length() == 0)
//             return -1;
        
        
//         for (int i = 0; i < haystack.length(); i++) {
//             // no enough places for needle after i
//             if (i + needle.length() > haystack.length()) break;
            
//             for (int j = 0; j < needle.length(); j++) {
//                 if (haystack.charAt(i+j) != needle.charAt(j))
//                     break;
//                 if (j == needle.length()-1)
//                     return i;
//             }
//         }
        
//         return -1;
//     }

//alternative

// Logic:
// -> m
// -> i
// not match, reinitialize window start to next index of m. 
// That is "i" from the word "mississipi"

// -> i s s i s
// -> i s s i p
// s and p mismatch

// so, reinitialize the window's start
// -> s
// -> i
// not match

// reinitialize
// -> s
// -> i
// not match

// reinitialize
// -> i s s i p
// -> i s s i p
// this time it was a match!
// class Solution {
//     public int strStr(String haystack, String needle) {
//         int hLen = haystack.length();
//         int nLen = needle.length();
//         int nIndex = 0;
//         for(int i=0; i<hLen; i++){
//             // as long as the characters are equal, increment needleIndex
//             if(haystack.charAt(i)==needle.charAt(nIndex)){
//                 nIndex++;
//             }
//             else{
//                 // start from the next index of previous start index
//                 i=i-nIndex;
//                 // needle should start from index 0
//                 nIndex=0;
//             }
//             // check if needleIndex reached needle length
//             if(nIndex==nLen){
//                 // return the first index
//                 return i-nLen+1;
//             }
//         }
//         return -1;
//     }
// }