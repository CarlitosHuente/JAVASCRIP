const request = new XMLHttpRequest();
request.addEventListener('load', laBanda);
request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=queen');
request.send();


function laBanda() {
    const artista = JSON.parse(this.responseText);

    const img = document.createElement("img");
    img.style = "width:100%"
    img.src = artista.artists[0].strArtistLogo
    document.getElementById("logoimagenhtml").appendChild(img)

    const img2 = document.createElement("img");
    img2.style = "width:90%"
    img2.src = artista.artists[0].strArtistThumb
    document.getElementById("fotobandahtml").appendChild(img2)


    const nombrebanda = document.createElement("h1");
    //nombrebanda.style=""
    nombrebanda.textContent = artista.artists[0].strArtist
    document.getElementById("namebandahtml").appendChild(nombrebanda)


    const estilo = document.createElement("h6");
    estilo.textContent = artista.artists[0].strStyle
    document.getElementById("estilohtml").appendChild(estilo)

    const genero = document.createElement("h6");
    genero.textContent = artista.artists[0].strGenre
    document.getElementById("generohtml").appendChild(genero)

    const web = document.createElement("h6");
    web.textContent = artista.artists[0].strWebsite
    document.getElementById("webhtml").appendChild(web)

    const bio = document.createElement("p");
    bio.textContent = artista.artists[0].strBiographyES
    document.getElementById("biohtml").appendChild(bio)
    bio.class = "p-3"
}

const request2 = new XMLHttpRequest();
request2.addEventListener('load', discografia);
request2.open('GET', 'https://theaudiodb.com/api/v1/json/2/discography.php?s=queen');
request2.send();

/*const artista2=JSON.parse(this.responseText);


    function LosDiscos(){ 
        const artista2=JSON.parse(this.responseText);
    let abc = document.createElement("ul");}


 artista.forEach(disc => {
    const lista = document.createElement("li");
    lista.textContent = disc.album[0].strAlbum
    document.getElementById("nombredisco").appendChild(lista)
})*/

function discografia (){
    const artista2 =JSON.parse(this.responseText)
    let contardiscos =artista2.album.length;
   // const x = [0,1,2,3,4,5,6,7,8,9,10]
  for(x=0; x<contardiscos;x++) {
    const fila = document.createElement("div")
    fila.className = "row"

   /* const columname = document.createElement("div")
    columname.className = "col-6"*/

    const disc = document.createElement("p");
    disc.textContent = artista2.album[x].strAlbum
    document.getElementById("dischtml").appendChild(disc)

    /*const columanno = document.createElement("div")
    columanno.className = "col-6"*/

    const discyear = document.createElement("p");
    discyear.textContent = artista2.album[x].intYearReleased
    document.getElementById("discyearhtml").appendChild(discyear)
      
  };
  

    /*const disc = document.createElement("p");
    disc.textContent = artista2.album[x].strAlbum
    document.getElementById("dischtml").appendChild(disc)
    const discyear = document.createElement("p");
    discyear.textContent = artista2.album[x].intYearReleased
    document.getElementById("discyearhtml").appendChild(discyear)*/

}
       /*         
        function buscar(){
const buscador = document.getElementById("busqueda").value
const request = new XMLHttpRequest();
request.addEventListener('load', laBanda);
request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s='+ buscador);
request.send();

const request2 = new XMLHttpRequest();
request2.addEventListener('load', discografia);
request2.open('GET', 'https://theaudiodb.com/api/v1/json/2/discography.php?s='+ buscador);
request2.send();


        }*/
