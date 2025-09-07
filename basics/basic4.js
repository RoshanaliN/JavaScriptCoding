// Functions - block of code
function add(a,b){
    return a+b
}

let sum = add(2,4)
console.log(add(2,3))
console.log(sum)

// Anyonymus functions do not have names 

let sumI = function(c,d){
    return c+d
}
console.log(sumI(2,5))

let sumInteger = (c,d)=>c+d
console.log(sumInteger(5,3))


//var - global/function
//let - global/function - block level{}