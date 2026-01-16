// Fundamental Data Types in JavaScript

//------------------------------------Part 1 : Variables and Data Types------------------------------------//


let name = 'Hamza';
console.log(`String : I am ${name}`);
const age = 27;
console.log('Constant : Age is ' + age);
let isStudent = true;
console.log('Boolean : Is student? ' + isStudent);
let grade;
console.log('Undefined : Grade is ' + grade);
let emptyValue = null;
console.log("Null Value : " + emptyValue);

// Check types of declared variables
console.log('name type :' + typeof name);
console.log('age type :' + typeof age);
console.log('isStudent type :' + typeof isStudent);
console.log('grade type :' + typeof grade);
console.log('emptyValue type :' + typeof emptyValue);

// Number types
let integer = 42;
let decimal = 3.14;
let negative = -9;
let scientific = 1.2e3;

console.log('Integer : ' + integer);
console.log('Decimal : ' + decimal);
console.log('Negative : ' + negative);
console.log('Scientific Notation : ' + scientific);

console.log('integer type :' + typeof integer);
console.log('decimal type :' + typeof decimal);
console.log('negative type :' + typeof negative);
console.log('scientific type :' + typeof scientific);

// String types
let singleQuoteStr = 'Hello, World!';
let doubleQuoteStr = "JavaScript is fun.";
let templateLiteralStr = `This is a template literal with a variable: ${name}`;

console.log('Single Quote String : ' + singleQuoteStr);
console.log('Double Quote String : ' + doubleQuoteStr);
console.log('Template Literal String : ' + templateLiteralStr);

// -------------------Practice Exercises-------------------//
// 1. Create variables for a person's profile
// - firstName (string)
// - lastName (string)
// - age (number)
// - isEmployed (boolean)
// - salary (number or null if unemployed)

let firstName = 'Hamza';
let lastName = 'Shaikh';
let personAge = 27;
let isEmployed = true;
let salary = 10000;

// 2. Print each variable and its type
console.log('FIrst Name : ' + firstName + ' and Type of the variable is : ' + typeof firstName);
console.log('Last Name : ' + lastName + ' and Type of the variable is : ' + typeof lastName);
console.log('Age  : ' + personAge  + ' and Type of the variable is : ' + typeof personAge);
console.log('Is Employed : ' + isEmployed + ' and Type of the variable is : ' + typeof isEmployed);
console.log('Salary : ' + salary + ' and Type of the variable is : ' + typeof salary);
// 3. Create a full name using template literals
console.log(`Full Name : ${firstName} ${lastName}`);
// 4. Try to reassign a const variable (see the error)
const someConstant = 28; 
// someConstant = 20 // TypeError: Assignment to constant variable.


//------------------------------------Part 2 : Operators------------------------------------//
/*
Arithmetic: +, -, *, /, %, **
Assignment: =, +=, -=, *=, /=
Comparison: ==, ===, !=, !==, >, <, >=, <=
Logical: &&, ||, !
String: + (concatenation)
*/
let num1 = 10;
let num2 = 5;

// Arithmetic Operators
console.log(`Addition : ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtraction : ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplication : ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Division : ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Modulus : ${num1} % ${num2} = ${num1 % num2}`);
console.log(`Exponentiation : ${num1} ** ${num2} = ${num1 ** num2}`);

// Assignment Operators

