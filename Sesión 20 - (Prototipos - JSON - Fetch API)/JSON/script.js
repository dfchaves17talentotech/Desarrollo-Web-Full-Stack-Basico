/**
 * Ejercicio 1: Crear un Objeto JSON
 * Crea un objeto JSON que represente un libro con las siguientes propiedades: título, autor
 * año de publicación y géneros (lista de géneros).
 * Escribe el código en JavaScript para crear este objeto y luego conviértelo a una cadena
 * JSON utilizando JSON.stringify.
 */

let book = {
    title: 'En Agosto Nos Vemos',
    author: 'Gabriel Garcia Marquez',
    year: 2024,
    genres: ['Novel', 'Fiction'],
};

//console.log(book);

let jSONBook = JSON.stringify(book);

//console.log(jSONBook);

/**
 * Ejercicio 2: Analizar un Objeto JSON
 * Toma la cadena JSON creada en el ejercicio anterior y conviértela de nuevo a un objeto
 * JavaScript utilizando JSON.parse.
 * Accede a las propiedades del objeto y muestra el título y el autor en la consola.
 */

let jsonStringCadena = '{"title":"En Agosto Nos Vemos","author":"Gabriel Garcia Marquez","year":2024,"genres":["Novel","Fiction"]}';

let newBook = JSON.parse(jsonStringCadena);

console.log(jsonStringCadena);
console.log(newBook);

console.log(`El titulo del libro es: ${newBook.title}`);
console.log(`El Autor del libro es: ${newBook.author}`);