// truthy 
/*
1. true
2. any number negative or positive expect 0 ;
3. string with any value is truthy 
4. array []
5. object {}
*/

// falsy 
/*
1. false 
2. 0
3. empty string is falsy ''
4. undefined 
5. null
*/

// check falsy 
const falsy = '';

if(!falsy){
  console.log( "value is falsy ")
}
// check truthy 
const truthy = '0';

if(!!truthy){
  console.log( "value is truthy ")
}
