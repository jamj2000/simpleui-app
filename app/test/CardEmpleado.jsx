'use client'

export const CardEmpleado = ({ data, actions }) => (
    <div className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 flex flex-col shadow-md shadow-gray-600">
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold">{data.nombre}</h3>
            <p className="text-stone-500 font-bold">{data.cargo}</p>
            <p className="text-stone-500">{data.empresa}</p>
        </div>

        <div className="flex-1 text-center md:text-left">
            <p className="text-md">{data.nivel}</p>
        </div>

        <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">
                <p className="text-stone-500">{data.aficiones.join(', ')}</p>
            </div>

        </div>

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