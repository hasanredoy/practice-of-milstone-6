const hunter = async (searchText,isShowing) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

  const data = await res.json();
  const phone = data.data
  getData(phone,isShowing)
}
// getting data 
const getData = (phone,isShowing) => {
  // console.log(phone)
  const cardContainer = document.getElementById('card-container')
  cardContainer.textContent = '';
 

  // showing and hidding show all btn 
  const getShowAllBtn = document.getElementById('showAll-btn')
  if(phone.length >=12 && !isShowing){
    getShowAllBtn.classList.remove('hidden')
  }
  else{
    getShowAllBtn.classList.add('hidden')
  }
   
  console.log(isShowing)
  // slicing phones card 
  if(!isShowing){
    phone = phone.slice(0, 12)
  }

  phone.forEach(element => {
    // console.log(element)
    const itemDiv = document.createElement('div')
    itemDiv.classList = ('card w-96 bg-base-100 shadow-xl')
    itemDiv.innerHTML = `    
  <figure class="px-10 pt-10">
    <img src="${element.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${element.phone_name}</h2>
    <p>${element.brand}</p>
    <div class="card-actions">
      <button onclick="getIdOfPhone('${element.slug}')" class="btn bg-orange-200">Show Details</button>
    </div>
  </div>

     `
    cardContainer.appendChild(itemDiv)
  });
  loading(false)
}

// getting id 
  const getIdOfPhone = async (id) =>{
    
      const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      const data = await res.json()
      const phone = data.data
      console.log(phone)
      modal(phone)
    
   console.log(id)
  }

  // modal function 
  const modal = fun =>{
    const getDiv = document.getElementById('modal')
    console.log(fun)
    my_modal_1.showModal();

    getDiv.innerHTML=`
    <figure class="px-10 pt-10">
    <img src="${fun.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  
    <h2 class="card-title"></h2>
    <p></p>
    `
   
  }

// showing result by click 
const showResult = document.getElementById('search-btn')
 function result (isShowing) {
  loading(true)
  const input = document.getElementById('Search-feild')
  const getValue = input.value
  hunter(getValue,isShowing)

}

// loading function 
const loading = isLoading => {
  const loading = document.getElementById('loading')
  if(isLoading){
     loading.classList.remove('hidden')
  }
  else{
     loading.classList.add('hidden')
  }
}

// show all button function 

function showAllBtn(){
 
    result(true)
  
}