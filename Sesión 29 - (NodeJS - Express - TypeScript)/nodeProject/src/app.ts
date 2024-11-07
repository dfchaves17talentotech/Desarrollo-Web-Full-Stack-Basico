import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hola Mundo este es mi primer servicio o ruta");
});

app.listen(port, ()=>{
    return console.log(`The server is litening in the port ${port}`);
});