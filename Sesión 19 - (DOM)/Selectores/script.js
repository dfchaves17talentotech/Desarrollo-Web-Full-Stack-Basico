window.addEventListener('load',() => { 
    console.log('La pagina ya esta cargada');
/**
 * Accediendo a elementos HTML por ID.
 */
    const titulo = document.getElementById('title');
    console.log('Soy el elemento Accedido desde el ID.', titulo);

/**
 * Accediendo a elementos HTML por Clase.
 */

    const parrafos = document.getElementsByClassName('parrafo');
    console.log('Somos elementos Accedidos por Clase.', parrafos);

/**
 * Accediendo a elementos HTML por Tipo o Etiqueta.
 */

    const todosLosParrafos = document.getElementsByTagName('p');
    console.log('Somos elementos Accedidos por Tag.', todosLosParrafos);

/**
 * Accediendo a elementos HTML por Query Selector.
 */

    const primerParrafo = document.querySelector('.parrafo');
    console.log('Soy el primer elemento del query selector', primerParrafo);

/**
 * Accediendo a elementos HTML por Query Selector ALL.
 */
    const todosLosParrafosQuerySelector = document.querySelectorAll('.parrafo');
    console.log('Somos todos los elemento del query selector', todosLosParrafosQuerySelector);

    const parrafoHolaMundo = document.querySelector('div.contenedor main.principal p.texto');
    console.log('Este es un parrafo llamado por el query selector', parrafoHolaMundo);

/**
 * Accediendo al Boton
 */
    const boton = document.getElementById('button');
    console.log('Accediendo al Boton por ID.', boton);

    boton.addEventListener('click', ()=>{
        if (titulo.textContent !== 'Nuevo Título'){
            titulo.textContent = 'Nuevo Título';
        } else {
            titulo.textContent = 'Título'
        }
    });

});

