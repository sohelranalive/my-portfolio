import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import BSHome from '../assets/BabySoldier/bs-home.png'
import addToy from '../assets/BabySoldier/addAToy.jpg'
import allToy from '../assets/BabySoldier/allToys.jpg'
import allToySearch from '../assets/BabySoldier/allToysSearch.jpg'
import bsfooter from '../assets/BabySoldier/bsfooter.jpg'
import bslogin from '../assets/BabySoldier/bslogin.jpg'
import bsnew from '../assets/BabySoldier/bsnew.jpg'
import myToys from '../assets/BabySoldier/myToys.jpg'
import bsproduct from '../assets/BabySoldier/bsproduct.jpg'


const ProjectTwo = () => {
    return (
        <div className="custom-shadow rounded-2xl p-8 md:flex md:flex-row flex flex-col-reverse md:gap-0 gap-8">
            {/* Descriptions */}
            <div className="md:w-5/12 md:pe-10">
                <h1 className='text-3xl font-bold'>Baby Soldier</h1>
                <br />
                <p className="text-justify">
                    An interactive web Application for selling gun toys. In this application a normal user will be able to see different kind of products. They will be able to filter it by sub-category on onClick. They will be able to search product by product name.
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
                <br />
                <div className='flex space-x-6 justify-center w-full'>
                    <a href='https://github.com/sohelranalive/baby-soldier-client' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Code</span>
                        <FaGithub className='h-6 w-6' />
                    </a>
                    <a href='https://baby-soldier.web.app/' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Live Demo</span>
                        <BsBoxArrowUpRight className='h-6 w-6' />
                    </a>
                </div>
            </div>
            {/* carousel */}
            <div className="md:w-7/12">
                <div className="carousel w-full">
                    {/* slide 1 */}
                    <div id="bsslide1" className="carousel-item relative w-full">
                        <img src={BSHome} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide9" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 2 */}
                    <div id="bsslide2" className="carousel-item relative w-full">
                        <img src={addToy} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 3 */}
                    <div id="bsslide3" className="carousel-item relative w-full">
                        <img src={allToy} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 4 */}
                    <div id="bsslide4" className="carousel-item relative w-full">
                        <img src={allToySearch} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 5 */}
                    <div id="bsslide5" className="carousel-item relative w-full">
                        <img src={bsfooter} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 6 */}
                    <div id="bsslide6" className="carousel-item relative w-full">
                        <img src={bslogin} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 7 */}
                    <div id="bsslide7" className="carousel-item relative w-full">
                        <img src={bsnew} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide8" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 8 */}
                    <div id="bsslide8" className="carousel-item relative w-full">
                        <img src={myToys} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide9" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 9 */}
                    <div id="bsslide9" className="carousel-item relative w-full">
                        <img src={bsproduct} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#bsslide8" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#bsslide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTwo;