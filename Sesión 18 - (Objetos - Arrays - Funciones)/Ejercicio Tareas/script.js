/** 
 * Lista de Tareas Avanzada
 * Requerimientos:
 *      Añadir tareas.
 *      Marcar tareas como completadas.
 *      Editar tareas.
 *      Eliminar tareas.
 *      Mostrar todas las tareas con su estado.
 * 
 *      Cada tarea debe tener un ID, Nombre, Description, Estado (Completado o no Completado)
*/

let listadoTareas = [];

const agregarTarea = (tarea) => {
    if (tarea.nombre !== null && tarea.descripcion !== null &&
        tarea.estado !== null && tarea.id !== null){
            listadoTareas.push(tarea);
        } else {
            console.error('La Tarea no tiene los campos adecuados.');
        }
};

const marcarTareasCompletadas = (id) => {
    for (let i =0; i<listadoTareas.length;i++){
        if(listadoTareas[i].id === id){
            listadoTareas[i].estado = true;
        }
    }
};

const editarTareas = (id, nuevoNombre, nuevaDescripcion) => {
    if(id!== null && nuevoNombre !== null && nuevaDescripcion !== null){
        for (let i =0; i<listadoTareas.length;i++){
            if(listadoTareas[i].id === id){
                listadoTareas[i].nombre = nuevoNombre;
                listadoTareas[i].descripcion = nuevaDescripcion;
            }
        }
    } else {
        console.error('La Tarea no tiene los campos adecuados.');
    }
};

const eliminarTareas = (id) => {
    for (let i =0; i<listadoTareas.length;i++){
        if(listadoTareas[i].id === id){
            const indice = listadoTareas.indexOf(listadoTareas[i]);
            if (indice !== -1){
                listadoTareas.splice(indice,1);
            }
        }

    }
};

const mostrarTareas = () => {
    listadoTareas.forEach((tarea)=> {
        console.log('La tarea id:', tarea.id, 'Con nombre:', tarea.nombre, 'Está en el estado:', tarea.estado);
    });
};

agregarTarea({
    id: 1,
    nombre: 'Crear Funcion para Elminar Tareas',
    descripcion: 'Necesito crear una funcion para eliminar las tareas del array.',
    estado: false,
});

agregarTarea({
    id: 2,
    nombre: 'Ir al Trabajo',
    descripcion: 'Si no voy al trabajo no tengo dinero',
    estado: true,
});

agregarTarea({
    id: 3,
    nombre: 'Pasear el fin de semana',
    descripcion: 'Como si fui al trabajo tengo dinero para el FDS',
    estado: false,
});

agregarTarea({
    id: 4,
    nombre: 'Esta Tarea esta mal',
    descripcion: 'Recuerda borrarla',
    estado: false,
});

console.log('----------------------------');
console.log('Estas son las tareas actuales');
mostrarTareas();
console.log('Marcar Tareas como Completadas');
marcarTareasCompletadas(3);
marcarTareasCompletadas(4);
mostrarTareas();
console.log('Modificar Tareas');
editarTareas(2, 'Bañarme antes de ir al trabajo', 'No puedo ir al trabajo sucio.');
mostrarTareas();
console.log('Eliminar Tareas');
eliminarTareas(4);
mostrarTareas();
