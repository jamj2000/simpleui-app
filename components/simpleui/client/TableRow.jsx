'use client'

import Link from "next/link"


export const TableRow = ({ columns, row, i, children }) => {
    return (
        <tr key={row.id} className="odd:bg-slate-100 dark:odd:bg-slate-700 h-12">

            <td className={`${classTD} text-slate-400 text-right pr-4`}>{i + 1}</td>

            {columns.map(({ name: colName }) => (
                <td key={row.id + colName + row[colName]} className={`${classTD}`}>
                    <Link href={`/test/${row.id}`}>{row[colName]}</Link>
                </td>
            ))}
            <td>{children}</td>
        </tr>
    )
}

