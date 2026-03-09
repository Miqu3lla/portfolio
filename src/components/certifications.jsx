

import { Icon } from '@iconify/react';

function CertificationCard({ image, title, description, link }) {
    return (
        <main className='mb-20'>
            <section className='flex flex-col max-w-md shadow-xl m-5 rounded-md hover:-translate-y-2 transition-transform hover:shadow-2xl'>
                <div className='rounded-t-md'>
                    <img src={image} alt={title} className='object-cover w-full h-60 rounded-t-md' />
                </div>
                <div className='ml-5 mr-5 mt-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-gray-600 mt-3'>{description}</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-3 ml-5 mr-5 sm:mr-0 mb-5 mt-5'>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <button className='bg-primary text-white px-4 sm:px-6 py-3 rounded-full hover:bg-primary-dark hover:cursor-pointer transition-colors w-full sm:w-48 h-12 flex items-center justify-center gap-2'>
                            <Icon icon='mdi:certificate' width='20' height='20' />
                            View Certificate
                        </button>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default function Certifications() {
    return (
        <div className='min-h-screen flex items-center justify-center bg-primary-dark text-primary-light'>
            <h1 className='text-4xl font-bold'>Certifications Page - Coming Soon!</h1>
        </div>
    );
}

export { CertificationCard };