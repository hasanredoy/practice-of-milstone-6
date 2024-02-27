function loadPostData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => takeData(data))
}


function takeData(data){
  const section = document.getElementById('container')
  for(const post of data){
    console.log(post)
   const makingDiv= document.createElement('div')
   makingDiv.classList.add('postStyle')
   makingDiv.innerHTML=`
      <h2>User Id: ${post.userId}</h2>
      <h3>User title: ${post.title}</h3>
      <h4>User description: ${post.body}</h4>
      
   `
   section.appendChild(makingDiv)
  }
}

loadPostData()