





const state = {
  baseArray: null,
  icingArray: null,
  toppingArray: null,
  currentTotalCakePrice: null,
  currentTotalCakeName: null,
  currentTotalCakeUrl: null,
  arrayOfIngredientIds: null,
  newlyCreatedCake: null
}


// Selectors

const baseCardEl = document.querySelector('#base-card')
const icingCardEl = document.querySelector('#icing-card')
const toppingCardEl = document.querySelector('#topping-card')
const cakeCardEl = document.querySelector('#cake-card')

// Button selectors

const leftBase = document.querySelector('#base-left')
const rightBase = document.querySelector('#base-right')
const leftIcing = document.querySelector('#icing-left')
const rightIcing = document.querySelector('#icing-right')
const leftTopping = document.querySelector('#topping-left')
const rightTopping = document.querySelector('#topping-right')
const paymentForm2 = document.querySelector('#payment-form')
// Random Useful Functions
paymentForm2.style.display = 'none'

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

const sampleBase = (e) =>{
  e.preventDefault()
  baseCardEl.innerHTML = "<h1>Base</h1>"
  renderSingleBaseImg(state.baseArray)
}
const sampleIcing = (e) =>{
  e.preventDefault()
  icingCardEl.innerHTML = "<h1>Icing</h1>"
  renderSingleIcingImg(state.icingArray)
}
const sampleTopping = (e) =>{
  e.preventDefault()
  toppingCardEl.innerHTML = "<h1>Extra Topping</h1>"
  renderSingleToppingImg(state.toppingArray)
}


// Add event listeners
leftBase.addEventListener('click', sampleBase)
rightBase.addEventListener('click', sampleBase)
leftIcing.addEventListener('click', sampleIcing)
rightIcing.addEventListener('click', sampleIcing)
leftTopping.addEventListener('click', sampleTopping)
rightTopping.addEventListener('click', sampleTopping)



const renderSingleBaseImg = (baseArray) => {
sampledBase = sample(baseArray)
  baseCardEl.style.backgroundImage = `url(${sampledBase.imgUrl}`
// let baseImgEl = document.createElement('img')
// baseImgEl.classList.add('toy-avatar')
// baseImgEl.src =
// baseCardEl.appendChild(baseImgEl)
// add in the sampledBase.name as the like button
let baseNameEl = document.createElement('h3')
baseNameEl.innerText = sampledBase.name
baseNameEl.classList.add("like-btn")
baseCardEl.appendChild(baseNameEl)
// adding in the price
let basePriceEl = document.createElement('h3')
basePriceEl.innerText = `£${sampledBase.price}`
basePriceEl.classList.add("price-btn")
baseCardEl.appendChild(basePriceEl)
}

const renderSingleIcingImg = (icingArray) => {
sampledIcing = sample(icingArray)
icingCardEl.style.backgroundImage = `url(${sampledIcing.imgUrl}`
// let icingImgEl = document.createElement('img')
// icingImgEl.classList.add('toy-avatar')
// icingImgEl.src = sampledIcing.imgUrl
// icingCardEl.appendChild(icingImgEl)
// add in the sampledBase.name as the like button
let icingNameEl = document.createElement('h3')
icingNameEl.innerText = sampledIcing.name
icingNameEl.classList.add("like-btn")
icingCardEl.appendChild(icingNameEl)
// adding in the price
let icingPriceEl = document.createElement('h3')
icingPriceEl.innerText = `£${sampledIcing.price}`
icingPriceEl.classList.add("price-btn")
icingCardEl.appendChild(icingPriceEl)
}

const renderSingleToppingImg = (toppingArray) => {
sampledTopping = sample(toppingArray)
toppingCardEl.style.backgroundImage = `url(${sampledTopping.imgUrl}`
// let toppingImgEl = document.createElement('img')
// toppingImgEl.classList.add('toy-avatar')
// toppingImgEl.src = sampledTopping.imgUrl
// toppingCardEl.appendChild(toppingImgEl)

let toppingNameEl = document.createElement('h3')
toppingNameEl.innerText = sampledTopping.name
toppingNameEl.classList.add("like-btn")
toppingCardEl.appendChild(toppingNameEl)
// adding in the price
let toppingPriceEl = document.createElement('h3')
toppingPriceEl.innerText = `£${sampledTopping.price}`
toppingPriceEl.classList.add("price-btn")
toppingCardEl.appendChild(toppingPriceEl)
}


