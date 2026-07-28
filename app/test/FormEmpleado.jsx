'use client'

import { Form } from "@/components/simpleui"
import { noAction } from "./noAction"


export const FormEmpleado = ({ action, data, disabled }) => {

    const modifiedAction = process.env.NODE_ENV == 'production'
        ? noAction
        : action

    return (
        <Form
            data={data}
            action={modifiedAction}
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
                        ["leer", data?.habilidades?.includes("leer")],
                        ["cine", data?.habilidades?.includes("cine")],
                        ["música", data?.habilidades?.includes("música")],
                        ["deporte", data?.habilidades?.includes("deporte")]
                    ]

                },
            ]}
        />
    )
}