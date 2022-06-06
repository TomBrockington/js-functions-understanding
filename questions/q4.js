// declairing a function that will take 1 parameter of num
// returning the num -1 when run
// let variable of 10 for num to pass into function as paramter 
// let variable of 3 for add 
// two rows of redclairing the add variable by using a function
// each time by passing itself into the function as the paramter

// i dont believe num is used because add takes its variable from add
// but it will still only reduce the num variable by -1 

// add = 3
// function(add)
// add = 9 
// add = 8

function myFunction(num) {
    console.log('log num ', num)
    return num-1
}
let num = 10 
let add = 3
console.log('num = ', num)
add = myFunction(add)
console.log('Add 1 ', add)
console.log('num = ', num)
add = myFunction(add)
console.log('Add 2 ', add)
console.log('num = ', num)