const renderNewlyCreatedCake = (sampled) => {
cakeCardEl.innerHTML = "<h1>Buy Your Cake</h1>"
sampledCake = state.newlyCreatedCake
cakeCardEl.style.backgroundImage = `url("https://images.food52.com/5zez-Jt87mU0Dhx_6U-8xwRK5zs=/fit-in/1200x1200/50a83e17-f69a-48f2-a8ba-8f7dafab24f1--2016-0910_cake-buffet_james-ransom-249.jpg"`

// Need to add migration
// let cakeImgEl = document.createElement('img')
// cakeImgEl.classList.add('toy-avatar')
// cakeImgEl.src = "https://i.pinimg.com/736x/24/02/ac/2402acfbcc5798d7e2b9b1899d854a32--small-weddings-white-weddings.jpg"
// // cakeImgEl.src = state.newlyCreatedCake.imgUrl
// cakeCardEl.appendChild(cakeImgEl)

let cakeNameEl = document.createElement('h3')
cakeNameEl.innerText = state.newlyCreatedCake.name
cakeNameEl.classList.add("like-btn")
cakeCardEl.appendChild(cakeNameEl)
// adding in the price NEED TO ADD MIGRATION
let cakePriceEl = document.createElement('button')
cakePriceEl.innerText = `Buy for £${state.currentTotalCakePrice}`
cakePriceEl.classList.add("price-btn")
cakePriceEl.classList.add("submit-button")

cakeCardEl.appendChild(cakePriceEl)
buyButton = document.querySelector('.price-btn.submit-button')
paymentForm = document.querySelector('#payment-form')

buyButton.addEventListener('click', () => {
  // hide & seek with the form
  buyCake = !buyCake
  if (buyCake) {
    paymentForm.style.display = 'block'
    // submit listener here
  } else {
    paymentForm.style.display = 'none'
  }
})
}
// Do the render for icing and single topping

// Change the fetch commands for OUR API

// Start doing the seed data (images and prices)

// Add event listener on buttons

// Work out how to properly push on Github



// Fetch request for Ingredients
function fetchIngredients() {
  fetch("http://localhost:3000/api/v1/ingredients")
    .then(response => response.json())
    .then(ingredientsArray => {
      renderIngredientsByType(ingredientsArray)
    })
}

function renderIngredientsByType(ingredientsArray) {
  baseArray = ingredientsArray.filter( i => i.part ==="Base")
  icingArray = ingredientsArray.filter( i => i.part ==="Icing")
  toppingArray = ingredientsArray.filter( i => i.part ==="Extra Topping")
  state.baseArray = baseArray
  state.icingArray = icingArray
  state.toppingArray = toppingArray
  renderSingleBaseImg(baseArray)
  renderSingleIcingImg(icingArray)
  renderSingleToppingImg(toppingArray)
}


fetchIngredients();





// What we kept in from the original lab


const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const toyCollection = document.querySelector('#toy-collection');
const addToyForm = document.querySelector('.add-toy-form')
const toyNameInput = document.querySelector('input[name=name]')
const toyImageInput = document.querySelector('input[name=image]')


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

