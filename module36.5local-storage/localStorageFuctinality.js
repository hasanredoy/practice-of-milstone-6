const buttonClick = ()=>{
 const product = document.getElementById('input-product') 
 const quantity = document.getElementById('input-quantity')
 const productValue = product.value 
 const quantityValue = quantity.value 
 product.value=''
 quantity.value=''
 value(productValue,quantityValue)
saveProductToStorage(productValue,quantityValue)
}

const value=(product,quantity)=>{
  const getUl = document.getElementById('ul')
  const li = document.createElement('li')
  li.innerText=`${product}: ${quantity}`

  getUl.appendChild(li)
}

const getStorage = ()=>{
  let emptyObj ={ }
  const getDataOfStorage = localStorage.getItem('cart');
  if(getDataOfStorage){
    emptyObj = JSON.parse(getDataOfStorage)
  }
  console.log(emptyObj)
  return emptyObj
}

const saveProductToStorage =(product,quantity)=>{
    const cartInStorage = getStorage();
    cartInStorage[product] = quantity;
    const stringyfied = JSON.stringify(cartInStorage)
    const setData = localStorage.setItem('cart',stringyfied)
}


const clearCart = ()=>{
  localStorage.clear()
  
  const getUl = document.getElementById('ul')
  getUl.textContent=' '
}

const showLocalStorageInDisplay =()=>{
   const getStorage = localStorage.getItem('cart')
   const carts = JSON.parse(getStorage)
   for(const cart in carts){
     console.log()
     const getUl = document.getElementById('ul')
     const li = document.createElement('li')
     li.innerText=`${cart}: ${carts[cart]}`
   
     getUl.appendChild(li)
   }
}
showLocalStorageInDisplay()
