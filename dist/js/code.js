const elements = document.querySelectorAll('span')
const text = document.querySelector('.proff');
const button = document.querySelector('.btn');
const em = document.getElementById('letterSvg');
const pol1 = document.querySelector('.polygon1');
const pol2 = document.querySelector('.polygon2');
const pol3 = document.querySelector('.polygon3');



const tl = new TimelineMax({delay:'1'});

tl.set(elements,{visibility:"visible"});

//node list can by array
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
  .to(em,2,{strokeDashoffset:0})
  .from(text,0.5,{opacity:0})
  .from(button,0.5,{opacity:0})
  

