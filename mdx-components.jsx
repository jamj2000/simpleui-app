import Link from 'next/link';
import { highlight } from 'sugar-high';
import CodeBlock from '@/components/CodeBlock'

const components = {
    h1: (props) => (
        <h1 className="text-4xl text-indigo-800 dark:text-indigo-300" {...props} />
    ),
    h2: (props) => (
        <h2 className='text-3xl mb-4 mt-20 text-indigo-800 dark:text-indigo-300' {...props} />
    ),
    h3: (props) => (
        <h3 className="text-xl mb-4 mt-8 text-indigo-800 dark:text-indigo-300"  {...props} />
    ),
    ol: (props) => (
        <ol className="list-decimal list-inside" {...props} />
    ),
    ul: (props) => (
        <ul className="list-disc list-inside" {...props} />
    ),
    li: (props) => (
        <li className="pl-1" {...props} />
    ),
    em: (props) => (
        <em className="font-medium" {...props} />
    ),
    strong: (props) => (
        <strong className="font-bold" {...props} />
    ),
    a: ({ href, children, ...props }) => {
        const className =
            'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            );
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
            </a>
        );
    },
    pre: CodeBlock,
    code: ({ children, ...props }) => {
        const codeHTML = highlight(children);

        return <code dangerouslySetInnerHTML={{ __html: codeHTML }}   {...props} />


    },
    Table: ({ data }) => (
        <table>
            <thead>
                <tr>
                    {data.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    ),
    blockquote: (props) => (
        <blockquote
            className="mb-4 ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
            {...props}
        />
    ),


}

export function useMDXComponents() {
    return components
}