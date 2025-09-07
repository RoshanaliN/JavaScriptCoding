// Can a JavaScript object hold a function as a property? Explain with an example.
// / yes
const person = {
    firstName: 'Tim',
    age: 25,
    greet: function () {
        console.log("Hello, I am " + this.firstName)
    }
}

person.greet()

// What are anonymous functions in JavaScript? Define their syntax and implementation.
// function sayHello(){
//     return "hello World"
// }
// let text = sayHello()
let text = function (name) {
    return "hello world, I am " + name
}
console.log(text("Jack"))

// What is the difference between var, const, and let? Explain with an example.
// var can be reassigned and redeclared multiple times as its scope is globally scoped/function-scoped

function varExample() {
    var a = 3
    if (true) {
        var a = 5 //updated a's value form 3 to 5
    }
    console.log(a) // is 5 as value of a got updated in if block
}
varExample()

// let can be reassigned but not be redeclared within same scope. It is block-scoped {}

function letExample() {
    let b = 3
    if (true) {
        let b = 5 //redeclare b in if block
    }
    console.log(b) // is 3 not 5 as scope of the previous b in the if statement is within the if block
}
letExample()

//const cannot be reassigned or redefined multiple times within same scope. It is block-scoped {}
function constExample() {
    const c = 3
    if (true) {
        const c = 5 //redeclare c in if block
    }
    console.log(c) // is 3 not 5 as scope of the previous c in the if statement is within the if block
}
constExample()

//Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?
// push adds new element at end of array
// pop removes last element from end of array
// unshift adds new element at start of array
// shift remove first element from start of array
//  indexOf give index of the element present in array
// splice helps to remove element form the given start and end index
//  forEach used to iterate over array
let Narr = [9, 6, 5, 3]
Narr.push(50)
console.log(Narr)
Narr.pop()
console.log(Narr)
Narr.unshift(10)
console.log(Narr)
Narr.shift()
console.log(Narr)
Narr.splice(1, 1)
console.log(Narr)

//Is JavaScript Asynchronous? Prove with an example.
// yes JS is asynchronous
console.log("Hi I am 1st prg")
console.log("Hi I am 2nd prg")
console.log("Hi I am 3th prg")
console.log("Hi I am 4th prg")
setTimeout(function () {
    console.log("Hi I am 5th prg")
}, 1000)

console.log("Hi I am 6th prg")

//What are callback functions in JavaScript?
// Callback functions are functions that are passed as arguments to another functions and is executed after some operation is completed. 
// Callbacks are often used for asynchronus operations

function fetchData(callback) {
    // fetch data from server
    setTimeout(function () {
        console.log("fetched data")
        const data = "Sample data"
        callback(data)
    }, 2000)
}

function processData(data) {
    console.log("processing", data)
}

function modifyData(data) {
    console.log("modifying", data)
}


fetchData(processData) // Explicit callback
fetchData(modifyData) // Explicit callback


// What are promises in JavaScript? Explain the difference between callback functions and promises with an example.

function fetchDataPromise() {
    // fetch data from server
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fetched promise data")
            const data = "Sample promise data"
            resolve(data)
        }, 3000)
    })
}

fetchDataPromise().then(function (data) {
    console.log("processing", data)
})

// Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. 
// Create main.js to call parent class methods from a child class object.
// From the above code, explain how the super and these keywords help achieve the solution.
class parent {

    constructor(a, b) {
        this.a = a
        this.b = b

    }

}

class child extends parent {
    constructor(a, b) {
        super(a, b)
    }

}

// What is the difference between == and ===?
// == doesn't look at the type of two values
// === looks at the type of two values not just the values
console.log("double equal " + (5=='5'))
console.log("triple equal " + (5==='5'))

// What is the difference between null and undefined in JavaScript?
// null is value of the variable. Null variable is of type object
// undefined is an variable which is not initialized/not defined. undefined variable is of type undefined 


// A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects.
const st = [{name:'Ram',score: 35},
    {name:'Alice',score: 55},
    {name:'Tej',score: 90},
    {name:'Tim',score: 25},
    {name:'Joe',score: 50}]

let passST= st.filter(student=> student.score>36)
console.log(passST)

let upperCase = passST.map(student=>student.name.toUpperCase())
console.log(upperCase)

let total = passST.reduce((sum,student)=>sum+student.score,0)
console.log(total)