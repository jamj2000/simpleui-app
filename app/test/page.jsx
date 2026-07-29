import { getEmpleados } from "@/lib/data";
import { Suspense } from "react";
import TablaEmpleados from "./TablaEmpleados";
import { createEmpleado } from "@/lib/actions";
import { Button, CreateIcon, InputSelect, Modal, Submit } from "@/components/simpleui";
import { FormEmpleado } from "./FormEmpleado";
import Form from 'next/form'
import { FormRawEmpleado } from "./FormRawEmpleado";

export default async function Page({ searchParams }) {

    const { sort, direction } = await searchParams

    return (
        <div>
            <h1 className="text-4xl text-center">Lista de empleados</h1>

            <Form action="" className="mt-6 flex gap-4 justify-center items-center">
                <InputSelect
                    label="Ordenar"
                    name="sort"
                    values={[
                        ["nombre", sort == 'nombre'],
                        ["empresa", sort == 'empresa'],
                        ["cargo", sort == 'cargo'],
                    ]}
                />
                <InputSelect
                    label="Dirección"
                    name="direction"
                    values={[
                        ["asc", direction == "asc"],
                        ["desc", direction == "desc"]
                    ]}
                />
                <Submit>Consultar</Submit>
            </Form>

            <div className="p-4 md:p-8 mx-auto  max-w-300 overflow-auto border border-slate-300 shadow-2xl">

                <Modal trigger={<ButtonCreate />}>
                    <h2 className="text-xl font-bold mb-4 text-green-400">Nuevo Empleado</h2>

                    {/* <FormEmpleado action={createEmpleado} /> */}
                    <FormEmpleado action={createEmpleado} />
                </Modal>

                <Suspense fallback="Cargando datos...">
                    <LoadData searchParams={searchParams} />
                </Suspense>
            </div>
            {
                <div className="text-center py-8">{
                    new Date().toLocaleDateString('es-ES', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            }
        </div >
    )
}



async function LoadData({ searchParams }) {
    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados({ sort, direction, page, limit })

    return <TablaEmpleados empleados={empleados} />
}


const ButtonCreate = () => (
    <Button>
        <CreateIcon className={"text-green-600 dark:text-green-300"} />
    </Button>
)
