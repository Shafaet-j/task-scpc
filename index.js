// Task number 1   ////////////////////////////

function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

console.log(reverseString("hello"));  // Output: "olleh"

// Task number 2 ///////////////////////////

function sumOfPossitiveNumber(arr){
  let possitiveNum = 0;
  for(let i=0; i<arr.length; i++ ){
    if(arr[i] > 0){
      possitiveNum += arr[i]
    }
  }
  return possitiveNum
}

const numbers = [1, 2, 3, -4, 5, -6, 7, -8, 9];
const result1 = sumOfPossitiveNumber(numbers);
console.log("Sum of positive numbers:", result1);



// Task number 3 ///////////////////

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero";
      }
    default:
      return "Invalid operator";
  }
}

// Test the calculator function
const num1 = 10;
const num2 = 5;
const operator = "+";
const result = calculate(num1, operator, num2);
console.log(`Result of ${num1} ${operator} ${num2}: ${result}`);


// Task number 4 /////////////////////// 

function generateRandomPass(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Test the password generator with a length of 10 characters
const passwordLength = 10;
const randomPassword = generateRandomPass(passwordLength);
console.log("Random Password:", randomPassword);

// Task 5 /////////////////////////

function romanToInteger(roman) {
  const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentNumeral = roman[i];
    const currentValue = romanNumerals[currentNumeral];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

// Test the function
console.log(romanToInteger("IX"));   // Output: 9
console.log(romanToInteger("XXI"));  // Output: 21
console.log(romanToInteger("IV"));   // Output: 4
console.log(romanToInteger("MCMXCIV")); // Output: 1994

// Task number 6 ///////////////////

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements";
  }

  arr.sort((a, b) => a - b);

  return arr[1];
}

// Test the function
const numbersOfArr = [5, 2, 8, 1, 9, 3, 4, 7];
const secondSmallest = findSecondSmallest(numbersOfArr);
console.log("Second Smallest Element:", secondSmallest);  // Output : 2


