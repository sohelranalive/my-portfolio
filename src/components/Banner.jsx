import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import tailwindImg from '../assets/tailwind.png'
import jsImg from '../assets/icon-javascript-tran.png'
import reactImg from '../assets/icon-react-js-tran.png'
import nodeImg from '../assets/icon-node-js-tran.png'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="bg-slate-50 px-10 md:px-20 py-20 md:h-[calc(100vh-68px)]">
            {/* tittle and image */}
            <div className='flex flex-col-reverse md:flex md:flex-row gap-8 md:gap-0'>
                {/* text area */}
                <div className='md:w-1/2 px-0 md:px-20 space-y-6 flex flex-col justify-center'>
                    <h1 className="text-4xl font-bold">Full Stack Developer</h1>
                    <h3 className="text-2xl md:text-justify">
                        <TypeAnimation
                            sequence={['Hi, I am Sohel Rana. A Computer Science graduate and passionate full stack developer based in Dhaka, Bangladesh.']}
                            wrapper="span"
                            speed={50}
                        />
                    </h3>
                    <div className='flex items-center space-x-4 text-3xl'>
                        <a href='https://github.com/sohelranalive'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/sohelranalive/'><FaLinkedin /></a>
                        <a href="https://drive.google.com/uc?export=download&id=1SMtNmQodT3_DYPDgICxHY6f3PmqOuTaZ" download><FaDownload /></a>
                    </div>
                </div>

                {/* Image area */}
                <div className='md:w-1/2 px-0 md:px-20 h-[400px]'>
                    <div className='banner-img h-full w-full'></div>
                </div>
            </div>

            {/* tech stack */}
            <div className='md:flex items-center text-2xl px-0 md:px-20 space-y-2 md:space-y-0 mt-10 md:mt-0'>
                <div className='md:pr-2 md:border-r-2 border-blue-400'>Tech Stack</div>

                <div className='md:ps-2 flex gap-4 flex-wrap'>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={htmlImg} alt="" className='h-full w-full' />
                    </div>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={cssImg} alt="" className='h-full w-full' />
                    </div>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={tailwindImg} alt="" className='h-full w-full' />
                    </div>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={jsImg} alt="" className='h-full w-full' />
                    </div>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={reactImg} alt="" className='h-full w-full' />
                    </div>
                    <div className='h-12 w-12 p-2 custom-shadow rounded-full bg-white'>
                        <img src={nodeImg} alt="" className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;