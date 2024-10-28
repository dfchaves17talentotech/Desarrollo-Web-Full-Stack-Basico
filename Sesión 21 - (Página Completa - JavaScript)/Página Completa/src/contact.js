export const formSubmit = (event) => {
    event.preventDefault(); //Evita que se pierda la información del usuario al no dejar que se recargue la página.
    try {
        const name = document.getElementById('inputName').value;
        const lastName = document.getElementById('inputLastName').value;
        const email = document.getElementById('inputEmail').value;
        const message = document.getElementById('inputMessage').value;

        if (name === '' || lastName === '' || email === '' || message === '')
            {
                alert('Por favor rellene los campos');
            } else {
                const messageComplete = {
                    name,
                    lastName,
                    email,
                    message
                };
                console.log(messageComplete);
                alert('Si mensaje se ha enviado con exito.');
            }
    } catch (error) {
        console.error(error);
    }
};