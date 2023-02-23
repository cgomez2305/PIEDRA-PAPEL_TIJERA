let cantidad=0;
function aparecer_items() {
    let items = document.getElementById("items");
    if (items.style.display === "none") {
        items.style.display = "flex";
        cantidad=parseInt(prompt('ingrese la cantidad de veces que desea jugar'))
    } else{
        items.style.display = "none";
    }
}

const papel=document.getElementById('papel');
const tijera=document.getElementById("tijera");
const piedra=document.getElementById("piedra");
const mostrarh=document.getElementById("mostrar_humano");
const mostrarb=document.getElementById("mostrar_bot");
let contadorhumano=0;
let contadorbot=0;
let turnos=0;




papel.addEventListener("click",funtionpapel);
function funtionpapel(){
let bot=Math.floor(Math.random()*(3-1)+1);
    console.log(bot)
    if(bot==1){
        alert('ganaste')
        contadorhumano++;     
        mostrarh.innerHTML=contadorhumano
        turnos+=1
    }
    if(bot==2){
        alert('perdiste')
        contadorbot++;
        mostrarb.innerHTML=contadorbot
        turnos+=1
    }else{
        alert('empatados')
        turnos+=1
    }
   desaparecer()
}

tijera.addEventListener("click",funtiontijera);
function funtiontijera(){
let bot=Math.floor(Math.random()*(3-1)+1);
    console.log(bot)
    if(bot==1){
        alert('empatados')
        turnos+=1
    }
    if(bot==2){
        alert('perdiste')
        contadorbot++;
        mostrarb.innerHTML=contadorbot
        turnos+=1
    }else{
        alert('ganaste')
        contadorhumano++;    
        mostrarh.innerHTML=contadorhumano
        turnos+=1
    }
    desaparecer()
}
piedra.addEventListener("click",funtionpiedra);
function funtionpiedra(){
let bot=Math.floor(Math.random()*(3-1)+1);
    console.log(bot)
    if(bot==1){
        alert('perdiste')
        contadorbot++;
        mostrarb.innerHTML=contadorbot
        turnos+=1
    }
    if(bot==2){
        alert('ganaste')
        contadorhumano++;   
        mostrarh.innerHTML=contadorhumano
        turnos+=1
    }else{
        alert('empatados')
        turnos+=1
    }
    desaparecer()
}
function desaparecer(){
    let items = document.getElementById("items");
    if(turnos==cantidad){
        alert("se acabaron los turnos")
        items.style.display = "none";
        mostrarb.innerHTML=''
        mostrarh.innerHTML=''
    }else{
        items.style.display = "flex";
    }
}






