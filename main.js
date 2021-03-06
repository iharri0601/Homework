// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

//                   __
//   _________  ____/ /__
//  / ___/ __ \/ __  / - \
// / /__/ /_/ / / / /  __
// \___/\____/\__,_/\___/
//
// Only add code to *THIS* section!

// #1 Numbers
// declare a variable named 'age' and assign it a number value;
var age = 16;




// #2 Strings
// declare a variable named 'name' and assign it the value of your name;
var name = 'Izaiah';




// #3 Concatenation
// declare a variable named 'greeting'
// using the 'name' variable you created earlier, assign 'greeting' the value "Hello, [yourname]!";
// e.g. if you set 'name' = 'Mady', 'greeting' should equal "Hello, Mady!"
var greeting = 'Hello, ' + name + '!';




// #4 Which answer is incorrect?

// Variables can't:

// (a) start with a number
// (b) include spaces or hyphens
// (c) be reserved words like "return", "if", "else", "for", etc. You can find a list of reserved words in JavaScript here.
// (d) contain the special characters "$" and "_"
var answer = 'd';
// set the variable 'answer' equal to a, b, c or d (make sure you set it to a string value)





// #5 Which answer is correct?

// Primitive data types in JavaScript include:

// (a) numbers, strings, lists, booleans
// (b) numbers, strings, booleans, dictionaries
// (c) numbers, booleans, undefined, strings
// (d) numbers, objects, undefined, strings
var primitives = 'c';
// set the variable 'primitives' equal to a, b, c or d (make sure you set it to a string value)





// #6 Control Flow

// Using the variable weather, complete the if...else if...else statement below
// console.log('Let\'s go swimming!') if it's hot outside
// console.log('Let\'s read a bood!') if it's rainy outside
// console.log('Whatcha wanna do?') if it's neither hot nor raining outside

// you may modify the value of weather to test your code
var weather = 'cold';

// change true to an expression
if (weather == 'hot') {
  console.log("wear shorts!");
  // console.log() statment to be executed
} else if (weather == 'cold') {
  console.log("wear jackets!");
  // console.log() statement to be executed
} else {
  console.log("wear shorts!");
  // console.log() statement to be executed
}

//
//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make the asserts pass by writing
// code in the code section above ;D

console.assert(typeof name === 'string', 'Oops! The variable \'name\' is not a string. Try again!');
console.assert(typeof age === 'number', 'Oops! The variable \'age\' is not a number. Try again!');
console.assert(typeof greeting === 'string', 'Oops! The variable \'greeting\' is not a string. Try again!');
console.assert(greeting.length === name.length + 8, 'Oops! The variable \'greeting\' is not the right length. Try again!');
console.assert(answer === 'd', 'Oops! That\'s the wrong answer for # 4. Try again!');
console.assert(primitives === 'c', 'Oops! That\'s the wrong answer for # 4. Try again!');

// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

// NUMBER 1: REFACTOR addNumbers

// The below function does not work. The variable twoPlusTwo gets set to undefined.
// Refactor the function to make it work.

function addnumbers(numberA, numberB) {
  'use strict';
  console.log(numberA + numberB);
  return numberA + numberB;
}

var PlusTwo = addnumbers(2, 2);

console.log(`number 1: {PlusTwo}`);

// Number 2: yell()
// Write a function named yell that returns an uppercase version of a string
var myyell = yell( "hello ",  "there! ")
function yell(word1, word2) {
  myyell = word1 + word2;
  console.log("Inside function: " + myyell.toUpperCase());
  return [myyell + word1];
}









// Number 3: yell10()
// Write a function called yell10 that uses your yell function to
// log out an uppercase version of a string 10 times.
var myyell10 = yell10("I'm ", "izaiah!")
function yell10(word1, word2) {
  myyell10 = word1 + word2;
  console.log("Inside function: " + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase() + myyell10.toUpperCase());
  return [myyell10 + word1];
}









// Number 4: longest()
function longest(word1, word2) {
  console.log(word1.length);
  console.log(word2.length);

  if (word1.length > word2.length) {
    return word1 + " is longer";
  }else{
   return word2 + " is longer";
  }
};
longest("Hey","Goodbye ");









// Number 5: isVowel()
// Write a function called isVowel that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, uppercase or lowercase. The function should return
// false if the character is not a vowel.
function isVowel(letter) {
 var vowels = ["a","e","i","o"];
 var uppercase = ["A","B","C","D"];
 var lowercase = ["a","b","c","d"];

 if (vowels.indexOf(letter) >-1) {
 console.log(letter);
 return true;
} else {
  return false;
}
};
console.log(isVowel("A"));

$(".men-toggle").click(function() {
  $(".women-clothing").hide();
  $(".men-clothing").show();
});

$(".women-toggle").click(function() {
  $(".men-clothing").hide();
  $(".women-clothing").show();
});

$(".purchase").click(function() {
  var currentshoppingcart = $(".shopping-cart span").html();
  var newshoppingcart = parseInt(currentshoppingcart) + 1;
  $(".shopping-cart span").html(newshoppingcart);
});
