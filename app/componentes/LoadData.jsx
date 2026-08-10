import { List, Pagination, Table } from "@/components/simpleui";
import { getEmpleados } from "@/lib/data";
import { CreateEmpleado, DeleteEmpleado, UpdateEmpleado, ViewEmpleado } from "./Actions";

export async function LoadData({ searchParams }) {

    const { sort, direction, page, limit } = await searchParams;
    const empleados = await getEmpleados()


    return (
        <div className="flex flex-col">

            <Pagination pages={+empleados.pages} page={+empleados.page} limit={+empleados.limit} />

            <h2 className="text-3xl text-indigo-800 dark:text-indigo-300 my-5">Table</h2>
            <Table
                data={empleados.data}
                columns={[
                    { name: "nombre", label: "Nombre" },
                    { name: "empresa", label: "Empresa" },
                    { name: "cargo", label: "Cargo" },
                ]}
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
