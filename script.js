//palindrome
function palindrome() {
    let x = 121
    let y = 10
    //console.log(y.toString().split("").join("") === y.toString().split("").reverse().join(""))
    console.log(x === +x.toString().split("").reverse().join(""))
}
//palindrome();

//palindrom without utils
let isPalindrome = function (x) {
    let copyNum = x, reverseNum = 0;

    while (copyNum > 0) {
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};
//console.log(isPalindrome(121)); // true

//Fibanocci

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
//Fibanocci Recursion

function recFib(n) {
    if (n <= 1) {
        return n;
    }
    return recFib(n - 1) + recFib(n - 2);
}
// console.log(fibonacci(10));
// console.log(recFib(10));

//Anagram
//basic level
function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
//pro
function isAnagram2(str1, str2) {
    if (str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}
//console.log(isAnagram2("anagram", "nagaram"));
//Two Sum

function twoSum() {
    let arr = [1, 2, 4, 5, 6, 9, 0];

    let target = 6;
    // for (let i = 1; i < arr.length-1; i++) {
    // for(let j=i+1;j<arr.length;j++){
    //     if (arr[i] + arr[j] == target) return [i, j];
    //}
    // }
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return [i, map.get(arr[i])];
        }
        map.set(target - arr[i], i);
    }
    return [];
}
// console.log(twoSum())

//array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array
//0 to n means, we will have 0-n nums in an array if 0,4 (4 is n: nums length)
//so expected sum : 4 (4+1/2)
let missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return nums.length * (nums.length + 1) / 2 - sum;
};

// One Line Solution: 
//let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

// console.log(missingNumber([3,0,1])); // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8


//Best TIME TO BUY & SELL A STOCK

function btst() {
    //const prices = [7, 1, 5, 3, 6, 4];
    const prices = [7, 6, 5, 4, 3, 2];
    let profit = 0;
    //Approach1 : enter the index, check greatest among all nums from the next index
    for (let i = 0; i < prices.length - 1; i++) {
        let arr2 = prices.slice(i + 1);
        arr2.forEach((arr) => {
            if (arr > prices[i] && arr - prices[i] > profit) {
                profit = arr - prices[i]
            }
        })
    }
    return profit;
}
function bestBtst() {
    const prices = [7, 1, 5, 3, 6, 4];
    //find min value day
    let profit = 0;
    let bestPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        //profit = prices[i] - bestPrice > profit ? prices[i] - bestPrice : profit;
        profit = Math.max(profit, prices[i] - bestPrice);
        //bestPrice = prices[i] < bestPrice ? prices[i] : bestPrice;
        bestPrice = Math.min(bestPrice, prices[i]);
    }
    return profit
}
console.log(bestBtst());