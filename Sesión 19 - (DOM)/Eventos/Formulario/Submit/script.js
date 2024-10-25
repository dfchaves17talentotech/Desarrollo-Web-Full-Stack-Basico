window.addEventListener('load', ()=>{

    const formulario = document.getElementById('myForm');

    formulario.addEventListener('submit', (event) =>{
        event.preventDefault(); //Evita que se pierda la información del usuario al no dejar que se recargue la página.
        console.log('Formulario Enviado');

        const name = document.getElementById('name');
        const nameValue = name.value;
        if(nameValue != '' && nameValue !== null) {
            alert(`Bienvenido al sistema ${nameValue}`);
        } else {
            alert('Ingresa un nombre Valido.');
        }

    });
});