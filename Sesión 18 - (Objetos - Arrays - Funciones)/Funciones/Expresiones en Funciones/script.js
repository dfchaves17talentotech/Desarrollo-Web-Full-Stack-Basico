
function sumar (numero1, numero2 ) {
    return numero1+numero2;
};

console.log(sumar(1,2));

/**
 * Expresiones en funciones.
 */

const sumar2 = function(numero1, numero2) {
    return numero1+numero2;
}; 

console.log(sumar2(1,5));

/**
 * Arrow Functions
 */

const sumar3 = (numero1, numero2) => {
    return numero1+numero2;
};

console.log(sumar3(2,5));

