
// continue button 
document.getElementById('extra-page').addEventListener('click', function () {
  showHome('home')
  hideHome('side-screen')
})
// next button 
document.getElementById('next-button').addEventListener('click', function () {
  hideHome('home')
  showHome('side-screen')
})



// hide home 

function hideHome(elementId) {
  const id = document.getElementById(elementId)
  id.classList.add('hidden')
}

// show home 
function showHome(elementId) {
  const id = document.getElementById(elementId)
  id.classList.remove('hidden')
}

function makeDisable(id){
  const disabled = document.getElementById(id).disabled=true
  
}

