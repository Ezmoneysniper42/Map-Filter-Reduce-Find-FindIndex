// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double (x){
//   return (x*2)
// }

// const newNumber = numbers.map(function (x){
//   return (x*2)
// });

// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter(function (num){
//   return (num < 10);
// })
// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumber = numbers.reduce(function (previousNuber, currentNumber){
//  return previousNuber + currentNumber
//   })
//   console.log(newNumber)

//Find - find the first item that matches from an array.

// const number = numbers.find(function (num){
//   return num > 10
// })

// console.log(number)

//FindIndex - find the index of the first item that matches.

// const number = numbers.findIndex(function (num){
//     return num > 10
//   })

//   console.log(number)

import emojipedia from "./emojipedia";

function emojiEntry() {}

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
