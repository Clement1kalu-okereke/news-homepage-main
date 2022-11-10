const openMenu = document.getElementById('openMenu')
const navLinks = document.getElementById('navLinks')
const closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', () => {
    navLinks.classList.toggle('header__nav__open', true)
})
closeMenu.addEventListener('click', () => {
    navLinks.className = 'header__navLinks'
})
