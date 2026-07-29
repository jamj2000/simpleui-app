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
                    values: [
                        ["amateur", data?.nivel?.includes("amateur")],
                        ["junior", data?.nivel?.includes("junior")],
                        ["senior", data?.nivel?.includes("senior")],
                        ["veterano", data?.nivel?.includes("veterano")]
                    ]
                },
                {
                    name: "habilidades",
                    label: "Habilidades",
                    component: "InputSelect",
                    multiple: true,
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