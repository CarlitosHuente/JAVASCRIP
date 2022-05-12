/*let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    estatura: 172,
    direccion: {
        calle: "rosita Dias",
        numero: 17,
        comuna: "canela"
    }
}

document.getElementById("nombre").innerHTML = persona.nombre;
document.getElementById("apellido").innerHTML = persona.apellido;
document.getElementById("edad").innerHTML = persona.edad;
document.getElementById("estatura").innerHTML = persona.estatura;
document.getElementById("direccion").innerHTML = persona.direccion.calle + " " + persona.direccion.numero + " " + persona.direccion.comuna;
*/

/*Arreglos*/
let personas =[
    {idpersona: 1, nombre: "juan", apellido: "Perez", edad: 20, estatura: 172},
    {idpersona: 2, nombre: "Pedro", apellido: "Perez", edad: 20, estatura: 172},
    {idpersona: 3, nombre: "Diego", apellido: "Perez", edad: 20, estatura: 172},
    {idpersona: 4, nombre: "Pablo", apellido: "Perez", edad: 20, estatura: 172},
    {idpersona: 5, nombre: "Matias", apellido: "Perez", edad: 20, estatura: 172},

];
//let personas = document.getElementById("personas2");

let ulPersonas=document.createElement("ul");
personas.forEach(pers => {
    const elemento =document.createElement("li");
    elemento.innerHTML=pers.nombre +" "+pers.apellido
    ulPersonas.appendChild(elemento);
    
    
});

/*find = Buscar y filter= filtro*/

const personaBuscada =personas.find(element => element.idpersona ==2);
console.log("se busca...", personaBuscada);

function agregarTomas() {
    const nuevoTomas = { idpersona: 7, nombre: "Tomas", apellido: "Lizama", edad: 24, estatura: 168 }
    personas.push(nuevoTomas);
    cargarPersonas();
}

function agregarPersona()   {
    const personaNombre = document.getElementById("personaNombre").value
    const personaApellido = document.getElementById("personaApellido").value
    const personaEdad = document.getElementById("personaEdad").value

    const nuevaPersona = {
        idpersona: personas.length + 1,
        nombre: personaNombre,
        apellido: personaApellido,
        edad:personaEdad,
        estatura: 168
    }
    personas.push(nuevaPersona);
    cargarPersonas();
}

function cargarPersonas()   {
    let elementoPersonas = document.getElementById("personas");
    elementoPersonas.innerHTML = "";
    personas.forEach(pers => {
        const fila = document.createElement("div")
        fila.className = "row"
            const colNombre = document.createElement("div")
            colNombre.className = "col-4"
            colNombre.innerHTML = pers.nombre
            const colApellido = document.createElement("div")
            colApellido.className = "col-4"
            colApellido.innerHTML = pers.apellido
            const colEdad = document.createElement("div")
            colEdad.className = "col-4"
            colEdad.innerHTML = pers.edad
        fila.appendChild(colNombre)
        fila.appendChild(colApellido)
        fila.appendChild(colEdad)
        elementoPersonas.appendChild(fila)
    });
}



cargarPersonas()