const myObject= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false

}
console.log(myObject)

// 1
const keys=Object.keys(myObject)

// console.log(keys)

// 2
const values=Object.values(myObject)

// console.log(values)

// Object.entries is used to an array of array ,two dimensional array

// 3
const arrayOfArray = Object.entries(myObject);

// console.log(arrayOfArray)
// will return 
// [
//   [ 'name', ' hossain Hasan redoy' ],
//   [ 'age', 20 ],
//   [ 'isStudying', false ]
// ]

// 4
// deleting an key with value buy delete 

// delete myObject.isStudying;

// console.log(myObject);

// 5
// removing an key by destructuring method 

const {isStudying ,...restObject} = myObject;

// console.log(restObject)

// 6

// freeze method is used to freeze an object that will not allow to adding , deleting , modifying any value of object 

const freeze = Object.freeze(myObject);
delete myObject.name

myObject.isStudying = true;
console.log(myObject)


// 7

// seal method will not allow to add or delete any property from object but can modify 

const seal= Object.seal(myObject);
myObject.livingIn = "UAE";

myObject.isStudying=true;

myObject.age=25;

console.log(myObject)