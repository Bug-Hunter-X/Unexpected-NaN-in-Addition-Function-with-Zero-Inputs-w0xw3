# Unexpected NaN in Addition Function with Zero Inputs

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The function unexpectedly returns NaN when both inputs are zero.

## Description
The function `myFunction` takes two numbers as input and returns their sum. However, when both inputs are 0, the function incorrectly returns NaN instead of 0. This happens because the return statement inside the 'else' block is executed even when both 'a' and 'b' are 0.

## Bug
The bug lies in the logic of handling the zero inputs.  The function should explicitly handle the case where both inputs are zero to return the correct result. 

## Solution
The solution involves adding a specific check for both inputs being zero at the beginning of the function and immediately returning 0 in that case.

## How to run
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run `bug.js` in a JavaScript environment to reproduce the bug.
5. Run `bugSolution.js` to see the corrected output.
