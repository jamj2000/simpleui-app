// page.jsx (Server Component)

import { getEmpleados } from "@/lib/data";
import { Suspense } from "react";
import TablaEmpleados from "./TablaEmpleados";
import { createEmpleado } from "@/lib/actions";
import { Button, CreateIcon, Form, Modal, UpdateIcon } from "@/components/simpleui";

export default async function Page({ searchParams }) {

    return (
        <div>
            <h1 className="text-4xl text-center">Lista de empleados</h1>
            <div className="p-4 md:p-8 mx-auto  max-w-300 overflow-auto border border-slate-300 shadow-2xl">

                <Modal trigger={<ButtonCreate />}>
                    <h2 className="text-xl font-bold mb-4">Nuevo Empleado</h2>

                    <FormEmpleado action={createEmpleado} />
                </Modal>

                <Suspense fallback="Cargando datos...">
                    <LoadData searchParams={searchParams} />
                </Suspense>
            </div>
            {<div className="text-center py-8">{
                new Date().toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>}
        </div>
    )
}



async function LoadData({ searchParams }) {
    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados({ sort, direction, page, limit })

    return <TablaEmpleados empleados={empleados} />
}


const ButtonCreate = () => (
    <Button>
        <CreateIcon className={"text-green-700 dark:text-green-300"} />
    </Button>
)

const FormEmpleado = ({ action, data, disabled }) => (
    <Form
        data={data}
        action={action}
        disabled={disabled}
        fields={[
            {
                name: "nombre",
                label: "Nombre",
                component: "InputText"
            },
            {
                name: "empresa",
                label: "Empresa",
                component: "InputText"
            },

            {
                name: "cargo",
                label: "Cargo",
                component: "InputText"
            },
            {
                name: "habilidades",
                label: "Habilidades",
                component: "InputGroup",
                radio: false,
                values: [
                    ["leer", data?.habilidades?.includes("leer")],
                    ["cine", data?.habilidades?.includes("cine")],
                    ["música", data?.habilidades?.includes("música")],
                    ["deporte", data?.habilidades?.includes("deporte")]
                ]

            },
        ]}
    />
)