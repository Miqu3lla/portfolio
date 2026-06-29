import { useState, useEffect} from 'react';
import { Icon } from '@iconify/react';

const NavItems = ['Home', 'Tech Stack', 'Projects', 'Certifications'];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(() => {
        const saved = localStorage.getItem('activeSection');
        return saved || 'Home';
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('activeSection');
        if (saved) {
            let sectionId = '';
            if (saved === 'Tech Stack') sectionId = 'tech-stack';
            else if (saved === 'Home') sectionId = 'home';
            else if (saved === 'Projects') sectionId = 'projects';
            else if (saved === 'Certifications') sectionId = 'projects'; // Certs are in the projects section
            
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        
        let targetId = '';
        if (sectionId === 'Tech Stack') targetId = 'tech-stack';
        else if (sectionId === 'Home') targetId = 'home';
        else if (sectionId === 'Projects' || sectionId === 'Certifications') targetId = 'projects';
        
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
        localStorage.setItem('activeSection', sectionId);
    }
    
    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_0_15px_rgba(0,219,233,0.1)] transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-4 max-w-[var(--spacing-container-max)] mx-auto">
                
                <div onClick={() => handleNavClick('Home')} className="text-2xl font-bold text-primary-fixed-dim tracking-tighter cursor-pointer">
                    Miqx.dev
                </div>
                
                <nav className="hidden md:flex gap-8 items-center">
                    {NavItems.map((item) => (
                        <a 
                            key={item} 
                            onClick={() => handleNavClick(item)} 
                            className={`cursor-pointer transition-colors duration-300 text-sm hover:backdrop-blur-xl hover:bg-surface-variant/50 px-2 rounded-t-sm pb-1 ${activeSection === item ? 'text-primary-fixed-dim border-b-2 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-primary-fixed-dim'}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                
                <button className="hidden md:flex items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-2 rounded text-sm transition-all duration-300 box-glow-violet">
                    Resume
                </button>
                
                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-primary-fixed-dim p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Icon icon="mdi:menu" className="text-3xl" />
                </button>
            </div>
            
            {/* Mobile Menu Content */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col py-4 px-[var(--spacing-margin-mobile)] gap-4">
                    {NavItems.map((item) => (
                        <a 
                            key={item} 
                            onClick={() => {handleNavClick(item); setIsMenuOpen(false);}} 
                            className={`cursor-pointer transition-colors px-4 py-2 rounded ${activeSection === item ? 'bg-primary-fixed-dim/10 text-primary-fixed-dim border-l-2 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-variant/50'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="mt-4 flex justify-center items-center gap-2 bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 px-6 py-3 rounded text-sm transition-all duration-300 box-glow-violet w-full">
                        Resume
                    </button>
                </div>
            </div>
        </header>
    )
}