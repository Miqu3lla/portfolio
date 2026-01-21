

export default function TechStack({title}) {

    return (
        <main className="flex flex-col items-center justify-center w-full p-2 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition-transform hover:border-primary-dark ">
            <h2 className="text-sm font-semibold text-primary">{title}</h2>
        </main>
    )
}