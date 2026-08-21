'use client'

import { useState } from 'react'

export default function CodeBlock({ children }) {
    const [copied, setCopied] = useState(false)

    const copyCode = async () => {
        const code = children?.props?.children ?? ''

        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 1500)
        } catch (error) {
            console.error('Error al copiar:', error)
        }
    }

    return (
        <div className="relative my-2">
            <button
                type="button"
                onClick={copyCode}
                className="
                    absolute right-2 top-2 z-10
                    rounded-md
                    border border-slate-300 dark:border-slate-700
                    bg-white dark:bg-slate-800
                    px-3 py-1
                    text-xs
                    text-slate-600 dark:text-slate-300
                    hover:bg-slate-100 dark:hover:bg-slate-700
                    transition-colors
                "
            >
                {copied ? '✓ Copiado' : 'Copiar'}
            </button>

            <pre className="overflow-auto rounded-md border border-slate-200 bg-slate-50 p-4 pr-20 dark:border-slate-800 dark:bg-slate-950">
                {children}
            </pre>
        </div>
    )
}