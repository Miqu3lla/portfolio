

export default function Navbar() {

    return (
        <nav className = 'flex justify-between m-5 font-semibold text-2xl'>
            <div className = 'ml-50'>
                <h1>Portfolio</h1>
            </div>
            <div className = 'flex gap-5 text-[20px] mr-50  '>
                {['Home', 'Tech Stack', 'Projects', 'Resume'].map((item) => (
                    <h2 key={item} className = 'transition-colors  hover:text-yellow-600 hover:cursor-pointer'>{item}</h2>
                ))}
            </div>
        </nav>
    )
}