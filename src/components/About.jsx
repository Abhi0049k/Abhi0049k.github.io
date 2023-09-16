import ProfileImg from '../assets/Mangalam-bg.png'

const About = () => {
    return (
        <div id='about' className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <img src={ProfileImg} alt="Profile Image" className="rounded-full w-32 h-32 md:w-44 md:h-44 bg-[#6B99C3] mb-4" />
                        <h1 className="text-4xl font-semibold text-gray-800 mb-2">About Me</h1>
                        <p className="text-gray-700 text-center max-w-3xl leading-7">
                            I&apos;m deeply passionate about web development, with a strong focus on backend development using Node.js. My academic background has equipped me with a solid understanding of programming, data structures, and algorithms. My journey into backend development began at Masai School, where I was introduced to Node.js, and I was immediately captivated by its potential for creating fast and scalable web applications. I&apos;m known for being a quick learner and for excelling in collaborative teams, where I enthusiastically take on complex challenges with unwavering determination. Additionally, I possess expertise in prompt engineering and crafting AI-powered solutions, contributing to innovation in the world of technology.
                        </p>
                        <div className="flex gap-2">
                        <a href="https://drive.google.com/u/0/uc?id=1KBX-mD_4IkgJ2iBtHysMefq85xacqP82&export=download" className="mt-4 px-4 py-2 bg-[#6B99C3] text-white rounded-lg hover:bg-blue-600 inline-block">Resume</a>
                        <a href="#skills" className="mt-4 px-4 py-2 bg-[#6B99C3] text-white rounded-lg hover:bg-blue-600 inline-block">My Skills</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;