// console.log('heklakoskio')
// 1. get the the button from api 

const buttonAppendOnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container')

const errorPage = document.getElementById('error-element')
let categoryId = 1000

let sort = false;
document.getElementById('sort-btn').addEventListener('click',function(){
  sort=true
  buttonClick(categoryId,sort)
})

const buttonFunction = async (sorting) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data = await res.json();
  const dataOFData = data.data
  //  console.log(dataOFData)
  dataOFData.forEach(element => {
    // console.log(element)
    let createButtons = document.createElement('button')
    // createButtons.id='buttond'
    createButtons.className = 'btn bbbbb  btn-ghost  text-white text-lg'
    createButtons.innerText = element.category
    createButtons.addEventListener('click', () => {
      buttonClick(element.category_id,sorting)
      const eachBtn = document.querySelectorAll('.bbbbb')
      for (const btn of eachBtn) {
        btn.classList.remove('bg-red-600')
        console.log(btn)
      }
      createButtons.classList.add('bg-red-600')
    })
    // console.log(eachBtn)
    buttonAppendOnContainer.appendChild(createButtons)
  });
}
const buttonClick = async (id,sorting) => {
  categoryId=id
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
  const data = await res.json();
  const data_data = data.data
  if (data_data.length === 0) {
    errorPage.classList.remove('hidden')
  }
  else {
    errorPage.classList.add('hidden')
  }

  // adding sort 
 if(sorting){
  data_data.sort((a,b)=>{
    const fr = a.others?.views
    const se = b.others?.views
    console.log(fr)
    const FR = parseFloat(fr.replace('k',''))
    const SE = parseFloat(se.replace('k',''))
    return SE -FR
   })
 }

  //  console.log(data_data)
  cardContainer.textContent = " "
  data_data.forEach(elements => {
    console.log(elements)
    let logo = ' '
    if (elements.authors[0].verified) {
      logo = `<img id='logo-div' class="w-6 h-6" src='./images/verify.png' alt="">`
    }
    //  console.log(logo)

    const createCard = document.createElement('div')
    createCard.classList = "card w-full bg-base-100 shadow-xl"
    createCard.innerHTML = `
         <figure class="overflow-hidden h-72">
         <img class="w-full" src="./images/smells.jpg" alt="Shoes" />
         <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
        </figure>
        <div class="card-body">
            <div class="flex space-x-4 justify-start items-start">
                <div>
                    <img class="w-12 h-12 rounded-full"
                     src="./images/smells.jpg" alt="Shoes" />
                </div>
                <div>
                    <h2 class="card-title">${elements.title}</h2>
                    <div  class="flex mt-3">
                        <p class="">${elements.authors[0].profile_name}</p>
                        ${logo}
                    </div>
                    <p class="mt-3">${elements.others.views}</p>
                </div>
            </div>
        </div>
            `
    cardContainer.appendChild(createCard)

  })
}
buttonClick(categoryId)

buttonFunction()

