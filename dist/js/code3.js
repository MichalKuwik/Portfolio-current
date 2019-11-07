//hamburger menu
const hamburgerBtn = document.querySelector('.menu-btn');
const linesBurger = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.nav-div');
const menuElements = document.querySelectorAll('.nav-link');

//section3
const sec3 = document.querySelector('.sec3');
const sec3Letters = document.querySelectorAll('.span-skills');
const sec3Skills = document.querySelectorAll('.skill');
const sec3Paragraph = document.querySelectorAll('.skills-paragraph');

const tl3 = new TimelineMax();

const showSkills = () => {
  tl3.to(sec3,0.1,{left:0})
   .staggerFrom(sec3Letters,0.2,{y:20,scaleY:0},0.1)
   .staggerFrom(sec3Skills,0.2,{scaleX:0,y:-100},0.1)
   .staggerFrom(sec3Paragraph,0.4,{opacity:0,y:-20},0.2)
}
showSkills()
  
//menu hamburger logic
//set the flag
let menuIsActive = false;

hamburgerBtn.addEventListener('click',() => {
  if(!menuIsActive){
    hamburgerBtn.classList.add('closeAll');
    linesBurger.forEach(item => item.classList.add('close'));
    menu.classList.add('showMenu');
    menuIsActive = true;
    tl3.staggerFrom(menuElements,0.1,{opacity:0,delay:0.1},0.1)
    
  }
    else{
      hamburgerBtn.classList.remove('closeAll');
      linesBurger.forEach(item => item.classList.remove('close'));
      menu.classList.remove('showMenu');
      menuIsActive = false;
    }
  }
)  