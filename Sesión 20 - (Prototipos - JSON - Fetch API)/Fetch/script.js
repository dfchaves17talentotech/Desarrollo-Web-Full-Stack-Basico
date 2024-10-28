/**
 * Ejercicio 1: Realizar una Solicitud GET
 * Utiliza Fetch API para realizar una solicitud GET a https://jsonplaceholder.typicode.com/posts.
 * Convierte la respuesta a JSON y muestra el título del primer post en la consola.
 */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        if (data.length > 0){
            let post = data.map((singlePost)=>{
                if (singlePost.id === 1){
                    console.log(singlePost.title);
                }
            });
        }
    })
    .catch(error => {
        console.error('Fetch Error', error);
    });

const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        let post = data.map((singlePost)=>{
            if (singlePost.id === 1){
                console.log(singlePost.title);
            }
        });
    } catch (error) {
        console.error('Hubo un error');
    }
}

getData();