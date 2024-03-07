// const asyncInDifferentWay = () =>{
//  return new Promise((resolve , reject)=>{
//      const success =true;
//      if(success){
//       resolve(3)
//      }
//      else{
//       reject(0.1)
//      }
// })
// }
const asyncInDifferentWay = () =>{
 return new Promise((resolve , reject)=>{
     const success =Math.random();
     if(success <= 0.5){
      resolve(success)
     }
     else{
      reject(success)
     }
})
}
asyncInDifferentWay()