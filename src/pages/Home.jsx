import Rani from '../assets/rani.jpg'
import Picture from '../assets/download.jpg'
import {useState, useEffect} from 'react'

export default function Home() {
    const [img, setImg] = useState(Rani);

    useEffect(() => {
        const interval = setInterval(()=> {
            setImg((currentImg) => (currentImg === Rani ? Picture : Rani));
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <main>
        <section className = 'flex justify-between '>
            <div className = 'w-full max-w-lg mt-53'>
                <h1 className='text-7xl font-bold '>Hello, I'm <span className='text-yellow-600'>Miq!</span></h1>
                <p className='mt-7 text-2xl text-gray-500'>Full Stack Developer / Front-End Focused</p>
                <p className='mt-5 text-lg text-gray-600 max-w-lg'>I am a passionate developer with experience in building web applications using modern technologies. I love creating beautiful and functional user interfaces.</p>
            </div>
            <div>
                <img src={img} alt="Profile Picture" className='h-170 w-full max-w-xl mt-30 m-20 rounded-md'/>
            </div>
        </section>
        </main>
    )
}