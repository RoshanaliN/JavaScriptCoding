module.exports = class Person {
    age = 25

    get location() {
        return 'canada'
    }

    // constructor is a method that executes when you create a class object

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

    }

    fullName(){
        console.log(this.firstName+this.lastName)
    }
}

// let personObject = new Person('john', 'doe')
// console.log(personObject.location)
// console.log(personObject.firstName)
// console.log(personObject.lastName)
// personObject.fullName()
// let person1 = new Person('test', 'admin')
// person1.fullName()