"use client";

import { useEffect, useState } from "react";



const classTD = "px-2"


export function List({
    data = [],
    columns = [],
    sort = "nombre",
    direction = "asc",
    width = 300,
    actions,
    children,
}) {
    const [orden, setOrden] = useState({
        columna: sort,
        direccion: direction,
    });

    useEffect(() => {
        setOrden({
            columna: sort,
            direccion: direction,
        })
    }, [sort, direction])

    // Protección si la data aún no llega
    const originalData = data ?? [];

    // Ordenamiento seguro (React Compiler se encarga de memorizarlo)
    const orderedData = [...originalData].sort((a, b) => {
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

    if (!data) return <p>Cargando datos...</p>;

    return (
        <div className="my-4 container mx-auto">
            {children}

            {orderedData.map((item) => (
                <div key={item.id} className="not-md:rounded-lg not-md:shadow-md not-md:my-2 py-1 px-4 flex flex-col md:flex-row items-center gap-4 even:bg-indigo-100 odd:bg-slate-100">
                    {/* <img
                        src={item.foto || DEFAULT_PIZZA_IMAGE}
                        alt={item.nombre}
                        className="size-16 object-cover rounded-md"
                    /> */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold">{item.nombre}</h3>
                        <p className="text-stone-800">{item.cargo}</p>
                        <h3 className="text-stone-500">{item.empresa}</h3>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <p className="text-md">{item.nivel}</p>
                    </div>

                    <div className="flex items-center gap-4">


                        <div className="flex items-center gap-2">
                            <p className="text-stone-500">{item.habilidades.join(', ')}</p>
                        </div>

                    </div>

                    {actions &&
                        <div className="flex gap-1">
                            {actions.map((Action, index) => (
                                <Action
                                    key={index}
                                    data={item}
                                />
                            ))}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}



