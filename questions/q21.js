// function with two parameters num1 num2
// inside function is const result with num1 + num2
// then return the result

// outside const called result calling the function passing in 10, 20
// then calling the function passing 100, 2
// 30

function myFunction(num1, num2) {
    const result = num1 + num2
    return result 
}

const result = myFunction(10, 20)
myFunction(100, 2)
console.log(result)