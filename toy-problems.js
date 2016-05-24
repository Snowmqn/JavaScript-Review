/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = arr => {
    let newArr = arr.map(val => val + 1);
    let result = 0;
    newArr.forEach(val => result += val);
    return result;
};


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
var flattenFunc = (arr, result) => {
    arr.forEach(val => {
        if (Array.isArray(val)) {
            return flattenFunc(val, result);
        }
        else result.push(val);
    });
};

var flatten = arr => {
    var result = [];
    flattenFunc(arr,result);
    return result;
};



/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var convertByN = (arr, n) => {
    var result = [];
    for (let i=0;i<=n;i++) {
        arr.forEach(val => result.push(val));
    }
    return result;
};

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array 
and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var findMissing = (arr1, arr2) => {
    for (let i in arr1) {
        if (arr2.indexOf(arr1[i]) === -1) return arr1[i];
    }
}



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words 
(case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

var longestWords = str => {
    var result = [''];
    let temp = '';
    for (let i=0;i<str.length;i++) {
        if (str[i] !== ' ') {
            temp += str[i];
            if (temp.length > result[0].length) result = [temp];
            else if (temp.length === result[0].length) result.push(temp);
        }
        else temp = '';
    }
    return result;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

var findMultiples = num => {
    var result = [];
    for (let i=3;i<=num;i++) {
        if (num % 3 === 0 || num % 5 === 0) result.push(i);
    }
    return result;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is 
‘tree traversal’ the output will be "tre avsl".

*/

var removeDuplicate = str => {
    var arr = str.split('');
    var result = [];
    arr.forEach(val => {
        if (result.indexOf(val) === -1) result.push(val);
    })
    return result.join('');
}

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

var sum = function() {
    var total = 0;
    var arr = Array.from(arguments);
    var temp = arr[0]
    if (arr.length > 1) {
        for (let i in arr) total += arr[i];
        return total;
    }
    else return val => {
        return temp + val;
    }
}