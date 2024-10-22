/**
 * Objectos
 */

// Los objetos tienen dos partes el Key(Identificador) y el Value

let persona = {
    nombre: 'David',
    apellido: 'Chaves',
    edad: 34,
    estatura: 1.70,
    profesion: 'Desarrollador',
    lugarDeNacimiento: null
};

console.log(persona);

console.log(persona.estatura);
console.log(persona.nombre, persona.apellido);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.lugarDeNacimiento);

/**
 * Array
 */

// Son una lista ordenada y cada elemento tiene una posición en esa lista.

let frutas = ['Manzana', 'Banano', 'Piña', 'Mora', 'Limon', 'Pera', 'Papaya'];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log('------------------------------');

for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

// Combinaciones de Array y Objetos

let estudiantes = [
    {nombre: 'Leidy', edad: 20, profesion: 'Analista SOA'},
    {nombre: 'Pedro', edad: 32, profesion: 'Negocios Internacionales'},
    {nombre: 'Laura', edad: 18, profesion: 'Trabaja en Amazon'},
];

estudiantes.push({
    nombre: 'David', edad: 20, profesion: 'Juega Videojuegos'
});

console.log(estudiantes);
console.log(estudiantes[0].profesion);
console.log(estudiantes[1].edad);
console.log(estudiantes[2].nombre);

for (let i = 0; i<estudiantes.length; i++){
    let estudiante = estudiantes[i];
    console.log('El nombre del estudiante es: ', estudiante.nombre);
    console.log('La edad del estudiante es: ', estudiante.edad);
    console.log('La profesión del estudiante es: ', estudiante.profesion);
}

// Matrices 

let matriz = [
    [1,2], //0
    [3,4] //1
];

console.log(matriz[1][1]);

let matriz2 = [
    [1,2,3,4,5], //0
    [6,7,8,9,10], //1
    [11,12,13,14,15], //2
    [16,17,18,19,20], //3
    [21,22,23,24,25] //4
];

console.log(matriz2[2][2]);
console.log(matriz2[3][3]);

let arregloDeDiferentesTipos = [11, 'David', 'Desarrollador', null, true];

console.log(arregloDeDiferentesTipos);

/**
 * Métodos o funciones sobre Objetos
 */

let persona2 = {
    nombre: 'Juan',
    edad: 44,
    ciudad: 'Bogotá',
}

console.log(persona2.nombre);

/**
 * Object Keys - Sirve para pasar los keys de un objeto a un array
 */

const llavesDelObjeto = Object.keys(persona2); // ['nombre', 'edad', 'ciudad']

for (let i=0; i<llavesDelObjeto.length; i++) {
    console.log(llavesDelObjeto[i]);
}

/**
 * Object Values - Sirve para pasar los values de un objeto a un array
 */
const valoresDelObjeto = Object.values(persona2); // ['Juan', 44, 'Bogotá']

for (let i=0; i<valoresDelObjeto.length; i++) {
    console.log(valoresDelObjeto[i]);
}

/**
 * Object Entries - Sirve para convertir un objeto en una Matriz
 */
const entriesDelObjeto = Object.entries(persona2); //[['nombre', 'Juan'],['edad', 44], ['ciudad', 'Bogotá']]

console.log(entriesDelObjeto);
console.log(entriesDelObjeto[0][1]);
console.log(entriesDelObjeto[2][0]);

// Object Assign - Copiar las propiedades de un Objeto Origen en un Objeto Destino

let origen = {};
let destino = {};

console.log(origen);
console.log(destino);

origen = {
    a:1,
    b:2,
    c:3
}

console.log(origen);
console.log(destino);

Object.assign(destino, origen);

console.log(origen);
console.log(destino);



/**
 * Object Freeze - Congelar el Objeto impidiendo que se agreguen cosas.
 */

let congelado = Object.freeze(persona2);

console.log(congelado);
console.log(persona2);

congelado.edad = 50;
persona2.edad = 50;

console.log(congelado);
console.log(persona2);

/**
 * Object Seal - Permite modificar propiedades pero no deja agregar ni eliminar
 */

let mascota = {
    tipo: 'Perro',
    raza: 'Chandozo',
    color: 'Amarillo'
}

console.log(mascota);

const sellado = Object.seal(mascota);

sellado.edad = 3;

console.log(mascota);

sellado.raza = 'Golden Retriever';

console.log(mascota);

delete sellado.color;

console.log(mascota);

console.log(typeof mascota);
console.log(mascota !== null);

console.log(mascota.color !== undefined);

/**
 * Métodos y funciones de Array
 */

let frutas2 = ['Manzana', 'Pera'];
console.log(frutas2);

// PUSH - Agregar un elemento al Array 

frutas2.push('Naranja');
console.log(frutas2);

//POP - Eliminar el ultimo elemento del Array - Devuelve

const eliminado = frutas2.pop();
console.log('El elemento eliminado fue: ', eliminado);
console.log(frutas2);

//Shift - Elimina el primer element del Array - Devuelve

const eliminado2 = frutas2.shift();
console.log('El elemento eliminado fue: ', eliminado2);
console.log(frutas2);

// UNSHIFT - Agrega un o mas elementos al inicio del array

frutas2.unshift('Papaya');
console.log(frutas2);

// CONCAT - Concatenar 2 arrays

let nuevasFrutas = ['Limon', 'Piña', 'Mango', 'Papaya'];

let concatenado = frutas2.concat(nuevasFrutas);

console.log(concatenado);

// SLICE - Devuelve una copia del array entre dos indices definidos.

let algunasFrutas = concatenado.slice(1,4);
console.log(algunasFrutas);

// SPLICE - Cambiar el contenido de un array eliminando elementos y agregando elementos.

let frutas3 = concatenado;
console.log(frutas3);

frutas3.splice(2,1, 'Mora');
console.log(frutas3);

// Index OF - Devuelve el indice de una valor.

console.log(frutas3);
let indiceDeFruta = frutas3.indexOf('Mora');
console.log(indiceDeFruta);

console.log(frutas3);
indiceDeFruta = frutas3.indexOf('Limon');
console.log(indiceDeFruta);

// INCLUDES - Devolver es true o false si lo incluye o no lo incluye

console.log(frutas3);
let existe = frutas3.includes('Mora');
console.log(existe);

console.log(frutas3);
existe = frutas3.includes('Limon');
console.log(existe);

console.log(Date.now());
const date = new Date();
console.log(date);
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);

// FOR EACH - Funcion proporciona cada elemento del array
console.log(frutas3);
frutas3.forEach(function (fruta) {
    console.log(fruta);
});

// MAP - Crear un nuevo array con los resultados de una funcion.

let frutasEnMayuscula = frutas3.map(function (fruta){
    return fruta.toUpperCase();
});

console.log(frutasEnMayuscula);

console.log(frutasEnMayuscula.reverse());