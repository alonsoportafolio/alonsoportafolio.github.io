const botonMenu = document.getElementById("navr");
const navResponsive = document.querySelector(".nav__enlace-responsive");

const e1 = document.getElementById('e1')
const e2 = document.getElementById('e2')
const e3 = document.getElementById('e3')
const e4 = document.getElementById('e4')
const e5 = document.getElementById('e5')

botonMenu.addEventListener("click", () => {
  if (navResponsive.classList.contains('nav__enlace-responsive-active')) {
    navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
  }
  else{
    navResponsive.classList.add('nav__enlace-responsive-active');
    botonMenu.innerHTML ='<i class="icon-cross"></i>'
    
  }
});

e1.addEventListener('click',() => {
  navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
})
e2.addEventListener('click',() => {
  navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
})
e3.addEventListener('click',() => {
  navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
})
e4.addEventListener('click',() => {
  navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
})
e5.addEventListener('click',() => {
  navResponsive.classList.remove('nav__enlace-responsive-active')
    botonMenu.innerHTML ='<i class="icon-menu"></i>'
})
