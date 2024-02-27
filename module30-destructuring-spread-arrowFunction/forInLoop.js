const myObject= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false

}

// in object must be used for in loop 

for(const keys in myObject){

  const values = myObject[keys]
  console.log(keys,values)
}