import React from 'react'


// const fields = [
//     { name: "nombre", label: "Nombre", className: "text-2xl font-bold" },
//     { name: "empresa", label: "Empresa", className: "text-xl font-semibold" },
// ]


export const Card2 = ({ item = {}, fields = [], children }) => {
    return (
        <div key={item.id} className='flex flex-col border border-slate-200 rounded-md bg-amber-200'>
            {fields.map((field, i) => (
                <p key={field.name} className={field.className}>
                    {item[field.name]}
                </p>
            ))}
            {children}
        </div>
    )
}

