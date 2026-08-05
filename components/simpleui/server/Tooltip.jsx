
// Usar dentro de componente que tenga className='group relative'
// export const Tooltip = ({ children }) => (
//     <div className="absolute top-0 right-left text-xs invisible group-hover:visible backdrop-blur-xs bg-olive-100 dark:bg-olive-800 p-4 border border-slate-300 dark:border-slate-600 shadow-lg rounded-md">
//         {children}
//     </div>
// )

export const Tooltip = ({ title = "", children, className = "" }) => (
    <div className={`group relative ${className}`}>
        {children}
        <div className="absolute top-2 left-2 text-xs invisible group-hover:visible backdrop-blur-xs bg-olive-100 dark:bg-olive-800 p-4 border border-slate-300 dark:border-slate-600 shadow-lg rounded-md">
            {title}
        </div>
    </div>
)
