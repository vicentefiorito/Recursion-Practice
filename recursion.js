// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
function sumRange(num){
    if(num === 1) return 1

    return num + sumRange(num - 1);
}

const sum = sumRange(3)
console.log('Sum all numbers: ' + sum)

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(b,e){
    if(e === 0) return 1

    return b * power(b,e-1)
}

const pow = power(2,4)
console.log('Power function: ' + pow)

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(n) {
    if(n === 1) return 1
    return n * factorial(n-1)
}

const fact = factorial(5)
console.log('Factorial: ' + fact)

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(array) {
    if(array.length === 0) return 1

    return array.shift() * productOfArray(array)
}
const prod = productOfArray([1,2,3,10])
console.log('Product of Array Items: ' + prod)
