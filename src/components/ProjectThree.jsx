import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import ACHome from '../assets/AfCuisine/ac-home.png'
import ACChef from '../assets/AfCuisine/afchef.jpg'
import besfood from '../assets/AfCuisine/bestfood.jpg'
import joinclass from '../assets/AfCuisine/joinclass.jpg'
import affooter from '../assets/AfCuisine/affooter.jpg'
import details from '../assets/AfCuisine/details.jpg'
import register from '../assets/AfCuisine/register.jpg'
import login from '../assets/AfCuisine/login.jpg'


const ProjectThree = () => {
    return (
        <div className="custom-shadow rounded-2xl p-8 md:flex space-y-4 md:space-y-0">
            {/* carousel */}
            <div className="md:w-7/12 h-full">
                <div className="carousel w-full">
                    {/* slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={ACHome} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide8" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={ACChef} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={besfood} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={joinclass} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 5 */}
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src={affooter} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 6 */}
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src={details} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide5" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 7 */}
                    <div id="slide7" className="carousel-item relative w-full">
                        <img src={register} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide6" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide8" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                    {/* slide 8 */}
                    <div id="slide8" className="carousel-item relative w-full">
                        <img src={login} className="w-full rounded-2xl" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide7" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400 mr-5">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-blue-400 border-none opacity-70 hover:opacity-100 hover:bg-blue-400">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Descriptions */}
            <div className="md:w-5/12 h-full md:ps-10">
                <h1 className='text-3xl font-bold'>Afgani Cuisine</h1>
                <br />
                <p className="text-justify">
                    A simple web Application for foodie. In this application user will be able to see top rated afgani chef and their basic profile. If a user wants to see all the recipe for a specific chef so, user need to create an account to view.
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
                    <a href='https://github.com/sohelranalive/afgani-cuisine-client' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Code</span>
                        <FaGithub className='h-6 w-6' />
                    </a>
                    <a href='https://b7a10-chef-recipe-hunter-49b6e.web.app/' target="_blank" rel="noopener noreferrer" className='flex space-x-2 text-2xl items-center hover:text-blue-400'>
                        <span>Live Demo</span>
                        <BsBoxArrowUpRight className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;