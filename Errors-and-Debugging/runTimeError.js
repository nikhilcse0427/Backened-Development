/*
Runtime Errors - Study Notes
===========================

Definition:
----------
A runtime error is an error that occurs while the program is running (executing), as opposed to syntax errors which are caught during code compilation. Runtime errors happen when the code is syntactically correct but tries to perform an operation that's impossible or invalid.

Key Characteristics:
------------------
1. Occurs during program execution
2. Cannot be caught by the compiler
3. Can be handled using try-catch blocks

Common Types of Runtime Errors:
----------------------------
*/

// Let's debug this runtime error step by step
function debugRuntimeError() {
    // 1. Calling non-function as function
    let t1 = 10;  // t1 is a number
    debugger;  // First breakpoint - check t1 value
    
    try {
        console.log("Before calling t1()");
        debugger;  // Second breakpoint - before error
        t1();      // This will cause a runtime error
        console.log("After calling t1()");  // This won't execute
    } catch (error) {
        debugger;  // Third breakpoint - in catch block
        console.log("Error caught:", error.message);
        // Output: Error caught: t1 is not a function
    }
}

// 2. Let's debug array index out of bounds
function debugArrayError() {
    let arr = [1, 2, 3];
    debugger;  // First breakpoint - check array
    
    try {
        console.log("Before accessing arr[5]");
        debugger;  // Second breakpoint - before error
        console.log(arr[5]);  // This will cause a runtime error
        console.log("After accessing arr[5]");  // This won't execute
    } catch (error) {
        debugger;  // Third breakpoint - in catch block
        console.log("Error caught:", error.message);
        // Output: Error caught: Cannot read property '5' of undefined
    }
}

// 3. Let's debug undefined property access
function debugPropertyError() {
    let person = { name: "John" };
    debugger;  // First breakpoint - check person object
    
    try {
        console.log("Before accessing person.age");
        debugger;  // Second breakpoint - before error
        console.log(person.age);  // This will cause a runtime error
        console.log("After accessing person.age");  // This won't execute
    } catch (error) {
        debugger;  // Third breakpoint - in catch block
        console.log("Error caught:", error.message);
        // Output: Error caught: Cannot read property 'age' of undefined
    }
}

// Run the debug examples
debugRuntimeError();
debugArrayError();
debugPropertyError();

/*
Debugging Steps:
--------------
1. Open browser's Developer Tools (F12)
2. Go to Sources tab
3. Find this file
4. The code will pause at each debugger statement
5. Use the debugging controls:
   - F8: Continue
   - F10: Step Over
   - F11: Step Into
   - Shift+F11: Step Out

At each breakpoint, you can:
1. Check variable values in the console
2. Use the Scope panel to see all variables
3. Use the Watch panel to monitor specific variables
4. Step through the code to see where it fails
*/

/*
Prevention Strategies:
-------------------
1. Validate inputs before using them
2. Check if objects/properties exist before accessing them
3. Use proper error handling (try-catch blocks)
4. Test code with different inputs and scenarios

Error Handling Example:
--------------------
*/

try {
    let t1 = 10;
    t1();  // This will cause a runtime error
} catch (error) {
    console.log("Error caught:", error.message);
    // Output: Error caught: t1 is not a function
}

/*
Best Practices:
-------------
1. Always use try-catch blocks for operations that might fail
2. Provide meaningful error messages
3. Log errors for debugging
4. Have fallback mechanisms for critical operations
5. Test edge cases thoroughly

Remember:
--------
- Runtime errors are different from syntax errors
- They occur during execution, not during compilation
- They can be handled but not prevented by the compiler
- Proper error handling is crucial for robust applications
*/
