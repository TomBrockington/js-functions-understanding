// function takes no outside parameters
// each time it is run it adds 1 to the variable counter 
// returning the data to the variable

// run the function adding a number
// run a second time but save the data to a const named num
// 1
// 2
// 3

let counter = 1
console.log('Counter start ', counter)
function myFunction() {
    counter ++
    return counter
}

myFunction()
console.log('first call ', counter)
const num = myFunction()
console.log('Second call ',counter)
