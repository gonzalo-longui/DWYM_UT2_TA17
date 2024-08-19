const parrafo = document.getElementById("parrafoIncrementar");
const boton = document.getElementById("botonIncrementar");

boton.addEventListener("click", () => {
  parrafo.innerHTML = (parseInt(parrafo.innerHTML) + 1).toString();
})