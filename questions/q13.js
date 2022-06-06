//  one function with no parameters
// returns 2

// second function with parameter of num1 
// local constant for num2 = first function -- 2
// returning num1 passed in times the function result of 2

// const for result calls function and passes in 5
// 10

function getSomeValue() {
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
}

const result = myFunction(5)
console.log(result)
