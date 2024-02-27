const numbers = [23,49, 57, 89, 9, 37]

// use ...numbers to get the only number values of an array 
// use math.max(...numbers) to get the only number values of an array 

const getMax = Math.max(...numbers)

console.log(getMax)

const getMin = Math.min(...numbers)

console.log(getMin)


// use spread to copy an array 

const newNum = [...numbers]
console.log(newNum)

const addNumberWhileCopying = [...newNum , 50]

console.log(addNumberWhileCopying)