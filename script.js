let menuVisible = false;
//funcion qu muestra el menu

function mostrarOcultarMenu(){
 if(menuVisible){
document.getElementById("nav").classList="";
menuVisible = false;

 }else{
    document.getElementById("nav").classList="responsive";
    menuVisible=true;
 }

}
function seleccionar(){

document.getElementById("nav").classList="";
menuVisible=false;
}


function efectoHabilidades(){
    var Skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("csharp");
      habilidades[3].classList.add("mysql");
      habilidades[4].classList.add("mongo");
      habilidades[5].classList.add("adobe");
      habilidades[6].classList.add("jwindows");

    }



}
window.onscroll = function(){

    efectoHabilidades();
}