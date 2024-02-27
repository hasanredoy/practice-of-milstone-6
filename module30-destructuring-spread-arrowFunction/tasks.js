/////////////////// task 1.1////////////////
// make an arrow function that will take 2 parameter and multiply them 

const multiply = (a,b)=> a*b;

// console.log(multiply(2,5))


////////////////////task 1.2////////////

const myself = `I am web developer 
i love to code 
`
// console.log(myself)

////////////////////task 1.3///////////////////

const defaultPe  = (a , b=0)=> a+b;

// console.log(defaultPe(5))

////////////////////task2//////////////////////

// write a arrow function that will take a name array and check the even length and print them to an array 

const fruits = ['appel', 'banana', 'mango'];

const even = fruits.filter(x => x.length%2 ===0 )

// console.log(even)

////////////////////task3//////////////////////

// write a arrow function that will take a number array and  squar them and calculate the sum of square element and give the average of check the even length and print them to an array 

const numbers = [39, 8, 9, 3, 21, 30];

const square = numbers.map(x => x*x )
const [a,b,c,d,e,f] = square
const sum = (a+b+c+d+e+f)/numbers.length
// console.log(sum)

////////////////////task4///////////////////

// write an arrow function that will take tow arrays and combind them then find the maximum number from the new array 

const numbs = [39, 8, 9, 3, 21, 30];
const numbs2 = [...numbs,35, 7, 5, 4, 22,33];

console.log(Math.max(...numbs2))

// console.log(numbs2)
