let elementotitulo = document.getElementById("titulo"); //transformo el titulo en elemento

elementotitulo.innerHTML="Hola Mundo"

let numero2= document.getElementById("numero");
numero2.innerHTML="numero";
const nombres = [ "Juan", "Juana", "Mario", "María", "Pedro", "Pedra", "Emilio", "Emilia" ];

let valor = 0
let mostrarhora = true;

function incremento() {
    valor = valor + 1
    numero.innerHTML= valor
    setTimeout(() => {incremento();},1000)// callback => se llama sujeto (Flecha)

};

//incremento()

function hora() {
    const fecha = new Date()
    numero.innerHTML = fecha.getHours() + ":" + fecha.getMinutes() +":"+ fecha.getSeconds()
    if (mostrarhora) {
        setTimeout(() => {hora();},1000)// callback => se llama sujeto (Flecha)
    } else{
        numero2.innerHTML=""
    }
}


function Detener() {
   // alert("Detener")
    mostrarhora= false;
}

function Habilitar(){
    mostrarhora=true;
    hora ()
}
let min = 0 
let max = 10

//const aleatorio = Math.round(Math.random() * (max - min) + min);
//console.log(aleatorio);

function aleatorio(min, max)    {
    return Math.round(Math.random() * (max - min)) + min;
}

function jugarLoteria() {
    const premiado = aleatorio(0, nombres.length - 1)
    console.log(premiado)
    document.getElementById("loteria").innerHTML = nombres[premiado] + " ha ganado, número premiado: " + premiado
}