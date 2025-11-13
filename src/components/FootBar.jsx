import git from "/github.png"
import twi from "/social.png"
import lin from "/linkedin.png"
export default function FootBar() {
    return (
        <>
            <div className="bg-black w-full flex  items-center">
                <div className="bg-black w-full justify-between p-[1.5%] flex  items-center">
                    <div className="w-[40%] flex justify-around items-center  list-none">
                        <li className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_home</li>
                        <li className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_about</li>
                        <li className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_portfolio</li>
                        <li className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_hi</li>
                        <li className="w-[13%] text-left text-2xl text-amber-300 font-[myFont] hover:scale-110 hover:cursor-pointer ">_connect</li>
                    </div>
                    <div className="w-[20%] flex justify-center">
                        <img src={git} className="w-[15%] ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                        <img src={twi} className="w-[15%] ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                        <img src={lin} className="w-[15%] ml-3 mr-3 rounded-full hover:scale-110 hover:cursor-pointer" alt="" />
                    </div>
                    <div className="w-[30%]">
                        <p className="w-full text-right text-2xl text-amber-200 font-[myFont]">Copyright © 2025 eNinja-In</p>
                    </div>
                </div>
            </div>
        </>
    )
}