import { Button, DeleteIcon, Modal, UpdateIcon } from '@/components/simpleui'
import { getEmpleadoById } from '@/lib/data'
import React, { Suspense } from 'react'
import { FormEmpleado } from '../FormEmpleado'
import { deleteEmpleado, updateEmpleado } from '@/lib/actions'

function page({ params }) {


    return (
        <>
            <h1 className='text-3xl'>Información de empleado</h1>
            <Suspense fallback="Cargando empleado...">
                <Empleado params={params} />
            </Suspense>
        </>
    )
}

export default page



const Empleado = async ({ params }) => {
    const { id } = await params

    const empleado = await getEmpleadoById(+id)

    return (
        <div>
            <div>{empleado.nombre}</div>
            <div>{empleado.empresa}</div>
            <div>{empleado.cargo}</div>

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
        </div>
    )

}




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


