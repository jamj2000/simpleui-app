'use cache'

export const Footer = async () => {
    return (
        <div className="text-center py-8">{
            new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </div>
    )
}