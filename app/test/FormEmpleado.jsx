'use client'

import { Form } from "@/components/simpleui"
import { disabledAction } from "./action"


export const FormEmpleado = ({ action, data, disabled }) => {

    const modifiedAction = process.env.NODE_ENV == 'production'
        ? disabledAction
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
                    name: "nivel",
                    label: "Nivel",
                    component: "InputSelect",
                    options: [
                        // [label, name, checked]
                        ["Amateur", "amateur", data?.nivel?.includes("amateur")],
                        ["Junior", "junior", data?.nivel?.includes("junior")],
                        ["Senior", "senior", data?.nivel?.includes("senior")],
                        ["Veterano", "veterano", data?.nivel?.includes("veterano")]
                    ]
                },
                {
                    name: "habilidades",
                    label: "Habilidades",
                    component: "InputSelect",
                    multiple: true,
                    options: [
                        // [label, name, checked]
                        ["Lectura", "leer", data?.habilidades?.includes("leer")],
                        ["Cine", "cine", data?.habilidades?.includes("cine")],
                        ["Música", "musica", data?.habilidades?.includes("música")],
                        ["Playa", "playa", data?.habilidades?.includes("deporte")]
                    ],
                },
            ]}
        />
    )
}