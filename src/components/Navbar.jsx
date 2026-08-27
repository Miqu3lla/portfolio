import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { useInView } from 'react-intersection-observer';

const NavItems = ['Home', 'Tech Stack', 'Projects', 'Certifications'];

const labelToSectionId = {
    Home: 'home',
    'Tech Stack': 'tech-stack',
    Projects: 'projects',
    Certifications: 'projects',
};

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(
        () => localStorage.getItem('activeSection') || 'Home'
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // One useInView per real section
    const [homeRef, homeInView] = useInView({ rootMargin: '-40% 0px -55% 0px' });
    const [stackRef, stackInView] = useInView({ rootMargin: '-40% 0px -55% 0px' });
    const [projectsRef, projectsInView] = useInView({ rootMargin: '-40% 0px -55% 0px' });

    // Attach refs to actual DOM sections after mount
    useEffect(() => {
        const attach = (id, ref) => {
            const el = document.getElementById(id);
            if (el) ref(el);
        };
        attach('home', homeRef);
        attach('tech-stack', stackRef);
        attach('projects', projectsRef);
    }, [homeRef, stackRef, projectsRef]);

    // Scrollspy: update active section based on which is in view
    // Don't override Certifications if projects scrolls into view — user picked it
    useEffect(() => {
        if (homeInView) setActiveSection('Home');
    }, [homeInView]);

    useEffect(() => {
        if (stackInView) setActiveSection('Tech Stack');
    }, [stackInView]);

    useEffect(() => {
        if (projectsInView)
            setActiveSection((prev) => (prev === 'Certifications' ? prev : 'Projects'));
    }, [projectsInView]);

    // Persist active section
    useEffect(() => {
        localStorage.setItem('activeSection', activeSection);
    }, [activeSection]);

    // Restore scroll position on mount
    useEffect(() => {
        const saved = localStorage.getItem('activeSection');
        if (!saved) return;
        const sectionId = labelToSectionId[saved] ?? 'home';
        const element = document.getElementById(sectionId);
        if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    }, []);

    const handleNavClick = useCallback((label) => {
        setActiveSection(label);
        const targetId = labelToSectionId[label];
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }, []);

    const linkClass = (item) =>
        `cursor-pointer transition-colors duration-300 text-sm hover:backdrop-blur-xl hover:bg-surface-variant/50 px-2 rounded-t-sm pb-1 ${
            activeSection === item
                ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-primary-fixed-dim'
        }`;

    const mobileLinkClass = (item) =>
        `cursor-pointer transition-colors px-4 py-2 rounded ${
            activeSection === item
                ? 'bg-primary-fixed-dim/10 text-primary-fixed-dim border-l-2 border-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-variant/50'
        }`;

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_0_15px_rgba(0,219,233,0.1)] transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-4 max-w-[var(--spacing-container-max)] mx-auto">

                <div onClick={() => handleNavClick('Home')} className="text-2xl font-bold text-primary-fixed-dim tracking-tighter cursor-pointer">
                    Miqx.dev
                </div>

                <nav className="hidden md:flex gap-8 items-center">
                    {NavItems.map((item) => (
                        <a key={item} onClick={() => handleNavClick(item)} className={linkClass(item)}>
                            {item}
                        </a>
                    ))}
                </nav>

                <button className="hidden md:flex items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-2 rounded text-sm transition-all duration-300 box-glow-violet">
                <a href='public/resume.pdf' download={true}>
                    Resume
                </a>
                </button>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-primary-fixed-dim p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Icon icon="mdi:menu" className="text-3xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col py-4 px-[var(--spacing-margin-mobile)] gap-4">
                    {NavItems.map((item) => (
                        <a key={item} onClick={() => handleNavClick(item)} className={mobileLinkClass(item)}>
                            {item}
                        </a>
                    ))}
                    <button className="mt-4 flex justify-center items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-3 rounded text-sm transition-all duration-300 box-glow-violet w-full">
                        Resume
                    </button>
                </div>
            </div>
        </header>
    );
}