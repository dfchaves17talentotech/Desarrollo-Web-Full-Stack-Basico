window.addEventListener('load',() =>{

    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const container = document.getElementById('container')

    addButton.addEventListener('click',()=>{
        const nuevoParrafo = document.createElement('p');
        const textoNuevoParrafo = document.createTextNode('Este es el nuevo Parrafo.');
        nuevoParrafo.appendChild(textoNuevoParrafo);
        container.appendChild(nuevoParrafo);
    });

    removeButton.addEventListener('click',()=>{
        if (container.childNodes.length>0){
            container.removeChild(container.lastChild);
        }
    });
});