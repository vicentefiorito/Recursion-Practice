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

    // Iterates through the array
    while (leftArr.length > 0 && rightArr.length > 0) {
        // checks if the element at the beginnign of the left is greater than the element at the beginning of the right
        console.log('Left Array --> ' + leftArr)
        leftArr.shift()
        console.log('Right Array --> ' + rightArr)
        rightArr.shift()

    }
}


// testing
console.log(mergeSort([])) //[]
console.log(mergeSort([5]))

const arr = [5,2,1,6,4] //[1,2,4,5,6]
const mid = Math.floor(arr.length/2)
const arrLeft = arr.slice(0, mid)
const arrRight = arr.slice(mid)
sort(arrLeft,arrRight)

// console.log(mergeSort(arr))

