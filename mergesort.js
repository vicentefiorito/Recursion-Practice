// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

function mergeSort(arr){
    // empty array
    if(arr.length === 0) return "Please enter a non-empty array"

    // array with one element
    if(arr.length === 1) return arr

    // finds the middle element of the array
    const middle = Math.round(arr.length/2)

    // left part of the array, including middle element
    const left = arr.slice(0,middle)
    // rest of the array
    const right = arr.slice(middle)

    // return the sorted array here
    return sort(mergeSort(left),mergeSort(right))
}

function sort(leftArr,rightArr) {
    // merges both arrays here
    const mergedArr = []

    //counters to keep track of the array values
    let iL = 0
    let iR = 0

    // Iterates through the array
    while (iL < leftArr.length && iR < rightArr.length) {
        console.log(leftArr[iL])
        iL++
        console.log(rightArr[iR])
        iR++
    }

    // while(iL < leftArr.length) {
    //     console.log(leftArr[iL])
    //     iL++
    // }
    
    // while(iR < rightArr.length) {
    //     console.log(rightArr[iR])
    //     iR++
    // }

}

// testing
console.log(mergeSort([])) //[]
console.log(mergeSort([5]))

const arr = [5,2,1,6,4] //[1,2,4,5,6]
const arrLeft = arr.slice(0, Math.round(arr.length/2))
const arrRight = arr.slice(Math.round(arr.length/2))
sort(arrLeft,arrRight)

// console.log(mergeSort(arr))

