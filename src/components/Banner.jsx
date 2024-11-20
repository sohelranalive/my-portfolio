import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import bannerIMG from "../assets/bannerIMG.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/icon-javascript-tran.png";
import nodeImg from "../assets/icon-node-js-tran.png";
import reactImg from "../assets/icon-react-js-tran.png";
import tailwindImg from "../assets/tailwind.png";

const Banner = () => {
  return (
    <div className="bg-slate-50 flex flex-col px-10 sm:px-10 md:px-20">
      {/* Title and image banner */}
      <div className="min-h-[300px] md:min-h-[400px] flex flex-col-reverse gap-8 md:flex md:flex-row md:gap-0">
        {/* Text area */}
        <div className="min-h-[300px] md:min-h-[400px] w-full md:w-1/2 px-0 md:px-10 lg:px-20 space-y-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            <TypeAnimation
              sequence={["MD SOHEL RANA"]}
              wrapper="span"
              speed={30}
            />
          </h1>
          <h1 className="text-2xl font-bold italic">Full Stack Developer</h1>
          <br />
          <h1 className="text-xl text-justify">
            I’m a passionate Software developer with expertise in the MERN stack
            and a strong focus on creating exceptional user experiences.
            Currently pursuing a Master’s in Engineering in Information
            Technology at Frankfurt University of Applied Sciences, I’m based in
            Frankfurt, Germany.
          </h1>
          <br />
          <div className="md:flex items-center text-xl sm:text-2xl">
            <div className="flex items-center space-x-4 text-2xl sm:text-3xl">
              <a href="https://github.com/sohelranalive">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sohelranalive/">
                <FaLinkedin />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Y9DFvQf2pMqnzIdtnyZPfI8LXjgZn-0U"
                download
              >
                <FaDownload />
              </a>
            </div>
          </div>
          {/* <h1 className="text-3xl sm:text-4xl font-bold">MD SOHEL RANA</h1>
          <h1 className="text-3xl sm:text-3xl font-bold">
            Full Stack Developer
          </h1>
          <h3 className="text-lg sm:text-2xl text-justify">
            <TypeAnimation
              sequence={[
                "Hello, I am Sohel Rana, a passionate web developer with expertise in the MERN stack. Currently, I am pursuing my Masters in Engineering in Information Technology while residing in Frankfurt, Germany.",
              ]}
              wrapper="span"
              speed={50}
            />
          </h3> */}
        </div>
        {/* Image area */}
        <div className="min-h-[300px] md:min-h-[400px] w-full md:w-1/2 px-0 md:px-10 lg:px-20">
          {/* need to put image here */}
          <img
            src={bannerIMG}
            alt="Your Image"
            className="h-[400px] md:h-[700px] w-full object-cover"
          />
        </div>
      </div>

      {/* Contact and Resume download */}

      {/* Tech stack */}
      <div className="md:flex items-center text-xl sm:text-2xl px-0 md:px-10 lg:px-20 py-2 mt-2">
        <div className="md:pr-4 md:border-r-4 border-blue-400">Tech Stack</div>

        <div className="md:pl-4 flex gap-4 flex-wrap">
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img src={htmlImg} alt="HTML" className="h-full w-full" />
          </div>
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img src={cssImg} alt="CSS" className="h-full w-full" />
          </div>
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img
              src={tailwindImg}
              alt="Tailwind CSS"
              className="h-full w-full"
            />
          </div>
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img src={jsImg} alt="JavaScript" className="h-full w-full" />
          </div>
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img src={reactImg} alt="React" className="h-full w-full" />
          </div>
          <div className="h-12 w-12 p-2 custom-shadow rounded-full bg-white">
            <img src={nodeImg} alt="Node.js" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
