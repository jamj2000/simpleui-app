import { getEmpleados } from "@/lib/data";
import { Suspense } from "react";
import TablaEmpleados, { TableEmpleados } from "./TableEmpleados";
import { createEmpleado, deleteEmpleado, updateEmpleado } from "@/lib/actions";
import { Button, Card, Card2, CreateIcon, DeleteIcon, Form, InputSelect, List, List2, Modal, Pagination, Submit, Table, TableRow, UpdateIcon } from "@/components/simpleui";
import { FormEmpleado } from "./FormEmpleado";
import FilterForm from 'next/form'



export const prefetch = 'partial'


export default function Page({ searchParams }) {

    // const { sort, direction } = await searchParams

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl text-center inline">Lista de empleados</h1>




            <Suspense fallback="...">
                <Formulario searchParams={searchParams} />
            </Suspense>



            <Suspense fallback="Cargando datos...">
                <Tabla searchParams={searchParams} />
            </Suspense>
            <Footer />
        </div >
    )
}



async function Formulario({ searchParams }) {
    const { sort, direction, page, limit } = await searchParams;
    return (
        <FilterForm action="" className="my-3 flex gap-4 justify-center items-center">
            <InputSelect
                label="Ordenar"
                name="sort"
                options={[
                    ["Nombre", 'nombre', sort == 'nombre'],
                    ["Empresa", 'empresa', sort == 'empresa'],
                    ["Cargo", 'cargo', sort == 'cargo'],
                ]}
            />
            <InputSelect
                label="Dirección"
                name="direction"
                options={[
                    ["Ascendente", "asc", direction == "asc"],
                    ["Descendente", "desc", direction == "desc"]
                ]}
            />
            <Submit>Consultar</Submit>
        </FilterForm>

    )
}



async function Tabla({ searchParams }) {
    'use cache'
    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados({ sort, direction, page, limit })

    const columns = [
        { name: "nombre", label: "Nombre" },
        { name: "empresa", label: "Empresa" },
        { name: "cargo", label: "Cargo" },
    ]




    return (
        <div className="flex flex-col">

            <Modal trigger={<ButtonCreate />} className="self-end">
                <h2 className="text-xl font-bold mb-4 text-green-400">Nuevo Empleado</h2>
                {/* <FormEmpleado action={createEmpleado} /> */}

                <Form
                    action={createEmpleado}
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
                            name: "nivel",
                            label: "Nivel",
                            component: "InputSelect",
                            options: [
                                // [label, name, checked]
                                ["Amateur", "amateur", false],
                                ["Junior", "junior", false],
                                ["Senior", "senior", false],
                                ["Veterano", "veterano", false]
                            ]
                        },
                        {
                            name: "habilidades",
                            label: "Habilidades",
                            component: "InputSelect",
                            multiple: true,
                            options: [
                                // [label, name, checked]
                                ["Lectura", "leer", false],
                                ["Cine", "cine", false],
                                ["Música", "musica", false],
                                ["Playa", "playa", false]
                            ],
                        },
                    ]}
                />

            </Modal>


            {/* <List data={empleados.data} card={Card} fields={[
                { name: "nombre", label: "Nombre", className: "text-2xl font-bold" },
                { name: "empresa", label: "Empresa", className: "text-xl font-semibold" },
                { name: "cargo", label: "Cargo", className: "text-xl font-semibold" },
            ]} /> */}

            {/* <List2
                data={empleados.data}
                renderCard={(item) =>
                    <Card
                        key={item.id}
                        item={item}
                        fields={[
                            { name: "nombre", label: "Nombre", className: "text-2xl font-bold" },
                            { name: "empresa", label: "Empresa", className: "text-xl font-semibold" },
                            { name: "cargo", label: "Cargo", className: "text-xl font-semibold" },
                        ]}
                    >
                        <Modal trigger={<ButtonUpdate />} >

                            <h2 className="text-xl font-bold mb-4 text-blue-400">Editar Empleado</h2>
                            <FormEmpleado data={item} action={updateEmpleado} />

                        </Modal>
                    </Card>
                }
            /> */}

            <Pagination pages={+empleados.pages} page={+empleados.page} limit={+empleados.limit} />
            <Table
                data={empleados.data}
                columns={columns}
                sort={sort}
                direction={direction}
                className=""
            // renderRow={(item, i) =>
            //     <TableRow
            //         key={item.id}
            //         item={item}
            //         i={i}
            //         columns={columns}
            //     >
            //         <Modal trigger={<ButtonUpdate />} >

            //         <h2 className="text-xl font-bold mb-4 text-blue-400">Editar Empleado</h2>
            //         <FormEmpleado data={item} action={updateEmpleado} />

            //     </Modal>
            //     </TableRow>
            // }
            >
                <div className="flex gap-2">
                    <Modal trigger={<ButtonUpdate />} >

                        <h2 className="text-xl font-bold mb-4 text-blue-400">Editar Empleado</h2>
                        <FormEmpleado action={updateEmpleado} />

                    </Modal>
                    <Modal trigger={<ButtonDelete />} >

                        <h2 className="text-xl font-bold mb-4 text-red-400">Eliminar Empleado</h2>
                        <FormEmpleado action={deleteEmpleado} disabled />

                    </Modal>
                </div>
            </Table>
        </div>
    )
}





const ButtonCreate = () => (
    <Button>
        <CreateIcon className={"size-4 text-green-600 dark:text-green-300"} />
    </Button>
)


const ButtonUpdate = () => (
    <Button>
        <UpdateIcon className={"size-4 text-indigo-700 dark:text-indigo-300"} />
    </Button>
)

const ButtonDelete = () => (
    <Button>
        <DeleteIcon className={"size-4 text-red-700 dark:text-red-300"} />
    </Button>
)






const Footer = async () => {
    'use cache'

    return (
        <div className="text-center py-8">{
            new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </div>
    )
}