



export default function Projects({title, description, image}) {

    return (
        <main id = 'projects' className = 'mb-20'>
            <section className = 'max-w-sm shadow-lg border m-5 rounded-md'>
                <div>
                <img src = {image} alt = {title} className = 'object-cover w-full h-60 object-cover rounded-t-md'/>
                </div>
                <div className = 'mb-10'>
                <h1 className = 'mt-3 text-2xl font-bold'>{title}</h1>
                <p className=' text-gray-600 mt-5'>{description}</p>
                </div>
                <div>
                    <button className = 'mb-5 bg-amber-600 text-white px-8 py-5 rounded-md  transition-colors'>Live Demo</button>
                </div>
            </section>
        </main>
    )
}