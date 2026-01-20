// Basic if
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

// If-else
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot");
} else {
  console.log("It's not hot");
}

// If-else if-else
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Nested conditions
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in");
}

// Ternary operator
let access = age >= 18 ? "Granted" : "Denied";
console.log(`Access: ${access}`);

// Ternary operator (shorthand)
let status = age >= 18 ? "adult" : "minor";
let message = isLoggedIn ? "Welcome!" : "Please log in";
console.log(`Status: ${status}, Message: ${message}`);

// Multiple conditions
let hour = 22;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

/*-------------------Practice Exercises-------------------

// 1. Check if a number is positive, negative, or zero
// 2. Determine if a year is a leap year
// 3. Check if a person is eligible to vote (age >= 18)
// 4. Create a simple login system (username and passworevend check)
// 5. Write a program to find the largest of three numbers
// 6. Use ternary operator to check if a number is  or odd

*/

// 1. Check if a number is positive, negative, or zero
let number = -3;
if (number > 0) {
  console.log(`${number} is positive`);
} else{
    console.log(`${number} is a negative integer.`);
}

// 2. Determine if a year is a leap year
let year = 2020;
console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? `${year} is a leap year` : `${year} is not a leap year`);

// 3. Check if a person is eligible to vote (age >= 18)
let voterAge = 20;
console.log(voterAge >= 18 ? "Eligible to vote" : "Not eligible to vote");

// 4. Create a simple login system (username and password check)
let username = "user1";
let password = "pass123";
let inputUsername = "user1";
let inputPassword = "pass1234";

if (inputUsername === username && inputPassword === password) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}
// 5. Write a program to find the largest of three numbers
let a = 10, b = 25, c = 15;
console.log((a>b?a:b)>c?(a>b?a:b):c)

// 6. Use ternary operator to check if a number is  or odd
let numberTocheckEvenOdd = 9;
console.log(numberTocheckEvenOdd % 2 == 0 ? `${numberTocheckEvenOdd} is even`: `${numberTocheckEvenOdd} is odd`);

