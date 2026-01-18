import Rani from '../assets/rani.jpg'
import Picture from '../assets/download.jpg'
import AnotherRani from '../assets/Rani-again.jpg'
import {useState, useEffect} from 'react'
import StackCard from '../components/StackCard.jsx'

const images = [Rani, Picture, AnotherRani];
const title = ['react', 'javascript', 'HTML', 'CSS', 'tailwind', 'nodejs', 'mongoDB', 'vuejs', 'expressjs', 'Git']
const description = ['frontend library', 'programming language', 'markup language', 'styling', 'css framework', 'backend ' ,'database', 'frontend framework', 'backend framework', 'version control']

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
            <div  className = 'w-full max-w-lg mt-53'>
                <h1 className='text-7xl font-bold '>Hello, I'm <span className='text-yellow-600'>Miq!</span></h1>
                <p className='mt-7 text-2xl text-gray-500'>Full Stack Developer / Front-End Focused</p>
                <p className='mt-5 text-lg text-gray-600 max-w-lg'>I am a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user interfaces.</p>
            </div>
            <div>
                <img src={img} alt="Profile Picture" className='h-170 w-full max-w-xl mt-30 m-20 rounded-md'/>
            </div>
        </section>
        <section>
            <div id = 'tech-stack'>
            <h1 className = 'text-center text-4xl font-bold'>Tech Stack</h1>
            <p className='text-center text-gray-600 mt-5'>Technologies and tools I work with</p>
            </div>
            <div className = 'grid grid-cols-5 gap-3 mt-10 mb-10'>
                {title.map((tech, index) => (
                    <StackCard key={tech} title={tech.charAt(0).toUpperCase() + tech.slice(1)} subtitle={description[index]} />
                ))}
            </div>
        </section>
        </main>
    )
}