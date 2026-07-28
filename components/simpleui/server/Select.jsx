

export const Select = () => (
    <div>
        <label htmlFor="ciudad">Ciudad</label>
        <select
            id="ciudad"
            key={state.values?.ciudad}
            name="ciudad"
            defaultValue={state.values?.ciudad ?? ""}
            className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600"
        >
            <option value="">Selecione una ciudad</option>
            <option value="MADRID">Madrid</option>
            <option value="BARCELONA">Barcelona</option>
            <option value="VALENCIA">Valencia</option>
            <option value="SEVILLA">Sevilla</option>
        </select>
    </div>
)