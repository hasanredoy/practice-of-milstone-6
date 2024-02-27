const getAllCards= document.getElementsByClassName('card');
let sum = 1
let Price = 0
for(let i =0; i<getAllCards.length;i++){
  const card = getAllCards[i]
 card.addEventListener('click', function(){
  const gettingH3 = card.querySelector('h3').innerText
  const printDiv = document.getElementById('title-container')
  const newChild = document.createElement('h5')
  newChild.innerText=sum+'.'+ gettingH3
  printDiv.appendChild(newChild)
  const div =printDiv
  sum++

  // getting price 
  const gettingSpan = card.querySelector('span').innerText
  const span = gettingSpan.split(' ')
  const price = parseFloat(span[1])
  document.getElementById('totalPrice').innerText=Price + price;
Price=Price+price
  
 })
}


  function applyForDiscount(){
    const getInputValue=document.getElementById('input-field').value;
    console.log(getInputValue)
    const fix = getInputValue.split(' ').join('').toUpperCase()
    
  
  if(Price>=200){
    if(fix === 'SELL200' ){
      const discount = Price*0.2
      document.getElementById('discountPrice').innerText=discount.toFixed(2)
      let valu = Price-discount;
      document.getElementById('total').innerText=valu.toFixed(2)
      console.log(name)
      const getInputValue=document.getElementById('input-field').value=' ';
     }
     else{
       alert('Incorrect cupone')
     }
  
  }
  else{
    alert('Buy More')
  }

  }

  // hidden section 

  function show(){
    document.getElementById('show-congratulation-card').classList.remove('-left-96')
    document.getElementById('show-congratulation-card').classList.add('left-[45%]')
    // document.getElementById('section').classList.add('mx-auto')
  }
  function hide(){
    document.getElementById('show-congratulation-card').classList.add('-left-96')
    document.getElementById('show-congratulation-card').classList.remove('left-[45%]')
    // document.getElementById('section').classList.add('mx-auto')
  }
