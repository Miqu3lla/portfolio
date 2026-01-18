
export default function StackCard({ title, subtitle }) {
    return (
        <main className="flex flex-col items-center justify-center w-full h-32 border-1 border-yellow-600 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform hover:border-yellow-700 p-4">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </main>
    )
}