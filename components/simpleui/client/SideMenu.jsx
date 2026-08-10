'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SideMenu() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-4">
            <nav className="flex flex-col gap-2">
                <MenuLink href="/">
                    Inicio
                </MenuLink>

                <MenuLink href="/componentes">
                    Componentes
                </MenuLink>

                <MenuLink href="/test">
                    Test
                </MenuLink>
            </nav>
        </aside>
    )
}

function MenuLink({
    href,
    children,
    classCheck = 'bg-slate-700 text-white'
}) {
    const pathname = usePathname()

    const isActive =
        href === '/'
            ? pathname === '/'
            : pathname.startsWith(href)

    return (
        <Link
            href={href}
            className={`
                flex items-center gap-3
                px-4 py-3
                rounded-lg
                transition duration-300
                hover:bg-slate-700
                ${isActive ? classCheck : ''}
            `}
        >
            {children}
        </Link>
    )
}
