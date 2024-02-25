let getAge = [
  { name: 'unknown', age: 43, position: 'senior' },
  { name: 'known', age: 43, position: 'junior' },
  { name: 'unknown', age: 43, position: 'senior' }
]

// using map 

const getName = getAge.map(age => age.name)

console.log(getName)

// using find

const getage = getAge.find(ag => ag.age)
console.log(getage)


// using filter 

const getPossition = getAge.filter(p => p.position === 'senior')

console.log(getPossition)

// using reduce 

const countAge = getAge.reduce((prev, curr) => prev + curr.age, 0)

console.log(countAge)