'use server'


import { revalidatePath } from "next/cache"
import { z } from "zod"
import { delay } from "@/lib/utils"
import { getEsKey } from "@/lib/utils"
import db from "@/lib/db"



const EmpleadoSchema = z.object({
    // id: z.coerce.number(),
    nombre: z.string().min(2, "El nombre de empleado debe tener al menos 2 caracteres").max(100),
    empresa: z.string().min(3, "El nombre de empresa debe tener al menos 3 caracteres").max(100),
    cargo: z.string().min(4, "El nombre de cargo debe tener al menos 4 caracteres").max(100),
    habilidades: z
        .array(z.string())
        .min(1, "Selecciona al menos una habilidad") // Opcional: si exiges al menos 1
        .default([]),
})




export async function createEmpleado(prevState, formData) {

    await delay(2)  // Simulamos demora de 2 segundos para pruebas. Eliminar en producción.

    // LEEMOS DATOS
    const data = {
        nombre: formData.get("nombre"),
        empresa: formData.get("empresa"),
        cargo: formData.get("cargo"),
        habilidades: formData.getAll("habilidades")
    }


    // VALIDAMOS DATOS
    const result = EmpleadoSchema.safeParse(data)
    // https://zod.dev/ERROR_HANDLING?id=zodparsedtype
    // result puede ser de 2 tipos:
    // { success: true, data: z.infer<typeof schema> } 
    // { success: false, error: issues[] }  


    // SI HAY ERRORES: devolvemos un objeto con las propiedades errors y values
    if (!result.success) {
        const { formErrors, fieldErrors } = z.flattenError(result.error);   // https://zod.dev/error-formatting?id=zflattenerror#zflattenerror
        // console.log('FieldErrors ', fieldErrors);
        return {
            errors: fieldErrors,
            values: data,
            message: "Por favor, corrige los errores del formulario."
        }
    }


    // REALIZAMOS LA ACCIÓN SOBRE result.data
    try {
        const insertEmpleado = db.prepare(`
            INSERT INTO empleados (nombre, nombre_sort, empresa, cargo, habilidades)
            VALUES (@nombre, @nombre_sort, @empresa, @cargo, @habilidades)
        `);

        const resultado = insertEmpleado.run({
            ...result.data,
            nombre_sort: getEsKey(result.data.nombre),
            habilidades: JSON.stringify(nuevoEmpleado.habilidades)
        });


        console.log(resultado)

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }


    revalidatePath("/test")
    return {
        type: "success",
        message: "Empleado creado exitosamente.",
    }
}




export async function updateEmpleado(prevState, formData) {
    // LEEMOS DATOS
    const id = +formData.get("id")

    const data = {
        nombre: formData.get("nombre"),
        empresa: formData.get("empresa"),
        cargo: formData.get("cargo"),
        habilidades: formData.getAll("habilidades")
    }


    // VALIDAMOS DATOS
    const result = EmpleadoSchema.safeParse(data)
    // https://zod.dev/ERROR_HANDLING?id=zodparsedtype
    // result puede ser de 2 tipos:
    // { success: true, data: z.infer<typeof schema> } 
    // { success: false, error: issues[] }  


    // SI HAY ERRORES: devolvemos un objeto con las propiedades errors y values
    if (!result.success) {
        const { formErrors, fieldErrors } = z.flattenError(result.error);   // https://zod.dev/error-formatting?id=zflattenerror#zflattenerror
        // console.log('FieldErrors ', fieldErrors);
        return {
            errors: fieldErrors,
            values: data,
            message: "Por favor, corrige los errores del formulario."
        }
    }


    try {
        const updateEmpleado = db.prepare(`
            UPDATE empleados 
            SET nombre = @nombre, 
                nombre_sort = @nombre_sort, 
                empresa = @empresa, 
                cargo = @cargo,
                habilidades = @habilidades
            WHERE id = @id;
        `);

        const resultado = updateEmpleado.run({
            id: id,
            ...result.data,
            nombre_sort: getEsKey(result.data.nombre),
            habilidades: JSON.stringify(result.data.habilidades)
        });

        // console.log(resultado)

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }

    revalidatePath("/test")
    return {
        type: "success",
        message: "Empleado actualizado exitosamente.",
    }
}




export async function deleteEmpleado(prevState, formData) {
    // LEEMOS DATOS
    const id = +formData.get("id")

    const data = {
        nombre: formData.get("nombre"),
        empresa: formData.get("empresa"),
        cargo: formData.get("cargo"),
    }


    // VALIDAMOS DATOS
    const result = EmpleadoSchema.safeParse(data)
    // https://zod.dev/ERROR_HANDLING?id=zodparsedtype
    // result puede ser de 2 tipos:
    // { success: true, data: z.infer<typeof schema> } 
    // { success: false, error: issues[] }  


    // SI HAY ERRORES: devolvemos un objeto con las propiedades errors y values
    if (!result.success) {
        const { formErrors, fieldErrors } = z.flattenError(result.error);   // https://zod.dev/error-formatting?id=zflattenerror#zflattenerror
        // console.log('FieldErrors ', fieldErrors);
        return {
            errors: fieldErrors,
            values: data,
            message: "Por favor, corrige los errores del formulario."
        }
    }


    try {
        const deleteEmpleado = db.prepare(`DELETE empleados WHERE id = @id;`);
        const resultado = deleteEmpleado.run({ id });
        console.log(resultado)

    } catch (error) {
        console.log("Error:", error);
        return { type: 'error', message: error }
    }


    revalidatePath("/test")
    return {
        type: "success",
        message: "Empleado eliminado exitosamente.",
    }
}
