

export const Card = ({ item = {}, fields = [], children }) => {
    return (
        <div key={item.id} className='flex flex-col border border-slate-200 rounded-md'>
            {fields.map((field, i) => (
                <p key={field.name} className={field.className}>
                    {item[field.name]}
                </p>
            ))}
            {children}
        </div>
    )
}

