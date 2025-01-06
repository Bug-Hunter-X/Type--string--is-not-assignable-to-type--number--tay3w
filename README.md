# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: `Type 'string' is not assignable to type 'number'.`  The error arises when a value of type `string` is unexpectedly used where a `number` is expected.  This often happens due to implicit type coercion, incorrect function parameters, or returned values that don't match the function's return type signature.

The `bug.ts` file contains code that triggers this error.  The `bugSolution.ts` file provides a corrected version.  The error is quite subtle and can be difficult to trace, especially in larger codebases.  Pay close attention to type checking and function signatures.