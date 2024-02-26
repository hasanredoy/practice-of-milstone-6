// call back function holo oi function je function er bitor ario ekta function ke parameter hisbe patanu jay 

function first(name,age){
  console.log('my name is:',name,'my Age:',age)

}

function usingFunctionAsParameter(name,age,callback ){
     console.log('first function ')
    //  using timer 
   setTimeout(()=>{
    callback(name,age)},2000
   )
}

usingFunctionAsParameter('redoy',25 , first)