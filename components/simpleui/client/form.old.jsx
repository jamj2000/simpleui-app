// Form.jsx
"use client"

import { useActionState, useEffect, useId, useRef } from "react";
import { toast } from "sonner";
import { InputNumber, InputText, Submit, BadgeError } from "../server";




export const Form = ({
    action = async () => { },
    data = {},
    disabled = false,
    className = ""
}) => {
    const [state, formAction, isPending] = useActionState(action, {});
    const formRef = useRef(null);
    // const formId = useId()

    useEffect(() => {
        toast[state?.type]?.(state.message);
        formRef.current?.closest("dialog")?.close();
        // document.getElementById(formId)?.closest("dialog")?.close();
    }, [state]);

    return (
        <form ref={formRef} action={formAction} className={className}>
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


