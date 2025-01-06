function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = multiply(7, 2); // 14
const result4 = divide(9, 3); // 3

console.log(result1, result2, result3, result4); // 8 6 14 3

//Example of how the error might occur:
// Incorrect usage leading to the error:
// let num1: number = "10"; // This will give the error
// let num2: number = 20;
// let sum: number = num1 + num2; 