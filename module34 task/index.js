let sort = false

const getData = async (isShowing, sort) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
  const data = await res.json();
  const AI = data.data
 
  mainFunctionality(AI.tools, isShowing)
}
// getData( 0,sort)


const mainFunctionality = (get, isShowing, sort) => {
  console.log()
  if (!isShowing) {
    get = get.slice(0, 6)
  }
  // console.log(
  const get6 = get[5].image = 'https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg'


  const getShowALLBtn = document.getElementById('showALL')
  if (get.length >= 5 && !isShowing) {
    getShowALLBtn.classList.remove('hidden')
  }
  else {
    getShowALLBtn.classList.add('hidden')
    const get11 = get[10].image = 'https://itchronicles.com/wp-content/uploads/2020/09/How-Facebook-uses-Artificial-intelligence-1024x576.jpg'
  }

  const section = document.getElementById('append-section')
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
    console.log(AI.published_in)
    section.appendChild(div)
  //   let aii = []
  // get.forEach(element => {
  //   const splting = element.published_in
  //   const finalSplit = splting.split('/')
  //   const parsing = parseFloat(finalSplit[2])
  //   aii.push(parsing)
  //   // if (sort) {
  //   //   parsing.sort((a, b) => {
  //   //     const viewFirst = a;
  //   //     const viewSecond = b;
  //   //     // const parse = parseFloat(viewFirst)||0;
  //   //     // const parse2 = parseFloat(viewSecond)|| 0;
  //   //     return viewFirst - viewSecond
  //   //     console.log(viewFirst)
  //   //   }
  //   //   )
  //   // }
  //   //  console.log( finalSplit) 
  //   console.log(parsing)
  // });
  // console.log(aii)
  if (sort === 1) {
    AI.sort((a, b) => {
      const viewFirst = a.published_in;
      const viewSecond = b.published_in;
      const finalSplit = viewFirst.split('/')
      const finalSplit2 = viewSecond.split('/')
        const parsing = parseFloat(finalSplit[2])
        const parsing2 = parseFloat(finalSplit2[2])
      const parse = parseFloat(viewFirst) || 0;
      const parse2 = parseFloat(viewSecond) || 0;
      console.log(parse)
      return parsing - parsing2
    }
    )
  }
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

document.getElementById('sort-btn').addEventListener('click', function () {
  // sort = true
  // getData(0,0,sort)
  mainFunctionality(0,0,1)
})