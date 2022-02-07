const hamburger = document.querySelector('.bars')

hamburger.addEventListener('click', evento => {
  evento.target.classList.toggle('show')
  document.querySelector('.nav').classList.toggle('show')
})

let nextBtn = document.querySelectorAll('#next')
let backBtn = document.querySelectorAll('#back')

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener('click', e => {
    e.target.parentElement.parentElement.children[2].scrollBy(300, 0)
  })
  backBtn[i].addEventListener('click', e => {
    e.target.parentElement.parentElement.children[2].scrollBy(-300, 0)
  })
}
