'use client'

import { DeleteEmpleado, UpdateEmpleado } from "@/components/Actions"
import { Switch, Toggle } from "@/components/simpleui"
import { toggleEmpleadoActivo } from "@/lib/actions"
import { UserRoundX, UserRoundPlus } from 'lucide-react'




export const InfoEmpleado = ({ empleado }) => {
    return (

        <div className='flex flex-col gap-2'>

            <div className='flex gap-2 self-end'>
                <UpdateEmpleado data={empleado} />
                <DeleteEmpleado data={empleado} />
            </div>

            <div className="flex flex-col gap-2">
                <p className='text-3xl'>{empleado.nombre}</p>
                <p>{empleado.empresa}</p>
                <p>{empleado.cargo}</p>
                <p>{empleado.nivel}</p>
                <p>{JSON.parse(empleado.aficiones).join(', ')}</p>

                {process.env.NODE_ENV != 'production' &&
                    // <Switch
                    //     labelOn="Activo"
                    //     labelOff="Inactivo"
                    //     value={empleado.activo}
                    //     onChange={(value) => toggleEmpleadoActivo(empleado.id, value)}
                    // />
                    <Toggle
                        iconOn={UserRoundPlus}
                        iconOff={UserRoundX}
                        value={empleado.activo}
                        onChange={(value) => toggleEmpleadoActivo(empleado.id, value)}
                    />
                }

            </div>

        </div >


    )
}