//call : using this we can call some function's method by passing different object
//apply : using this we can call some function's method by passing different object and array of arguments
//bind : using this we can call some function's method by passing different object and array of arguments and it will return a function
const test1 = {
    name: 'test1',
    test: function (...args) {
        console.log(this.name);
        console.log(args);
    }
}
const test2 = {
    name: 'test2',
    test: function () {
        console.log(this.name);
    }
}
// test1.test.call(test2, 1, 2, 3);
//test1.test.apply(test2, [1, 2, 3]);
const bindFunc = test1.test.bind(test2, 1, 2, 3);
bindFunc();
let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let admin = { firstName: "Admin" };

// bind user.sayHi method with context admin
let sayHi = user.sayHi.bind(admin);

sayHi(); // Hello, Admin!

function multiply(a, b) {
    return a * b;
}

let double = multiply.bind(null, 2);

console.log(double(5)); // 10

let user2 = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let button = document.querySelector('button');
button.addEventListener('click', user2.sayHi.bind(user2)); // Hello, John!

//In this example, bind is used to ensure that this inside the sayHi method refers to the user object, even when it's used as an event handler. Without bind, this would refer to the button, not the user object, because event handlers in JavaScript set this to be the target element by default.