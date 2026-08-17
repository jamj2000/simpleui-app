// seed.js
import Database from "better-sqlite3";
import { fakerES as faker } from "@faker-js/faker";

const db = new Database("./database.sqlite");

// --------------- Datos aleatorios

export function crearEmpleadoAleatorio() {
    return {
        nombre: faker.person.fullName(),
        empresa: faker.company.name(),
        cargo: faker.person.jobTitle(),
        nivel: faker.helpers.arrayElement([
            "amateur",
            "junior",
            "senior",
            "veterano",
        ]),
        aficiones: faker.helpers.arrayElements(
            ["leer", "deporte", "cine", "playa"],
            { min: 1, max: 4 }
        ),
        activo: +faker.datatype.boolean(0.9)   // Probabilidad de true
        // activo: faker.number.int({ min: 0, max: 1 }),
    };
}

export const empleados = faker.helpers.multiple(crearEmpleadoAleatorio, {
    count: 500,
});

// --------------- Base de datos

// Limpia tildes y convierte a minúsculas
function getEsKey(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// Recreamos la tabla
db.exec("DROP TABLE IF EXISTS empleados;");

db.exec(`
    CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        nombre_sort TEXT NOT NULL,
        empresa TEXT NOT NULL,
        cargo TEXT NOT NULL,
        nivel TEXT NOT NULL,
        aficiones TEXT CHECK(json_valid(aficiones) OR aficiones IS NULL),
        activo INTEGER NOT NULL DEFAULT 1 CHECK (activo IN (0, 1))
    );
`);

// --------------- Inserción

const insertEmpleado = db.prepare(`
    INSERT INTO empleados (
        nombre,
        nombre_sort,
        empresa,
        cargo,
        nivel,
        aficiones,
        activo
    )
    VALUES (
        @nombre,
        @nombre_sort,
        @empresa,
        @cargo,
        @nivel,
        @aficiones,
        @activo
    )
`);

const insertarEmpleados = db.transaction((empleados) => {
    for (const empleado of empleados) {
        insertEmpleado.run({
            ...empleado,
            nombre_sort: getEsKey(empleado.nombre),
            aficiones: JSON.stringify(empleado.aficiones),
        });
    }
});

insertarEmpleados(empleados);

// --------------- Resultado
// 
// const resultados = db.prepare(`
//     SELECT nombre, empresa 
//     FROM empleados 
//     ORDER BY nombre_sort ASC
// `).all();

// console.log(resultados);


console.log("✅ Empleados insertados:", empleados.length);

db.close();

