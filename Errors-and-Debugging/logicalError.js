/*
Logical Errors - Study Notes
==========================

Definition:
----------
A logical error is a bug in a program that causes it to operate incorrectly but not to terminate abnormally. The program runs successfully but produces incorrect results due to mistakes in the logic or algorithm. These errors are the hardest to detect as they don't generate error messages.

Key Characteristics:
------------------
1. Program runs without crashing
2. Produces incorrect results
3. No error messages are generated
4. Hard to detect and debug
5. Usually caused by incorrect algorithm implementation

Common Types of Logical Errors:
----------------------------
*/

// 1. Incorrect loop condition
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 10:", sum);  // Correct: 55

// Logical Error Example:
let wrongSum = 0;
for (let i = 1; i < 10; i++) {  // Logical Error: Should be i <= 10
    wrongSum += i;
}
console.log("Wrong sum:", wrongSum);  // Incorrect: 45 (misses 10)

// 2. Incorrect comparison operators
let age = 18;
// Logical Error Example:
if (age = 18) {  // Logical Error: Using = instead of == or ===
    console.log("You are 18 years old");
}

// 3. Incorrect order of operations
let a = 5, b = 10;
let correctResult = (a + b) * 2;  // Correct: 30
let wrongResult = a + b * 2;      // Logical Error: 25 (incorrect order)

// 4. Off-by-one errors
let numbers = [1, 2, 3, 4, 5];
// Correct:
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Logical Error:
for (let i = 0; i <= numbers.length; i++) {  // Will cause undefined
    console.log(numbers[i]);
}

/*
Prevention Strategies:
-------------------
1. Write clear and simple code
2. Use meaningful variable names
3. Add comments explaining complex logic
4. Test with different input values
5. Use debugging tools
6. Code review by peers
7. Write unit tests

Debugging Techniques:
------------------
1. Console logging
2. Step-by-step debugging
3. Using debugger statement
4. Testing with different inputs
5. Code walkthrough
*/

// Debugging Example:
function calculateAverage(numbers) {
    let sum = 0;
    // Debugging with console.log
    console.log("Input numbers:", numbers);
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log("Current sum:", sum);  // Debugging step
    }
    
    let average = sum / numbers.length;
    console.log("Final average:", average);  // Debugging result
    return average;
}

/*
Best Practices:
-------------
1. Break complex logic into smaller functions
2. Use meaningful variable and function names
3. Write unit tests for critical functions
4. Document complex algorithms
5. Use consistent coding style
6. Review code regularly
7. Test edge cases

Remember:
--------
- Logical errors are the hardest to detect
- They don't generate error messages
- They require thorough testing to find
- Good programming practices can help prevent them
- Debugging skills are crucial for fixing them
*/

// Example of proper logical implementation:
function isEven(number) {
    return number % 2 === 0;  // Correct logic
}

// Logical Error Example:
function isEvenWrong(number) {
    return number % 2 === 1;  // Logical Error: Returns true for odd numbers
}
