// Find the sum of digits of a given number
// Example: 1234 -> 1+2+3+4 = 10

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

// Example 
const number = 1234;
const result = sumOfDigits(number);
console.log("Sum of digits: " + result);
