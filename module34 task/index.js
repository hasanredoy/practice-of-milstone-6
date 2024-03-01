let sort = false
const section = document.getElementById('append-section')
const getData = async (isShowing, sort) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  const data = await res.json();
  const AI = data.data

  mainFunctionality(AI.tools, isShowing)
}
// getData( 0,sort)


const mainFunctionality = (get, isShowing) => {
  console.log()
  if (!isShowing) {
    get = get.slice(0, 6)
  }
  // console.log(
  const get6 = get[5].image = 'https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg'


  section.textContent=" "
  // adding sort function 
  let willSort = get;
  console.log(willSort)
  document.getElementById('sort-btn').addEventListener('click', function () {
    const sort = willSort.sort((a, b) => {
      const first = a.published_in.split('/')
      const second = b.published_in.split('/')
      // const A = new Date(first[2], first[0] - 1, first[1])
      // const B = new Date(second[2], second[0] - 1, second[1])
      const A = first[2]
      const B =second[2]
      console.log(A)
      return B- A;
    })
    willSort = sort;
    console.log(willSort)
    mainFunctionality(willSort, isShowing)
  })
  const getShowALLBtn = document.getElementById('showALL')
  if (get.length >= 5 && !isShowing) {
    getShowALLBtn.classList.remove('hidden')
  }
  else {
    getShowALLBtn.classList.add('hidden')
    const get11 = get[10].image = 'https://itchronicles.com/wp-content/uploads/2020/09/How-Facebook-uses-Artificial-intelligence-1024x576.jpg'
  }

  console.log(willSort)
  // append and for each section 
  
  get.forEach(AI => {
    const div = document.createElement('div');
    div.classList = ('card w-96 bg-base-100 shadow-xl')
    div.innerHTML = `
     
        <figure class="px-10 pt-10">
          <img src="${AI.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body text-start ">
          <h2 class="card-title">Features</h2>
           <ul class="list-disc ml-6">
           <li>${AI.features[0]}</li>
           <li>${AI.features[1]}</li>
           <li>${AI.features[2]}</li>
           </ul>
          <div class="card-actions border-t py-5 border-black ">
          <div class=" w-full flex justify-between">
          <h2 class="card-title">${AI.name}</h2>
          <button onclick="showDetails(${AI.id})" class="btn bg-red-200 text-3xl">></button>
          </div>
          <h5 class=""> Published in: ${AI.published_in}</h5>
          </div>
        </div>
  
      `
    // console.log(AI.published_in)
    section.appendChild(div)


  });

  // const viewFirst = AI.tools;

  // console.log(viewFirst)
  // console.log(AI)

  // console.log(AI)

}

// adding fuction for show detail7
const showDetails = async (id) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/0${+id}`)
  const data = await res.json()

  const singleData = data.data
  console.log(singleData)

  my_modal_3.showModal()

  const modal = document.getElementById('modal')
  modal.innerHTML = `
    
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click on ✕ button to close</p>
    
    `

}



// show all btn 
const showAll = () => {
  getData(true)
  // console.log('hello')
}
getData()

