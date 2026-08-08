'use client'   // <---- IMPORTANTE

import { Form, Button, CreateIcon, DeleteIcon, Modal, UpdateIcon, ViewIcon } from "@/components/simpleui";
import { createEmpleado, deleteEmpleado, updateEmpleado } from "@/lib/actions";



const fields = (data) => [
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
            // [label, value, checked]
            ["Amateur", "amateur", data?.nivel == 'amateur'],
            ["Junior", "junior", data?.nivel == 'junior'],
            ["Senior", "senior", data?.nivel == 'senior'],
            ["Veterano", "veterano", data?.nivel == 'veterano']
        ]
    },
    {
        name: "habilidades",
        label: "Habilidades",
        component: "InputSelect",
        multiple: true,
        options: [
            // [label, value, checked]
            ["Lectura", "leer", data?.habilidades?.includes("leer")],
            ["Cine", "cine", data?.habilidades?.includes("cine")],
            ["Música", "musica", data?.habilidades?.includes("musica")],
            ["Playa", "playa", data?.habilidades?.includes("playa")]
        ],
    },
]


const ButtonCreate = () => (
    <Button color="green">
        <CreateIcon className={"size-4 text-white"} />
    </Button>
)


const ButtonUpdate = () => (
    <Button color="amber">
        <UpdateIcon className={"size-4 text-white"} />
    </Button>
)

const ButtonDelete = () => (
    <Button color="red">
        <DeleteIcon className={"size-4 text-white"} />
    </Button>
)


const ButtonView = () => (
    <Button color="blue">
        <ViewIcon className={"size-4 text-white"} />
    </Button>
)



export const CreateEmpleado = () => (
    <Modal trigger={<ButtonCreate />} className="my-1">
        <h2 className="text-xl font-bold mb-4 text-green-400">Nuevo Empleado</h2>

        <Form
            action={createEmpleado}
            fields={fields()}
        />

    </Modal>
)


export const UpdateEmpleado = ({ data = {} }) => (
    <Modal trigger={<ButtonUpdate />}>
        <h2 className="text-xl font-bold mb-4 text-amber-400">Modificar Empleado</h2>

        <Form
            data={data}
            action={updateEmpleado}
            fields={fields(data)}
        />

    </Modal>
)




export const DeleteEmpleado = ({ data = {} }) => (
    <Modal trigger={<ButtonDelete />}>
        <h2 className="text-xl font-bold mb-4 text-red-400">Eliminar Empleado</h2>

        <Form
            data={data}
            action={deleteEmpleado}
            fields={fields(data)}
            disabled />

    </Modal>
)


export const ViewEmpleado = ({ data = {} }) => (
    <Modal trigger={<ButtonView />}>
        <h2 className="text-xl font-bold mb-4 text-blue-400">Ver Empleado</h2>

        <Form
            data={data}
            action={async () => ({ type: "success", message: "Hasta la próxima" })}
            fields={fields(data)}
            disabled />

    </Modal>
)