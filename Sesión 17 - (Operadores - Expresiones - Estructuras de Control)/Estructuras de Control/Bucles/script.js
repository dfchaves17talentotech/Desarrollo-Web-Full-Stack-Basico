/**
 * ESTRUCTURAS DE CONTROL BUCLES
 */

/**
 * FOR (INICIADOR - CONDICION - INCREMENTO o DECREMENTO)
 */

for(let i=10; i>=1; i--){
    console.log(i);
}

let iNFactorial = 10;

for(let i = (iNFactorial-1); i > 1; i--){
    iNFactorial *= i;
    console.log('El factorial de, ',i, 'es: ', iNFactorial);
}

/**
 * WHILE
 */

let incremental = 0;

while (incremental<10) {
    console.log(incremental);
    incremental++;
}

/**
 * DO WHILE
 */

let j = 0;

do {
    console.log('Iteracion', j);
    j++
} while (j<=10);