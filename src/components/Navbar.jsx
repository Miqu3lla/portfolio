import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useInView } from 'react-intersection-observer';

const NavItems = ['Home', 'Tech Stack', 'Projects', 'Certifications'];

// Real sections, in document order. The last one still in view wins the
// highlight, so a boundary resolves the same way scrolling up or down.
const Sections = [
    { id: 'home', label: 'Home' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
];

const labelToSectionId = {
    Home: 'home',
    'Tech Stack': 'tech-stack',
    Projects: 'projects',
    Certifications: 'projects',
};

// Only the middle band of the viewport counts as "current"
const spyOptions = { rootMargin: '-40% 0px -55% 0px' };

const prefersReducedMotion = () =>
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(
        () => localStorage.getItem('activeSection') || 'Home'
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const inViewIds = useRef(new Set());
    // A programmatic scroll (nav click) is in flight; ignore scrollspy updates
    // until it settles, otherwise the sections it crosses steal the highlight
    const isScrollingProgrammatically = useRef(false);
    const scrollLockTimeout = useRef(null);

    // Single scrollspy decision point, so the winner depends on position rather
    // than on which observer happened to fire last
    const handleInViewChange = useCallback((id, inView) => {
        if (inView) inViewIds.current.add(id);
        else inViewIds.current.delete(id);

        if (isScrollingProgrammatically.current) return;

        const winner = [...Sections].reverse().find((s) => inViewIds.current.has(s.id));
        if (!winner) return;

        setActiveSection((prev) =>
            // Projects/Certifications share a section id, so scrolling shouldn't
            // override the tab the user already picked
            winner.label === 'Projects' && prev === 'Certifications' ? prev : winner.label
        );
    }, []);

    const { ref: homeRef } = useInView({
        ...spyOptions,
        onChange: (inView) => handleInViewChange('home', inView),
    });
    const { ref: stackRef } = useInView({
        ...spyOptions,
        onChange: (inView) => handleInViewChange('tech-stack', inView),
    });
    const { ref: projectsRef } = useInView({
        ...spyOptions,
        onChange: (inView) => handleInViewChange('projects', inView),
    });

    // The sections live in Home.jsx, so attach the observer refs by id after mount
    useEffect(() => {
        const refs = [homeRef, stackRef, projectsRef];
        Sections.forEach((section, i) => {
            const el = document.getElementById(section.id);
            if (el) refs[i](el);
        });
        return () => refs.forEach((ref) => ref(null));
    }, [homeRef, stackRef, projectsRef]);

    // Keep the active section persisted whenever it changes (click or scroll)
    useEffect(() => {
        localStorage.setItem('activeSection', activeSection);
    }, [activeSection]);

    useEffect(() => () => clearTimeout(scrollLockTimeout.current), []);

    const handleNavClick = useCallback((label) => {
        setActiveSection(label);
        setIsMenuOpen(false);

        const element = document.getElementById(labelToSectionId[label]);
        if (!element) return;

        isScrollingProgrammatically.current = true;
        clearTimeout(scrollLockTimeout.current);
        element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        // Release the lock once the smooth scroll has had time to finish
        scrollLockTimeout.current = setTimeout(() => {
            isScrollingProgrammatically.current = false;
        }, 800);
    }, []);

    const linkClass = (item) =>
        `cursor-pointer transition-colors duration-300 text-sm hover:backdrop-blur-xl hover:bg-surface-variant/50 px-2 rounded-t-sm pb-1 ${
            activeSection === item
                ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-primary-fixed-dim'
        }`;

    const mobileLinkClass = (item) =>
        `cursor-pointer text-left transition-colors px-4 py-2 rounded ${
            activeSection === item
                ? 'bg-primary-fixed-dim/10 text-primary-fixed-dim border-l-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-variant/50'
        }`;

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_0_15px_rgba(0,219,233,0.1)] transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-4 max-w-[var(--spacing-container-max)] mx-auto">

                <button type="button" onClick={() => handleNavClick('Home')} className="text-2xl font-bold text-primary-fixed-dim tracking-tighter cursor-pointer">
                    Miqx.dev
                </button>

                <nav className="hidden md:flex gap-8 items-center">
                    {NavItems.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => handleNavClick(item)}
                            aria-current={activeSection === item ? 'true' : undefined}
                            className={linkClass(item)}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <a href="/resume.pdf" download className="hidden md:flex items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-2 rounded text-sm transition-all duration-300 box-glow-violet">
                    Resume
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="md:hidden text-primary-fixed-dim p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <Icon icon="mdi:menu" className="text-3xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                inert={!isMenuOpen}
                className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <div className="flex flex-col py-4 px-[var(--spacing-margin-mobile)] gap-4">
                    {NavItems.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => handleNavClick(item)}
                            aria-current={activeSection === item ? 'true' : undefined}
                            className={mobileLinkClass(item)}
                        >
                            {item}
                        </button>
                    ))}
                    <a href="/resume.pdf" download className="mt-4 flex justify-center items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-3 rounded text-sm transition-all duration-300 box-glow-violet w-full">
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
}
