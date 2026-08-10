"use client"

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { InputText, InputSelect, Submit, Badge, InputGroup, Space } from "@/components/simpleui";
import { useRouter } from "next/navigation";



export const FormRawEmpleado = ({
    action = async () => { },
    data = {},
    disabled = false,
    className = ""
}) => {
    const [state, formAction, isPending] = useActionState(action, {});
    const formRef = useRef(null);

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


            <InputText
                name="nombre"
                label="Nombre"
                value={state?.values?.nombre ?? data?.nombre}
                disabled={disabled}
            />
            {state?.errors?.nombre && <Badge type="error">{state.errors.nombre}</Badge>}


            <InputText
                name="empresa"
                label="Empresa"
                value={data?.empresa}
                disabled={disabled}
            />
            {state?.errors?.empresa && <Badge type="error">{state?.values?.empresa ?? state.errors.empresa}</Badge>}


            <InputText
                name="cargo"
                label="Cargo"
                value={data?.cargo}
                disabled={disabled}
            />
            {state?.errors?.curso && <Badge type="error">{state?.values?.empresa ?? state.errors.curso}</Badge>}


            {/* <InputGroup
                name="nivel"
                label="Nivel"
                disabled={disabled}
                options={[
                    ["Amateur", "amateur", data?.nivel?.includes("amateur")],
                    ["Junior", "junior", data?.nivel?.includes("junior")],
                    ["Senior", "senior", data?.nivel?.includes("senior")],
                    ["Veterano", "veterano", data?.nivel?.includes("veterano")]
                ]}
            /> 
            {state?.errors?.curso && <Badge type="error">{state?.values?.empresa ?? state.errors.curso}</Badge>}
            */}

            <Space height={40} />

            <InputSelect name="nivel" label="Nivel"
                options={[
                    ["Amateur", "amateur", data?.nivel?.includes("amateur")],
                    ["Junior", "junior", data?.nivel?.includes("junior")],
                    ["Senior", "senior", data?.nivel?.includes("senior")],
                    ["Veterano", "veterano", data?.nivel?.includes("veterano")]
                ]}
            />
            {state?.errors?.nivel && <Badge type="error">{state.errors.nivel}</Badge>}

            <Space height={40} />

            <InputSelect name="aficiones" label="Aficiones" disabled={disabled}
                multiple={true}
                options={[
                    ["Lectura", "leer", data?.aficiones?.includes("leer")],
                    ["Cine", "cine", data?.aficiones?.includes("cine")],
                    ["Música", "música", data?.aficiones?.includes("música")],
                    ["Deporte", "deporte", data?.aficiones?.includes("deporte")]
                ]}
            />
            {state?.errors?.aficiones && <Badge type="error">{state.errors.aficiones}</Badge>}


            <Submit disabled={isPending}>
                {isPending ? "Guardando..." : "Guardar"}
            </Submit>
        </form>
    );
};


