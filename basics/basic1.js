// Print
console.log("Hello World")

// Comments like this

/* Multiple
lines 
comments 
*/

// Variables are very loosely tied in JS. Till ES 5 we only have var but from ES 6 onwards we also have let and const.
// We cannot redeclare variable with let but possible with var. Reassiging is allowed for both var and let. 
// Both reassigning and redeclaration is not allowed for const
let a =5
let b = "Roshan"
let c = 23.65
let req = true

console.log(a)
console.log(typeof(a))
console.log(b)
console.log(typeof(b))
console.log(c)
console.log(typeof(c))
console.log(typeof(req))
// null and undefined

b= a+c
console.log(b)
console.log(!req)