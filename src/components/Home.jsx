import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ProfileImg from '../assets/Mangalam-bg.png';

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Backend Developer...', 'Node.js Developer...', 'Javascript Developer...', 'Full Stack Web Developer...'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
    return () => {
      typed.destroy();
    }
  }, []);
  return (
    <div id="home" className="flex flex-col md:flex-row items-center justify-center md:justify-around mt-[68px]">
      <div className="text-center md:text-left md:w-1/2 p-4 md:pl-8 lg:pl-10 xl:pl-24">
        <h4 className="text-md font-bold">Mangalam Kumar</h4>
        <h1 className="text-2xl font-bold mt-2">Hi, This is <span className="text-[#6B99C3]">Mangalam.</span><br /> Full Stack Web Developer</h1>
        <p className="text-gray-600 mt-4 text-lg">I&apos;m an Aspiring <span className="text-[#6B99C3] font-semibold" ref={el}></span></p>
        <p className="text-gray-600 mt-4 text-lg">Full-stack web developer with Node.js expertise. AI enthusiast.</p>
        <a href="https://drive.google.com/u/0/uc?id=1KBX-mD_4IkgJ2iBtHysMefq85xacqP82&export=download" className="mt-4 px-4 py-2 bg-[#6B99C3] text-white rounded-lg hover:bg-blue-600 inline-block">Download Resume</a>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <img src={ProfileImg} alt="Profile Image" className="w-full md:w-4/5 lg:w-3/5 drop-shadow-2xl rounded-full"/>
      </div>
    </div>
  )
}

export default Home;