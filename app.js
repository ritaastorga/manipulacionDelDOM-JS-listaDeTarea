const input = document.getElementById("ingresarTarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("listaDeTareas");

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
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "iconoEliminar");
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregar tarea a la lista

    listaDeTarea.appendChild(tareaNueva);
  } else {
    alert("Por favor ingresa una tarea");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("tareaCompletada");
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", agregarTarea);
