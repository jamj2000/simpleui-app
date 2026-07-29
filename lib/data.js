'use server'

import { delay } from "@/lib/utils"
import db from "./db";



export async function getEmpleados({
    sort = "nombre",
    direction = "asc",
    page = 1,
    limit = 100,
} = {}) {

    // await new Promise(resolve => setTimeout(resolve, 2000))
    // await delay(1)


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
        SELECT
            id,
            nombre,
            empresa,
            cargo,
            nivel,
            habilidades
        FROM empleados
        ORDER BY ${sortColumn} ${sortDirection}
        LIMIT ?
        OFFSET ?
    `).all(limit, offset);

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
        page,
        limit,
        pages: Math.ceil(total.count / limit)
    };
}





export async function getAutorById(id) {
    try {
        return await prisma.autor.findUnique({
            where: { id: Number(id) },
            include: {
                libros: true,
            },
        })
    } catch (error) {
        console.error(`Error fetching autor with id ${id}:`, error)
        return null
    }
}
