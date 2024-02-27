const myObject= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false,
  livingIn:{
    city: 'abu Dhabi',
    street:{
      first :'47 al shati'
    }
  }

}

const myObject2= {
  name  : ' hossain Hasan redoy',
  age : 20,
  isStudying : false,
  livingIn:{
    city: 'abu Dhabi',
    
  }

}

console.log(myObject2.livingIn.street?.first)