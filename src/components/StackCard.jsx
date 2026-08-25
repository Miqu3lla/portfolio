import { Icon } from '@iconify/react';

export default function StackCard({ title, subtitle }) {
    // Map titles to appropriate icons if possible, or use a default
    const getIcon = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes('react')) return 'mdi:react';
        if (lower.includes('javascript') || lower === 'js') return 'mdi:language-javascript';
        if (lower.includes('html')) return 'mdi:language-html5';
        if (lower.includes('css')) return 'mdi:language-css3';
        if (lower.includes('tailwind')) return 'mdi:tailwind';
        if (lower.includes('node')) return 'mdi:nodejs';
        if (lower.includes('mongo')) return 'mdi:database';
        if (lower.includes('postgres')) return 'simple-icons:postgresql';
        if (lower.includes('redis')) return 'simple-icons:redis';
        if (lower.includes('vue')) return 'mdi:vuejs';
        if (lower.includes('express')) return 'mdi:server';
        if (lower.includes('git')) return 'mdi:git';
        return 'mdi:code-tags';
    };

    return (
        <div className="group glass-panel p-6 flex flex-col items-center justify-center gap-3 rounded-xl cursor-default transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary-fixed-dim hover:box-glow-cyan">
            <Icon icon={getIcon(title)} className="text-4xl text-primary-fixed-dim transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-glow-cyan" />
            <h2 className="text-lg font-semibold text-on-surface transition-colors duration-300 group-hover:text-primary-fixed-dim">{title}</h2>
            <p className="font-code-inline text-xs text-on-surface-variant uppercase text-center transition-colors duration-300 group-hover:text-on-surface">{subtitle}</p>
        </div>
    )
}