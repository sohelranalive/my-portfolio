import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            duration: 500, // Scroll duration in milliseconds
            smooth: 'easeInOutQuart', // Scroll animation easing
        });
    };



    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);

            console.log(scrollPosition);
            if (currentPosition > 200) {
                setMenuOpen(false);
            }
        };

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth > 768) {
                setMenuOpen(false);
            }
        };


        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [scrollPosition]);


    const menuItems = <>
        <li className="cursor-pointer hover:text-blue-400">
            <Link
                activeClass="active"
                to="navbar"
                onClick={() => scrollToSection("about")}
                spy={true}
                smooth={true}
                offset={-0}
                duration={400}>Home
            </Link></li>
        <li className="cursor-pointer hover:text-blue-400">
            <Link
                activeClass="active"
                to="about"
                onClick={() => scrollToSection("about")}
                spy={true}
                smooth={true}
                offset={-0}
                duration={600}>About
            </Link></li>
        <li className="cursor-pointer hover:text-blue-400">
            <Link activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-0}
                duration={800}>Projects
            </Link></li>
        <li className="cursor-pointer hover:text-blue-400">
            <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-0}
                duration={1000}>Contact
            </Link></li>
    </>

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="py-4 shadow-sm relative" id="navbar">

            <div className="px-10 md:px-20">
                <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-bold">sohelranalive</h1>

                    <div>
                        <ul className="hidden md:inline-flex items-center space-x-4 font-bold">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="md:hidden text-3xl flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {
                                menuOpen ? <RxCross1 /> : <GiHamburgerMenu />
                            }
                        </button>
                    </div>
                </div>
                {/* dropdown menu */}
                <div>
                    <ul onClick={() => setMenuOpen(!menuOpen)} className={`bg-white py-4 px-4 rounded-md flex flex-col space-y-4 text-right absolute right-8 top-16 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                        {menuItems}
                    </ul>
                </div>
            </div>

        </div>
    );


};

export default Navbar;