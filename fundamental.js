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

let text = "Hello World";

// Properties
console.log(text.length);           // 11

// Methods
console.log(text.toUpperCase());    // "HELLO WORLD"
console.log(text.toLowerCase());    // "hello world"
console.log(text.charAt(0));        // "H"
console.log(text.indexOf("World")); // 6
console.log(text.includes("Hello"));// true
console.log(text.slice(0, 5));      // "Hello"
console.log(text.substring(6, 11)); // "World"
console.log(text.split(" "));       // ["Hello", "World"]
console.log(text.replace("World", "JS")); // "Hello JS"
console.log(text.trim());           // removes whitespace from ends

// Template literals (backticks)
let name1 = "Alice";
let age1 = 25;
let intro = `My name is ${name1} and I am ${age1} years old.`;
console.log(intro);

// Multi-line strings
let multiLine = `
  This is
  a multi-line
  string
`;
console.log(multiLine)

// String concatenation
let first = "Hello";
let second = "World";
let combined = first + " " + second;  // "Hello World"

console.log(combined);

//---------------------------------Practical Task--------------------------------//

// 1. Create a string with your full name
let fullName = 'Hamza Shaikh';
console.log(`${fullName} : This is my Full Name`);
// 2. Convert it to uppercase and lowercase
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
// 3. Extract your first name using slice()
console.log(fullName.slice(0,5));
// 4. Check if your name contains the letter 'a'
console.log(fullName.includes('a'));
// 5. Split your name into an array of characters
console.log(fullName.split(' '));
// 6. Create a template literal with 3 variables
let firstVar = `Hamza Shaikh`;
let secondVar = `AI Engineer`;
let thirdVar = `Full Stack Engineer`;
console.log(`${firstVar} is an ${secondVar} who is trying hard to become ${thirdVar}`);
// 7. Replace a word in a sentence
console.log(fullName.replace('Hamza','Sultana'));

//------------------------------------Arrays-------------------------------------------------//

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
let empty = [];

// Accessing elements
console.log(fruits[0]);        // "apple"
console.log(fruits[2]);        // "orange"
console.log(fruits.length);    // 3

// Modifying arrays
fruits[1] = "grape";           // Change element
fruits.push("mango");          // Add to end
console.log(`${fruits} Array after pushing mango to it`)

fruits.unshift("strawberry");  // Add to beginning
console.log(`${fruits} Array after pushing strawberry to beginning`)

let last = fruits.pop();       // Remove from end
console.log(`${last} Popped element from fruits`)

let firstElement = fruits.shift();    // Remove from beginning
console.log(`${firstElement} Popped element from beginning of Array fruits`)

console.log(fruits)

// Array methods
let nums = [1, 2, 3, 4, 5];
console.log(nums.includes(3));     // true
console.log(nums.indexOf(4));      // 3
console.log(nums.slice(1, 3));     // [2, 3]
console.log(nums.reverse());       // [5, 4, 3, 2, 1]
console.log(nums.join("-"));       // "5-4-3-2-1"

// Combining arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArray = arr1.concat(arr2);  // [1, 2, 3, 4]
console.log(combinedArray)
let spread = [...arr1, ...arr2];   // [1, 2, 3, 4]
console.log(spread)

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][1]); // 5

//-------------------------------------------Practice Array----------------------------------//
// 1. Create an array of your 5 favorite movies
movies = ["Avengers", "Captain America", "Doctor Strange", "Black Panther", "Dead Pool"];
console.log(movies);
// 2. Add a new movie to the end
movies.push("Hulk");
console.log(movies);
// 3. Remove the first movie
movies.shift();
console.log(movies)
// 4. Find the index of a specific movie
movies.indexOf("Hulk");
console.log(movies.indexOf("Hulk"));
// 5. Create a new array with only the first 3 movies
let firstThreeMovies = movies.slice(0,3);
console.log(firstThreeMovies);
// 6. Reverse the array
console.log(movies.reverse());
// 7. Join all movies into a string separated by commas
console.log(movies.join("-"))
// 8. Create a 2D array representing a tic-tac-toe board
ticTacToe_Board = [[11,12,13],
                   [21,22,23],
                   [31,32,33]];
console.log(ticTacToe_Board);
/*
Looking at your solution, I can see you're trying to use numbers to identify positions, but this won't work well for an actual tic-tac-toe game. Here's why and what's better:

## Judging Your Solution ❌

Your approach has a fundamental problem: **you're storing position identifiers instead of the game state**. In tic-tac-toe, each cell needs to store whether it's empty, has an X, or has an O - not its coordinate position.

## Better Ways ✅

### **Option 1: Strings (Most Common & Readable)**
```javascript
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// During gameplay:
board[0][0] = 'X';
board[1][1] = 'O';
// Easy to check: if (board[0][0] === 'X') ...
```

### **Option 2: Null for Empty Cells**
```javascript
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

board[0][0] = 'X';
board[1][1] = 'O';
```

### **Option 3: Numbers (For AI/Algorithm Work)**
```javascript
const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
// 0 = empty, 1 = X, -1 = O (useful for minimax algorithm)
```

## Why Option 1 is Best

- **Clear & readable**: `'X'` and `'O'` are self-documenting
- **Easy conditionals**: `if (cell === 'X')` is intuitive
- **Simple display**: Can directly render the strings in UI
- **Type safety**: Empty string `''` is clearly "empty"

**Recommendation**: Use empty strings for a real game!
*/