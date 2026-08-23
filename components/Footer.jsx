export const Footer = async () => {
    'use cache'
    return (
        <div className="text-center py-2 bg-neutral-500/50">{
            new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </div>
    )
}