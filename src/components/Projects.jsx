import ProjectCard from './Project';
import projectList from './projectInfo.json';

const Projects = () => {
    return (
        <div id="projects" className="py-8 bg-gray-100">
            <div className='container mx-auto px-4'>
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">My Projects</h1>
                <p className="text-gray-600 mb-8 text-center">
                    Welcome to my project section! Here, you&apos;ll find a collection of my recent work, including case studies, demos, and other projects
                    I&apos;ve completed. Each project is a unique representation of my skills and expertise, and I&apos;m excited to share them with you.
                    I hope you find them informative and inspiring, and please don&apos;t hesitate to contact me if you have any questions or would like to learn more.
                    Thank you for visiting!
                </p>
                <div className="flex flex-wrap justify-center">
                    {projectList.map((el, i) => (
                        <ProjectCard key={i} name={el.name} desc={el.desc} tech={el.tech} furl={el.furl} img={el.img} gurl={el.gurl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;