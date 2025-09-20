function minSwapsToKeepPositive(arr) {
    let swaps = 0;
    let sum = 0;
    let swapped = false;
    let nIndex = 0;
    let pIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < 0 && !swapped) {
            nIndex = i;
        } else {
            pIndex = i;
        }
        if (sum < 0 && !swapped) {
            swapped = true;
        }

    }
    if (swapped) {
        let temp = arr[pIndex]
        arr[pIndex] = arr[nIndex]
        arr[nIndex] = temp
        return 1 + minSwapsToKeepPositive(arr)
    }
    return 0;
}

const arr = [4,-3,-5, 2,1, 1];
const result = minSwapsToKeepPositive(arr);

if (result >= 0) {
    console.log("Total swaps needed:", result);
} else {
    console.log("Not possible to keep sum positive.");
}
