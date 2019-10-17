const elements = document.querySelectorAll('span')
const text = document.querySelector('.proff');
const button = document.querySelector('.btn');

const tl = new TimelineMax({delay:'1'});

tl.set(elements,{visibility:"visible"});

//node list can by array
tl.from(elements[2],0.2,{scaleY:0,color:'#22EABA'})
  .from(elements[0],0.2,{scaleX:0})
  .from(elements[1],0.2,{scaleY:0})
  .from(elements[4],0.2,{scaleX:0})
  .from(elements[3],0.2,{scaleY:0})
  .from(elements[5],0.2,{scaleX:0})
  .to(elements[0],0.3,{color:'red'})
  .addLabel('cześć') //to top
  .from(elements[9],0.2,{scaleY:0})
  .from(elements[10],0.2,{scaleX:0})
  .from(elements[6],0.2,{scaleY:0})
  .from(elements[8],0.2,{scaleX:0})
  .from(elements[7],0.2,{scaleY:0})
  .from(elements[12],0.2,{scaleX:0})
  .from(elements[11],0.2,{scaleY:0})
  .to(elements[6],0.3,{color:'yellow'})
  .addLabel('jestem') //to top
  .from(elements[15],0.2,{scaleX:0})
  .from(elements[16],0.2,{scaleY:0})
  .from(elements[13],0.2,{scaleX:0})
  .from(elements[14],0.2,{scaleY:0})
  .from(elements[18],0.2,{scaleX:0})
  .from(elements[17],0.2,{scaleY:0})
  .from(elements[19],0.2,{scaleX:0})
  .to(elements[13],0.3,{color:'#22EABA'})
  .addLabel('michał.') //to top
  .from(text,0.5,{opacity:0})
  .from(button,0.7,{opacity:0,delay:1})
  

