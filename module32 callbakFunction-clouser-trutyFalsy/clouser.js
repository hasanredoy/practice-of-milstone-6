function kitchen (){
  let roast = 0;
  return function(){
    roast++;
    return roast
  }
}

const getRoast = kitchen();

console.log(getRoast())
console.log(getRoast())
console.log(getRoast())
console.log(getRoast())