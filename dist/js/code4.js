//hamburger menu
const hamburgerBtn = document.querySelector('.menu-btn');
const linesBurger = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.nav-div');
const menuElements = document.querySelectorAll('.nav-link');

//section4
const spanSkills = document.querySelectorAll('.span-skills');
const skillsView = document.querySelector('.project');



//AOS library instance
AOS.init({
  duration:1000,
  once:true
});

//GSAP instance
const tl4 = new TimelineMax();
//animation for text elements
tl4.staggerFrom(spanSkills,0.5,{opacity:0},0.1);

//menu hamburger logic
//set the flag
let menuIsActive = false;

hamburgerBtn.addEventListener('click',() => {
  if(!menuIsActive){
    hamburgerBtn.classList.add('closeAll');
    linesBurger.forEach(item => item.classList.add('close'));
    menu.classList.add('showMenu');
    menuIsActive = true;
    tl4.set(menuElements,{visibility:"visible"})
    tl4.staggerFrom(menuElements,0.1,{opacity:0,delay:0.1},0.1)
    
  }
    else{
      hamburgerBtn.classList.remove('closeAll');
      linesBurger.forEach(item => item.classList.remove('close'));
      menu.classList.remove('showMenu');
      menuIsActive = false;
    }
  }
) 