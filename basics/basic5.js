const Persons = require('./basic7')
let day = 'tuesday '
console.log(day.length)
console.log(day.slice(0, 3))
console.log(day[2])
console.log(day.split('s'))
console.log(day.split('s')[1].length)
console.log(day.split('s')[1].trim())

let date = '23'
let nextDate = '27'
console.log(Number(nextDate - date))
let diff = parseInt(nextDate) - parseInt(date)
diff.toString()

month = '08'

let temp = day +'is funday. Monday is a boring day'
console.log(temp)
console.log(temp.indexOf('day'))
console.log(temp.indexOf('day',5))
console.log(temp.lastIndexOf('day'))
let index = 0
// let count = 1
// while(temp.indexOf('day',index)!=temp.lastIndexOf('day')){
//     count++
//     index=temp.indexOf('day',index)+1
// }
// console.log(count)

let count = 0
let val =temp.indexOf('day',index) 
while(val != -1){
    count++
    val=temp.indexOf('day',val+1)
}
console.log(count)

let person2 = new Persons('admin', 'test')
person2.fullName()