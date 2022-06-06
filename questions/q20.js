// function declaired with 3 variables. 
// num1 num2 num3
// returns num1 + num3 

//const num1 = 20, 2 = 200, 3 = 1000
// result calls function with 4 parameters
// 5, 10 , num3, 15
// 5 and 10 become 1 and 2, 4th is forgoteen
// result will be 5 + 1000 
// 1005

function myFunction(num1, num2, num3) {
    return num1 + num3
}

const num1 = 20
const num2 = 200
const num3 = 1000

const result = myFunction(5, 10, num3, 15)
console.log(result)