let mark = Array(6)
let marks = new Array(1, 6, 2, 3, 4, 5)
let mark1 = [52, 64, 35, 94, 54, 62]
console.log(mark1.slice(2, 4))
console.log(mark1[2])
mark1[2] = 15
console.log(mark1)
console.log(marks.length)
mark1.push(9) // add element last of array
console.log(mark1)
mark1.pop() // remove last element of array
console.log(mark1)
mark1.unshift(85) // add element start of array
console.log(mark1)
console.log(mark1.indexOf(94)) // get position of element in array
console.log(mark1.includes(94)) // check if element is present in array
console.log(mark1.includes(120))

let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)

// reduce method in array
let total = marks.reduce((sum, markElement) => sum + markElement, 0)
console.log(total)

// filter function in array
var scores = [12, 13, 14, 15]
var evenNumber = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0)
        evenNumber.push(scores[i])
}
console.log(evenNumber)

var even = scores.filter(score=>score%2!=0)
console.log(even)

// map method in array used to do opertaion on the filter array
let mapped =even.map(score=>score*3)
console.log(mapped)
console.log(mapped.reduce((a,val)=>a+val,0))

// chaining of methods
console.log(scores.filter(score=>score%2!=0).map(score=>score*3).reduce((sum,val)=>sum+val,0))

// sorting 1.sorting array with string and 2 sorting array with numbers 
// sorting array with string

let arr = ['axe', 'sat', 'cat', 'zee','bee']
console.log(arr)
console.log(arr.sort())
console.log(arr.reverse())

let nArr = [15,5,95,003,25]
console.log(nArr.sort((a,b)=>a-b))
console.log(nArr.reverse((a,b)=>a-b))
console.log(nArr.sort((a,b)=>b-a))
