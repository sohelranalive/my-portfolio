import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import easyMovesHome from '../assets/Home.jpg'
import easyMovesPopularClasses from '../assets/Popularclass.jpg'
import easyMovesPopularInstructors from '../assets/PopularInstructor.jpg'
import easyMovesFooter from '../assets/Footer.jpg'
import easyMovesClasses from '../assets/classes.jpg'
import easyMovesInstructor from '../assets/instructor.jpg'
import easyMovesLogin from '../assets/login.jpg'
import { useEffect } from 'react';

const ProjectOne = () => {

    useEffect(() => {
        const removeHashFromURL = () => {
            if (window.location.hash) {
                window.history.replaceState(null, null, window.location.pathname);
            }
        };
        removeHashFromURL();
        window.addEventListener('hashchange', removeHashFromURL);
        return () => {
            window.removeEventListener('hashchange', removeHashFromURL);
        };
    }, []);

    return (
        <div className="custom-shadow rounded-2xl p-8 md:flex space-y-4 md:space-y-0">
            {/* carousel */}
            <div className="md:w-7/12 h-full">
                <div className="carousel w-full">
                    {/* slide 1 */}
                    <div id="emslide1" className="carousel-item relative w-full">
                        <img src={easyMovesHome} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 2 */}
                    <div id="emslide2" className="carousel-item relative w-full">
                        <img src={easyMovesPopularClasses} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 3 */}
                    <div id="emslide3" className="carousel-item relative w-full">
                        <img src={easyMovesPopularInstructors} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 4 */}
                    <div id="emslide4" className="carousel-item relative w-full">
                        <img src={easyMovesFooter} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 5 */}
                    <div id="emslide5" className="carousel-item relative w-full">
                        <img src={easyMovesClasses} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 6 */}
                    <div id="emslide6" className="carousel-item relative w-full">
                        <img src={easyMovesInstructor} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 7 */}
                    <div id="emslide7" className="carousel-item relative w-full">
                        <img src={easyMovesLogin} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#emslide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#emslide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Descriptions */}
            <div className="md:w-5/12 h-full md:ps-10">
                <h1 className='text-3xl font-bold'>EasyMoves</h1>
                <br />
                <p className="text-justify">
                    An interactive Full stack MERN Application for dance class. This website basically targeted the students. In this application a normal user will be able to see different kind of classes and instructors details with some amazing functionality.
                </p>
                <br />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-around'>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">ReactJS</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">Express</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">Node</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">MongoDB</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">HTML</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">Tailwind</button>
                    <button className="px-2 py-3 rounded-lg shadow-xl bg-slate-100 font-bold text-xl">DaisyUI</button>
                </div>
                <br />
                <div className='flex space-x-6 justify-center w-full'>
                    <a href='https://github.com/sohelranalive/baby-soldier-client' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Code</span>
                        <FaGithub className='h-6 w-6' />
                    </a>
                    <a href='https://easy-moves-bb7bc.web.app/' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Live Demo</span>
                        <BsBoxArrowUpRight className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;