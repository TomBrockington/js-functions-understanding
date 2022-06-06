// one function with no parameters
// returns 2

// second function with one parameter of num1 
// has a constant num2 which is the result of the first function -- so 2
// return the value of num1 * num2s function

// const for result using the second function passing in 5
// 5 becomes num1 and is timesed by 2
// 10

function getSomeValue() {
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
}

const result = myFunction(5)
console.log(result)