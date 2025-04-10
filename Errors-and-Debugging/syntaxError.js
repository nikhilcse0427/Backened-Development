/*
Syntax Errors - Study Notes
==========================

Definition:
----------
A syntax error is an error in the syntax of a programming language that occurs during the compilation/parsing phase. These errors are detected by the compiler or interpreter before the program runs. Syntax errors occur when the code doesn't follow the rules of the programming language.

Key Characteristics:
------------------
1. Occurs during compilation/parsing
2. Detected before program execution
3. Prevents the program from running
4. Must be fixed before the code can execute

Common Types of Syntax Errors:
---------------------------
*/

// 1. Missing semicolon
let x = 10
// let y = 20  // Syntax Error: Missing semicolon

// 2. Unmatched parentheses
// let sum = (10 + 5;  // Syntax Error: Unmatched parentheses

// 3. Missing curly braces
// if (true)
//     console.log("Hello")
// else  // Syntax Error: Missing curly braces

// 4. Invalid variable names
// let 123abc = "test";  // Syntax Error: Invalid variable name

// 5. Missing quotes in strings
// let name = John;  // Syntax Error: Missing quotes

// 6. Using reserved keywords
// let let = 10;  // Syntax Error: Using reserved keyword

/*
Prevention Strategies:
-------------------
1. Use a code editor with syntax highlighting
2. Enable linters in your development environment
3. Follow consistent coding style
4. Review code before running
5. Use proper indentation

Error Detection Tools:
-------------------
1. Code editors with syntax highlighting
2. Linters (ESLint, JSHint)
3. Compiler error messages
4. IDE error detection

Best Practices:
-------------
1. Write clean, well-formatted code
2. Use consistent coding style
3. Test small code segments frequently
4. Use proper indentation
5. Follow language-specific conventions

Remember:
--------
- Syntax errors are different from runtime errors
- They are caught before program execution
- They are usually easier to fix than runtime errors
- They prevent the program from running at all
- Good coding practices can help prevent syntax errors
*/

// Example of proper syntax:
let name = "John";
if (true) {
    console.log("Hello, " + name);
} else {
    console.log("Goodbye");
}

/*
Common Syntax Error Messages:
--------------------------
1. "Unexpected token"
2. "Missing semicolon"
3. "Unmatched parentheses"
4. "Invalid syntax"
5. "Unexpected end of input"
*/