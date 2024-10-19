/**
 * ESTRUCTURAS DE CONTROL - CONDICIONALES
 */

/**
 * IF
 */

let edad = 17;

if(edad>=18){
    console.log('Usted es mayor de edad en Colombia.');
    let anioDeNacimiento = 2024-edad;
    console.log('Su Año de Nacimiento Aproximado fue: ', anioDeNacimiento);
}

/**
 * IF ELSE
 */

if(edad>=18){
    console.log('Usted es mayor de edad en Colombia.');
    let anioDeNacimiento = 2024-edad;
    console.log('Su Año de Nacimiento Aproximado fue: ', anioDeNacimiento);
} else {
    console.log('Usted es menor de edad en Colombia.');
    let anioDeNacimiento = 2024-edad;
    console.log('Su Año de Nacimiento Aproximado fue: ', anioDeNacimiento);
}

/**
 * ELSE IF
 */
let continente = 'AFRICA';

if (continente === 'EUROPA'){
    console.log('Usted vive en Europa');
} else if (continente === 'OCEANIA') {
    console.log('Usted vive en Oceania');
} else if (continente === 'AFRICA') {
    console.log('Usted vive en Africa');
} else if (continente === 'ASIA') {
    console.log('Usted vive en Asia')
} else {
    console.log('Usted vive en America');
}

let diaDeLaSemana = 'dasdasdasd';

if (diaDeLaSemana === 'Lunes' || diaDeLaSemana === 'Martes' || 
    diaDeLaSemana === 'Miercoles' || diaDeLaSemana === 'Jueves' ||
    diaDeLaSemana === 'Viernes') {
        console.log('Se encuentra en un día Laboral.');
    } else if (diaDeLaSemana === 'Sabado') {
        console.log('Se encuentra en un día no Laboral.');
    } else if (diaDeLaSemana === 'Domingo') {
        console.log('Mañana le toca trabajar.');
    } else {
        console.log('El dato ingresado no es un día de la semana.');
    }

const diaDeLaSemanaUsuario = prompt('Ingrese el dia de la semana: ')
console.log(diaDeLaSemanaUsuario);

let diaAEvaluar = diaDeLaSemanaUsuario.toUpperCase(); // Todo a Mayuscula
console.log(diaAEvaluar);
diaAEvaluar = diaDeLaSemanaUsuario.toLowerCase(); // Todo a Minuscula
console.log(diaAEvaluar);
const capitalize = diaDeLaSemanaUsuario => diaDeLaSemanaUsuario ? diaDeLaSemanaUsuario[0].toUpperCase() + diaDeLaSemanaUsuario.slice(1).toLowerCase() : ''; // Todo a Minuscula
console.log(capitalize(diaDeLaSemanaUsuario));

switch (capitalize(diaDeLaSemanaUsuario)) {
    case 'Lunes':
        console.log('Se encuentra en un día Laboral. 1');
        break;
    case 'Martes':
        console.log('Se encuentra en un día Laboral. 2');
        break;
    case 'Miercoles':
        console.log('Se encuentra en un día Laboral. 3');
        break;
    case 'Jueves':
        console.log('Se encuentra en un día Laboral. 4');
        break;
    case 'Viernes':
        console.log('Se encuentra en un día Laboral. 5');
        break;
    case 'Sabado':
        console.log('Se encuentra en un no día Laboral. 6');
        break;
    case 'Domingo':
        console.log('Mañana le toca trabajar. 7');
        break;
    default:
        console.log('Día No Valido.');
}

