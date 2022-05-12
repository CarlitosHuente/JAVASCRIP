function losAsincronicos(){
    console.log("resultado")
    console.log(this.responseText)
    console.log(artista.artists[0].strArtistBanner)

   //console.log(JSON.parse(this.responseText))//muestra en orden la informacion
   const img= document.createElement("img");
   img.src = artista.artists[0].strArtistBanner
   document.body.appendChild(img)
}

console.log("comence");
const request =new XMLHttpRequest();//creo conexion
request.addEventListener('load',losAsincronicos);//cuando cargue la pagina, lo mandare a la funcion
request.open('GET','https://www.theaudiodb.com/api/v1/json/2/search.php?s=queen');//abrir esta url
request.send();//enviar el request
console.log("Termine");