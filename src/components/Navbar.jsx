
import { useState, useEffect} from 'react';

const NavItems = ['Home', 'Tech Stack', 'Projects', 'About']
export default function Navbar() {

    const [activeSection, setActiveSection] = useState(() => {
        const saved = localStorage.getItem('activeSection');
        return saved || 'Home';
    });

    useEffect(() => {
        const saved = localStorage.getItem('activeSection');
        if (saved) {
            let sectionId = '';
            
            if (saved === 'Tech Stack') sectionId = 'tech-stack';
            else if (saved === 'Home') sectionId = 'home';
            else if (saved === 'Projects') sectionId = 'projects';
            
            const element = document.getElementById(sectionId);
            if (element) {
                // The timeout ensures the page is fully ready before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);


    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
         
        if (sectionId === 'Tech Stack') {
            document.getElementById('tech-stack').scrollIntoView({ behavior: 'smooth' });
        }
        else if (sectionId === 'Home') {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
        else if (sectionId === 'Projects') {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.setItem('activeSection', sectionId);
    }
    
    
    return (
        <main className = 'fixed top-0 left-0 right-0 bg-white shadow-md z-10'>
            <nav className = 'flex justify-between m-5 font-semibold text-2xl'>
                <section className = 'ml-50'>
                    <h1>Portfolio</h1>
                </section>
                <section className = 'flex gap-5 text-[20px] mr-50  '>
                    {NavItems.map((item) => (
                        <h2 key={item} onClick={() => handleNavClick(item)} className = {`transition-colors hover:text-yellow-600 hover:cursor-pointer ${activeSection === item ? 'text-yellow-600 ' : ''}`}>{item}</h2>
                    ))}
                </section>
            </nav>
        </main>
    )
}