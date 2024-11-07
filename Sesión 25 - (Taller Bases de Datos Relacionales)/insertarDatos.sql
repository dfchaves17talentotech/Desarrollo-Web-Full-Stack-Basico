INSERT INTO departamentos (nombre)
VALUES
('Recursos Humanos'),
('IT'),
('Finanzas');

INSERT INTO empleados (nombre, apellido, edad, departamento_id) 
VALUES 
('Ana', 'Gomez', 28, 2),
('Luis', 'Pérez', 35, 1),
('Carlos', 'Ramírez', 40, 3);
('Juan', 'Rojas', 28, 1);

INSERT INTO proyectos (nombre, fecha_inicio, fecha_fin)
VALUES 
('Migración de Servidores', '2024-01-01', '2024-06-30'),
('Implementación ERP', '2024-02-01', '2024-12-31');

INSERT INTO tareas (proyecto_id, descripcion, fecha_entrega)
VALUES 
(1, 'Configurar servidores', '2024-02-01'),
(1, 'Migrar bases de datos', '2024-04-01'),
(2, 'Implementar módulo financiero', '2024-05-01');

INSERT INTO asignaciones (empleado_id, tarea_id, estado)
VALUES 
(1, 1, 'En Progreso'),
(2, 2, 'Pendiente'),
(3, 3, 'En Progreso');

db.movies.find({ "genres": { $in: ["Action", "Comedy"] }, "year": { $gt: 2010 } })

