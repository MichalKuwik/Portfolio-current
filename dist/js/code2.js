const sec2 = document.querySelector('.sec2');
const aboutMeText = document.querySelectorAll('.desc-span');
const aboutParagraph = document.querySelectorAll('.aboutParagraphSignleText')
const portrait = document.getElementById('portrait');

//hamburger menu
const hamburgerBtn = document.querySelector('.menu-btn');
const linesBurger = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.nav-div');
const menuElements = document.querySelectorAll('.nav-link');

//menu hamburger logic
//set the flag
let menuIsActive = false;

hamburgerBtn.addEventListener('click',() => {
  if(!menuIsActive){
    hamburgerBtn.classList.add('closeAll');
    linesBurger.forEach(item => item.classList.add('close'));
    menu.classList.add('showMenu');
    menuIsActive = true;
    tl2.staggerFrom(menuElements,0.1,{opacity:0,delay:0.1},0.1)
    
  }
    else{
      hamburgerBtn.classList.remove('closeAll');
      linesBurger.forEach(item => item.classList.remove('close'));
      menu.classList.remove('showMenu');
      menuIsActive = false;
    }
  }
)

const tl2 = new TimelineMax({delay:0.2});

tl2.to(sec2,0.3,{left:0})
   .staggerFrom(aboutMeText,0.2,{scaleY:0},0.2)
   .staggerFrom(aboutParagraph,0.2,{opacity:0,y:-20},0.2)
   .from(portrait,0.5,{opacity:0,x:-30})