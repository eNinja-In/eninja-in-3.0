import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="bg-black w-full p-[1.5%] flex  items-center">
            <div className="w-[40%] flex items-center">
                <div className="text-green-700 text-4xl font-[myFont] w-[40%] border-b-2 border-transparent hover:border-green-700 hover:cursor-none">//eNinja-In</div>
            </div>
            <div className="w-[60%] flex items-center ">
                <div className="w-full flex justify-around items-center  list-none " >
                    <li className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_home</li>
                    <li className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_about</li>
                    <li className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_portfolio</li>
                    <li className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_hi</li>
                    <li className="w-[13%] text-center text-3xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_connect</li>
                </div>
            </div>
        </div >
    );
}