import {useState, useEffect} from 'react'
import StackCard from '../components/StackCard.jsx'
import Projects from '../components/Projects.jsx'

// Hero section images - rotates randomly every 3 seconds
const images = ['/rani.jpg', '/download.jpg', '/Rani-again.jpg'];

// Tech stack data - displayed in the Skills section
const techStack = [
    { title: 'React', description: 'frontend library' },
    { title: 'JavaScript', description: 'programming language' },
    { title: 'HTML', description: 'markup language' },
    { title: 'CSS', description: 'styling' },
    { title: 'Tailwind', description: 'css framework' },
    { title: 'NodeJS', description: 'backend' },
    { title: 'MongoDB', description: 'database' },
    { title: 'VueJS', description: 'frontend framework' },
    { title: 'ExpressJS', description: 'backend framework' },
    { title: 'Git', description: 'version control' }
];

// Projects data - each project has title, description, image, links, and tech stack
const projects = [
    {
        title: 'Expense Management System',
        description: 'A web application to track and manage personal expenses with data visualization using Chart.js. Features include adding, editing, and deleting expenses, categorization, and monthly reports.',
        image: '/Project1.png',
        liveDemoLink: 'https://personal-expense-management-system.vercel.app/Dashboard',
        githubLink: 'https://github.com/Miqu3lla/Personal-Expense-Management-System',
        stack: ['VueJS', 'Tailwind', 'Chart.js']
    },
    {
        title: 'Simple Weather App',
        description: 'A web application that fetches and displays live weather data using the OpenWeatherMap API, it has features like search by city and a live search suggestion every time you type',
        image: '/Project2.png',
        liveDemoLink: 'https://simple-weather-app-6qea.vercel.app',
        githubLink: 'https://github.com/Miqu3lla/Simple-Weather-App',
        stack: ['VueJS','Tailwind', 'OpenWeather API']
    },
    {
        title: 'Moonlit Thoughts',
        description: 'Built with VueJS. A Full-Stack personal blog website where i share my Learning Experiences as a developer, with a clean and responsive design using Tailwind CSS. Features include guest and user authentication, CRUD operations for posts a Dashboard for posts management.',
        image: '/Project3.png',
        liveDemoLink: 'https://miq-s-journey.vercel.app/home',
        githubLink: 'https://github.com/Miqu3lla/Miq-s-Journey',
        stack: ['VueJS', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB']
    }
]

/**
 * Home Component
 * Main page containing Hero, Tech Stack, and Projects sections
 */
export default function Home() {
    // State for rotating hero image
    const [img, setImg] = useState(images[0]);
    
    // Rotate hero image randomly every 3 seconds
    useEffect(() => {
        const interval = setInterval(()=> {;
            setImg(images[Math.floor(Math.random() * images.length)]);
        }, 3000);
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    },[]);


    return (
        <main>
        {/* ===== HERO SECTION ===== */}
        <section id = 'home'className = 'flex flex-col lg:flex-row justify-between items-center'>
            {/* Introduction text */}
            <div  className = 'w-full max-w-lg flex flex-col justify-center text-center lg:text-left mt-30 lg:mt-0'>
                <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-dark'>Hello, I'm <span className='text-primary'>Miq!</span></h1>
                <p className='mt-5 lg:mt-7 text-xl sm:text-2xl text-gray-500'>Full Stack Developer / Front-End Focused</p>
                <p className='mt-3 lg:mt-5 text-base sm:text-lg text-gray-600 max-w-lg'>I am a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user interfaces.</p>
            </div>
            {/* Rotating profile image */}
            <div className='flex justify-center '>
                <img src={img} alt="Profile Picture" className='h-auto min-w-[300px] w-full  max-w-xl m-20 mt-30 rounded-md'/>
            </div>
        </section>

        {/* ===== TECH STACK SECTION ===== */}
        <section>
            <div id = 'tech-stack' className = 'scroll-mt-28'>
            <h1 className = 'text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>Tech Stack</h1>
            <p className='text-center text-gray-600 mt-3 sm:mt-5 text-sm sm:text-base'>Technologies and tools I work with</p>
            </div>
            {/* Map through techStack array and render StackCard for each */}
            <div className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-6 sm:mt-10 mb-10'>
                {techStack.map((tech) => (
                    <StackCard key={tech.title} title={tech.title} subtitle={tech.description} />
                ))}
            </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id = 'projects' className = 'mb-20 scroll-mt-28'>
            <div>
            <h1 className = 'text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>Featured Projects</h1>
            <p className='text-center text-gray-600 mt-3 sm:mt-5 text-sm sm:text-base'>Some of my recent works</p>
            </div>
            {/* Map through projects array and render Projects card for each */}
            <div className = 'mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-items-center'>
                {projects.map((project) => (
                    <Projects key = {project.title} title={project.title} description={project.description} image={project.image} liveDemoLink={project.liveDemoLink} githubLink={project.githubLink} stack={project.stack} />
                ))}
            </div>
        </section>
        </main>
    )
}