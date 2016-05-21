var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(threeItems) {
  return threeItems[threeItems.length - 1];
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for (let i=0;i<evenArray.length;i++) {
  if (evenArray[i] % 2 !== 0) evenArray.splice(i, 1);
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number
// is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomFunction = function(arr) {
  var num = getRandomArbitrary();
  var test = false;
  for (let i in randomArray) {
    if (randomArray[i] === num) test = true;
  }
  alert(test);
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this,
// first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0);
second.push(6);
second.push(7);

// alert(first) //[1,2,3,4,5];
// alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(arr) {
  var result = '';
  var current = '';
  for (let i=0;i<arr.length;i++) {
    if (arr[i] !== ' ') current += arr[i];
    else current = '';
    if (current.length > result.length) result = current;
  }
  return result;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(str) {
  var arr = str.split('');
  arr.forEach(function(val, index, arr) {
    if (index === 0) arr[index] = arr[index].toUpperCase();
    if (val === ' ') arr[index + 1] = arr[index + 1].toUpperCase();
  })
  return arr.join('');
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(str) {
  var arr = str.split('');
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var count = 0;
  arr.forEach(function(val, index, arr) {
    vowel.forEach(function(val1, index1, arr1) {
      if (val === val1) count++;
    })
  });
  return count;
}
