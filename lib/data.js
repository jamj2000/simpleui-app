'use server'


import { delay } from "@/lib/utils"
import db from "./db";
import { cacheTag } from "next/cache";



export async function getEmpleados({
    sort = "nombre",
    direction = "asc",
    page = 1,
    limit = 10,
} = {}) {
    'use cache'

    cacheTag('empleados', page.toString(), limit.toString())


    const allowedSorts = [
        "id",
        "nombre",
        "empresa",
        "cargo"
    ];

    const allowedDirections = [
        "asc",
        "desc"
    ];

    // Evitar SQL injection en ORDER BY
    let sortColumn = allowedSorts.includes(sort)
        ? sort
        : "id";

    if (sortColumn.toLowerCase() == "nombre") sortColumn = "nombre_sort"


    const sortDirection = allowedDirections.includes(direction.toLowerCase())
        ? direction.toUpperCase()
        : "ASC";


    const offset = (page - 1) * limit;

    const empleados = db.prepare(`
        SELECT *
        FROM empleados
        ORDER BY ${sortColumn} ${sortDirection}
        LIMIT ?
        OFFSET ?
    `).all(+limit, +offset);


    empleados.map(empleado =>
        empleado.habilidades = empleado.habilidades ? JSON.parse(empleado.habilidades) : []
    )

    const total = db.prepare(`
        SELECT COUNT(*) as count
        FROM empleados
    `).get();


    return {
        data: empleados,
        total: total.count,
        page: +page,
        limit: +limit,
        pages: Math.ceil(total.count / limit)
    };
}







export async function getEmpleadoById(id) {
    'use cache'

    cacheTag('empleados', `empleado-${id}`)

    const empleado = db.prepare(`
        SELECT *
        FROM empleados
        WHERE id = ?
    `).get(+id);


    return empleado
}





