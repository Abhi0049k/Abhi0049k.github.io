import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#about" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#skills" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    Skills
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#projects" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#gitStats" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    Git Stats
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h5"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#contact" className="flex items-center hover:text-[#6B99C3] transition-colors">
                    Contact
                </a>
            </Typography>
            <li>
            <a
                href="https://drive.google.com/u/0/uc?id=1KBX-mD_4IkgJ2iBtHysMefq85xacqP82&export=download"
                className="inline-block md:mx-1 px-4 py-2 bg-[#6B99C3] text-white font-semibold rounded-lg border border-[#6B99C3] hover:bg-white hover:text-[#6B99C3] transition duration-300 ease-in-out transform"
            >
                Resume
            </a>
            </li>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 fixed z-10 top-0">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h5"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Mangalam&apos;s Dev Portfolio
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}