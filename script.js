//sort by name
// function sortByName(arr){
//     return arr.sort((a,b)=>{
//         return a.name.localeCompare(b.name)
//     })
// }

//----------
// / 7. Create your own string method: repeatify(3)- input string will be repeated three times
// // Ex- console.log("hello".repeatString(3)); // HelloHelloHello

// String.prototype.repeatString = function (times) {
//     let str = "";
//     for (let i = 0; i < times; i++) {
//         str = str + this;  // here this= "Hello"
//     }
//     return str;
// }
// // console.log("Hello".repeatString(3))  // HelloHelloHello
//----------------

// const numbers= [1,2,3,4,5];
// const [y]= numbers;

//console.log(y); 1
//---------
// Way 1  : Using 'in' operator-
// It checks for property exists in an Object, including properties inherited from its prototype chain.
// let Object1= {name: "Bittu", age: 24};
// let Object2= Object.create(Object1);
// Object2.city="BLR";

// console.log("name" in Object1);  // true
// console.log("name" in Object2);  // true

//  Way 2: Using the hasOwnProperty() method
// It checks if an object has a property with the specified name. It does not check properties inherited from its prototype chain.

// console.log(Object1.hasOwnProperty("name"));  // true
// console.log(Object2.hasOwnProperty("name"));  // false
//-----------------
// var x = 100;
// let a = 200;
// {
//     var x = 10;
//     let a = 20;
//     console.log(x)
// }
// console.log(x)
//output is 10,10 coz var x is stored in global context, even if you change in block scope it points to the same reference
//if you had let & const, you d see diff outputs coz let & const is shadowed inside the block; 20,200
//-----------
//Illegal shadowing when you redeclare a variable which was defined with let with var in block scope
// let a = 10;
// {
//     var a = 122;
// }
// vice versa works, var a can be shadowed with let inside block
//----------
// Piping the tasks

// function pipe(...funcs) {
//     return function(initialValue) {
//       return funcs.reduce((acc, func) => func(acc), initialValue);
//     };
//   }

//   // Example usage:
//   // Define some simple functions
//   const addOne = x => x + 1;
//   const double = x => x * 2;
//   const square = x => x * x;

//   // Create a pipeline of functions
//   const pipeline = pipe(addOne, double, square);

//   // Execute the pipeline with an initial value
//   const result = pipeline(2);

//   console.log(result); // Output: 36

//Write a program to implement currying which gives the sum of three numbers.

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...next) {
            return curried(...args, ...next);
        };
    };
}

function sumThree(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sumThree);

// Example usage:
const result = curriedSum(1)(2)(3);
console.log(result); // Output: 6