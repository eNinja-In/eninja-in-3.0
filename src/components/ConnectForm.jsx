// This ConnectForm component renders a contact form with fields for name, email, and message.
// - It uses useState hooks to store form input values and update them dynamically.
// - TailwindCSS classes handle layout, styling, responsiveness, and interactive focus effects.
// - The design includes a themed header and a paragraph for styling context.
// - Each input is controlled (value + onChange) to sync UI with React state.
// - The form is centered and responsive, with large text sizes for a modern UI look.
// - The Submit button currently has no submit handler and only displays visually.

import { useState } from "react"
export default function ConnectForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <>
            <div className="w-full bg-gray-900 font-[myFont]">
                <div className="w-full py-10 flex justify-center">
                    <form action="" className="sm:w-[60%] flex flex-wrap ">
                        <div className="w-full text-center">
                            <h1 className="sm:text-8xl text-6xl text-white">&lt; contact_me &gt;</h1>
                            <p className="sm:text-3xl text-2xl text-amber-300">...Establish a secure TCP connection and upload your digital thoughts to my console.</p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center">
                            <div className="w-[90%] p-2"><input type="text" className="w-full text-3xl border-b-2 p-5 border-gray-400 text-blue-400 outline-none hover:border-blue-400" placeholder="_name*" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                            <div className="w-[90%] p-2"><input type="text" className="w-full text-3xl border-b-2 p-5 border-gray-400 text-blue-400 outline-none hover:border-blue-400" placeholder="_email*" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                            <div className="w-[90%] p-2"><textarea type="text" className="w-full text-3xl border-b-2 p-5 border-gray-400 text-blue-400 outline-none hover:border-blue-400" placeholder="_message*" value={message} onChange={(e) => setMessage(e.target.value)} required /></div>
                        </div>
                        <div className="w-full flex justify-center mt-10">
                            <button className="sm:w-[20%] w-40 p-3 text-4xl text-white border-black bg-blue-200 rounded-xl hover:bg-blue-400 hover:cursor-pointer">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
