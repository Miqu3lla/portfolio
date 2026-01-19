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
            <div className = 'mt-10'>
                <Projects title = 'Expense Management System' 
                description = 'A web application to track and manage personal expenses with user authentication and data visualization features.' 
                image = '/rani.jpg'/>
            </div>
        </section>
        </main>
    )
}