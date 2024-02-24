const input = document.getElementById("ingresarTarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("listaDetarea");

function agregarTarea() {
  if (input.value) {
    // Crear tarea
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");
    // Texto ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    // Iconos

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "iconoCompletar");

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "iconoEliminar");

    iconos.append(completar, eliminar);
  }
}
