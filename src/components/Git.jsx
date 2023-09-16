const Git = () => {
    return (
        <div id="gitStats" className="bg-gray-100 text-center p-4 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Github Stats</h2>
            <div className="flex flex-wrap justify-center space-x-4 gap-4 md:gap-0">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src="https://github-readme-streak-stats.herokuapp.com?user=Abhi0049k" alt="GitHub Streak Stats" />
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src="https://github-readme-stats.vercel.app/api?username=Abhi0049k" alt="GitHub Stats" />
                </div>
                <div className="w-full lg:w-1/4 md:w-1/3 flex justify-center">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abhi0049k" alt="Top Languages" />
                </div>
            </div>
        </div>
    )
}

export default Git;