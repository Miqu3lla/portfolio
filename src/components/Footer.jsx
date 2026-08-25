import { Icon } from '@iconify/react'

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Projects', id: 'projects' },
]

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Miqu3lla', icon: 'mdi:github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-jaypee-722999383/', icon: 'mdi:linkedin' },
]

/**
 * Footer Component
 * Site-wide footer with brand blurb, section nav, and social links
 */
export default function Footer() {

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className='bg-surface-container-lowest w-full pt-16 pb-8 mt-24 border-t border-outline-variant/20 relative overflow-hidden'>
            {/* Ambient glow accent */}
            <div className='absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary-fixed-dim/5 blur-3xl rounded-full pointer-events-none'></div>

            <div className='max-w-[var(--spacing-container-max)] mx-auto w-full px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-outline-variant/20'>
                    {/* Brand */}
                    <div className='flex flex-col gap-3 text-center md:text-left items-center md:items-start'>
                        <span className='text-xl font-bold text-on-background'>
                            <span className='text-primary-fixed-dim text-glow-cyan'>&lt;</span> Miq <span className='text-primary-fixed-dim text-glow-cyan'>/&gt;</span>
                        </span>
                        <p className='text-sm text-on-surface-variant max-w-xs'>
                            Backend-focused Full Stack Developer building reliable, scalable web applications.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <span className='font-code-inline text-xs text-primary-fixed-dim uppercase tracking-wider'>Navigate</span>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className='text-sm text-on-surface-variant hover:text-primary-fixed-dim transition-colors'
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Connect */}
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <span className='font-code-inline text-xs text-primary-fixed-dim uppercase tracking-wider'>Connect</span>
                        <div className='flex gap-4'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={social.label}
                                    className='w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 text-on-surface-variant hover:text-primary-fixed-dim hover:border-primary-fixed-dim/50 transition-colors text-xl'
                                >
                                    <Icon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-8'>
                    <div className='font-code-inline text-xs text-on-surface-variant uppercase text-center md:text-left'>
                        © {new Date().getFullYear()} MIQ. ALL RIGHTS RESERVED.
                    </div>
                    <div className='flex items-center gap-2 font-code-inline text-xs text-on-surface-variant uppercase'>
                        <span className='w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse box-glow-cyan'></span>
                        Built with React &amp; Tailwind
                    </div>
                </div>
            </div>
        </footer>
    )
}
