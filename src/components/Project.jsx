const ProjectCard = ({ name, desc, tech, furl, img, gurl }) => {
    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-4 transform hover:scale-105 transition-transform md:w-1/3 lg:w-1/3 xl:w-1/4 h-fit">
            <img src={img} alt={name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
            </div>
            <div className="px-6 py-2">
                <div className="flex flex-wrap justify-center">
                    {tech.map((techBadge, index) => (
                        <p
                            key={index}
                            className="bg-gray-200 p-2 rounded-lg m-1 text-gray-800 font-semibold"
                        >{techBadge}</p>
                    ))}
                </div>
            </div>
            <div className="px-6 py-2">
                <a
                    href={furl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B99C3] hover:underline mr-4"
                >
                    View Live
                </a>
                <a
                    href={gurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B99C3] hover:underline"
                >
                    GitHub
                </a>
            </div>
        </div>

    );
};

export default ProjectCard;
