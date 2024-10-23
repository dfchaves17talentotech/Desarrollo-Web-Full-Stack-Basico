window.addEventListener('load', ()=>{

    const titulo = document.getElementById('header');

    const parrafo = document.getElementById('parrafo');

    const enlace = document.getElementById('link');

    const boton = document.getElementById('button');

    const contra = document.getElementById('password');
    boton.addEventListener('click', ()=>{
            if (contra.getAttribute('type') !== 'password') {
                contra.setAttribute('type', 'password');
            } else {
                contra.setAttribute('type', 'text');

            }   

            /**titulo.innerHTML = 'Actualizado <strong> HEADER </strong>';
            parrafo.textContent = 'Hola soy el parrafo actualizado.';
            enlace.setAttribute('href','https://www.eltiempo.com');
            enlace.textContent= 'Link Actualizado al tiempo';
            titulo.setAttribute('class', 'nuevaClase');*/
    });
});