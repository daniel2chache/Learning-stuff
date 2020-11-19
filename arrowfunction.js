import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.map((x) => {
  return x * x;
});

console.log(newNumber);

//or

const newNumber2 = numbers.map((x) => x * x);

console.log(newNumber2);

////Map -Create a new array by doing something with each item in an array.
const newNumbers3 = numbers.map((x) => x * 2);
console.log(newNumbers3);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers4 = numbers.filter((num) => num < 10);
console.log(newNumbers4);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers5 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumbers5);
////Find - find the first item that matches from an array.
const newNumber6 = numbers.find((num) => num > 10);
console.log(newNumber6);

////FindIndex - find the index of the first item that matches.
const newNumber7 = numbers.findIndex((num) => num > 10);

console.log(newNumber7);
