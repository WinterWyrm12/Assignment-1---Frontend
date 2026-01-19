/*
 * Assignment 1: JavaScript Arrow Functions
 * Complete the exercises below by converting traditional functions to arrow functions
 * and writing new arrow functions from scratch.
 * Uncomment the tests at the bottom of the file to test that the functions you wrote work as intended
 */

// =============================================
// PART 1: CONVERT TO ARROW FUNCTIONS
// =============================================

// Exercise 1: Convert this function declaration to an arrow function
function greetUser(name) {
    return `Hello, ${name}!`;
}
// Update greetUserArrow below to implement the function shown above. Delete null and then write your arrow function.
const greetUserArrow = name => `Hello, ${name}!`;


// Exercise 2: Convert this function expression to an arrow function
function calculateArea(length, width) {
    return length * width;
};
// Update calculateAreaArrow below to implement the function shown above. Delete null and then write your arrow function.
const calculateAreaArrow = (length, width) => length*width;



// Exercise 3: Convert this function with no parameters to an arrow function
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}
// Update getCurrentTimeArrow below to implement the function shown above. Delete null and then write your arrow function.
const getCurrentTimeArrow = () => new Date().toLocaleTimeString();



// Exercise 4: Convert this multi-line function to an arrow function
function validatePassword(password) {
    if (password.length >= 8) {
        return "Password is valid";
    } else {
        return "Password must be at least 8 characters";
    }
}
// Update validatePasswordArrow below to implement the function shown above. Delete null and then write your arrow function.
const validatePasswordArrow = password => {
    if (password.length >= 8) {
        return "Password is valid"
    }
    return "Password must be at least 8 characters"
};



// Exercise 5: Convert this function to an arrow function
function processOrder(item, quantity) {
    const total = item.price * quantity;
    const tax = total * 0.08;
    const finalAmount = total + tax;
    return `Order total: ${finalAmount.toFixed(2)}`;
}
// Update processOrderArrow below to implement the function shown above. Delete null and then write your arrow function.
const processOrderArrow = (item, quantity) => {
    total = item.price * quantity;
    tax = total*0.08;
    finalAmount = total+tax;
    return `Order total: ${finalAmount.toFixed(2)}`
};



// =============================================
// PART 2: WRITING ARROW FUNCTIONS
// =============================================

// Exercise 6: Create an arrow function called createFullName that has MULTIPLE parameters
// createFullName should take a first and last name as arguments and return full name as a single string the format "FIRST LAST"
const createFullName = (first, last) => console.log(first,last);





// Exercise 7: Create an arrow function called calculateVolume that has MULTIPLE parameters
// calculateVolume should have three arguments (length, width, and height) and return the volume of a rectangular box (length * width * height)
const calculateVolume = (length, width, height) =>{
    volume = length*width*height;
    return volume;
};





// Exercise 8: Create an arrow function called getFirstElement
// getFirstElement should take an array as an argument and return the first element in the array
const getFirstElement = (array) => {
    return array[0];
};





// Exercise 9: Create an arrow function called makeUppercase
// makeUppercase should take a string as an argument and return the string in all uppercase (e.g. "hello" becomes "HELLO")
const makeUppercase = (str) => {
    upper = str.toUpperCase();
    return upper;
};





// Exercise 10: Create an arrow function called getSquare
// getSquare should take a number as an argument and return the square of that number
const getSquare = (x) => {
    square = x*x;
    return square;
};





// Exercise 11: Create an arrow function called checkAge that uses conditional logic
// checkAge should take an age as an argument and return "Adult" if the age is 18 or larger and "Minor" if the age is under 18
const checkAge = age => {
    if (age <18){
        return "Minor";
    } else {
        return "Adult";
    }
};





// Exercise 12: Create an arrow function called calculateAverage that returns the average of three numbers
// calculateAverage should take three test scores as arguments and return the average of these scores
const calculateAverage = (x,y,z) => {
    return (x+y+z)/3;
};





// Exercise 13: Write an arrow function called evaluateScores that returns a message based on the students score
/* 
evaluateScores should take three test scores, find the highest score, and return one of the following messages:
    Return "Excellent work! Top score: [score]" if highest score is 90+
    Return "Good job! Top score: [score]" if highest score is 70-89
    Return "Keep practicing! Top score: [score]" if highest score is below 70 
*/
const evaluateScores = (x,y,z) => {
    const highest = Math.max(x,y,z);
    if (highest >89){
        return `Excellent work! Top score: ${highest}`;
    } else if (highest >69){
        return `Excellent work! Top score: ${highest}`;
    } else {
        return `Excellent work! Top score: ${highest}`;
    }
};





// Exercise 14: Write an arrow function called calculateSalePrice that calculates the sale price of an item. 
// calculateSalePrice should take a product name and price as arguments, add a 20% discount, and return formatted string in the format "Product: [name] - Sale Price: $[price with markup]"
const calculateSalePrice = (pName, pPrice) => {
    discount = pPrice*0.2;
    salePrice = pPrice-discount;
    return `Product: ${pName} - Sale Price: ${salePrice}`;
};





// =============================================
// TEST YOUR FUNCTIONS (DO NOT MODIFY)
// =============================================

// You can uncomment these lines to test your functions

console.log("Testing Part 1:");
console.log(greetUserArrow("Alice")); // Should output: "Hello, Alice!"
console.log(calculateAreaArrow(5, 3)); // Should output: 15
console.log(getCurrentTimeArrow()); // Should output current time
console.log(validatePasswordArrow("secret")); // Should output: "Password must be at least 8 characters"
console.log(processOrderArrow({price: 10}, 2)); // Should output: "Order total: $21.60"

console.log("\nTesting Part 2:");
console.log(makeUppercase("hello")); // Should output: "HELLO"
console.log(getSquare(4)); // Should output: 16
console.log(createFullName("John", "Doe")); // Should output: "John Doe"
console.log(calculateVolume(2, 3, 4)); // Should output: 24
console.log(checkAge(25)); // Should output: "Adult"
console.log(checkAge(16)); // Should output: "Minor"
console.log(getFirstElement([1, 2, 3, 4])); // Should output: 1
console.log(calculateAverage(85, 92, 78)); // Should output: 85
console.log(evaluateScores(95, 87, 92)); // Should output: "Excellent work! Top score: 95"
console.log(evaluateScores(75, 68, 82)); // Should output: "Good job! Top score: 82"
console.log(calculateSalePrice("Laptop", 100)); // Should output: "Product: Laptop - Sale Price: $80"