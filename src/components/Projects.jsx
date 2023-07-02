import { Slide } from 'react-awesome-reveal';
import ProjectOne from './ProjectOne';
import ProjectThree from './ProjectThree';
import ProjectTwo from './ProjectTwo';

const Projects = () => {
    return (
        <div className="px-10 md:px-20 bg-slate-50 py-20" id='project'>
            <Slide direction='left'>
                <h1 className='text-5xl font-bold'>
                    <span className='border-b-4 bottom-4 border-blue-400'>Projects</span>
                </h1>
            </Slide>
            <br />
            <Slide>
                <h1 className="text-2xl md:text-justify">Explore some of my best projects. Each project is a unique piece of development</h1>
            </Slide>
            <br />
            <br />
            {/* Projects 1 */}
            <ProjectOne></ProjectOne>
            <br />
            <br />
            {/* Project 2 */}
            <ProjectTwo></ProjectTwo>
            <br />
            <br />
            {/* Project 3 */}
            <ProjectThree></ProjectThree>
        </div>
    );
};

export default Projects;