//binary search
function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

//console.log(binarySearch([1, 2, 3, 4, 5], 1));

//SORTING 
//1
//sort() method in JavaScript sorts elements as strings by default

// const arr = [-2, -7, 1000, 5]
// console.log(arr.sort()) // -2, -7, 1000, 5
// console.log(arr.sort((a, b) => a - b)) // -7, -2 , 5, 1000
// console.log(arr.sort((a, b) => b - a)) // 1000, 5, -2, -7

//2
//console.log(str.split("").sort().join("")) // "Vahils

//Reason : By default, the sort method sorts the elements of the array in ascending order according to the Unicode values of the characters.
// Example: ["V", "a", "h", "i", "l", "s"].sort() results in ["V", "a", "h", "i", "l", "s"].
// Note that uppercase letters come before lowercase letters in Unicode
//---------------------------------------

//bubble sort

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
// }

//optimized
// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length - i; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                     swapped = true;
//                 }
//             }
//         }
//     } while (swapped)

// }
// let arr = [1, 4, 2, 0, 9];
// bubbleSort(arr);
// console.log(arr)

//selection sort find minIndex & swap with the assumed minIndex

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minIndex = j;
            }
        }
        minIndex != i && ([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]])
    }
}
// let arr = [1, 4, 2, 0, 9];
// selectionSort(arr);
// console.log(arr)
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // at the end of every iteration we would have the correct pos of a key within in the range 0-i
        //after this while loop we will have the the j value till where the arr is sorted
        //now push the key into the j+1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            arr[j] = key; // this is the first thought
            //but this is wrong approach
            //In insertion sort, the key should be placed in its correct position only after all larger elements have been shifted to the right. 
            //This is why the separate assignment arr[j + 1] = key is necessary.
            j = j - 1;
        }
        // arr[j + 1] = key;//this is optimized thought
    }

    return arr;
}

// Example usage:
// let arr = [12, 11, 13, 5, 6];
// console.log("Sorted array:", insertionSort(arr));

//merge sort
//split split slap left & right till they are sorted

// const mergeSort = (arr) => {
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const leftChild = mergeSort(arr.slice(0, mid));
//     const rightChild = mergeSort(arr.slice(mid));
//     return merge(leftChild, rightChild);
// }
const merge = (left, right) => {
    //check left & right & keep pushing small
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex++])
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex++])
    }
    return result;
    //you can directly use concat instead of checking indices reached lenght or not
    //The concat method in JavaScript is used to merge two or more arrays into a new array.
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(mergeSort([1, 4, 2, 8, 10, 23]))

//inplace merge sort
//dont create an extra array, instead do inplace

const mergeInPlaceSort = (arr, low, high) => {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        mergeInPlaceSort(arr, low, mid);
        mergeInPlaceSort(arr, mid + 1, high);
        mergeInPlace(arr, low, mid, high);
    }
}
const mergeInPlace = (arr, low, mid, high) => {

    let result = [], leftIndex = low, rightIndex = mid + 1;
    //her we need to check mid & high also so use <=
    while (leftIndex <= mid && rightIndex <= high) {
        if (arr[leftIndex] < arr[rightIndex]) {
            result.push(arr[leftIndex++]);
        } else {
            result.push(arr[rightIndex++]);
        }
    }
    while (leftIndex <= mid) {
        result.push(arr[leftIndex++])
    }
    while (rightIndex <= high) {
        result.push(arr[rightIndex++])
    }
    //here low could be 0 or any value
    for (let i = low; i <= high; i++) {
        arr[i] = result[i - low];
    }
}
// const arr = [1, 4, 2, 8, 10, 23]
// mergeInPlaceSort(arr, 0, arr.length - 1);
// console.log(arr)

//quick sort 
//put a pivot index,push all smaller elements below pivot & greater elements above pivot
//repeat on all sub arrays

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    //taking pivot at first or last index could increase time comp...so take randomly
    let pivot = Math.floor(Math.random() * arr.length)
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == pivot) continue
        if (arr[i] < arr[pivot]) {
            left.push(arr[i])
        }
        else right.push(arr[i])
    }
    return [...quickSort(left), arr[pivot], ...quickSort(right)]
}
//const arr = [1, 4, 2, 8, 10, 23]
// console.log(quickSort(arr))

// function uniqueOccurrences(arr) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     }
//     let set = new Set(map.values())
//     return map.size == set.size;//this is crazy part
//or this is also good
//let set = new Set()
// for(let freq of map.values()){
//     if(set.has(freq)){
//         return false
//     }
//     set.add(freq);
// }
// return true
// };
// let arr = [1, 2, 2, 1, 1, 3]; //1:3,2:2,3:1 occurances should be unique
// uniqueOccurrences(arr);

//Int to Roman
function intToRoman(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let sb = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            sb += strs[i];
        }
    }
    return sb;
};