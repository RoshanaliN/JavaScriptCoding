// Ineritance in one of the main pillar in object oriented programming language
// one class can inherit/acquire properties and methods of other class
//  the class which inherits the properties and methods is call subclass
//  the class from where the properties and methods are inherited is called superclass

const Person = require('./basic7')
class Pet extends Person{
    get location(){
        return "BlueCross"
    }
    constructor(firstName,lastName){
        // parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet("test", "pet")
pet.fullName()
console.log(pet.location)
