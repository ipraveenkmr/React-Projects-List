import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="p-16">
            <div className="text-4xl underline font-semibold flex justify-center mb-6">
                React Projects
            </div>
            <div class="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8">

                <Link to={{ pathname: '/color-picker' }}>
                    <div class="bg-blue-600 hover:bg-blue-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Color Picker
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/todo' }}>
                    <div class="bg-green-600 hover:bg-green-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            To-Do App
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/github-user-finder' }}>
                    <div class="bg-pink-600 hover:bg-pink-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            GitHub User Finder
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/flash-cards' }}>
                    <div class="bg-purple-600 hover:bg-purple-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Flash Cards
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/pomodoro-timer' }}>
                    <div class="bg-yellow-600 hover:bg-yellow-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Pomodoro Timer
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/chat' }}>
                    <div class="bg-fuchsia-600 hover:bg-fuchsia-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Chat App
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/charts' }}>
                    <div class="bg-blue-600 hover:bg-blue-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Charts
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/currency-converter' }}>
                    <div class="bg-red-600 hover:bg-red-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Currency Converter
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/quiz-app' }}>
                    <div class="bg-amber-600 hover:bg-amber-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Quiz App
                        </div>
                    </div>
                </Link>

                <Link to={{ pathname: '/expense-tracker' }}>
                    <div class="bg-emerald-600 hover:bg-emerald-500 p-4 min-h-[160px] rounded-lg shadow-md text-white cursor-pointer hover:shadow-xl transition transform duration-300 ease-in-out hover:scale-105">
                        <div class="text-3xl font-semibold text-center mt-[45px]">
                            Expense Tracker
                        </div>
                    </div>
                </Link>

            </div>

            <div class="border border-slate-400 rounded-lg mt-20 shadow-sm min-h-[200px] p-6 bg-white">
                <div class="text-left text-2xl font-semibold text-slate-800 mb-4">
                    🔗 Stay Connected
                </div>
                <div class="flex flex-col space-y-3 text-left text-lg text-slate-600">
                    <a href="https://codingmstr.com" target="_blank" class="hover:text-blue-500 hover:underline transition duration-300 ease-in-out">
                        🌐 Website: <span class="font-semibold">codingmstr.com</span>
                    </a>
                    <a href="https://instagram.com/codingmstr" target="_blank" class="hover:text-pink-500 hover:underline transition duration-300 ease-in-out">
                        🌐 Instagram: <span class="font-semibold">/ codingmstr</span>
                    </a>
                    <a href="https://linkedin.com/in/ipraveenkmr" target="_blank" class="hover:text-blue-700 hover:underline transition duration-300 ease-in-out">
                        💼 LinkedIn: <span class="font-semibold">/ ipraveenkmr</span>
                    </a>
                    <a href="https://facebook.com/procodingmaster" target="_blank" class="hover:text-blue-600 hover:underline transition duration-300 ease-in-out">
                        🌐 Facebook: <span class="font-semibold">/ procodingmaster</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
