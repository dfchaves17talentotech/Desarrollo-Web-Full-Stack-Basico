window.addEventListener('load',()=>{
    const boton = document.getElementById('myButton');
    const message = document.getElementById('clickMessage');

    /**boton.onclick = () =>{ // Este es un ejemplo cuando hace click
        message.textContent = 'Ya me hicieron click';
    };*/

    boton.addEventListener('dblclick', ()=>{ // Este es un ejemplo cuando hace doble click
        message.textContent = 'Ya me hicieron doble click';
    });

});
