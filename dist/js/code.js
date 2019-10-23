//get DOM elements
const elements = document.querySelectorAll('span')
const text = document.querySelector('.proff');
const button = document.querySelector('.btn');
const em = document.getElementById('letterSvg');
const pol1 = document.querySelector('.polygon1');
const pol2 = document.querySelector('.polygon2');
const pol3 = document.querySelector('.polygon3');
const hamburgerBtn = document.querySelector('.menu-btn');
const linesBurger = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.nav-div');
const sec1 = document.querySelector('.sec1');

//menu hamburger logic
//set the flag
let menuIsActive = false;

hamburgerBtn.addEventListener('click',() => {
  if(!menuIsActive){
    hamburgerBtn.classList.add('closeAll');
    linesBurger.forEach(item => item.classList.add('close'));
    menu.classList.add('showMenu');
    menuIsActive = true;
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

//create new instance
const tl = new TimelineMax({delay:'1'});
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
  .from(button,0.5,{opacity:0})
  .to(em,1,{opacity:0.2})
  

