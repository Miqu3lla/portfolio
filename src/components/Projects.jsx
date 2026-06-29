import { Icon } from '@iconify/react';

export default function Projects({title, description, image, liveDemoLink, githubLink, stack = []}) {
    return (
        <div className="glass-panel rounded-xl overflow-hidden flex flex-col group relative w-full h-full">
            <div className="h-48 w-full bg-surface-container-high relative overflow-hidden border-b border-outline-variant/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/20 to-transparent mix-blend-overlay"></div>
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary-fixed-dim transition-colors">{title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {stack.map((tech) => (
                        <span key={tech} className="bg-primary-fixed-dim/10 text-primary-fixed-dim font-code-inline text-[12px] px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a href={liveDemoLink} target="_blank" rel="noreferrer" className="w-full">
                        <button className="w-full py-2 bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 hover:border-primary-fixed-dim hover:bg-primary-fixed-dim/20 text-primary-fixed-dim text-sm font-semibold transition-all rounded flex items-center justify-center gap-2 box-glow-cyan">
                            <Icon icon="mdi:open-in-new" className="text-lg" /> Live Demo
                        </button>
                    </a>
                    <a href={githubLink} target="_blank" rel="noreferrer" className="w-full">
                        <button className="w-full py-2 bg-transparent border border-outline-variant hover:border-on-surface text-on-surface hover:text-white text-sm font-semibold transition-all rounded flex items-center justify-center gap-2">
                            <Icon icon="mdi:github" className="text-lg" /> GitHub
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}