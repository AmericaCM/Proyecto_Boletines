console.log("Hola mundo desde un archivo de JavaScript");
//DOM
//querySelector -->Este nos devuelve solo un elemento  /querySelectorAll -->Este va a buscar todos los ele
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
console.log(link);

});
*/

/*
let celdas =document.querySelectorAll("td");
celdas.forEach(function(td){
td.addEventListener('click',function(){
    console.log("Click")
})
})
*/

//Obtener los elementos de la clase .close
let links =document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
//Agregar un evento click a cada uno de ellos
link.addEventListener("Click",function(){})
});