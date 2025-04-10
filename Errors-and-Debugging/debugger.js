/*
Debugging for Beginners - Step by Step Guide
==========================================

What is Debugging?
----------------
Debugging is like being a detective - you're trying to find out why your code isn't working as expected.

Basic Debugging Tools:
-------------------
1. console.log() - Your best friend for debugging
2. Browser's Developer Tools (F12 or Right-click -> Inspect)
3. Simple print statements

Let's Start Debugging:
-------------------
*/

// Example 1: Simple Variable Debugging
let number = 10;
console.log("Number value:", number);  // Check what's in the variable

// Example 2: Debugging a Function
function addNumbers(a, b) {
    console.log("Input values:", a, b);  // Check inputs
    let sum = a + b;
    console.log("Sum:", sum);  // Check calculation
    return sum;
}

// Let's test it
let result = addNumbers(5, 3);
console.log("Final result:", result);

/*
Step-by-Step Debugging Process:
----------------------------
1. Identify the Problem
2. Add console.log() statements
3. Check the browser console
4. Fix the issue
5. Test again
*/

// Example 3: Debugging a Loop
function countToFive() {
    console.log("Starting count...");  // Debug start
    
    for (let i = 1; i <= 5; i++) {
        console.log("Current number:", i);  // Debug each step
    }
    
    console.log("Counting finished!");  // Debug end
}

// Example 4: Debugging Conditional Statements
function checkWeather(temperature) {
    console.log("Temperature is:", temperature);  // Debug input
    
    if (temperature > 30) {
        console.log("It's hot!");  // Debug path
        return "Hot";
    } else if (temperature < 10) {
        console.log("It's cold!");  // Debug path
        return "Cold";
    } else {
        console.log("It's pleasant!");  // Debug path
        return "Pleasant";
    }
}

// Example 5: Debugging Array Operations
function processShoppingList(items) {
    console.log("Shopping list:", items);  // Debug input
    
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        console.log("Processing item:", items[i]);  // Debug each item
        total += items[i].price;
    }
    
    console.log("Total cost:", total);  // Debug result
    return total;
}

/*
Common Beginner Mistakes to Debug:
------------------------------
*/

// Mistake 1: Undefined Variables
let name;
console.log("Name is:", name);  // Will show undefined

// Mistake 2: Wrong Variable Names
let userName = "John";
// console.log(userName);  // Correct
// console.log(username);  // Wrong (case sensitive)

// Mistake 3: Array Index Issues
let fruits = ["apple", "banana", "orange"];
console.log("First fruit:", fruits[0]);  // Correct
// console.log(fruits[3]);  // Wrong (out of bounds)

/*
Debugging Tips for Beginners:
--------------------------
1. Start with console.log()
2. Check one thing at a time
3. Use clear messages
4. Test small parts of code
5. Don't be afraid to add many console.log() statements
*/

// Example 6: Debugging a Simple Calculator
function simpleCalculator(num1, num2, operation) {
    console.log("Calculator inputs:", num1, num2, operation);  // Debug inputs
    
    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else {
        console.log("Invalid operation");  // Debug error
        return "Invalid operation";
    }
    
    console.log("Calculation result:", result);  // Debug result
    return result;
}

/*
Practice Exercise:
---------------
Try debugging this function:
*/

function findLargestNumber(numbers) {
    console.log("Input numbers:", numbers);  // Start here
    
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        console.log("Comparing:", largest, "with", numbers[i]);  // Add this
        if (numbers[i] > largest) {
            largest = numbers[i];
            console.log("New largest found:", largest);  // Add this
        }
    }
    
    console.log("Final largest number:", largest);  // Add this
    return largest;
}

// Test the function
let numbers = [5, 2, 9, 1, 7];
let largest = findLargestNumber(numbers);
console.log("The largest number is:", largest);

/*
Using Debugger - Practical Guide
==============================

What is Debugger?
---------------
The debugger statement stops the execution of JavaScript and calls the debugging function.
It's like setting a breakpoint in your code.

How to Use Debugger:
-----------------
1. Open browser's Developer Tools (F12)
2. Go to Sources tab
3. Add debugger statement in your code
4. Run the code
5. Use debugging controls (Step Over, Step Into, etc.)

Basic Debugger Example:
--------------------
*/

function simpleDebugExample() {
    let x = 10;
    debugger;  // Execution will pause here
    x += 5;
    console.log(x);
    return x;
}

/*
Debugging Controls:
----------------
1. Continue (F8) - Continue execution
2. Step Over (F10) - Execute next line
3. Step Into (F11) - Go into function
4. Step Out (Shift+F11) - Exit current function
*/

// Example 1: Debugging a Function
function calculateTotal(items) {
    debugger;  // Pause here to inspect items
    
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        debugger;  // Pause here to inspect each item
        total += items[i].price;
    }
    
    debugger;  // Pause here to inspect final total
    return total;
}

// Test the function
let shoppingItems = [
    { name: "Apple", price: 2 },
    { name: "Banana", price: 1 },
    { name: "Orange", price: 3 }
];
calculateTotal(shoppingItems);

// Example 2: Debugging Conditional Logic
function checkAge(age) {
    debugger;  // Pause to inspect age
    
    if (age < 0) {
        debugger;  // Pause if age is negative
        return "Invalid age";
    }
    
    if (age >= 18) {
        debugger;  // Pause if adult
        return "Adult";
    } else {
        debugger;  // Pause if minor
        return "Minor";
    }
}

// Test the function
checkAge(20);
checkAge(15);
checkAge(-5);

// Example 3: Debugging Array Operations
function processArray(arr) {
    debugger;  // Pause to inspect input array
    
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        debugger;  // Pause to inspect each element
        result.push(arr[i] * 2);
    }
    
    debugger;  // Pause to inspect final result
    return result;
}

// Test the function
processArray([1, 2, 3, 4, 5]);

/*
Debugging Tips:
------------
1. Use debugger at key points in your code
2. Inspect variables in the console
3. Use the Watch panel to monitor specific variables
4. Use the Call Stack to see function calls
5. Use Breakpoints in the Sources tab
*/

// Example 4: Debugging with Multiple Breakpoints
function complexOperation(data) {
    debugger;  // First breakpoint
    
    let processed = [];
    for (let item of data) {
        debugger;  // Second breakpoint
        
        let result = {
            id: item.id,
            value: item.value * 2
        };
        processed.push(result);
    }
    
    debugger;  // Third breakpoint
    return processed;
}

// Test data
let testData = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
];

complexOperation(testData);

/*
Using Browser Debugging Tools:
---------------------------
1. Sources Panel:
   - Set breakpoints by clicking line numbers
   - Use the debugger controls
   - Watch variables in the Scope panel

2. Console Panel:
   - Type variable names to inspect values
   - Use console.log() for additional output
   - Test expressions

3. Watch Panel:
   - Add variables to watch
   - Monitor changes in real-time
*/

// Example 5: Debugging Async Code
async function fetchUserData(userId) {
    debugger;  // Pause before fetch
    
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        debugger;  // Pause after fetch
        
        const data = await response.json();
        debugger;  // Pause after parsing
        
        return data;
    } catch (error) {
        debugger;  // Pause if error occurs
        console.error("Error:", error);
        throw error;
    }
}

/*
Remember:
--------
1. Debugger is your friend
2. Use multiple breakpoints
3. Inspect variables carefully
4. Use the console for quick checks
5. Step through code slowly
6. Watch for variable changes
*/ 