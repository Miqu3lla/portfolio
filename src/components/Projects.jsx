import { Icon } from '@iconify/react';
import TechStack from './TechStack.jsx';


export default function Projects({title, description, image, liveDemoLink, githubLink, stack = []}) {

    return (
        <main  className = 'mb-20'>
            <section id = 'projects' className = 'flex flex-col  max-w-md shadow-xl m-5 rounded-md hover:-translate-y-2 transition-transform border border-primary-dark hover:border-4 hover:shadow-2xl'>
                <div className = ' rounded-t-md'>
                <img src = {image} alt = {title} className = 'object-cover w-full h-60 rounded-t-md  '/>
                </div>
                <div className = ' ml-5 mr-5 mt-3'>
                <h1 className = 'text-2xl font-bold'>{title}</h1>
                <p className=' text-gray-600 mt-3'>{description}</p>
                </div>
                <div className = 'grid grid-cols-3 gap-2 ml-5 mr-5 mb-5'>
                {stack.map((tech) => (
                    <TechStack key={tech} title={tech} />
                ))}
                </div>
                <div className = 'flex flex-col sm:flex-row gap-3 ml-5 mr-5 sm:mr-0 mb-5 '>
                    <a href={liveDemoLink}><button className = 'bg-primary text-white px-4 sm:px-6 py-3 rounded-full hover:bg-primary-dark hover:cursor-pointer transition-colors w-full sm:w-40 h-12 flex items-center justify-center gap-2'><Icon icon="mdi:open-in-new" width="20" height="20"/>Live Demo</button></a>
                    <a href={githubLink}><button className = 'text-primary px-4 sm:px-6 py-3 rounded-full hover:bg-primary-light hover:cursor-pointer transition-colors border-2 border-primary w-full sm:w-40 h-12 flex items-center justify-center gap-2'>
                        <Icon icon="mdi:github" width="24" height="24"/>GitHub</button></a>
                </div>
            </section>
        </main>
    )
}