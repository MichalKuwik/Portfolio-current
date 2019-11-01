//get DOM elements
//section1
const sec1 = document.querySelector('.sec1');
const elements = document.querySelectorAll('span')
const text = document.querySelector('.proff');
const em = document.getElementById('letterSvg');
const pol1 = document.querySelector('.polygon1');
const pol2 = document.querySelector('.polygon2');
const pol3 = document.querySelector('.polygon3');
//hamburger menu
const hamburgerBtn = document.querySelector('.menu-btn');
const linesBurger = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.nav-div');
const menuElements = document.querySelectorAll('.nav-link');
//section2
const sec2 = document.querySelector('.sec2');
const aboutMeText = document.querySelectorAll('.desc-span');
const aboutParagraph = document.querySelectorAll('.aboutParagraphSignleText')
const portrait = document.getElementById('portrait');

//section3
const sec3 = document.querySelector('.sec3');

//instance for anim all sections
const timeLine = new TimelineMax();
const timeLine2 = new TimelineMax();

menuElements.forEach((item,index) => {
  if(index === 0 || index === 4){
    
    item.addEventListener('click',() => {
      
     timeLine.to(sec2,0.3,{scale:0.8})
              .to(sec2,0.5,{left:'-100%'})
              .to(sec3,0.3,{scale:0.8})
              .to(sec3,0.5,{left:'-100%'})
              .to(sec1,0.5,{left:'5%',})
              .to(sec1,0.3,{scale:1})
              
            
      })
  }else if(index === 1 || index === 5){
    
    item.addEventListener('click',() => {
      
      timeLine2.to(sec1,0.3,{scale:0.8})
              .to(sec1,0.5,{left:'-100%'})
              .to(sec3,0.3,{scale:0.8})
              .to(sec3,0.5,{left:'-100%'})
              .to(sec2,0.1,{left:'0',})
              .to(sec2,0.1,{scale:1})
              .staggerFrom(aboutMeText,0.1,{scaleX:0},0.1)
              .staggerFrom(aboutParagraph,0.2,{opacity:0,y:-10},0.2)
              .from(portrait,0.5,{opacity:0,y:-20})

    })
  }else if(index === 2 || index === 6){
    item.addEventListener('click',() => {
      
      timeLine.to(sec2,0.3,{scale:0.8})
              .to(sec2,0.3,{left:'-100%'})
              .to(sec1,0.3,{scale:0.8})
              .to(sec1,0.3,{left:'-100%'})
              .to(sec3,0.5,{left:0})
              .to(sec3,0.3,{scale:1})

    })
  }
  
})

//menu hamburger logic
//set the flag
let menuIsActive = false;

hamburgerBtn.addEventListener('click',() => {
  if(!menuIsActive){
    hamburgerBtn.classList.add('closeAll');
    linesBurger.forEach(item => item.classList.add('close'));
    menu.classList.add('showMenu');
    menuIsActive = true;
    timeLine.staggerFrom(menuElements,0.1,{opacity:0,delay:0.1},0.1)
  }
    else{
      hamburgerBtn.classList.remove('closeAll');
      linesBurger.forEach(item => item.classList.remove('close'));
      menu.classList.remove('showMenu');
      menuIsActive = false;
    }
  }
)

//--------end of hamburger's logic----//

//TweenMax library


const animation = () => {
  //create new instance
const tl = new TimelineMax({delay:1});
//set primary value
tl.set(elements,{visibility:"visible"});
tl.set(em,{opacity:1})

//node list can by array
//let's start chaining animation
tl.from(elements[2],0.1,{scaleY:0,color:'#22EABA'})
  .from(elements[0],0.1,{scaleX:0})
  .from(elements[1],0.1,{scaleY:0})
  .from(elements[4],0.1,{scaleX:0})
  .from(elements[3],0.1,{scaleY:0})
  .from(elements[5],0.1,{scaleX:0})
  .to(elements[0],0.3,{color:'red'})
  .from(pol2,0.2,{opacity:0,rotation:90})
  .addLabel('cześć') //to top
  .from(elements[9],0.1,{scaleY:0})
  .from(elements[10],0.1,{scaleX:0})
  .from(elements[6],0.1,{scaleY:0})
  .from(elements[8],0.1,{scaleX:0})
  .from(elements[7],0.1,{scaleY:0})
  .from(elements[12],0.1,{scaleX:0})
  .from(elements[11],0.1,{scaleY:0})
  .to(elements[6],0.3,{color:'yellow'})
  .from(pol1,0.2,{opacity:0,rotation:95})
  .addLabel('jestem') //to top
  .from(elements[15],0.1,{scaleX:0})
  .from(elements[16],0.1,{scaleY:0})
  .from(elements[13],0.1,{scaleX:0})
  .from(elements[14],0.1,{scaleY:0})
  .from(elements[18],0.1,{scaleX:0})
  .from(elements[17],0.1,{scaleY:0})
  .from(elements[19],0.1,{scaleX:0})
  .to(elements[19],0.6,{rotation:180,transformOrigin:"right"})
  .to(elements[13],0.3,{color:'#22EABA'})
  .from(pol3,0.2,{opacity:0,rotation:135})
  .addLabel('michał.') //to top
  .to(em,1.5,{strokeDashoffset:0})
  .from(text,0.5,{opacity:0})
  .to(em,1,{opacity:0.2})
}
animation(); 
