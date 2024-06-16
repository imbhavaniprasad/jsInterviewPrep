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
const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
console.log(x);
//sort DESC
x.sort((a, b) => b - a);
console.log(x);
//FIND

// The find method in JavaScript is used to find the first element in an array that satisfies a 
// given condition (predicate function). It returns the value of the first element that passes the test.
//  If no elements pass the test, it returns undefined.
let numbers = [1, 3, 5, 7, 8, 10, 12];
let firstEven = numbers.find(number => number % 2 === 0);

console.log(firstEven); // Output: 8

//Return array (1 index)
//answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
//TIP : in js , 0 means false & non zero value means true

var fizzBuzz = function (n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

//square root
function mySqrt(x) {
    let end = x;
    let start = 0;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2); //floor the value here
        if (mid * mid == x) return mid;
        else if (mid * mid < x) {
            start = mid + 1;
        }
        else end = mid - 1;
    }
    return end;
};