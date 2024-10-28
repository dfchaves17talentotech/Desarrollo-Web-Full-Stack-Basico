function Persona (nombreParametro, edadParametro) {
    this.nombre = nombreParametro;
    this.edad = edadParametro;
};

Persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
};

Persona.prototype.calcularAñoNacimiento = function () {
    const año= 2024-this.edad;
    console.log(`El año de nacimiento es ${año}`);
};

Persona.prototype.nombreEnMayuscula = function () {
    console.log(`El Nombre en Mayúscula es: ${this.nombre.toUpperCase()}`);
};

Persona.prototype.nombreEnMinuscula = function () {
    console.log(`El Nombre en Minúscula es: ${this.nombre.toLowerCase()}`);
};

const nuevaPersona = new Persona('David', 34);
nuevaPersona.saludar();
nuevaPersona.calcularAñoNacimiento();
nuevaPersona.nombreEnMayuscula();
nuevaPersona.nombreEnMinuscula();

const nuevaPersona2 = new Persona('Laura', 20);
nuevaPersona2.saludar();
nuevaPersona2.calcularAñoNacimiento();
nuevaPersona2.nombreEnMayuscula();
nuevaPersona2.nombreEnMinuscula();
