// seed.js
import Database from "better-sqlite3";
import { fakerES as faker } from '@faker-js/faker';


const db = new Database("./database.sqlite");


// --------------- Datos aleatorios
export function crearEmpleadoAleatorio() {
    return {
        // id: faker.string.uuid(), // SQLite genera id con autoincremento
        nombre: faker.person.fullName(),
        empresa: faker.company.name(),
        cargo: faker.person.jobTitle(),
        nivel: faker.helpers.arrayElement(['amateur', 'junior', 'senior', 'veterano']),
        habilidades: faker.helpers.arrayElements(['leer', 'deporte', 'cine', 'playa'], { min: 1, max: 4 })
    }
}

export const empleados = faker.helpers.multiple(crearEmpleadoAleatorio, {
    count: 500,
});



// --------------- Base de datos

// 1. Función auxiliar en JS para limpiar tildes, la 'ñ' y mayúsculas
function getEsKey(text) {
    if (!text) return null;
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quita diacríticos (tildes)
        .toLowerCase();
}

// 2. Recreamos la tabla (nombre_sort como TEXT normal)
db.exec("DROP TABLE IF EXISTS empleados;");
db.exec(`
    CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        nombre_sort TEXT NOT NULL,
        empresa TEXT NOT NULL,
        cargo TEXT NOT NULL,
        nivel TEXT NOT NULL,
        habilidades TEXT CHECK(json_valid(habilidades) OR habilidades IS NULL)
    );
`);

//         updated_at TEXT NOT NULL DEFAULT current_timestamp


// 3. Sentencia preparada
const insertEmpleado = db.prepare(`
    INSERT INTO empleados (nombre, nombre_sort, empresa, cargo, nivel, habilidades)
    VALUES (@nombre, @nombre_sort, @empresa, @cargo, @nivel, @habilidades)
`);

// 4. Datos de prueba
const listaEmpleados = empleados

// 5. Insertar pasando getEsKey(emp.nombre)

for (const empleado of listaEmpleados) {
    insertEmpleado.run({
        ...empleado,
        nombre_sort: getEsKey(empleado.nombre), // Se calcula aquí en JS
        habilidades: JSON.stringify(empleado.habilidades),
    });
}

// 6. Consultar ordenado (¡Súper rápido!)
// const resultados = db.prepare(`
//     SELECT nombre, empresa 
//     FROM empleados 
//     ORDER BY nombre_sort ASC
// `).all();

// console.log(resultados);

console.log("✅ Empleados insertados:", empleados.length);