'use client'

import { useState } from "react";


const classInput = `disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all`
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                     text-sm md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full
                    `

const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1).toLowerCase()



export const InputSelect = ({ label = "", name, values, disabled, multiple, className = "" }) => {

    const inicial = values.findLast(([_, checked]) => checked)?.[0] ?? values[0][0];
    const [selected, setSelected] = useState(inicial);

    const Head = ({ value, disabled }) => (
        <>
            <input
                type="text"
                defaultValue={value}
                readOnly
                disabled={disabled}
                className={`peer ${classInput}`}
            />
            <span className={`peer-disabled:text-zinc-400 ${classLabel}`}>{multiple ? "Seleccione opciones" : label}</span>
        </>

    )


    const Input = ({ value }) => (
        <label className="flex items-center gap-2 w-full">
            <input
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={value}
                checked={selected === value}
                onChange={() => setSelected(value)}
                disabled={disabled}
                className="hidden peer"
            />
            <span className="p-2 rounded-md peer-disabled:text-zinc-400 peer-checked:bg-slate-200 dark:peer-checked:bg-slate-700 w-full">{capitalize(value)}</span>
        </label>
    )


    return (
        <div className={`group relative ${className}`}>


            <div tabIndex={0} role="button" className={`cursor-pointer ${className}`}>
                <Head value={capitalize(selected)} disabled={disabled} />
            </div>

            <div tabIndex={-1} className="z-10 absolute top-full left-0 mt-1 w-full hidden focus-within:block group-focus-within:block rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl">
                {values.map(([value, _]) => <Input key={value} value={value} />)}
            </div>
        </div>

    )
}