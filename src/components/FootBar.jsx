import git from "/github.png"
import twi from "/social.png"
import lin from "/linkedin.png"
import res from "/SOFTWARE_ENGINEER_SANJAY_RESUME.pdf"
import { Link, useNavigate } from "react-router-dom"

export default function FootBar() {
    const navigate = useNavigate();  // Correct use of the hook here
    
    return (
        <>
            <div className="bg-black w-full flex items-center sm:px-4">
                <div className="bg-black w-full justify-between sm:flex sm:py-5 items-center">
                    <div className="sm:w-[40%] max-sm:px-5 w-full flex justify-around items-center max-sm:my-15 list-none gap-2">
                        <Link className="w-2/10 text-center text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer" to="/">_home</Link>
                        <Link className="w-2/10 text-center text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer" to="/about">_about</Link>
                        <Link className="w-2/10 text-center text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer" to="/portfolio">_portfolio</Link>
                        <Link className="w-2/10 text-center text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer" to={res} target="_blank">_resume</Link>
                        <Link className="w-2/10 text-center text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer" to="/connectForm">_connect</Link>
                    </div>
                    <div className="sm:w-[20%] w-full flex justify-center max-sm:my-10">
                        <img 
                            src={git} 
                            className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" 
                            alt="GitHub" 
                            onClick={() => window.open("https://github.com/your-profile", "_blank")}  // Open GitHub in a new tab
                        />
                        <img 
                            src={twi} 
                            className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" 
                            alt="Twitter" 
                            onClick={() => window.open("https://twitter.com/your-profile", "_blank")}  // Open Twitter in a new tab
                        />
                        <img 
                            src={lin} 
                            className="sm:w-[15%] w-15 ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" 
                            alt="LinkedIn" 
                            onClick={() => window.open("https://www.linkedin.com/in/your-profile", "_blank")}  // Open LinkedIn in a new tab
                        />
                    </div>
                    <div className="sm:w-[30%] w-full max-sm:bg-gray-600">
                        <p className="w-full sm:text-right text-center text-2xl text-amber-200 font-[myFont]">
                            Copyright © 2025 <a href="/">eNinja-In</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
