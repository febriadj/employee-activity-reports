const icon = document.querySelector('#navmob #wrap .icon')
const strip = icon.querySelectorAll('.strip')
const menu = document.querySelector('#menu')

icon.addEventListener('click', () => {
  menu.classList.toggle('menu-toggle')
  
  const stripIcon = [...strip]
  stripIcon.map( str => str.classList.toggle('ex'))
})