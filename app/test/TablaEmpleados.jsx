// TablaEmpleados.jsx
"use client";

import { useState } from "react";
import { Form as FormEmpleado } from "@/components/simpleui";
import { Modal } from "@/components/simpleui";
import { updateEmpleado } from "@/lib/actions";

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
        <table>
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
                                {/* MODAL EDITAR */}
                                <Modal
                                    trigger={
                                        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                            Editar
                                        </button>
                                    }
                                >
                                    <h2 className="text-xl font-bold mb-4">Editar Empleado</h2>

                                    <FormEmpleado
                                        data={empleado}
                                        action={updateEmpleado}
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
                                                props: {
                                                    radio: false,
                                                    values: [
                                                        ["leer", empleado.habilidades.includes("leer")],
                                                        ["cine", empleado.habilidades.includes("cine")],
                                                        ["música", empleado.habilidades.includes("música")],
                                                        ["deporte", empleado.habilidades.includes("deporte")]
                                                    ]
                                                },
                                            },
                                        ]}
                                    />
                                </Modal>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

