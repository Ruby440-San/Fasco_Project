// Humbager
const humbager = document.querySelector('#humbager')
const navMenu = document.querySelector('#popover-1')

humbager.onclick = function () {
  navMenu.classList.toggle('active')

  if (this.innerHTML == '<i class="fas fa-bars text-lg"></i>') {
    this.innerHTML = '<i class="fa-solid fa-square-xmark text-lg"></i>'
  } else {
    this.innerHTML = '<i class="fas fa-bars text-lg"></i>'
  }
}
// New Arrivals
let btn1 = document.getElementById('m-fashionBtn')
let btn2 = document.getElementById('w-fashionBtn')
let btn3 = document.getElementById('w-accessoryBtn')
let btn4 = document.getElementById('m-accessoryBtn')
let btn5 = document.getElementById('discountBtn')

let menCard = document.getElementsByClassName('m-fashion')
let womenCard = document.getElementsByClassName('w-fashion')
let womenAccessory = document.getElementsByClassName('w-accessory')
let menAccessory = document.getElementsByClassName('m-accessory')
let discount = document.getElementsByClassName('discount')

function hide() {
  for (let men_card of menCard) {
    men_card.style.display = 'none'
  }
  for (let women_accessory of womenAccessory) {
    women_accessory.style.display = 'none'
  }
  for (let men_accessory of menAccessory) {
    men_accessory.style.display = 'none'
  }
  for (let discount_card of discount) {
    discount_card.style.display = 'none'
  }
  for (let women_card of womenCard) {
    women_card.style.display = 'none'
  }
}

btn2.onclick = function () {
  hide()
  for (let women_card of womenCard) {
    women_card.style.display = 'block'
  }
  btn2.classList.add('bg-black', 'text-white')
  btn1.classList.remove('bg-black', 'text-white')
  btn3.classList.remove('bg-black', 'text-white')
  btn4.classList.remove('bg-black', 'text-white')
  btn5.classList.remove('bg-black', 'text-white')
}
btn1.onclick = function () {
  hide()
  for (let men_card of menCard) {
    men_card.style.display = 'block'
  }
  btn1.classList.add('bg-black', 'text-white')
  btn2.classList.remove('bg-black', 'text-white')
  btn3.classList.remove('bg-black', 'text-white')
  btn4.classList.remove('bg-black', 'text-white')
  btn5.classList.remove('bg-black', 'text-white')
}
btn3.onclick = function () {
  hide()
  for (let women_accessory of womenAccessory) {
    women_accessory.style.display = 'block'
  }
  btn3.classList.add('bg-black', 'text-white')
  btn2.classList.remove('bg-black', 'text-white')
  btn1.classList.remove('bg-black', 'text-white')
  btn4.classList.remove('bg-black', 'text-white')
  btn5.classList.remove('bg-black', 'text-white')
}
btn4.onclick = function () {
  hide()
  for (let men_accessory of menAccessory) {
    men_accessory.style.display = 'block'
  }
  btn4.classList.add('bg-black', 'text-white')
  btn1.classList.remove('bg-black', 'text-white')
  btn2.classList.remove('bg-black', 'text-white')
  btn3.classList.remove('bg-black', 'text-white')
  btn5.classList.remove('bg-black', 'text-white')
}
btn5.onclick = function () {
  hide()
  for (let discount_card of discount) {
    discount_card.style.display = 'block'
  }
  btn5.classList.add('bg-black', 'text-white')
  btn2.classList.remove('bg-black', 'text-white')
  btn3.classList.remove('bg-black', 'text-white')
  btn4.classList.remove('bg-black', 'text-white')
  btn1.classList.remove('bg-black', 'text-white')
}
// Mobile Btn
let mobileBtn1 = document.getElementById('m-fashionBtn-mobile')
let mobileBtn2 = document.getElementById('w-fashionBtn-mobile')
let mobileBtn3 = document.getElementById('w-accessoryBtn-mobile')
let mobileBtn4 = document.getElementById('m-accessoryBtn-mobile')
let mobileBtn5 = document.getElementById('discountBtn-mobile')

