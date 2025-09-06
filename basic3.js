let mark = Array(6)
let marks = new Array(1,6,2,3,4,5)
let mark1 = [52,64,35,94,54,62]
console.log(mark1.slice(2,4))
console.log(mark1[2])
mark1[2]=15
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

let sum=0
for (let i=0; i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)