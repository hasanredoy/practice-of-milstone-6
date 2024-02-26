// map holo ekta method jeta call korle se array er modde taka sob index ke loop kore argument hisebe je function dewa hoy se onujai tar por result gulu ke ekta array er modde push kore 


const numbers = [39, 8, 9, 3]

function a(a) {
  return a * 2;
}

const math = a => a * 2;
const num = numbers.map(a)
// const nums = numbers.map(math)

// console.log(num)

// console.log(nums)

// using map in direct function 

const updated = numbers.map((num,index,fullArray) => num * 2)//function er second perameter index return kore and third parameter full array ke return kore 

console.log(updated)

// map in string type array 

const fruits = ['appel', 'banana', 'mango']

const getx = fruits.map(mn => mn)
console.log(getx)

console.log(fruits.map(m => m[0]))

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
console.log(price);