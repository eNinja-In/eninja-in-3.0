// This FootBar component creates a responsive footer section for the website.
// - It includes three main areas: navigation links, social media icons, and a copyright line.
// - TailwindCSS is used for layout, spacing, colors, and responsive design.
// - The navigation links adjust layout between small (stacked) and larger screens (horizontal).
// - Social icons are displayed in the center and use hover scaling for interaction.
// - The resume link opens a PDF in a new tab using target="_blank".
// - Responsive margin classes like max-sm:my-15 and max-sm:my-10 adjust vertical spacing on small screens.
// - The footer uses Flexbox to align and distribute elements across the width of the viewport.

import git from "/github.png"
import twi from "/social.png"
import lin from "/linkedin.png"
import res from "/SOFTWARE_ENGINEER_SANJAY_RESUME.pdf"
export default function FootBar() {
    return (
        <>
            <div className="bg-black w-full flex items-center">
                <div className="bg-black w-full justify-between sm:flex sm:py-5 items-center ">
                    <div className="sm:w-[40%] w-full flex justify-around items-center max-sm:my-15 list-none">
                        <a className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="">_home</a>
                        <a className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="">_about</a>
                        <a className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="">_portfolio</a>
                        <a className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href={res} target="_blank">_resume</a>
                        <a className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="">_connect</a>
                    </div>
                    <div className="sm:w-[20%] w-full flex justify-center max-sm:my-10">
                        <img src={git} className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                        <img src={twi} className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                        <img src={lin} className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                    </div>
                    <div className="sm:w-[30%] w-full max-sm:bg-gray-600">
                        <p className="w-full sm:text-right text-center text-2xl text-amber-200 font-[myFont]">Copyright © 2025 <a href="/">eNinja-In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
