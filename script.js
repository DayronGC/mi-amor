function crearCorazon(){
noBtn.style.top=y+'%';

});
}

function acepto(){

const respuesta=document.getElementById('respuesta');

respuesta.innerHTML='❤️ Sabía que dirías que sí ❤️';

lanzarFuegos();
}

function lanzarFuegos(){

const canvas=document.getElementById('fuegos');

if(!canvas) return;

const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

for(let i=0;i<120;i++){

setTimeout(()=>{

ctx.beginPath();

ctx.arc(
Math.random()*canvas.width,
Math.random()*canvas.height,
Math.random()*6,
0,
Math.PI*2
);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;
ctx.fill();

},i*40);
}
}

const contador=document.getElementById('contador');

if(contador){

const inicio=new Date('2025-01-01');

setInterval(()=>{

const ahora=new Date();

const diferencia=ahora-inicio;

const dias=Math.floor(diferencia/(1000*60*60*24));

contador.innerHTML=`❤️ ${dias} días pensando en ti ❤️`;

},1000);
}