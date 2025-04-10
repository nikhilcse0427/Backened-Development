/*
Undefined in JavaScript - Study Notes
===================================

Definition:
----------
Undefined is a primitive value in JavaScript that represents the absence of a value. It is automatically assigned to variables that have been declared but not initialized, or to function parameters that weren't provided with arguments.

Key Characteristics:
------------------
1. It's a primitive data type
2. It's falsy in boolean context
3. It's the default value for uninitialized variables
4. It's different from null (which is an intentional absence of value)

Common Scenarios When We Get Undefined:
------------------------------------
*/

// 1. Uninitialized Variables
let x;
console.log(x);  // undefined

// 2. Missing Function Parameters
function greet(name) {
    console.log("Hello, " + name);
}
greet();  // Hello, undefined

// 3. Accessing Non-existent Object Properties
let person = { firstName: "John" };
console.log(person.lastName);  // undefined

// 4. Array Elements Beyond Length
let numbers = [1, 2, 3];
console.log(numbers[5]);  // undefined

// 5. Function Without Return Statement
function noReturn() {
    // no return statement
}
console.log(noReturn());  // undefined

// 6. Void Operator
console.log(void 0);  // undefined

// 7. Destructuring Non-existent Properties
let { nonExistent } = {};
console.log(nonExistent);  // undefined

/*
Prevention Strategies:
-------------------
1. Always initialize variables
2. Check for undefined before using values
3. Use default parameters in functions
4. Validate object properties before access
5. Use optional chaining (?.) for safe property access
*/

// Prevention Examples:

// 1. Default Parameters
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet();  // Hello, Guest

// 2. Optional Chaining
let user = { profile: { name: "John" } };
console.log(user?.profile?.age);  // undefined (safely)

// 3. Nullish Coalescing
// let value = undefined;
let defaultValue = value ?? "default";
console.log(defaultValue);  // "default"

/*
Best Practices:
-------------
1. Always initialize variables
2. Use default parameters in functions
3. Check for undefined before using values
4. Use optional chaining for safe property access
5. Use nullish coalescing for default values
6. Use strict equality (===) to check for undefined
*/

// Checking for undefined:
let value;
if (value === undefined) {
    console.log("Value is undefined");
}

// Using typeof:
if (typeof value === 'undefined') {
    console.log("Value is undefined");
}

/*
Remember:
--------
- undefined is different from null
- undefined means "no value assigned"
- null means "intentional absence of value"
- Always check for undefined before using values
- Use proper error handling for undefined cases
*/

// Example of proper undefined handling:
function processData(data) {
    if (data === undefined) {
        console.log("No data provided");
        return;
    }
    // Process data
    console.log("Processing:", data);
} 