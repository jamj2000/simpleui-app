'use client';

import { useEffect, useRef, useState } from 'react';

export default function MainMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={menuRef} className="relative w-full">
            {/* Botón hamburger / close */}
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="ml-auto block p-2 text-2xl md:hidden"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                {isOpen ? '×' : '☰'}
            </button>

            {/* Menú */}
            <div
                className={`
          ${isOpen ? 'flex' : 'hidden'}
w - full flex - col
md:flex md: flex - row md: items - center md: justify - end
    `}
            >
                {children}
            </div>
        </div>
    );
}

