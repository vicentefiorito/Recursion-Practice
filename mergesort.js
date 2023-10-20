// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

function mergeSort(arr){
    // finds the middle element of the array
    const middle = Math.round(arr.length/2)

    // left part of the array, including middle element
    const left = arr.slice(0,middle)
    // rest of the array
    const right = arr.slice(middle)

    // return the sorted array here
    // return sort(mergeSort(left),mergeSort(right))
}



const arr = [5,2,1,6,4] //[1,2,4,5,6]
mergeSort(arr)