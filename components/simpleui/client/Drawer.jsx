// 'use client'

// import { cloneElement, useEffect, useState } from "react"

// export function Drawer({
//     trigger,
//     children,
//     className = "",
//     overlayClassName = "",
//     width = "w-80"
// }) {

//     const [open, setOpen] = useState(false)

//     useEffect(() => {

//         if (!open) return

//         const previousOverflow = document.body.style.overflow
//         document.body.style.overflow = "hidden"

//         const onKeyDown = (e) => {
//             if (e.key === "Escape") {
//                 setOpen(false)
//             }
//         }

//         document.addEventListener("keydown", onKeyDown)

//         return () => {
//             document.body.style.overflow = previousOverflow
//             document.removeEventListener("keydown", onKeyDown)
//         }

//     }, [open])

//     const triggerElement =
//         typeof trigger === "string"
//             ? (
//                 <button onClick={() => setOpen(true)}>
//                     {trigger}
//                 </button>
//             )
//             : cloneElement(trigger, {
//                 onClick: () => setOpen(true)
//             })

//     return (
//         <>
//             {triggerElement}

//             {open && (
//                 <div className="fixed inset-0 z-50">

//                     <div
//                         className={`absolute inset-0 bg-black/40 ${overlayClassName}`}
//                         onClick={() => setOpen(false)}
//                     />

//                     <aside
//                         className={`
//                             absolute
//                             left-0
//                             top-0
//                             h-full
//                             ${width}
//                             overflow-y-auto
//                             shadow-xl
//                             bg-slate-100 dark:bg-slate-800
//                             p-6
//                             ${className}
//                         `}
//                     >
//                         {children}
//                     </aside>

//                 </div>
//             )}
//         </>
//     )
// }


'use client'

import { cloneElement, useEffect, useState } from "react"

const positions = {
    left: {
        placement: "left-0 top-0 h-full",
        size: "w-80",
        open: "translate-x-0",
        closed: "-translate-x-full"
    },
    right: {
        placement: "right-0 top-0 h-full",
        size: "w-80",
        open: "translate-x-0",
        closed: "translate-x-full"
    },
    top: {
        placement: "top-0 left-0 w-full",
        size: "",
        open: "translate-y-0",
        closed: "-translate-y-full"
    },
    bottom: {
        placement: "bottom-0 left-0 w-full",
        size: "",
        open: "translate-y-0",
        closed: "translate-y-full"
    }
}



export function Drawer({
    trigger,
    children,
    className = "",
    overlayClassName = "",
    width = "w-80",
    position = "left",
    duration = 300
}) {

    const [open, setOpen] = useState(false)

    useEffect(() => {

        if (!open) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener("keydown", onKeyDown)
        }

    }, [open])

    const triggerElement =
        typeof trigger === "string"
            ? <button onClick={() => setOpen(true)}>  {trigger} </button>
            : cloneElement(trigger, { onClick: () => setOpen(true) })

    const size = position === "left" || position === "right"
        ? width
        : positions[position].size

    return (
        <>
            {triggerElement}

            <div
                className={`
                            fixed inset-0 z-50
                            transition-opacity duration-300
                            ${open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
                            `}
            >
                <div
                    style={{ transitionDuration: `${duration}ms` }}
                    className={`absolute inset-0 bg-black/40 ${overlayClassName}`}
                    onClick={() => setOpen(false)}
                />

                <aside
                    style={{ transitionDuration: `${duration}ms` }}
                    className={`
                                absolute
                                ${positions[position].placement}
                                ${size}
                                overflow-y-auto
                                shadow-xl
                                bg-slate-100 dark:bg-slate-800
                                p-6

                                transition-transform duration-300 ease-in-out

                                ${open ? positions[position].open : positions[position].closed}

                                ${className}
                                `}
                >
                    {children}
                </aside>
            </div>

        </>
    )
}