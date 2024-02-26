const myObject= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false

}

// use destructuring to use an value of object easily 

// left side value of variable while destructuring must be an object 
const {name}=myObject
const {age}=myObject

// eibabe value newar somoy defult name re change koira ekta alada name dewa jay 
const {age:boyos}=myObject

console.log(name)
console.log(age)
console.log(boyos)


// destructuring an array 

const myArray = [39, 487,90,8]


// use 2 coma for skiping an index 

const [firstIndex, ,thirdIndex]=myArray

console.log(firstIndex,thirdIndex)
const [x , y]=[25,15]

console.log(x,y)

console.log(firstIndex)

// destructuring an function 

function myFunction (a,b){
  return [a*2, b*2]
}

const [frist , second] = myFunction(6,5)

console.log(frist, second)

// for reversing an variable 
let a=4;b=6;

console.log([a,b]=[b,a])


// destructuring in function 
const my= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false

}

const destructuring = ({name, age })=> console.log(name, age);

console.log('from bottom ',)
destructuring(my)