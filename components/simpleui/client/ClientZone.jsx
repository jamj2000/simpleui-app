'use client'

import { toast } from "sonner"
import { Form } from "./Form"
import { Table } from "./Table"
import { Button } from "../server/Button"
import { Submit } from "../server/Submit"

const components = [
    Button,
    Submit,
    Form,
    Table,
]



export function ClientZone({ component }) {

    if (component == 'Button') return (
        <Button onClick={() => alert("Mensaje de alerta")}>Botón</Button>
    )


    if (component == 'Submit') return (
        <Submit formAction={async () => { }}>Submit</Submit>
    )


    if (component == 'Form') return (
        < Form
            action={async () => {
                await new Promise(resolve => setTimeout(resolve, 1000))
                toast.info("Acción desactivada.")
            }
            }
            data={{ nombre: "Ana", empresa: "Junta Andalucía" }}
            className="border border-slate-100 shadow-lg rounded-md p-8 md:w-3/4 mx-auto"
            fields={
                [
                    {
                        name: "image",
                        component: "InputImage",
                        className: "self-end"
                    },
                    {
                        name: "nombre",
                        label: "Introduzca nombre:",
                    },
                    {
                        name: "empresa",
                        label: "Introduzca empresa:",
                    },
                    {
                        name: "perfil",
                        label: "Perfil laboral:",
                        component: "InputGroup",
                        options: [
                            // [label, value, checked]
                            ["Conserje", "conserje", false],
                            ["Administrativo", "administrativo", true],
                            ["Profesor", "profesor", true],
                            ["Alumno", "alumno", false],
                        ]
                    },
                    {
                        name: "hobbies",
                        label: "Hobbies:",
                        component: "InputGroup",
                        multiple: true,
                        options: [
                            // [label, value, checked]
                            ["Lectura", "leer", false],
                            ["Cine", "cine", true],
                            ["Música", "musica", true],
                            ["Playa", "playa", false]
                        ]
                    },
                    {
                        labels: ["Guardar datos", "Guardando datos ..."],
                        component: "Submit",
                        // color: "green",
                        // round: "none"
                    }

                ]}
        />
    )


}

