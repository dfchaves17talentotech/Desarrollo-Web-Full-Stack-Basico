/**
 * Operadores
 */

/**
 * Operadores Aritméticos - Operaciones Matemáticas
 * SUMA - RESTA - MULTIPLICACIÓN - DIVISIÓN - MODULO
 */

// SUMA (+)

console.log('------- Usando el Operador de Suma (+) ------');
let resultadoSuma = 10+5; // Estamos sumando tipos de dato Numéricos.
console.log('El resultado de la suma: ', resultadoSuma);

let resultadoSumaCaractares = '10' + '5'; // Estamos sumando tipos de dato de Cadena de Caracteres o String.
console.log('El resultado de la suma es: ', resultadoSumaCaractares);

let resultadoSumaNumberyString = '10' + 5; // Estamos sumando diferentes tipos de dato.
console.log('El resultado de la suma es: ', resultadoSumaNumberyString);

let numeroSuma1 = 200;
let numeroSuma2 = 500;

let sumaVariables = numeroSuma1+numeroSuma2;
console.log('El resultado de la suma es: ', sumaVariables);

//RESTA (-)

console.log('------- Usando el Operador de Resta (-) ------');

let resultadoResta = 10 - 5;
console.log('El Resultado de la resta es: ', resultadoResta);

let resultadoRestaDecimales = 3.1416 - 1.344556;
console.log('El Resultado de la resta es: ', resultadoRestaDecimales);

let resultadoRestaString = "4" - "5"; // Cuando son string y restas si las opera
console.log('El Resultado de la resta es: ', resultadoRestaString);

let numeroResta1 = 200;
let numeroResta2 = 500;

let resultadoRestaVariables = numeroResta1 - numeroResta2;
console.log('El Resultado de la resta es: ', resultadoRestaVariables);

// MULTIPLICACION (*)

console.log('------- Usando el Operador de Multiplicación (*) ------');

let resultadoMultiplicacion = 10 * 5;
console.log('El resultado de la multiplicación es: ', resultadoMultiplicacion);

let resultadoMultiplicacionDecimales = 3.14159 * 1.456;
console.log('El resultado de la multiplicación es: ', resultadoMultiplicacionDecimales);

let resultadoMultiplicacionCaracteres = '20' * '5';
console.log('El resultado de la multiplicación es: ', resultadoMultiplicacionCaracteres);

let numeroMultiplicacion1 = 200;
let numeroMultiplicacion2 = 500;

let resultadoMultiplicacionVariables = numeroMultiplicacion1 * numeroMultiplicacion2;
console.log('El resultado de la multiplicación es: ', resultadoMultiplicacionVariables);

// DIVISION (/)

console.log('------- Usando el Operador de División (/) ------');

let resultadoDivision = 10 / 5;
console.log('El resultado de la Division es: ', resultadoDivision);

let resultadoDivisionDecimales = 3.14159 / 1.456;
console.log('El resultado de la Division es: ', resultadoDivisionDecimales);

let resultadoDivisionCaracteres = '20' / '5';
console.log('El resultado de la Division es: ', resultadoDivisionCaracteres);

let numeroDivision1 = 200;
let numeroDivision2 = 500;

let resultadoDivisionVariables = numeroMultiplicacion1 / numeroMultiplicacion2;
console.log('El resultado de la Division es: ', resultadoDivisionVariables);

// MODULO (%)

let resultadoDivisionModulo = 10 / 3; 
let resultadoModulo = 10 % 3;
console.log('El resultado de la División es: ', resultadoDivisionModulo);
console.log('El resultado del Módulo es: ', resultadoModulo);

let resultadoModuloDecimales = 3.14159 % 1.456; 
console.log('El resultado del Módulo es: ', resultadoModuloDecimales);

let resultadoUsandoVariosOperadores = ((40+50) - (30-10) * 5 / 10) / (10%3);
console.log('El resultado de la operación es: ', resultadoUsandoVariosOperadores);

//INCREMENTO (++);

console.log('----------- Usando Operadores de Incremento (++)--------');

let variableIncremento = 1;
console.log('La variable es: ', variableIncremento);
variableIncremento++;
console.log('La variable es: ', variableIncremento);

//DECREMENTO (--);

console.log('----------- Usando Operadores de Decremento (--)--------');

let variableDecremento = 1000;
console.log('La variable es: ', variableDecremento);
variableDecremento--;
console.log('La variable es: ', variableDecremento);

/**
 * OPERADORES LOGICOS
 * AND - OR - NOT
 */

console.log('--------------- Usando Operadores AND (&&) -----------');
let verdadero = true;
let falso = false;
let otroVerdadero = true;
let otroFalso = false;

let resultadoOperadorAnd = verdadero && falso;
console.log ('El resultado del AND es: ', resultadoOperadorAnd);

resultadoOperadorAnd = verdadero && otroVerdadero;
console.log ('El resultado del AND es: ', resultadoOperadorAnd);

