console.log(1)
console.log(2)
console.log(3)
setTimeout(()=>{
  // console.log(4)
},5000)
console.log(5)
console.log(6)


// set interVal 
let num = 0
const intervalId = setInterval(()=>{
  num++
  if(num===4){
    clearInterval(intervalId)
  }
  console.log( intervalId,num)
},2000)