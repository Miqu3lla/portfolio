

function CertificationCard({ image, title, description, link }) {
    return (
        <div className='flex flex-col items-center bg-secondary-dark rounded-2xl p-6 shadow-lg w-72'>
            <img src={image} alt={title} className='w-full h-40 object-cover rounded-xl mb-4' />
            <h2 className='text-xl font-bold text-primary-light mb-2 text-center'>{title}</h2>
            <p className='text-sm text-gray-400 text-center mb-4'>{description}</p>
            <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-accent text-white rounded-lg hover:opacity-80 transition'
            >
                View Certificate
            </a>
        </div>
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