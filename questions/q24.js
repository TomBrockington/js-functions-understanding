// function with two parameters num1 and num2
// const result inside for 1 + 2 
// return 100

// const result outside calls function passing 5, 2
// surely it will add togher the numbers. and send them to the const
// unless it cant be reassigned
// 7

function myFunction(num1, num2) {
    const result = num1 + num2
    return 100
}

const result = myFunction(5, 2)
console.log(result)

// nope it will take the return value