

const Prop = ({ name, value, values }) => (
    <div className="mt-4">
        <span className="font-mono bg-slate-200 dark:bg-slate-700 rounded-md p-1 px-2">
            {name}
        </span>

        {value && <span className="font-mono"> por defecto <strong>{value}</strong></span>}

        <ul className="mt-2 list-inside list-disc">
            {values?.map((v, i) =>
                <li key={i} className="font-mono">{v}</li>
            )}
        </ul>
    </div>
)

export default Prop