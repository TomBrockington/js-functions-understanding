// function takes two parameters
// num1, num2
// return num1 plus num2
// This part will return the sum of the the two parameters passed in if correct. 

// delaiere some variables
// num1 = 10
// num2 = 1
// num3 = 4

// named a variable result and make it equal the result for the function 
// pass in num3, the num 1
// num1 wil now equal num3
// num2 will now equal num2
// result will equal 14

function myFunction(num1, num2) {
    console.log('num1 = ', num1)
    console.log('num2 = ', num2)
    return num1 + num2
} 

const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
console.log(result)