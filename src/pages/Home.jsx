import {useState, useEffect} from 'react'
import { Icon } from '@iconify/react'
import StackCard from '../components/StackCard.jsx'
import Projects from '../components/Projects.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import { CertificationCard } from '../components/certifications.jsx'
import { techStack, projects, certifications } from '../data.js'





/**
 * Home Component
 * Main page containing Hero, Tech Stack, and Projects sections
 */
export default function Home() {

const [title, setTitle] = useState('Projects');

    return (
        <main className=''>
        {/* ===== HERO SECTION ===== */}
        <section id='home' className='min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-[var(--spacing-gutter)] py-12 md:py-24 fade-in-up visible'>
            {/* Left: Content */}
            <div className='flex-1 flex flex-col gap-6 w-full text-center md:text-left items-center md:items-start'>
                <div className='inline-block px-3 py-1 bg-primary-fixed-dim/10 text-primary-fixed-dim text-sm rounded border border-primary-fixed-dim/20 w-max mb-4'>
                    <span className='mr-2 font-mono'>&gt;</span> <span className="font-mono">System initialized.</span>
                </div>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-on-background'>
                    Hi, I'm <br/>
                    <span className='text-primary-fixed-dim text-glow-cyan'>Miq</span>
                </h1>
                <p className='text-lg md:text-xl text-on-surface-variant max-w-xl'>
                    Full Stack Developer / Front-End Focused. I am a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user interfaces.
                </p>
                <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-8'>
                    <a href="https://github.com/Miqu3lla" target="_blank" rel="noreferrer" className='bg-primary-fixed-dim text-black font-semibold text-sm px-8 py-3 rounded hover:bg-primary-fixed transition-colors box-glow-cyan flex items-center gap-2'>
                        <Icon icon='mdi:github' className='text-xl' /> GitHub
                    </a>
                    <button className='bg-transparent border border-secondary-container text-secondary-fixed hover:bg-secondary-container/10 font-semibold text-sm px-8 py-3 rounded transition-all box-glow-violet flex items-center gap-2'>
                        <Icon icon='mdi:download' className='text-xl' /> View Resume
                    </button>
                </div>
                <div className='flex justify-center md:justify-start gap-6 mt-12 text-on-surface-variant'>
                    <a href='https://www.linkedin.com/in/javier-jaypee-722999383/' target="_blank" rel="noreferrer" className='hover:text-primary-fixed-dim transition-colors text-3xl'>
                        <Icon icon='mdi:linkedin' />
                    </a>
                    <a href='mailto:your.email@example.com' className='hover:text-primary-fixed-dim transition-colors text-3xl'>
                        <Icon icon='mdi:email' />
                    </a>
                </div>
            </div>
            {/* Right: Profile Image in Cyber Frame */}
            <div className='flex-1 w-full max-w-md md:max-w-none relative flex justify-center items-center mb-12 md:mb-0'>
                <div className='absolute inset-0 bg-primary-fixed-dim/5 rounded-full blur-3xl animate-pulse-slow'></div>
                <div className='relative w-full aspect-square max-w-[400px] animate-float glass-panel rounded-xl overflow-hidden p-2'>
                    <img src={'/myself.png'} alt="Profile Picture" className='w-full h-full object-cover rounded-lg border border-outline-variant/50 opacity-90' />
                    {/* Decorative HUD elements */}
                    <div className='absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-fixed-dim/50'></div>
                    <div className='absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-fixed-dim/50'></div>
                </div>
            </div>
        </section>

        {/* ===== TECH STACK SECTION ===== */}
        <section id='tech-stack' className='py-16 fade-in-up visible border-y border-outline-variant/20 relative'>
            <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none'></div>
            <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none'></div>
            <AnimatedSection animation="fadeUp">
                <div className='mb-12'>
                    <h2 className='text-center text-3xl font-bold text-on-background'>Tech <span className='text-primary-fixed-dim'>Stack</span></h2>
                    <p className='text-center text-on-surface-variant mt-2 text-sm uppercase font-code-inline'>Technologies and tools I work with</p>
                </div>
            </AnimatedSection>
            
            {/* Tech Stack Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto'>
                {techStack.map((tech, index) => (
                    <AnimatedSection key={tech.title} animation="scaleUp" delay={index * 50}>
                        <StackCard title={tech.title} subtitle={tech.description} />
                    </AnimatedSection>
                ))}
            </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id = 'projects' className = 'mb-20 scroll-mt-28'>
            <AnimatedSection animation="fadeUp">
                <div>
                <h1 className = 'text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>Projects / Certifications</h1>
                <div className='flex justify-center gap-3 mt-5'>
                    <p onClick={() => setTitle('Projects')} className={`px-6 py-2 rounded-full font-semibold cursor-pointer transition-colors ${title === 'Projects' ? 'bg-primary text-white' : 'border-2 border-primary text-primary hover:bg-primary-light'}`}>Projects</p>
                    <p onClick={() => setTitle('Certifications')} className={`px-6 py-2 rounded-full font-semibold cursor-pointer transition-colors ${title === 'Certifications' ? 'bg-primary text-white' : 'border-2 border-primary text-primary hover:bg-primary-light'}`}>Certifications</p>
                </div>
                </div>
            </AnimatedSection>
            {/* Map through projects array and render Projects card for each */}
            <div className = 'mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-items-center'>
                { title === 'Projects' ? projects.map((project, index) => (
                    <AnimatedSection key={project.title} animation="fadeUp" delay={index * 150}>
                        <Projects title={project.title} description={project.description} image={project.image} liveDemoLink={project.liveDemoLink} githubLink={project.githubLink} stack={project.stack} />
                    </AnimatedSection>
                )) : certifications.map((cert, index) => (
                    <AnimatedSection key={cert.title} animation="fadeUp" delay={index * 150}>
                        <CertificationCard title={cert.title} description={cert.description} image={cert.image} link={cert.link} />
                    </AnimatedSection>
                ))}
            </div>
        </section>

        {/* Divider line */}
        <hr className='border-gray-300 ' />

        {/* ===== FOOTER SECTION ===== */}
        <AnimatedSection animation="fadeIn">
            <footer className='  py-8 mt-10'>
                <div className='container mx-auto px-4 text-center'>
                    <p className='text-lg font-semibold opacity-50'>Miq</p>
                    <p className='text-gray-400 mt-2 text-sm'>Full Stack Developer</p>
                    <hr className='my-4 border-gray-600 w-1/2 mx-auto' />
                    <p className='text-gray-400 text-sm'>&copy; {new Date().getFullYear()} Miq. All rights reserved.</p>
                </div>
            </footer>
        </AnimatedSection>
        </main>
    )
}