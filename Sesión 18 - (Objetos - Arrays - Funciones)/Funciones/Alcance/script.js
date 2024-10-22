let globales = 'Esta es una variable Global';

const enviarMensaje = (mensaje) =>{
    globales = 'Cambie el mensaje que tenia';
    console.log(mensaje);
};

console.log(globales);
enviarMensaje('Saluda');
console.log(globales);


const saludarAJuan = () => {
    const nombre = 'Juan';
    console.log('Hola', nombre);
};

saludarAJuan();

console.log(nombre);