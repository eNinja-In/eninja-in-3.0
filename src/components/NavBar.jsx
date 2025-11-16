import { Link, Navigate } from "react-router-dom";
export default function NavBar() {
    // const navigate = Navigate();
    return (
        <div className="bg-black w-full p-[1.5%] flex  items-center fixed">
            <div className="max-sm:w-[80%] max-sm:text-center md:w-[40%] flex items-center">
                <div className="text-green-700 text-4xl max-sm:text-5xl font-[myFont] w-full border-b-2 border-transparent hover:cursor-none">//eNinja-In</div>
            </div>
            <div className="max-sm:flex max-sm:w-[10%] md:hidden items-center text-white text-4xl font-[myFont] w-[10%] justify-center">
                <div className="">|||</div>
            </div>
            <div className="md:flex fixed w-full flex items-center top-25 left-0 bg-amber-900 ">
                <div className="w-full flex justify-around items-center list-none max-sm:flex-col max-sm:justify-start" >
                    <a className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="/#home">_home</a>
                    <a className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="/#home">_about</a>
                    <a className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="/#home">_portfolio</a>
                    <a className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="/#home">_hi</a>
                    <a className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer " href="/#connectForm">_connect</a>
                </div>
            </div>
        </div >
    );
}