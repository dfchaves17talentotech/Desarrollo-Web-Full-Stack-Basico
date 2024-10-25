window.addEventListener('load', () => {

    const container = document.getElementById('hoverDiv');
    const parrafo = document.getElementById('hoverMessage');

    container.addEventListener('mouseover', ()=>{
        parrafo.textContent = 'El mouse esta encima del div.';
        container.setAttribute('class', 'contenedor_mouse');
    });

    container.addEventListener('mouseout', ()=>{
        parrafo.textContent = 'El mouse esta fuera del div.';
        container.setAttribute('class', 'contenedor');
    });

});