resultadoOperadorAnd = falso && verdadero;
console.log ('El resultado del AND es: ', resultadoOperadorAnd);

resultadoOperadorAnd = falso && otroFalso;
console.log ('El resultado del AND es: ', resultadoOperadorAnd);

resultadoOperadorAnd = (10>5) && (10>9);
console.log ('El resultado del AND es: ', resultadoOperadorAnd);

console.log('--------------- Usando Operadores OR (||) -----------');

let resultadoOperadorOR = verdadero || falso;
console.log ('El resultado del OR es: ', resultadoOperadorOR);

resultadoOperadorOR = verdadero || otroVerdadero;
console.log ('El resultado del OR es: ', resultadoOperadorOR);

resultadoOperadorOR = falso || verdadero;
console.log ('El resultado del OR es: ', resultadoOperadorOR);

resultadoOperadorOR = falso || otroFalso;
console.log ('El resultado del OR es: ', resultadoOperadorOR);

resultadoOperadorOR = (10>12) || (10>12);
console.log ('El resultado del OR es: ', resultadoOperadorOR);

console.log('--------------- Usando Operadores NOT (!) -----------');

let resultadoOperadorNOT = !verdadero;
console.log ('El resultado del NOT es: ', resultadoOperadorNOT);

resultadoOperadorNOT = !falso;
console.log ('El resultado del NOT es: ', resultadoOperadorNOT);

resultadoOperadorOR = (10>12) || (10>12);
console.log ('El resultado del OR es: ', !resultadoOperadorOR);

/**
 * OPERADORES DE COMPARACION 
 * IGUAL - ESTRICTAMENTE IGUAL - DIFERENTE - ESTRICTAMENTE DIFETENTE 
 * MAYOR QUE - MENOR QUE - MAYOR O IGUAL QUE - MENOR O IGUAL QUE
 */

console.log('--------------- Usando Operadores Igual (==) -----------');
let resultadoIgualQue = 10=='10'; // Valida solamente el valor del dato sin importar el tipo de dato.
console.log('El resultado de Igual que == es: ', resultadoIgualQue);

console.log('--------------- Usando Operadores Estrictamente Igual (===) -----------');
let resultadoEstrictamenteIgualQue = 10==='10'; // Valida aparte del valor del dato, que el tipo de dato sea igual también.
console.log('El resultado de Estrictamente Igual que == es: ', resultadoEstrictamenteIgualQue);

console.log('--------------- Usando Operadores Diferente (!=) -----------');
let resultadoDiferenteQue = 10!='10'; // Valida solamente el contenido mas no el tipo de dato.
console.log('El resultado de Diferente que != es: ', resultadoDiferenteQue);

console.log('--------------- Usando Operadores Estrictamente Diferente (!==) -----------');
let resultadoEstrictamenteDiferenteQue = 10!=='10'; // Valida aparte del valor del dato, que el tipo de dato sea diferente también.
console.log('El resultado de Estrictamente Diferente que == es: ', resultadoEstrictamenteDiferenteQue);

console.log('--------------- Usando Operadores Mayor Que (>) -----------');
let resultadoMayorQue = 10>9;
console.log('El resultado de Mayor que es: ', resultadoMayorQue);

console.log('--------------- Usando Operadores Mayor o Igual Que (<) -----------');
let resultadoMenorQue = 8<9;
console.log('El resultado de Menor que es: ', resultadoMenorQue);

console.log('--------------- Usando Operadores Mayor Igual Que (>=) -----------');
let resultadoMayorIgualQue = 10>=10;
console.log('El resultado de Mayor Igual que es: ', resultadoMayorIgualQue);

console.log('--------------- Usando Operadores Mayor Que (<=) -----------');
let resultadoMenorIgualQue = 9<=9;
console.log('El resultado de Menor Igual que es: ', resultadoMenorIgualQue);

/**
 * OPERADORES DE CONCATENACION 
 */

let nombreUsuario = 'David';
let segundoNombreUsuario = 'Fernando';
let apellidoUsuarioUsuario = 'Chaves';
let segundoApellidoUsuario = 'Tamayo'

let nombreCompleto = nombreUsuario+segundoNombreUsuario+apellidoUsuarioUsuario+segundoApellidoUsuario;
console.log('El Nombre Completo del Usuario es: ', nombreCompleto);

nombreCompleto = nombreUsuario+" "+segundoNombreUsuario+" "+apellidoUsuarioUsuario+" "+segundoApellidoUsuario;
console.log('El Nombre Completo del Usuario es: ', nombreCompleto);

/**
 * OPERADORES TERNARIOS
 */

console.log('--------- USANDO OPERADORES TERNARIOS ----------'); 
let edad = 10;

let acceso = (edad>=18) ? 'Acceso Concedido' : 'Acceso Denegado';
console.log('El acceso a sido: ', acceso);
