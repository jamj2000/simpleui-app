"use server"


export const noAction = async () => { return { type: "info", message: "Esta acción ha sido desactivada en producción" } }