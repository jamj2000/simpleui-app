"use server"


export const disabledAction = async () => { return { type: "info", message: "Esta acción ha sido desactivada en producción" } }