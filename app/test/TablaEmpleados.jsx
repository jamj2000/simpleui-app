// TablaEmpleados.jsx
"use client";

import { useState } from "react";
import { Button, DeleteIcon, Form, UpdateIcon } from "@/components/simpleui";
import { Modal } from "@/components/simpleui";
import { deleteEmpleado, updateEmpleado } from "@/lib/actions";

export default function TablaEmpleados({ empleados }) {
    const [orden, setOrden] = useState({
        columna: "nombre",
        direccion: "asc",
    });

    // Protección si la data aún no llega
    const listaOriginal = empleados?.data || [];

    // Ordenamiento seguro (React Compiler se encarga de memorizarlo)
    const empleadosOrdenados = [...listaOriginal].sort((a, b) => {
        const valorA = a[orden.columna] ?? "";
        const valorB = b[orden.columna] ?? "";

        let resultado = 0;
        if (typeof valorA === "string" && typeof valorB === "string") {
            resultado = valorA.localeCompare(valorB, undefined, { sensitivity: "base" });
        } else {
            resultado = valorA > valorB ? 1 : valorA < valorB ? -1 : 0;
        }

        return orden.direccion === "asc" ? resultado : -resultado;
    });

    function ordenar(columna) {
        setOrden(actual => ({
            columna,
            direccion:
                actual.columna === columna && actual.direccion === "asc"
                    ? "desc"
                    : "asc",
        }));
    }

    if (!empleados?.data) return <p>Cargando empleados...</p>;

    return (
        <table className="min-w-200">
            <thead>
                <tr>
                    <th onClick={() => ordenar("nombre")} style={{ cursor: "pointer" }}>
                        Nombre
                        {orden.columna === "nombre" && (orden.direccion === "asc" ? " ▲" : " ▼")}
                    </th>
                    <th onClick={() => ordenar("empresa")} style={{ cursor: "pointer" }}>
                        Empresa
                        {orden.columna === "empresa" && (orden.direccion === "asc" ? " ▲" : " ▼")}
                    </th>
                    <th onClick={() => ordenar("cargo")} style={{ cursor: "pointer" }}>
                        Cargo
                        {orden.columna === "cargo" && (orden.direccion === "asc" ? " ▲" : " ▼")}
                    </th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {empleadosOrdenados.map(empleado => (
                    <tr key={empleado.id}>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.empresa}</td>
                        <td>{empleado.cargo}</td>
                        <td>
                            <div className="flex gap-2">
                                <Modal trigger={<ButtonUpdate />} >

                                    <h2 className="text-xl font-bold mb-4 text-blue-400">Editar Empleado</h2>
                                    <FormEmpleado data={empleado} action={updateEmpleado} />

                                </Modal>
                                <Modal trigger={<ButtonDelete />} >

                                    <h2 className="text-xl font-bold mb-4 text-red-400">Eliminar Empleado</h2>
                                    <FormEmpleado data={empleado} action={deleteEmpleado} disabled />

                                </Modal>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const ButtonUpdate = () => (
    <Button>
        <UpdateIcon className={"text-indigo-700 dark:text-indigo-300"} />
    </Button>
)

const ButtonDelete = () => (
    <Button>
        <DeleteIcon className={"text-red-700 dark:text-red-300"} />
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
                    ["leer", data.habilidades.includes("leer")],
                    ["cine", data.habilidades.includes("cine")],
                    ["música", data.habilidades.includes("música")],
                    ["deporte", data.habilidades.includes("deporte")]
                ]

            },
        ]}
    />
)