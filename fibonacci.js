// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n){
   let arr = [0,1]
   for(i = 2; i < n; i++) {
    arr.push(arr[i-1] + arr[i-2])
   }
   return arr
}
console.log('------------------')
console.log('Iterative Fibonacci')
console.log(fibs(8))
console.log('------------------')

// Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
function fibsRec(n){
    if(n === 0) {
        return [0]
    }
    if(n === 1) {
        return [0,1]
    }

    const arr = fibsRec(n-1)
    return [...arr, arr[n-1] + arr[n-2]]

}

console.log('Recursive Fibonacci')
console.log(fibsRec(4))

