function eliminarIndice(dni){
    let contactoAEliminar = agenda.find( ele => ele.dni === dni );
    let indiceAEliminar = agenda.indexOf(contactoAEliminar);
    agenda.splice(indiceAEliminar, 1);
}
