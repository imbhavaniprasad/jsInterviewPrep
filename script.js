//you can shadow var variable with let but cant let with var
// function test(){
//     let a="hi";
//     var b = "bye";
//     if(true){
//         var a = "hello"; //throws error as a is already declared
//         let b = "hii";
//     }
//     return;
// }
//----------------------
//let & const cant be redeclare in the same scope
// var a='hi';
// let a="bye"; // this works
// let x = "bbb"
// let x = "cool" // cannot redeclare block scoped variable x same with const
// {
//     let x="cool" // works in different scope
// }
//----------------
//Hoisting : Hoisting in JavaScript is a behavior where variable and function declarations are moved ("hoisted") to the top of their containing scope (either global or local) before the code is executed

// Function declerations are hoisted but not expressions

// foo(); // Works because foo is hoisted
// function foo() {
//   console.log('Hello, World!');
// }

// bar(); // TypeError: bar is not a function
// var bar = function() {
//   console.log('Hello, World!');
// };
//----------
//Temporal Dead Zone:
//The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.
//-------

//First-Class Functions in JavaScript
//In JavaScript, functions are considered "first-class citizens." This means that functions can be treated like any other data type
//Be assigned to variables: ,Be passed as arguments to other functions , Be returned from other functions (closure),stores under data structures
//const operations = [
//   function(a, b) { return a + b; },
//   function(a, b) { return a - b; }
// ];

//-----------
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and immediately executed at the same time
// (function(a, b) {
//     console.log(a + b); // Outputs: 15
//   })(5, 10);

//   (function() {
//     console.log("This function runs immediately!");
//   })();

//   (() => {
//     console.log("IIFE with arrow function");
//   })();

//-----------

//when shadowing , if we have same variable in global & local scope, it checks the local scope if the declared
// var x = 21;
// function cool(y) { //here y is a param
//     console.log(x); // it checks in its scope
//     var x = 10;
// }
// cool(2) //undefined & here 2 is argument
//----------

//Rest param must be in the last pos
//---------------------------------------
//Arrow vs Normal functions

//Arrow symbol & no need to return explicitly
//You cant have arguments keyword in arrow fun
// function test() { console.log(arguments) };
// const x = () => console.log(arguments); //throws error saying arguments is not defined or you dont get the values
// test(1, 2, 3);
// x(1, 2, 3, 4);

//arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) scope in which they are defined

// function Person(name) {
//     this.name = name;

//     // Regular function: `this` refers to the context in which the function is called.
//     this.sayNameRegular = function() {
//       console.log("Regular function: " + this.name);
//     };

//     // Arrow function: `this` refers to the lexical scope, which is `Person` in this case.
//     this.sayNameArrow = () => {
//       console.log("Arrow function: " + this.name);
//     };
//   }

//   const person = new Person("Alice");

//   person.sayNameRegular(); // Outputs: Regular function: Alice
//   person.sayNameArrow();   // Outputs: Arrow function: Alice
// var userName = "cooool"
// let user = {
//     userName: "bhavani",
//     test() {
//         console.log("test", this.userName)
//     },
//     test2: () => {
//         console.log("test2", this.userName)
//     }
// }
// user.test();
// user.test2() //undefined as this here refers to the surrounding scope where it was defined aka global
//even if you have var userName at the top it still returns undefined as this refers to window which doesnt have userName cool

//-------
//Lexical scope : you can access vars declared outside from inside a fun but not vice versa
// function outerFunction() {
//     const outerVar = "I am outside!";

//     function innerFunction() {
//       const innerVar = "I am inside!";
//       console.log(outerVar); // Accessing a variable from the outer scope
//     }

//     innerFunction();
//     console.log(innerVar); // ReferenceError: innerVar is not defined
//   }

//   outerFunction();

//---------------

//Closure : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.
//Closures are useful for creating private variables, maintaining state, and managing asynchronous operations.

//con : Memory Leaks:
//Closures can prevent garbage collection of variables, leading to higher memory usage.

//write a fun that allows you do this
// var addSix = createBase(6);
// addSix(10) //16

// function createBase(x) {
//     return function (y) {
//         return x + y;
//     }
// }
// console.log(addSix(10))
//

//Famous Q settimeout in a for loop

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }
//dont use let but make sure it prints 0,1,2


// for (var i = 0; i < 3; i++) {
//     function inner(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000 * i);
//     }
//     inner(i);
// }

//You can have a closure with multiple return functions so in that case return them explicitly
// function x() {
//     function add() {    // if a single inner fun we would have returned it, we returned below since we have 2 functions;
//         console.log("ho");
//     }
//     function sub() {
//         console.log("hooo");
//     }
//     return { add, sub }
// }

// const closure = x;
// closure.add();

//you can write a function to log the value once using closure & inside maintaining a var counter;

//once polyfill , this runs the hello only once

// function once(func, context) {
//     let ran = true;
//     return function (...args) {
//         if (ran) {
//             ran = null;
//             func.apply(this || context, ...args)
//             // func()
//         }
//     }
// }

// const hello = once(() => console.log("hello"));
// hello();
// hello(); //no return
// hello(); //no return
// hello(); //no return