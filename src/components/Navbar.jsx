import { useState, useEffect} from 'react';

// Navigation items array - add or remove items here
const NavItems = ['Home', 'Tech Stack', 'Projects', 'About']

/**
 * Navbar Component
 * Fixed navigation bar with smooth scrolling and active section highlighting
 * Persists active section in localStorage for page refreshes
 */
export default function Navbar() {

    // Initialize active section from localStorage or default to 'Home'
    const [activeSection, setActiveSection] = useState(() => {
        const saved = localStorage.getItem('activeSection');
        return saved || 'Home';
    });

    // On mount: scroll to saved section from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('activeSection');
        if (saved) {
            // Convert display name to HTML element ID
            let sectionId = '';
            if (saved === 'Tech Stack') sectionId = 'tech-stack';
            else if (saved === 'Home') sectionId = 'home';
            else if (saved === 'Projects') sectionId = 'projects';
            
            const element = document.getElementById(sectionId);
            if (element) {
                // Timeout ensures page is fully loaded before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    /**
     * Handles navigation click
     * Updates active state, scrolls to section, saves to localStorage
     * @param {string} sectionId - The display name of the section (e.g., 'Tech Stack')
     */
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        
        // Convert display name to HTML element ID and scroll
        if (sectionId === 'Tech Stack') {
            document.getElementById('tech-stack').scrollIntoView({ behavior: 'smooth' });
        }
        else if (sectionId === 'Home') {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
        else if (sectionId === 'Projects') {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Persist active section for page refreshes
        localStorage.setItem('activeSection', sectionId);
    }
    
    
    return (
        <main className = 'fixed top-0 left-0 right-0 bg-primary-dark shadow-md z-10'>
            <nav className = 'flex flex-col sm:flex-row justify-between m-3 sm:m-5 font-semibold text-xl sm:text-2xl'>
                <section className = 'ml-4 sm:ml-10 lg:ml-50 text-center sm:text-left'>
                    <h1 className='text-primary-light'>Portfolio</h1>
                </section>
                <section className = 'flex gap-3 sm:gap-5 text-[16px] sm:text-[20px] mr-4 sm:mr-10 lg:mr-50 justify-center sm:justify-end mt-2 sm:mt-0'>
                    {NavItems.map((item) => (
                        <h2 key={item} onClick={() => handleNavClick(item)} className = {`transition-colors hover:text-primary-light hover:cursor-pointer ${activeSection === item ? 'text-primary-light ' : ''}`}>{item}</h2>
                    ))}
                </section>
            </nav>
        </main>
    )
}