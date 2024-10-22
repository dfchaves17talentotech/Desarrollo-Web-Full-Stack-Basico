/**
 * Crea una funcion que tomes dos numeros y devuelva la SUMA.
 * Crea una funcion que tomes dos numeros y devuelva la RESTA.
 * Crea una funcion que tomes dos numeros y devuelva la MULTIPLICACION.
 * Crea una funcion que tomes dos numeros y devuelva la DIVISION.
 */

function Sumar (numero1, numero2) {
    const suma = numero1+numero2;
    return suma;
}

function Restar (numero1, numero2) {
    const resta = numero1-numero2;
    return resta;
}

function Multiplicar (numero1, numero2) {
    const multiplicacion = numero1*numero2;
    return multiplicacion;
}

function Dividir (numero1, numero2) {
    if (numero2 !== 0){
        const divicion = numero1/numero2;
        return divicion;
    } else {
        return 'No puedo dividir por 0';
    }
}

let resultado = Sumar(10, 34);
console.log(resultado);

resultado = Sumar(-20, 100);
console.log(resultado);

resultado = Sumar(40, 1.2);
console.log(resultado);

resultado = Restar(10, 34);
console.log(resultado);

resultado = Restar(-20, 100);
console.log(resultado);

resultado = Restar(40, 1.2);
console.log(resultado);

resultado = Multiplicar(10, 34);
console.log(resultado);

resultado = Multiplicar(-20, 100);
console.log(resultado);

resultado = Multiplicar(40, 1.2);
console.log(resultado);

resultado = Dividir(10, 34);
console.log(resultado);

resultado = Dividir(-20, 100);
console.log(resultado);

resultado = Dividir(40, 1.2);
console.log(resultado);

resultado = Dividir(40, 4);
console.log(resultado);

// Crear una función que tome un número como argumento y 
// devuelva true si el número es par, y false si es impar.

function devuelvaNumero (num1) {
    return num1 % 2 == 0 ? true :false;
} 

function devuelvaNumero2 (num1) {
    if (num1 % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

console.log(devuelvaNumero(10));

// Crear una función que tome un array de números 10 numeros y
// devuelva un nuevo array solo con los números pares.

function fnNumerosParesArray(gvNumeros){
    let gvNumerosPares = gvNumeros.filter((Element)=>{
        if(Element % 2 == 0){
            return Element;
        }
    });
    return gvNumerosPares;
}


const nuevoArrayDePares = (arregloDeNumeros)=> {
    let nuevoArray = [];
    for (let i =0; i<arregloDeNumeros.length; i++){
        let esPar = arregloDeNumeros[i]%2;
        if (esPar === 0){
            nuevoArray.push(arregloDeNumeros[i]);
        }
    }
    return nuevoArray;
}

console.log(fnNumerosParesArray([1,2,3,4,5,6,7,8,9,10]))
