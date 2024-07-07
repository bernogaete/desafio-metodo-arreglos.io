//Tareas en página de inicio

const tareasIniciales = [
    { id: Date.now() + 1, nombre: "Estudiar Javascript", estado: false },
    { id: Date.now() + 2, nombre: "Realizar Guía", estado: false },
    { id: Date.now() + 3, nombre: "Corregir código desafío", estado: false },
];

const inputTarea = document.querySelector("#inputTareas");
const listadoTareas = document.querySelector("#listadoTareas");
const btnAgregar = document.querySelector("#agregarTareas");
const cuentaTareas = document.querySelector("#cuentaTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");
const listaTareas = [...tareasIniciales];

// Función para actualizar la lista de tareas en el HTML
function actualizarListado() {
    let html = "";
    listaTareas.forEach((tarea, index) => {
        html += `
        <tr>
            <td style="color: ${tarea.estado ? 'green' : 'black'};">${tarea.id}</td>
            <td style="color: ${tarea.estado ? 'green' : 'black'};">${tarea.nombre}</td>
            <td><input type="checkbox" ${tarea.estado ? 'checked' : ''} onclick="cambiarEstado(${index})"></td>
            <td><button class="icono-rojo" onclick="borrar(${tarea.id})"><i class="fa-solid fa-square-xmark"></i></button></td>
        </tr>`;
    });
    listadoTareas.innerHTML = html;
    cuentaTareas.textContent = `Total de tareas: ${listaTareas.length}`;
    tareasRealizadas.textContent = `Tareas realizadas: ${listaTareas.filter(tarea => tarea.estado).length}`;
}

// Función para cambiar el estado de una tarea
function cambiarEstado(index) {
    listaTareas[index].estado = !listaTareas[index].estado;
    actualizarListado();
}

// Función para borrar una tarea
function borrar(id) {
    const index = listaTareas.findIndex((ele) => ele.id === id);
    if (index !== -1) {
        listaTareas.splice(index, 1);
        actualizarListado();
    }
}

// Event listener para agregar una nueva tarea
btnAgregar.addEventListener("click", () => {
    const nombreTarea = inputTarea.value.trim();
    if (nombreTarea) {
        listaTareas.push({ id: Date.now(), nombre: nombreTarea, estado: false });
        inputTarea.value = "";
        actualizarListado();
    }
});

// Inicializa el listado y el recuento de tareas
actualizarListado();
