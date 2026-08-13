'use client'

export const CardEmpleado = ({ data, actions }) => (
    <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 flex flex-col shadow-md shadow-gray-600">

        <h3 className="text-xl font-bold">{data.nombre}</h3>

        <p className="text-stone-500 font-bold">{data.cargo}</p>

        <p className="text-stone-500">{data.empresa}</p>

        <p className="text-md">{data.nivel}</p>

        <p className="text-stone-500">{data.aficiones.join(', ')}</p>

        {actions &&
            <div className="flex gap-1 self-end" onClick={e => e.stopPropagation()}>
                {actions.map((Action, index) => (
                    <Action
                        key={index}
                        data={data}
                    />
                ))}
            </div>
        }
    </div>
)