'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



export function MenuLink({
    href,
    children,
    className = "px-4 py-2 rounded-full",
    classHover = "hover:bg-slate-600 hover:text-white",
    classCheck = "bg-slate-700 text-white",
    classAcive = "active:bg-amber-700"
}) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`align-middle inline-flex gap-2 items-end justify-center 
                transition duration-300 
                ${pathname.endsWith(href) ? classCheck : ""} 
                ${classHover}
                ${classAcive}
                ${className}`}
        >

            {children}

        </Link>
    )
}
