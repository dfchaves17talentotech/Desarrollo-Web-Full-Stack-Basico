export const formSubmit = async (event) => {
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
                await fetch('http://localhost:3000/api/contacts', {
                    method: 'POST', // Especifica el tipo de solicitud como POST
                    headers: {
                        'Content-Type': 'application/json', // Especifica que el contenido es JSON
                    },
                    body: JSON.stringify(messageComplete), // Convierte el objeto en una cadena JSON
                })
                alert('Si mensaje se ha enviado con exito.');
            }
    } catch (error) {
        console.error(error);
    }
};