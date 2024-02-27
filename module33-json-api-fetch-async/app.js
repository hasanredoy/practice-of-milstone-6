// function loadUser(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => getData(data))
// }

// function getData(data){
//   for(const users of data){
//     const ul = document.getElementById('ul-id');
//     const li = document.createElement('li')
//     li.innerText=users.name;
//     ul.appendChild(li)
//   }
// }
function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getData(data))
}

function getData(data){
  const ul = document.getElementById('ul-id');
  for(const users of data){3
    const li = document.createElement('li')
    li.innerText=users.name;
    ul.appendChild(li)
 
  }
     const hr = document.createElement('hr');
    ul.appendChild(hr)
}