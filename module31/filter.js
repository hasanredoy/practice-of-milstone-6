const numbers = [39, 8, 9, 3, 21, 30];

////////////////filter//////////////

// filter dia jekunu array er modde cindition er upor vitti kore operation kora jay and result retuen kore 

const operation = numbers.filter(n => n<20)

console.log(operation)

const odd = numbers.filter( n => n%2 ===1)

console.log(odd)

// for each for string type array 
const fruits = ['appel', 'banana', 'mango','grape']

const filt = fruits.filter(fruit => fruit.length %2 === 1 )
console.log(filt)
