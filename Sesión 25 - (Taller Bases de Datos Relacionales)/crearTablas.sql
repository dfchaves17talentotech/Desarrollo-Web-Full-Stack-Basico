CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT CHECK (edad > 18),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE
);

CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    proyecto_id INT,
    descripcion VARCHAR(255) NOT NULL,
    fecha_entrega DATE,
    FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)
);

CREATE TABLE asignaciones (
    id SERIAL PRIMARY KEY,
    empleado_id INT,
    tarea_id INT,
    fecha_asignacion DATE NOT NULL DEFAULT CURRENT_DATE,
    estado VARCHAR(20) DEFAULT 'Pendiente',
    FOREIGN KEY (empleado_id) REFERENCES empleados(id),
    FOREIGN KEY (tarea_id) REFERENCES tareas(id)
);
