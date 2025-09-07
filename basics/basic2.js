const flag = true
if (flag) {
    console.log("in if condition")
} else {
    console.log("in else condition")
}

let a = 3
while (a > 0) {
    console.log("in while loop")
    a--
}
a = 0
do {
    console.log("in do-while loop")
} while (a > 0);
let n =1
for (let k = 1; k < 101; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log("number divisible by 2 and 5 is " + k)
        if(n>3){
            break
        }
    }
}