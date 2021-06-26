// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
})

// ---
const formData = {
  name: '',
  email: '',
  number: '',
  message: '',
}

const contactFormInputs = document.querySelectorAll('.contact__form-input')
const contactForm = document.querySelector('.contact__form')

contactFormInputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    formData[input.attributes['name'].value] = e.target.value
  })
})

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(formData)
})
