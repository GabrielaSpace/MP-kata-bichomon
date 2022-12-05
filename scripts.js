console.log(document.title);
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

/* let cambiaElTitulo = document.getElementById('gen-1');
console.log(cambiaElTitulo); */

document.querySelector('#gen-1').innerHTML = 'Generasión 1 Pokimon'
// 2. Cambia el color de fondo de la primera generación de Pokimon.

let fondo = document.querySelectorAll('.infocard-list');
for (let i = 0; i<fondo.length; i++){
    fondo[0].style.background = 'pink';
console.log(fondo);}

// 3. Imprime por consola la URL de la página.
let urlviejo = window.location.href;
console.log(urlviejo);

// 4. Imprime por consola el dominio de la página.

let  urldominio = window.location.host;
console.log(urldominio);

// 5. Imprime todos los nodos de imagen.
let nodosImg = document.querySelectorAll(".img-fixed");
for (let i = 0; i < nodosImg.length; i++) {
    console.log(nodosImg[i].src);
} console.log(nodosImg);
// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let i = 0; i < nodosImg.length; i++) {
    nodosImg[i].src ='https://media.giphy.com/media/2v170e71aanfi/giphy.gif';  
}
console.log(nodosImg); 

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

let fondoVolador = document.querySelectorAll('.infocard-lg-data .text-muted');
for (let i = 0; i<fondoVolador.length; i++){
    fondoVolador[i].style.background = 'green';
console.log(fondoVolador);}