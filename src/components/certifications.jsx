import { Icon } from '@iconify/react';

function CertificationCard({ image, title, description, link }) {
    return (
        <div className="glass-panel rounded-xl overflow-hidden flex flex-col group relative w-full h-full">
            <div className="h-48 w-full bg-surface-container-high relative overflow-hidden border-b border-outline-variant/30">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/30 to-transparent mix-blend-overlay"></div>
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-secondary-fixed transition-colors">{title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 flex-grow">{description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a href={link} target='_blank' rel='noopener noreferrer' className="w-full">
                        <button className="w-full py-2 bg-transparent border border-outline-variant hover:border-secondary-fixed text-on-surface hover:text-secondary-fixed text-sm font-semibold transition-all rounded flex items-center justify-center gap-2">
                            <Icon icon='mdi:certificate' className="text-lg" /> View Certificate
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Certifications() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-background text-on-background'>
            <h1 className='text-4xl font-bold'>Certifications Page - Coming Soon!</h1>
        </div>
    );
}

export { CertificationCard };