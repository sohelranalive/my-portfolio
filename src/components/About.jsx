import aboutImage from '../assets/aboutImage.jpg'
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="px-10 md:px-20 py-20" id='about'>
            <div className="md:flex space-y-4 md:space-y-0">
                {/* about image */}
                <div className='md:w-1/2 max-h-full'>
                    <img src={aboutImage} className='h-full w-full rounded-lg' alt="" />
                </div>
                {/* about text */}
                <div className='md:w-1/2 mzx-h-full md:ps-20'>
                    <Slide direction='right'>
                        <h1 className='text-5xl font-bold'>
                            <span className='border-b-4 bottom-4 border-blue-400'>About Me</span>
                        </h1>
                    </Slide>
                    <br />
                    <p className='text-justify'>
                        I am concentrating on a career in the development sector and I have an intense interest in full stack development. My goal is to create outstanding user experiences and contribute to innovative software projects. I am actively seeking job opportunities that align with my passion and expertise. Let&apos;s explore how I can contribute to your company&apos;s goals and drive positive outcomes together.
                    </p>
                    <br />
                    <h1 className='text-3xl font-bold'>
                        <span className='border-b-4 bottom-4 border-blue-400'>Skills</span>
                    </h1>
                    <br />
                    <div>
                        <Fade cascade damping={0.3}>
                            {/* React */}
                            <div>
                                <div className="mb-1 mt-2 text-lg font-medium dark:text-white">ReactJS</div>
                                <div className="w-full h-4 bg-gray-200 rounded-full">
                                    <div className="h-4 bg-blue-600 rounded-full w-10/12"></div>
                                </div>
                            </div>
                            {/* JavaScript */}
                            <div>
                                <div className="mb-1 mt-2 text-lg font-medium dark:text-white">JavaScript</div>
                                <div className="w-full h-4 bg-gray-200 rounded-full">
                                    <div className="h-4 bg-red-400 rounded-full w-8/12"></div>
                                </div>
                            </div>
                            {/* Node & Express */}
                            <div>
                                <div className="mb-1 mt-2 text-lg font-medium dark:text-white">Node & ExpressJS</div>
                                <div className="w-full h-4 bg-gray-200 rounded-full">
                                    <div className="h-4 bg-orange-400 rounded-full w-7/12"></div>
                                </div>
                            </div>
                            {/* HTML */}
                            <div>
                                <div className="mb-1 mt-2 text-lg font-medium dark:text-white">HTML</div>
                                <div className="w-full h-4 bg-gray-200 rounded-full">
                                    <div className="h-4 bg-amber-400 rounded-full w-11/12"></div>
                                </div>
                            </div>
                            {/* CSS */}
                            <div>
                                <div className="mb-1 mt-2 text-lg font-medium dark:text-white">CSS</div>
                                <div className="w-full h-4 bg-gray-200 rounded-full">
                                    <div className="h-4 bg-lime-400 rounded-full w-9/12"></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;