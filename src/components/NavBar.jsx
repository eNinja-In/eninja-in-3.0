// This NavBar component implements a responsive navigation bar with a hamburger menu for small screens.
// - useState is used to track whether the mobile menu is open (isOpen).
// - toggleMenu toggles the visibility of the nav menu.
// - On small screens (max-sm), the menu becomes a dropdown that slides in/out using Tailwind transitions.
// - The hamburger icon changes between "≡" (closed) and "✖" (open).
// - On medium and larger screens (md and up), the nav menu is always visible.
// - The Resume link opens a PDF file in a new tab (target="_blank").
// - The component uses Tailwind classes for styling, layout, and animations.

import { useState } from "react";
import CV from "/SOFTWARE_ENGINEER_SANJAY_RESUME.pdf";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-black w-full p-[1.5%] flex items-center relative">
            <div className="max-sm:w-[85%] max-sm:text-center md:w-[40%] flex items-center">
                <div className="text-green-700 text-5xl font-bold max-sm:text-5xl max-sm:p-5 font-[myFont] w-full">
                    <a href="/">//eNinja-In</a>
                </div>
            </div>
            <div className="max-sm:flex max-sm:w-[15%] md:hidden items-center text-white text-4xl font-[myFont]  w-[10%] justify-center">
                <div onClick={toggleMenu} className="cursor-pointer">{isOpen ? "✖" : "≡"}</div>
            </div>

            <div className={`
                sm:flex w-full max-sm:absolute max-sm:bg-gray-900 max-sm:h-fit items-center left-0 transition-all duration-300
                ${isOpen ? "top-24 opacity-100" : "top-[-500px] opacity-0 md:opacity-100 md:top-0"}`}>

                <div className="w-full max-sm:p-5 flex justify-around items-center list-none max-sm:flex-col max-sm:justify-start">
                    <a className="sm:w-[13%] w-full text-center text-4xl sm:text-3xl text-amber-300 font-[myFont] max-sm:m-3 hover:scale-120 hover:cursor-pointer" href="/#home">_home</a>
                    <a className="sm:w-[13%] w-full text-center text-4xl sm:text-3xl text-amber-300 font-[myFont] max-sm:m-3 hover:scale-120 hover:cursor-pointer" href="/#home">_about</a>
                    <a className="sm:w-[13%] w-full text-center text-4xl sm:text-3xl text-amber-300 font-[myFont] max-sm:m-3 hover:scale-120 hover:cursor-pointer" href="/#portfolio">_portfolio</a>
                    <a className="sm:w-[13%] w-full text-center text-4xl sm:text-3xl text-amber-300 font-[myFont] max-sm:m-3 hover:scale-120 hover:cursor-copy" href={CV} target="_blank">_resume</a>
                    <a className="sm:w-[13%] w-full text-center text-4xl sm:text-3xl text-amber-300 font-[myFont] max-sm:m-3 hover:scale-120 hover:cursor-pointer" href="/#connectForm">_connect</a>
                </div>
            </div>
        </div>
    );
}
