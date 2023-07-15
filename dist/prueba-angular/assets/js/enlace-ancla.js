

var acerca_mi = document.getElementById('ancla-acerca');
var experiencia = document.getElementById('ancla-exp');
var educacion = document.getElementById('ancla-edu');
var habilidades = document.getElementById('ancla-hab');
var proyectos = document.getElementById('ancla-proyecto');


function click_acerca(e){
    window.scroll({
        top:500,
        left:0,
        behavior:'smooth'
    });
}
function click_exp(e){
    window.scroll({
        top:800,
        left:0,
        behavior:'smooth'
    });
}
function click_edu(e){
    window.scroll({
        top:1000,
        left:0,
        behavior:'smooth'
    });
}
function click_hab(e){
    window.scroll({
        top:1290,
        left:0,
        behavior:'smooth'
    });
}
function click_proyecto(e){
    window.scroll({
        top:2700,
        left:0,
        behavior:'smooth'
    });
}

acerca_mi.onclick = click_acerca;
experiencia.onclick = click_exp;
educacion.onclick = click_edu;
habilidades.onclick = click_hab;
proyectos.onclick = click_proyecto;

window.onload = function(){
    console.log(scrollY);
};