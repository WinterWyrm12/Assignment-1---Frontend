# Assignment 1: JavaScript Arrow Functions

## Overview
This assignment will teach you ES6 arrow function syntax through hands-on practice. You'll convert traditional JavaScript functions to arrow functions and write new arrow functions from scratch.

## Getting Started

1. Clone or download this repository to your local machine
2. Open the `arrow-functions.js` file in your code editor
3. Complete the exercises by replacing `null` values with working arrow functions
4. Test your work by uncommenting the test cases at the bottom of the file and running with the command `node arrow-functions.js` in your terminal/command line.

## Assignment Structure

### Part 1: Function Conversions (Exercises 1-5)
Convert the provided traditional JavaScript functions to arrow function syntax. Each exercise shows you a working traditional function and asks you to create an equivalent arrow function.

### Part 2: Writing Arrow Functions (Exercises 6-14)
Create arrow functions from scratch based on the provided specifications. These exercises cover:
- Functions with different parameter counts (0, 1, multiple)
- Single-line arrow functions (implicit return)
- Multi-line arrow functions (explicit return with curly braces)
- Conditional logic and calculations

## Key Concepts You'll Practice

- **Arrow function syntax**: `param => expression` and `(params) => { statements }`
- **Implicit vs explicit returns**: When you can omit curly braces and `return`
- **Parameter handling**: Parentheses rules for different parameter counts
- **Multi-statement functions**: Using curly braces for complex logic

## Testing Your Work

Uncomment the test cases at the bottom of `arrow-functions.js` to verify your functions work correctly:

```javascript
// Remove the /* and */ to run tests
/*
console.log("Testing Part 1:");
console.log(greetUserArrow("Alice")); // Should output: "Hello, Alice!"
// ... more tests
*/
```

Run the file with Node.js:
```bash
node arrow-functions.js
```

## Submission

Upload your completed `arrow-functions.js` file to the assignment submission page.

## Need Help?

- Review **Resource 3: JavaScript Arrow Functions** for detailed examples and explanations
- Check the MDN documentation on [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- Remember: arrow functions with single expressions don't need curly braces or `return`
- Remember: arrow functions with multiple statements need curly braces and explicit `return`