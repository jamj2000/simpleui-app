"use client"

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { InputNumber, InputText, Submit, BadgeError } from "../server";




const FormRaw = ({
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
                label="Nombre"
                name="nombre"
                defaultValue={state?.values?.nombre ?? data.nombre}
                disabled={disabled}
            />
            {state?.errors?.nombre && <BadgeError> {state.errors.nombre} </BadgeError>}

            <InputNumber
                label="Edad"
                name="edad"
                defaultValue={state?.values?.edad ?? data.edad}
                disabled={disabled}
            />
            {state?.errors?.edad && <BadgeError> {state.errors.edad} </BadgeError>}

            <Submit disabled={isPending}>
                {isPending ? "Guardando..." : "Guardar"}
            </Submit>
        </form>
    );
};