mobileBtn1.onclick = function () {
  hide()
  for (let men_card of menCard) {
    men_card.style.display = 'block'
  }
  mobileBtn1.classList.add('bg-black', 'text-white')
  mobileBtn2.classList.remove('bg-black', 'text-white')
  mobileBtn3.classList.remove('bg-black', 'text-white')
  mobileBtn4.classList.remove('bg-black', 'text-white')
  mobileBtn5.classList.remove('bg-black', 'text-white')
}
mobileBtn2.onclick = function () {
  hide()
  for (let women_card of womenCard) {
    women_card.style.display = 'block'
  }
  mobileBtn2.classList.add('bg-black', 'text-white')
  mobileBtn1.classList.remove('bg-black', 'text-white')
  mobileBtn3.classList.remove('bg-black', 'text-white')
  mobileBtn4.classList.remove('bg-black', 'text-white')
  mobileBtn5.classList.remove('bg-black', 'text-white')
}
mobileBtn3.onclick = function () {
  hide()
  for (let women_accessory of womenAccessory) {
    women_accessory.style.display = 'block'
  }
  mobileBtn3.classList.add('bg-black', 'text-white')
  mobileBtn2.classList.remove('bg-black', 'text-white')
  mobileBtn1.classList.remove('bg-black', 'text-white')
  mobileBtn4.classList.remove('bg-black', 'text-white')
  mobileBtn5.classList.remove('bg-black', 'text-white')
}
mobileBtn4.onclick = function () {
  hide()
  for (let men_accessory of menAccessory) {
    men_accessory.style.display = 'block'
  }
  mobileBtn4.classList.add('bg-black', 'text-white')
  mobileBtn1.classList.remove('bg-black', 'text-white')
  mobileBtn2.classList.remove('bg-black', 'text-white')
  mobileBtn3.classList.remove('bg-black', 'text-white')
  mobileBtn5.classList.remove('bg-black', 'text-white')
}
mobileBtn5.onclick = function () {
  hide()
  for (let discount_card of discount) {
    discount_card.style.display = 'block'
  }
  mobileBtn5.classList.add('bg-black', 'text-white')
  mobileBtn2.classList.remove('bg-black', 'text-white')
  mobileBtn3.classList.remove('bg-black', 'text-white')
  mobileBtn4.classList.remove('bg-black', 'text-white')
  mobileBtn1.classList.remove('bg-black', 'text-white')
}
// ViewMore Button
let viewBtn = document.getElementById('viweBtn')
viewBtn.addEventListener('click', function () {
  for (let men_card of menCard) {
    men_card.style.display = 'block'
  }
  for (let women_accessory of womenAccessory) {
    women_accessory.style.display = 'block'
  }
  for (let men_accessory of menAccessory) {
    men_accessory.style.display = 'block'
  }
  for (let discount_card of discount) {
    discount_card.style.display = 'block'
  }
  for (let women_card of womenCard) {
    women_card.style.display = 'block'
  }
})
// Countdown

let countDownDate = new Date('July 30, 2026 15:37:25').getTime()

let x = setInterval(function () {
  let now = new Date().getTime()

  let distance = countDownDate - now

  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('days').style.setProperty('--value', days)
  document.getElementById('hours').style.setProperty('--value', hours)
  document.getElementById('mins').style.setProperty('--value', minutes)
  document.getElementById('seconds').style.setProperty('--value', seconds)

  if (distance <= 0) {
    clearInterval(x)

    document.getElementById('days').innerHTML = 0
    document.getElementById('hours').innerHTML = 0
    document.getElementById('mins').innerHTML = 0
    document.getElementById('seconds').innerHTML = 0
  }
}, 1000)
// Subscribe
function invisible() {
  let inputMail = document.getElementById('input')
  inputMail.value = ''
}
