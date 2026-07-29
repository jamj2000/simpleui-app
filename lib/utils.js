

export async function delay(seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000))
}


// Función auxiliar en JS para limpiar tildes, la 'ñ' y mayúsculas 
// Útil para generar columna nombre_sort al insertar registro en SQLite
export function getEsKey(text) {
    if (!text) return null;
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quita diacríticos (tildes)
        .toLowerCase();
}
