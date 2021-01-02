/* 

crear un elemento // 
document.createElement(element)

escribir texto en un elemento // 
element.textContent = texto

escribir HTML en un elemento // 
element.innerHTML = codigo HTML

añadir un elemento al DOM //
parent.appendchild(element)

AÑADIR UN FRAGMENTO DE CÓDIGO
document.createDocumentFragment() 

*/

const title = document.getElementById("title");
const parrafo = document.getElementById("parrafo");
const texto = "Hola mundo, esta es una bajada que se agrega co JS";

var lineaTexto = document.createElement("p");
lineaTexto.textContent = texto;
// console.log(lineaTexto);

function addP() {
  title.appendChild(lineaTexto);
}

function removeP() {
  parrafo.parentNode.removeChild(parrafo);
}

function cambioValor(event) {
  console.log(event.target.value);
}
