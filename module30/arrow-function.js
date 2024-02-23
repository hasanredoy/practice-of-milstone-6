// declaration function 

function nam (a, b){
   return a+b;
}


// expression function 

const add =function (a, b){
   return a+b;
}

// arrow function 

const sum = (a , b) => a + b;

console.log(sum(5,54))


// object type  arrow function 

const getAge = (person) => person.age;
const student = {name:'redoy',age:20}


console.log(getAge(student))
console.log(delete student.name)

// array type  arrow function 

const getIndex = (num) => [2];
const numbers = [20,10,21,30]

console.log(getIndex(numbers))

// no parameter   arrow function 

const getPI = () => Math.PI;

console.log(getPI())

// large arrow function 

const largeArrowFunction= (a,b,c) =>{
  const add = a+b+c;
  const multiply = a*b*c;
  return add+multiply;
}

console.log(largeArrowFunction(4,5,10))

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj)

let a = 12, b = 3;
[a, b] = [b, a];

console.log(a,b)