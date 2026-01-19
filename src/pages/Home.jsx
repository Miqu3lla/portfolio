import {useState, useEffect} from 'react'
import StackCard from '../components/StackCard.jsx'
import Projects from '../components/Projects.jsx'

const images = ['/rani.jpg', '/download.jpg', '/Rani-again.jpg'];

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

export default function Home() {
    const [img, setImg] = useState(images[0]);
    useEffect(() => {
        const interval = setInterval(()=> {;
            setImg(images[Math.floor(Math.random() * images.length)]);
        }, 3000);
        return () => clearInterval(interval);
    },[]);


    return (
        <main>
        <section id = 'home'className = 'flex justify-between '>
            <div  className = 'w-full max-w-lg flex flex-col justify-center'>
                <h1 className='text-7xl font-bold '>Hello, I'm <span className='text-yellow-600'>Miq!</span></h1>
                <p className='mt-7 text-2xl text-gray-500'>Full Stack Developer / Front-End Focused</p>
                <p className='mt-5 text-lg text-gray-600 max-w-lg'>I am a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user interfaces.</p>
            </div>
            <div>
                <img src={img} alt="Profile Picture" className='h-170 w-full max-w-xl mt-30 m-20 rounded-md object-cover'/>
            </div>
        </section>
        <section>
            <div id = 'tech-stack'>
            <h1 className = 'text-center text-4xl font-bold'>Tech Stack</h1>
            <p className='text-center text-gray-600 mt-5'>Technologies and tools I work with</p>
            </div>
            <div className = 'grid grid-cols-5 gap-3 mt-10 mb-10'>
                {techStack.map((tech) => (
                    <StackCard key={tech.title} title={tech.title} subtitle={tech.description} />
                ))}
            </div>
        </section>
        <section id = 'projects' className = 'mb-20'>
            <div>
            <h1 className = 'text-center text-4xl font-bold'>Featured Projects</h1>
            <p className='text-center text-gray-600 mt-5'>Some of my recent works</p>
            </div>
            <div className = 'mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex justify-center'>
                {projects.map((project) => (
                    <Projects key = {project.title} title={project.title} description={project.description} image={project.image} liveDemoLink={project.liveDemoLink} githubLink={project.githubLink} stack={project.stack} />
                ))}
            </div>
        </section>
        </main>
    )
}