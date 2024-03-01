// button div 
const buttonDiv = document.getElementById('button-nav')

// card container 
const cardContainer = document.getElementById('cards')


// getting buttons of navbar 
const getButtonData= async ()=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
  const data = await res.json()
  const arr = data.data.news_category
  console.log(arr)
  arr.forEach(element => {
      let button = document.createElement('button')
      button.className='btn bttn'
      button.innerText=element.category_name
      
      // adding click funtion on buttons
      button.addEventListener('click',() =>{ 
        clickFunc(element.category_id)
        // let buttons = document.getElementsByClassName('bttn')
        let butnns = document.querySelectorAll('.bttn')
        for(const btn of butnns){
          // console.log(btn)
          btn.classList.remove('bg-red-300')
          // btn.classList.add('bg-red-600')
        }
        button.classList.add('bg-red-300')
      })
      buttonDiv.appendChild(button)
  });
}

const clickFunc = async (id) =>{
  // console.log(id)
  document.getElementById('loading').classList.remove('hidden')
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    const datas = data.data
    // console.log(datas)
    cardContainer.innerHTML=' '

    if(datas.length===0){
      document.getElementById('h1-no-data').classList.remove('hidden')
      document.getElementById('loading').classList.add('hidden')

    }
    else{
      document.getElementById('h1-no-data').classList.add('hidden')

    }
    datas.forEach(items =>{
      console.log(items)
      document.getElementById('loading').classList.add('hidden')

      const div = document.createElement('div')
      div.className ='card card-side bg-base-100 shadow-xl w-[70%] mx-auto'
      div.innerHTML=`
      <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
      `
      cardContainer.appendChild(div)
    })
  
}
// adding search field functionality
const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', ()=> {
    const input = document.getElementById('input')
    const value =  input.value
    clickFunc(value)
    // console.log('ajfl')
})
clickFunc('01')
getButtonData()