import { Icon } from '@iconify/react';
import TechStack from './TechStack.jsx';


export default function Projects({title, description, image, liveDemoLink, githubLink, stack = []}) {

    return (
        <main id = 'projects' className = 'mb-20'>
            <section className = 'flex flex-col  max-w-md shadow-xl m-5 rounded-md hover:scale-105 transition-transform'>
                <div>
                <img src = {image} alt = {title} className = 'object-cover w-full h-60  rounded-t-md'/>
                </div>
                <div className = ' ml-5 mr-5 mt-3'>
                <h1 className = 'text-2xl font-bold'>{title}</h1>
                <p className=' text-gray-600 mt-3'>{description}</p>
                </div>
                <div className = 'grid grid-cols-3 gap-3 ml-5 mr-5 mb-5'>
                {stack.map((tech) => (
                    <TechStack key={tech} title={tech} />
                ))}
                </div>
                <div className = 'flex gap-3 ml-5 mb-5 '>
                    <a href={liveDemoLink}><button className = 'bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors w-40 h-12 flex items-center justify-center'>Live Demo</button></a>
                    <a href={githubLink}><button className = 'text-black px-6 py-3 rounded-md hover:bg-gray-300 transition-colors border border-yellow-600 w-40 h-12 flex items-center justify-center gap-2'>
                        <Icon icon="mdi:github" width="24" height="24"/>Github</button></a>
                </div>
            </section>
        </main>
    )
}