'use strict'

const hamburger = document.querySelector('.hamburger')
const side_navigation = document.querySelector('.side_navigation')

hamburger.addEventListener('click', (evt) => {
    toggleMenu(hamburger, side_navigation)
})




function toggleMenu(elem, menu) {
    if(elem.classList.contains('show')) {
        elem.classList.remove('show')
        menu.classList.remove('expanded')
    } else {
        elem.classList.add('show')
        menu.classList.add('expanded')
    }
}