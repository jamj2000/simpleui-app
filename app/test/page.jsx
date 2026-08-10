import { getEmpleados } from "@/lib/data";
import { Suspense } from "react";
import FilterForm from 'next/form'
import { CreateEmpleado, UpdateEmpleado, DeleteEmpleado, ViewEmpleado } from "./Actions";
import { InputHidden, InputSelect, List, Pagination, Submit, Table } from "@/components/simpleui";



export default function Page({ searchParams }) {

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl text-indigo-800 dark:text-indigo-300">Testing Table & List</h1>

            <Suspense fallback="Cargando datos...">
                <LoadData searchParams={searchParams} />
            </Suspense>

        </div >
    )
}






async function LoadData({ searchParams }) {

    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados({ sort, direction, page, limit })


    const Filtro = () => (
        <FilterForm action="" className="my-3 flex flex-col md:flex-row gap-4 justify-center items-center">
            <InputHidden name="page" value={page || 1} />
            <InputHidden name="limit" value={limit || 10} />
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
            <Submit className="px-8">Consultar</Submit>
        </FilterForm>

    )






    return (
        <div className="flex flex-col">

            <Filtro />

            <Pagination
                pages={+empleados.pages}
                page={+empleados.page}
                limit={+empleados.limit}
                sort={empleados.sort}
                direction={empleados.direction}
            />

            <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Table</h2>
            <Table
                data={empleados.data}
                columns={[
                    { name: "nombre", label: "Nombre" },
                    { name: "empresa", label: "Empresa" },
                    { name: "cargo", label: "Cargo" },
                ]}
                sort={sort}
                direction={direction}
                width={1400}
                actions={[
                    ViewEmpleado,
                    UpdateEmpleado,
                    DeleteEmpleado,
                ]}
            >
                <div className="flex justify-between">
                    <h2 className="text-2xl text-center inline">Empleados</h2>
                    <CreateEmpleado />
                </div>
            </Table >


            <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">List</h2>
            <List
                data={empleados.data}
                columns={[
                    { name: "nombre", label: "Nombre" },
                    { name: "empresa", label: "Empresa" },
                    { name: "cargo", label: "Cargo" },
                ]}
                sort={sort}
                direction={direction}
                // width={300}
                actions={[
                    ViewEmpleado,
                    UpdateEmpleado,
                    DeleteEmpleado,
                ]}
            >
                <div className="flex justify-end">
                    <CreateEmpleado />
                </div>
            </List >


        </div >
    )
}


async function Lista() {
    return (
        <>

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
        </>

    )
}




