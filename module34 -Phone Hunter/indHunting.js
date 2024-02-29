// work left show no data avaiable
const gettingData = async (id,isShowing) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`)

  const data = await res.json();
  const phone = data.data
  resultFunction(phone,isShowing)

}
//  result function 
const resultFunction = (getPhoneData,isShowing) => {
  // console.log(getPhoneData)
  // for each in getPhoneData
  const getCardContainer = document.getElementById('card-container')
  const show= document.getElementById('no-data-p')

  if(getPhoneData.length === 0){
    show.textContent='No Data Available'
  }

   getCardContainer.textContent='';
 // slicing phone 
   if(!isShowing){
  getPhoneData = getPhoneData.slice(0 , 12)

   }
  //  showing showAllBtn on condition 
   const getShowAllButton =document.getElementById('showAll-btn')
   if(getPhoneData.length >= 12 && !isShowing){
    getShowAllButton.classList.remove('hidden')
  
   }
   else{
    getShowAllButton.classList.add('hidden')
   }

  getPhoneData.forEach(phone => {
    const makingDiv = document.createElement('div'); 
  

    makingDiv.classList = ('card w-96 bg-base-100 shadow-xl')
    makingDiv.innerHTML = `
   
  <figure class="px-10 pt-10">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
      <button onclick="getIdOfPhoes('${phone.slug}')" onclick="" class="btn btn-primary">See Details</button>
    </div>
  </div>

      `
      getCardContainer.appendChild(makingDiv)

      
  });
  loading(false)
}

// show detail btn 
const getIdOfPhoes = async(id)=>{
   const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
   const data = await res.json()
   const phones = data.data
   modal(phones)
}

// modal function 
const modal = (mobiles)=>{
  my_modal_4.showModal()
  const getModalDiv =document.getElementById('modal-div');
  getModalDiv.innerHTML=`
  <img src="${mobiles.image}" alt="Shoes" class="rounded-xl" />
  <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <button class="btn">Close</button>
  `
}


// search button function 

const showResult = (isShowing) => {
  const input = document.getElementById('Search-feild')
  const getValueOfInput = input.value
  console.log(getValueOfInput)
  gettingData(getValueOfInput,isShowing)

  loading(true)
}


// show all button 
const showAllBtn = ()=>{
  showResult(true)
}

const loading = (isLoading)=>{
  const getLoading =document.getElementById('loading');
  if(isLoading){
    getLoading.classList.remove('hidden')
  }else{
    getLoading.classList.add('hidden')
  }
}