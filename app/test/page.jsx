// page.jsx (Server Component)

import { getEmpleados } from "@/lib/data";
import { Suspense } from "react";
import TablaEmpleados from "./TablaEmpleados";

export default async function Page({ searchParams }) {

    return (
        <Suspense fallback="Cargando datos...">
            <LoadData searchParams={searchParams} />
        </Suspense>
    )
}



async function LoadData({ searchParams }) {
    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados({ sort, direction, page, limit })

    return <TablaEmpleados empleados={empleados} />
}