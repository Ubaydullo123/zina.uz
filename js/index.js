const headerMenu = document.querySelector('.header__list'),
  headerBtn = document.querySelector('.header__button'),
  links = document.querySelectorAll('.header__link');

menuOpened = !1

const menuToggle = () => {
  menuOpened = !menuOpened
  headerMenu.classList.toggle('open')
  headerBtn.classList.toggle('open')
  headerBtn.style.outline = "none"
}

headerBtn.onclick = menuToggle
window.onclick = windowClick = (event) => !menuOpened || event.composedPath().includes(headerMenu) || event.composedPath().includes(headerBtn) || menuToggle()

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click',()=>{
    links.forEach(item=>item.classList.remove('header__link-active'))
    links[i].classList.add('header__link-active')
  })
}