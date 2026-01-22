
// Function declaration
function greet() {
  console.log("Hello!");
}
greet();  // Call the function

// Function with parameters
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}
greetPerson("Alice");  // "Hello, Alice!"

// Function with return value
function add(a, b) {
  return a + b;
}
let result = add(5, 3);  // 8
console.log(result)

// Multiple parameters
function calculateRectangleArea(width, height) {
  return width * height;
}
let area = calculateRectangleArea(10, 5);  // 50
console.log(area)

// Default parameters
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetWithDefault();         // "Hello, Guest!"
greetWithDefault("Alice");  // "Hello, Alice!"

// Function expressions
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5));  // 20

// Arrow functions (ES6+)
const divide = (a, b) => {
  return a / b;
};
console.log(divide(8,2));

// Shorthand arrow function (single expression)
const square = x => x * x;
const greetArrow = name => `Hello, ${name}!`;

console.log(square(5));           // 25
console.log(greetArrow("Bob"));   // "Hello, Bob!"

// Function with multiple returns
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}
console.log(getGrade(87));

//-----------------------------------------Practical Tasks----------------------------------//

// 1. Create a function that checks if a number is even
function checkEven (number){
    if(number % 2 ===0) {
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }
};
checkEven(7);
// 2. Create a function to calculate circle area (πr²)
function areaCircle (radius){
    return 3.14*radius;
}
console.log(areaCircle(10));
// 3. Create a function that returns the larger of two numbers
function largerOfNumbers (number1,number2){
    number1 > number2 ? console.log(`${number1} is larger`) : console.log(`${number2} is larger`);
}
largerOfNumbers(10,6);
// 4. Create a function to convert Celsius to Fahrenheit

// 5. Create a function with default parameters for name and age
// 6. Rewrite 3 of the above using arrow functions
// 7. Create a function that returns an object with multiple values

//--------------------------------------Scope and Closure----------------------------------------//


