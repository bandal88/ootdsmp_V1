'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

////홈 메뉴 만들기


const home__btn = document.querySelector('.home__btn');
const home_menu_btn = document.querySelectorAll('.home__btn button')

home__btn.addEventListener('click',(event)=>{
  const target = event.target;
  if(target.tagName === 'BUTTON'){
    home_menu_btn.forEach((btn)=>{
      btn === target ? btn.classList.add('active') : btn.classList.remove('active');
    
    })

    const tab__target = target.dataset.alt;
    document.querySelectorAll('.home__content').forEach(
      (tab)=> {tab.classList.remove('active')}
    )
    document.querySelector(`#${tab__target}`).classList.add('active');
    
    
  };
})









// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

const plusItems = document.querySelectorAll('.plus_menu__item')
const plusMenu = document.querySelector('.plus__menu');
plusMenu.addEventListener('click',(event)=>{
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  plusItems.forEach((item) => {item == target ? item.classList.add('active'):  item.classList.remove('active')})
  if(link == null) return;
  scrollIntoView(link);
})


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelectorAll('.home__contact');
homeContactBtn.forEach((btn)=> {btn.addEventListener('click', () => {
  scrollIntoView('#contact');
  copyToClipBoard();})

});
document.querySelector('.contact__number').addEventListener('click',copyToClipBoard)
function copyToClipBoard(){
  const content = document.querySelector('.contact__number').innerHTML;

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })
  }

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});




// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

const work = document.querySelector('#work');
const workTop = work.getBoundingClientRect().top;
const abWorkTop = window.pageYOffset + workTop;
const menuNavbar = document.querySelector('.menu__navbar');
document.addEventListener('scroll',()=>{
   if(document.body.clientWidth <768 && window.scrollY > abWorkTop ){
    menuNavbar.classList.add('active') }
    else{
      menuNavbar.classList.remove('active') 
    }
})

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});





function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}





