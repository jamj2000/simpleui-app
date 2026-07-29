"use client"

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { InputText, InputSelect, Submit, Badge, InputGroup, InputSelect2, Space } from "@/components/simpleui";
import { useRouter } from "next/navigation";



export const FormRawEmpleado = ({
    action = async () => { },
    data = {},
    disabled = false,
    className = ""
}) => {
    const [state, formAction, isPending] = useActionState(action, {});
    const formRef = useRef(null);
    const router = useRouter()

    useEffect(() => {
        if (!state) return;

        if (state.message && state.type && toast[state.type]) {
            toast[state.type](state.message);
        }

        if (state.type === "success" || state.success) {
            formRef.current?.closest("dialog")?.close();
        }
    }, [state]);



    return (
        <form ref={formRef} action={formAction} className={className}>
            <input type="hidden" name="id" defaultValue={data.id} />


            {/* <InputText
                label="Nombre"
                name="nombre"
                defaultValue={state?.values?.nombre ?? data.nombre}
                disabled={disabled}
            />
            {state?.errors?.nombre && <Badge type="error"> {state.errors.nombre} </Badge>}

            <InputNumber
                label="Edad"
                name="edad"
                defaultValue={state?.values?.edad ?? data.edad}
                disabled={disabled}
            />
            {state?.errors?.edad && <Badge type="error"> {state.errors.edad} </Badge>} */}

            <InputText name="nombre" label="Nombre" value={state?.values?.nombre ?? data?.nombre} disabled={disabled} />
            {state?.errors?.nombre && <Badge type="error">{state.errors.nombre}</Badge>}

            <InputText name="empresa" label="Empresa" value={data?.empresa} disabled={disabled} />
            {state?.errors?.empresa && <Badge type="error">{state?.values?.empresa ?? state.errors.empresa}</Badge>}

            <InputText name="cargo" label="Cargo" value={data?.cargo} disabled={disabled} />
            {state?.errors?.curso && <Badge type="error">{state?.values?.empresa ?? state.errors.curso}</Badge>}

            {/* <InputGroup name="nivel" label="Nivel" disabled={disabled}
                values={[
                    ["amateur", data?.nivel?.includes("amateur")],
                    ["junior", data?.nivel?.includes("junior")],
                    ["senior", data?.nivel?.includes("senior")],
                    ["veterano", data?.nivel?.includes("veterano")]
                ]}
            /> */}

            <Space height={40} />
            <InputSelect name="nivel" label="Nivel"
                values={[
                    ["amateur", data?.nivel?.includes("amateur")],
                    ["junior", data?.nivel?.includes("junior")],
                    ["senior", data?.nivel?.includes("senior")],
                    ["veterano", data?.nivel?.includes("veterano")]
                ]}
            />
            {state?.errors?.nivel && <Badge type="error">{state.errors.nivel}</Badge>}
            <Space height={40} />

            <InputSelect name="habilidades" label="Habilidades" disabled={disabled}
                multiple={true}
                values={[
                    ["leer", data?.habilidades?.includes("leer")],
                    ["cine", data?.habilidades?.includes("cine")],
                    ["música", data?.habilidades?.includes("música")],
                    ["deporte", data?.habilidades?.includes("deporte")]
                ]}
            />
            {state?.errors?.habilidades && <Badge type="error">{state.errors.habilidades}</Badge>}


            <Submit disabled={isPending}>
                {isPending ? "Guardando..." : "Guardar"}
            </Submit>
        </form>
    );
};


