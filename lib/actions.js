'use server'


import { revalidatePath, updateTag } from "next/cache"
import { z } from "zod"
import { delay } from "@/lib/utils"
import { getEsKey } from "@/lib/utils"
import db from "@/lib/db"



const EmpleadoSchema = z.object({
    id: z.coerce.number().optional(),
    nombre: z.string().min(2, "El nombre de empleado debe tener al menos 2 caracteres").max(100),
    empresa: z.string().min(3, "El nombre de empresa debe tener al menos 3 caracteres").max(100),
    cargo: z.string().min(4, "El nombre de cargo debe tener al menos 4 caracteres").max(100),
    nivel: z.enum(["amateur", "junior", "senior", "veterano"]),
    aficiones: z
        .array(z.string())
        .min(1, "Selecciona al menos una habilidad") // Opcional: si exiges al menos 1
        .default([]),
})


// Para validar usaremos safeParse
// https://zod.dev/ERROR_HANDLING?id=zodparsedtype
// result puede ser de 2 tipos:
// { success: true, data: z.infer<typeof schema> } 
// { success: false, error: issues[] }  





export async function createEmpleado(prevState, formData) {

    if (process.env.NODE_ENV == 'production') return {
        type: "info",
        message: "Esta acción ha sido desactivada en producción"
    }

    // await delay(2)  // Simulamos demora de 2 segundos para pruebas. Eliminar en producción.

    // LEEMOS DATOS
    const data = {
        id: formData.get("id") ?? undefined,
        nombre: formData.get("nombre"),
        empresa: formData.get("empresa"),
        cargo: formData.get("cargo"),
        nivel: formData.get("nivel"),
        aficiones: formData.getAll("aficiones")
    }


    // VALIDAMOS DATOS
    const result = EmpleadoSchema.safeParse(data)


    // SI HAY ERRORES: devolvemos un objeto con las propiedades errors y values
    if (!result.success) {
        const { formErrors, fieldErrors } = z.flattenError(result.error);   // https://zod.dev/error-formatting?id=zflattenerror#zflattenerror
        // console.log('FieldErrors ', fieldErrors);
        return {
            type: "error",
            errors: fieldErrors,
            values: data,
            message: "Por favor, corrige los errores del formulario."
        }
    }


    // REALIZAMOS LA ACCIÓN SOBRE result.data
    try {
        const insertEmpleado = db.prepare(`
            INSERT INTO empleados (nombre, nombre_sort, empresa, cargo, nivel, aficiones)
            VALUES (@nombre, @nombre_sort, @empresa, @cargo, @nivel, @aficiones)
        `);

        const resultado = insertEmpleado.run({
            ...result.data,
            nombre_sort: getEsKey(result.data.nombre),
            aficiones: JSON.stringify(result.data.aficiones),
        });


        console.log(resultado)

        updateTag('empleados')
        return {
            type: "success",
            message: "Empleado creado correctamente.",
        }

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }

}




export async function updateEmpleado(prevState, formData) {

    if (process.env.NODE_ENV == 'production') return {
        type: "info",
        message: "Esta acción ha sido desactivada en producción"
    }


    // LEEMOS DATOS
    const data = {
        id: formData.get("id") ?? undefined,
        nombre: formData.get("nombre"),
        empresa: formData.get("empresa"),
        cargo: formData.get("cargo"),
        nivel: formData.get("nivel"),
        aficiones: formData.getAll("aficiones")
    }


    // VALIDAMOS DATOS
    const result = EmpleadoSchema.safeParse(data)


    // SI HAY ERRORES: devolvemos un objeto con las propiedades errors y values
    if (!result.success) {
        const { formErrors, fieldErrors } = z.flattenError(result.error);   // https://zod.dev/error-formatting?id=zflattenerror#zflattenerror
        // console.log('FieldErrors ', fieldErrors);
        return {
            type: "error",
            errors: fieldErrors,
            values: data,
            message: "Por favor, corrige los errores del formulario."
        }
    }

    console.log(result)

    try {
        const updateEmpleado = db.prepare(`
            UPDATE empleados 
            SET nombre = @nombre, 
                nombre_sort = @nombre_sort, 
                empresa = @empresa, 
                cargo = @cargo,
                nivel = @nivel,
                aficiones = @aficiones  
            WHERE id = @id;
        `);

        const resultado = updateEmpleado.run({
            ...result.data,
            nombre_sort: getEsKey(result.data.nombre),
            aficiones: JSON.stringify(result.data.aficiones),
        });

        console.log(resultado)

        updateTag('empleados')
        return {
            type: "success",
            values: data,
            message: "Empleado actualizado correctamente.",
        }

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }

}




export async function deleteEmpleado(prevState, formData) {

    if (process.env.NODE_ENV == 'production') return {
        type: "info",
        message: "Esta acción ha sido desactivada en producción"
    }


    // LEEMOS SOLO ID
    const id = +formData.get("id")

    try {
        const deleteEmpleado = db.prepare(`DELETE FROM empleados WHERE id = @id;`);
        const resultado = deleteEmpleado.run({ id });

        if (resultado.changes === 0) {
            return {
                type: "error",
                message: "ID incorrecto o el empleado no existe.",
            };
        }

        updateTag('empleados')
        return {
            type: "success",
            message: "Empleado eliminado correctamente.",
        }

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }

}



export async function toggleEmpleadoActivo(id, activo) {
    try {
        console.log('TOGGLE', id, activo)
        const updateEmpleado = db.prepare(`
            UPDATE empleados 
            SET activo = @activo
            WHERE id = @id;
        `);

        const resultado = updateEmpleado.run({
            id, activo: Number(activo)
        });
    }
    catch (error) {
        console.log(error)
    }

    updateTag('empleados')
}

