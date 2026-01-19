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
let assignmentNumber = 15;
assignmentNumber += 5;
console.log(`Assignment Operator (+=) : ${assignmentNumber}`);
assignmentNumber -= 3;
console.log(`Assignment Operator (-=) : ${assignmentNumber}`);
assignmentNumber *= 2;
console.log(`Assignment Operator (*=) : ${assignmentNumber}`);
assignmentNumber /= 4;
console.log(`Assignment Operator (/=) : ${assignmentNumber}`);

// Comparison Operators
console.log(5 == "5"); // true : loose equality -> converts types -> Do not check type
console.log(5==="5"); // false : strict equality -> checks types too
console.log(5 !=="5"); // true

// Logical Operators
let booleanVariable1 = true;
let booleanVariable2 = false;
console.log(`Logical AND : ${booleanVariable1} && ${booleanVariable2} = ${booleanVariable1 && booleanVariable2}`);
console.log(`Logical OR : ${booleanVariable1} || ${booleanVariable2} = ${booleanVariable1 || booleanVariable2}`);
console.log(`Logical NOT : !${booleanVariable1} = ${!booleanVariable1}`);

// String Concatenation
let greet1 = "Hello, ";
let greet2 = "World!";
let fullGreet = greet1 + greet2;
console.log(`String Concatenation : ${fullGreet}`);

/*-------------------Practice Exercises-------------------//
// 1. Calculate the area of a rectangle (width * height)
// 2. Calculate the perimeter (2 * (width + height))
// 3. Check if a number is even (use % operator)
// 4. Compare two numbers and log which is larger
// 5. Use logical operators to check if a number is between 10 and 20
*/

// 1. Calculate the area of a rectangle (width * height)
let height = 2;
let width = 6;
console.log(`Area of the rectangle is : ${height*width}`);

// 2. Calculate the perimeter (2 * (width + height))
console.log(`Perimeter of the rectangle is : ${2*(height + width)}`);

// 3. Check if a number is even (use % operator)
let numberToCheck = 8;
console.log(numberToCheck % 2 === 0 ? `${numberToCheck} is even` : `${numberToCheck} is odd`);

// 4. Compare two numbers and log which is larger
let numA = 15;
let numB = 20;
console.log(numA >numB ? `${numA} is larger than ${numb}` : `${numB} is larger than ${numA}`);

// 5. Use logical operators to check if a number is between 10 and 20
let numberToCheckRange = 17;
console.log(numberToCheckRange>10 && numberToCheckRange<20 ? `Yes ${numberToCheckRange} is between 10 and 20` :  ` No ${numberToCheckRange} is not in between 10 and 20`);

//------------------------------------Part 3 : Strings------------------------------------//
/*1.3 Strings
Theory: Strings are sequences of characters. JavaScript provides many built-in methods to manipulate strings.
*/


