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
        if (lower.includes('vue')) return 'mdi:vuejs';
        if (lower.includes('express')) return 'mdi:server';
        if (lower.includes('git')) return 'mdi:git';
        return 'mdi:code-tags';
    };

    return (
        <div className="glass-panel border-none p-6 flex flex-col items-center justify-center gap-3 hover:border-primary-fixed-dim hover:box-glow-cyan transition-all cursor-default rounded-xl">
            <Icon icon={getIcon(title)} className="text-4xl text-primary-fixed-dim" />
            <h2 className="text-lg font-semibold text-on-surface">{title}</h2>
            <p className="font-code-inline text-xs text-on-surface-variant uppercase text-center">{subtitle}</p>
        </div>
    )
}