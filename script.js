function crearCorazon(){

const corazon=document.createElement('div');

corazon.classList.add('corazon');

corazon.innerHTML='❤️';

corazon.style.left=Math.random()*100+'vw';

corazon.style.fontSize=(Math.random()*20+15)+'px';

corazon.style.animationDuration=(Math.random()*3+4)+'s';

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},7000);

}

setInterval(crearCorazon,300);

const musica=document.getElementById('musica');

if(musica){

document.addEventListener('click',()=>{

musica.play();

});

}

function abrirCarta(){

const carta=document.getElementById('contenidoCarta');

if(carta){

carta.style.animation='fade 1s ease';

}

}

const noBtn=document.getElementById('noBtn');

if(noBtn){

noBtn.addEventListener('mouseover',()=>{

const x=Math.random()*80;
const y=Math.random()*80;

noBtn.style.position='absolute';

noBtn.style.left=x+'%';

noBtn.style.top=y+'%';

});

}

function acepto(){

    const respuesta = document.getElementById('respuesta');

    if(respuesta){
        respuesta.innerHTML = '❤️ Sabía que dirías que sí ❤️';
    }

    lanzarFuegos();

    // abrir link directo
    window.location.href = "https://www.roblox.com/es/games/142823291/Murder-Mystery-2";
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

const dias=Math.floor(
diferencia/(1000*60*60*24)
);

contador.innerHTML=
`❤️ ${dias} días pensando en ti ❤️`;

},1000);

}