// jodi 2 parameter er kunu function e call korar somoy kunu ekta ba 2 ta  parameter dewa na hoy tahole ei default perameter calculation korte shajjo kore  


// default parameter for number type function 
function defaultParameter(num1=0, num2=0){
 const addition= num1+num2;
 return addition
}

console.log(defaultParameter(0, 5))

// default Parameter for string type function 

function stringDefaultParameter(firstName, lastName=''){
  return firstName+' '+lastName;
}

console.log(stringDefaultParameter('hossain'))


// default Parameter for array type function 

function stringDefaultParameter(firstName, lastName={}){
  return firstName+' '+lastName;
}

// default Parameter for object type function 

function stringDefaultParameter(firstName, lastName=[]){
  return firstName+' '+lastName;
}