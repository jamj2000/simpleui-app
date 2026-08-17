'use client'

import { CardEmpleado } from "@/app/test/CardEmpleado"
import { Switch } from "@/components/simpleui"
import { toggleEmpleadoActivo } from "@/lib/actions"
import { getEmpleado } from "@/lib/data"
import { useState } from "react"

export const InfoEmpleado = ({ empleado }) => {

    // const [e, setE] = useState(null)

    async function handleGetEmpleado() {
        const empleadoActualizado = await getEmpleado(empleado.id)
        // setE(empleadoActualizado)
    }


    return (

        <div className='flex justify-between mt-10'>

            <div>
                <p className='text-3xl'>{empleado.nombre}</p>
                <p>{empleado.empresa}</p>
                <p>{empleado.cargo}</p>
                <p>{empleado.nivel}</p>
                <p>{JSON.parse(empleado.aficiones).join(', ')}</p>

                <Switch
                    labelOn="Activo"
                    labelOff="Inactivo"
                    value={empleado.activo}
                    onChange={(value) => toggleEmpleadoActivo(empleado.id, value)}
                />

                {/* {e?.nombre}
                {e && JSON.parse(e?.aficiones).join(', ')}
                <pre>
                    {e && JSON.stringify(e, null, 2)}
                </pre> */}
                {/* <button
                    type="button"
                    onClick={handleGetEmpleado}
                >
                    Obtener datos
                </button> */}

            </div>

        </div >


    )
}