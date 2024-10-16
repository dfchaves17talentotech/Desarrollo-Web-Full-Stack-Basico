// alert('Hola mundo mi nombre es David Chaves');

console.log('Tipos de definición de Datos');

var numero1 = 10;

console.log(numero1);

let numero2 = 10;

console.log(numero2);

numero2 = 25;

console.log(numero2);

const pi = 3.14159;

console.log(pi);

console.log('Tipos de Datos');

let nombre = 'David Fernando Chaves Tamayo'; // Tipo de Dato String

console.log(nombre);

let numero3 = 3; // Tipo de Dato Number (3 - -10 3.15149)

console.log(numero3);

let bolean = true; // true - false

console.log(1000>156); //Tipo de Dato Boolean

let valorSinAsignar = null; // Tipo de Dato Null

console.log(valorSinAsignar);

valorSinAsignar = 1000000;

console.log(valorSinAsignar);

let valorSinDefinir; // Tipo de Dato Undefined

console.log(valorSinDefinir);

valorSinDefinir = 1000000;

console.log(valorSinDefinir);

console.log("/-----------------------------------------/");

const primerNumero = prompt('Ingrese un Número: ');

const segundoNumero = prompt('Ingrese un Número 2: ');

const resultado = Number(primerNumero)+Number(segundoNumero);

alert(`La suma de el Número 1 y el Número 2 es: ${resultado}`);

// Variables de utilizando el let - Puede variar en el tiempo.
// Constantes utilizando el const - No puede variar en el tiempo.
// Diferentes tipos de dato.
// String - Cadenas de Texto.
// Number - Números.
// Boolean - 1||0 - True||False
// Null - Cuando una variable o constante es declarada como nula.
// Undefined - Cuando una variable se declara pero no se pone ningun valor.