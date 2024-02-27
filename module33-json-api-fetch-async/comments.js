function loadData(){
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch (error => console.error( 'error happens ',error));
}

// using async 
const asynnc = async () =>{
try{
  const wait = await fetch('https://jsonplaceholder.typicode.com/comments')

  const data = await res.json();
  console.log(data)
  
}
catch (error){
  console.log('error founded ')
}

}