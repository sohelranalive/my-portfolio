import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="px-10 md:px-20 text-white py-8 flex justify-between items-center">
                <div className="">
                    <span>© 2023 Copyright: </span><a className="font-bold">sohelranalive.com</a>
                </div>
                <div className='flex items-center space-x-6 text-3xl'>
                    <a href='https://github.com/sohelranalive'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/sohelranalive/'><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;