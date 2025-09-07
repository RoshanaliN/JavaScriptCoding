// object is collection of properties

let person = {

    firstName: 'John',
    lastName: 'Doe',
    age: 43,
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }

}
person.fullName()
console.log(person.lastName)
console.log(person)
console.log(person['firstName'])
person.firstName = 'Tim'
console.log(person)
person.gender = 'Male'
console.log(person)
delete person.gender
console.log(person)
let genderInPerson = 'gender' in person
console.log(genderInPerson)
// print values of all js object
for (let key in person) {
    console.log(key + ' ' + person[key])
}