const handleNewToySubmit = event => {
  event.preventDefault()
  const hTMLOfNameNodes = document.querySelectorAll('.like-btn')
  const arrayOfNameNodes = Array.from(hTMLOfNameNodes)
  const arrayOfNames = arrayOfNameNodes.map(i => i.innerText)
  const arrayOfObjects = [state.baseArray.find(b => b.name === arrayOfNames[0]), state.icingArray.find(i => i.name === arrayOfNames[1]), state.toppingArray.find(i => i.name === arrayOfNames[2])]
  const arrayOfIds = arrayOfObjects.map(i => i.id)
  state.arrayOfIngredientIds = arrayOfIds



  // Add a selector to get base && icing && topping
   // Then we need to do a lookup on their respective arrays
   // Take out the price  from a dataset on their nameELement and sum (inject) them
   const hTMLOfpriceNodes = document.querySelectorAll('.price-btn')
   const arrayPriceNodes = Array.from(hTMLOfpriceNodes)
   const arrayPricesWithPoundSign = arrayPriceNodes.map(i => i.innerText)
   const arrayPricesAsString = arrayPricesWithPoundSign.map(i => i.replace(/[^0-9]/g,''))


  state.currentTotalCakePrice = arrayPricesAsString.map(el => Number(el)).reduce((a,b) => a+b)
  state.currentTotalCakeName = toyNameInput.value
  state.currentTotalCakeUrl = toyImageInput.value

  fetch("http://localhost:3000/api/v1/cakes", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      "name": toyNameInput.value,
      "imgUrl": toyImageInput.value,
      "ingredient_ids": state.arrayOfIngredientIds
    })
  })
  .then(response => response.json())
  .then(r => state.newlyCreatedCake = r)
  .then(r => renderNewlyCreatedCake(state.newlyCreatedCake))
  // renderNewlyCreatedCake(state.newlyCreatedCake)

  // let newCakeEl = document.createElement('div')
  // newCakeEl.classList.add('base-container')
  // newCakeEL.innerHTML = `<button id="base-left">&lt;</button><div class="card" id="base-card"><h1>Base</h1><img class="toy-avatar" src= ''><h3 class= 'like-btn'>Sponge</h3><h3 class="price-btn">£1</h3></div><button id="base-right">&gt;</button>`
  // let containerForCards = document.querySelector('#toy-collection')
  // containerForCards.appendChild(newCakeEL)
}
// then add the event listener
toyForm.addEventListener('submit', handleNewToySubmit)


// getting the prices




//
//
// // Load all event listeners
// function loadEventListener() {
//
//   // DOM Load event
//   document.addEventListener('DOMContentLoaded', fetchToys);
//   // Add Toy event
//   addToyForm.addEventListener('submit', addNewToy)
//   // Add Likes Event
//   document.addEventListener('click', (e) => {
//     console.log(e.target.dataset.id)
//     if (e.target.className === 'like-btn') {
//       const id = e.target.dataset.id
//       const toyEl = document.getElementById(`card-${id}`)
//       const toyLikes = toyEl.querySelector(".toy-likes")
//
//       let numLikes = Number(toyLikes.innerText.split(' ')[0]);
//
//       fetch(`http://localhost:3000/toys/${id}`, {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             likes: numLikes += 1
//           })
//         })
//         .then(response => response.json())
//         .then(toyLikes.innerText = `${numLikes} Likes`)
//     }
//   })
// }
//
//
// Add a toy
// function addNewToy(e) {
//   e.preventDefault()
//   const toyName = document.querySelector("#toyname").value
//   const toyImg = document.querySelector("#toyimg").value
//   console.log(toyName, toyImg);
//
//
//   fetch("http://localhost:3000/toys", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: toyName,
//         image: toyImg,
//         likes: 0
//       })
//     })
//     .then(response => response.json())
//     .then(response => renderSingleToy(response))
// }
//
// // Fetch request for Toys
// function fetchToys() {
//   fetch("http://localhost:3000/toys")
//     .then(response => response.json())
//     .then(toysArray => {
//       renderToys(toysArray)
//     })
// }
//
// function renderToys(toysArray) {
//   toysArray.forEach(toy => renderSingleToy(toy))
// }
//
// function renderSingleToy(toy) {
//   // create element
//   const toyDivEl = document.createElement('div')
//   toyDivEl.className = 'card'
//   toyDivEl.id = `card-${toy.id}`
//
//   toyDivEl.innerHTML = `
//     <h2>${toy.name}</h2>
//     <img class='toy-avatar' src='${toy.image}' />
//     <p class="toy-likes">${toy.likes} Likes</p>
//     <button data-id=${toy.id} class='like-btn'>Like</button>
//   `
//   toyCollection.appendChild(toyDivEl)
// }
//
// function likeToy(toyLikesEl) {
//   const numLikes = Number(toyLikesEl.innerText.split(' ')[0]);
//   toyLikesEl.innerText = `${numLikes + 1} Likes`;
//
// }
//


// loadEventListener()

// Adding Event Listener on the Buy Button
let buyCake = false
// buyButton = document.querySelector('.price-btn.submit-button')
// paymentForm = document.querySelector('#payment-form')
//
// buyButton.addEventListener('click', () => {
//   // hide & seek with the form
//   buyCake = !buyCake
//   if (buyCake) {
//     paymentForm.style.display = 'block'
//     // submit listener here
//   } else {
//     paymentForm.style.display = 'none'
//   }
// })
