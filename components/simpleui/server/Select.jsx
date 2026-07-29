

const classGroup = `relative @container gap-2 p-5 pt-10 rounded-md shadow-sm 
                    text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100
                    `
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                     text-sm md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full
                    `



export const Select = ({ label, name, values = [], disabled, multiple }) => {

    const defaultValue = multiple
        ? values.filter(([_, selected]) => selected).map(([value, _]) => value)
        : values.findLast(([, checked]) => checked)?.[0] ?? "" // El ?.[0] evita un error si no hay ningún elemento marcado


    return (
        <fieldset className={classGroup} key={values.toString()}>
            <legend className={`${classLabel} ${disabled ? "text-zinc-400" : ""}`}>{label}</legend>
            {/* <div className="relative"> */}
            <select
                // key={defaultValue.toString()}
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                multiple={multiple}
                // className="w-full px-3 py-2 rounded-md border borders-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600"
                className="w-full px-3 py-2 pr-10 rounded-lg border border-slate-300 bg-white text-slate-700 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600"
            >
                <option value="">Selecione una opción</option>
                {values?.map((value) =>
                    <option key={value} value={value} className="text-lg  text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {value}
                    </option>
                )}

            </select>
        </fieldset >
    )
}