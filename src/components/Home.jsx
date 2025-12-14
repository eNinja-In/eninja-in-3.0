import { useRotatingText } from './common/TextModifier';
import useTypingEffect from './common/TypingEffect';
import { useState, useEffect } from 'react';
import ImWatchingYou from "/2ImWatchingYou.mp4";
import CV from "/SOFTWARE_ENGINEER_SANJAY_RESUME.pdf"
import aboutImg from "/about.jpg"
export default function Home() {
    const roles = ["MERN Developer", "AI Developer", "Cyber Enthusiast"];
    const textToType = useRotatingText(roles, 5000);
    const currentText = useTypingEffect(textToType, 100, 60, 1000);

    const hello = "Hii I'm Watching You...";
    const helloText = useTypingEffect(hello, 200, 60, 1500);

    const [bgActive, setBgActive] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    // Trigger background and text after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setBgActive(true);
            setTextVisible(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="bg-[url('/eninja.jpg')] min-h-screen max-h-fit max-sm:bg-center bg-cover w-full bg-fixed">
                <div className={`w-full transition-colors duration-710 ${bgActive ? "bg-[#090E1A]" : "bg-black"}`}>
                    <div className="flex max-sm:flex-wrap-reverse p-10 sm:py-40">
                        {/* Left Content */}
                        <div className="sm:w-1/2 ">
                            <p className='text-green-400 text-xl font-[myfont] bg-gray-600 w-fit px-4 py-1 my-5 rounded-2xl'>
                                .Available for Freelance Work
                            </p>
                            <h1 className='font-bold max-sm:text-center text-5xl text-white my-5'>Hi, I'm eNinja-In</h1>
                            <h2 className='w-full flex max-sm:justify-center font-[myfont] text-4xl text-green-500 h-10 my-5'>
                                &lt;{currentText}&gt;
                            </h2>
                            <p className='flex text-2xl text-white italic my-5 font-[myfont]'>
                                Dynamic MERN Stack Developer and Cybersecurity enthusiast with 2+ years of creating secure, high-performance applications. Skilled in React, Node.js, Express, MongoDB, Python, and strong logic building. GATE 2025 (CS) qualified, bringing solid fundamentals and a passion for crafting clean, impactful, and innovative digital experiences.
                            </p>
                            <div className="flex gap-4 max-sm:justify-center">
                                <button className="sm:w-1/7 rounded-2xl justify-center text-xl flex items-center bg-black text-white border-[3px] cursor-pointer hover:scale-110 p-2">
                                    <ArrowIcon />Hire Me
                                </button>
                                <a className="sm:w-1/5 rounded-2xl justify-center text-xl flex items-center bg-white text-black border-[3px] cursor-pointer hover:scale-110 p-1 sm:p-3" href={CV} download>
                                    <UploadIcon />Download CV
                                </a>
                            </div>
                        </div>

                        {/* Right Video & Text */}
                        <div className="sm:w-1/2 relative ">
                            <video
                                src={ImWatchingYou}
                                autoPlay
                                loop={false}
                                muted
                                playsInline
                                onEnded={(e) => { e.currentTarget.pause(); }}
                                className="w-full rounded-xl max-sm:h-fit"
                            />
                            {textVisible && (
                                <p className='max-sm:hidden absolute top-30 right-30 italic text-green-500 font-bold text-2xl px-4'>
                                    {helloText}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit mt-[20%] bg-black py-10">
                    <div className="flex p-10 max-sm:flex-wrap-reverse">
                        <div className="sm:w-1/2 w-full">
                            <p className="my-15 italic text-green-500 text-2xl font-[myfont] max-sm:hidden">// ABOUT ME</p>
                            <h1 className="sm:w-fit w-full text-5xl text-center text-white font-bold pb-10 border-b-2 border-white font-[myfont]">Crafting Meaningful Digital Experiences</h1>
                            <p className="w-full text-2xl italic text-white py-10 font-[myfont]">
                                Passionate about building modern, intuitive, and performance-driven digital solutions.
                                I enjoy transforming ideas into seamless user experiences through clean design and
                                well-structured code. My work blends creativity with practicality, ensuring both
                                functionality and aesthetics.
                            </p>

                            <p className="max-sm:hidden w-full text-2xl italic text-white pb-10 font-[myfont]">
                                With a strong foundation in computer science and hands-on experience across multiple
                                technologies, I constantly explore new tools, frameworks, and methodologies. My focus is
                                to create reliable, scalable, and elegant solutions that solve real-world problems.
                            </p>

                            <h2 className="sm:w-fit w-full text-center text-4xl text-green-500 pb-10 font-bold font-[myfont]">
                                What Drives Me
                            </h2>

                            <div className="sm:flex gap-10">
                                <div className="sm:w-1/4 max-sm:my-10 bg-black border-2 border-white p-10 rounded-2xl cursor-pointer text-center text-white hover:text-black hover:bg-white hover:scale-110 transition-all">
                                    <h2 className="w-full text-3xl font-bold font-[myfont]">&lt;/&gt; Languages</h2>
                                    <p className="w-full italic">MERN Stack, Python, C, C++</p>
                                </div>

                                <div className="sm:w-1/4 max-sm:my-10 bg-black border-2 border-white p-10 rounded-2xl cursor-pointer text-center text-white hover:text-black hover:bg-white hover:scale-110 transition-all">
                                    <h2 className="w-full text-3xl font-bold font-[myfont]">Education</h2>
                                    <p className="w-full italic">B.Sc. (Hons) Computer Science</p>
                                </div>

                                <div className="sm:w-1/4 max-sm:my-10 bg-black border-2 border-white p-10 rounded-2xl cursor-pointer text-center text-white hover:text-black hover:bg-white hover:scale-110 transition-all">
                                    <h2 className="w-full text-3xl font-bold font-[myfont]">Projects</h2>
                                    <p className="w-full italic">A growing portfolio of full-stack and problem-solving projects</p>
                                </div>
                            </div>

                        </div>
                        <div className="sm:w-1/2 w-full flex justify-center items-center">
                            <img src={aboutImg} alt="About Me" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/bg.jpg')] max-h-fit max-sm:bg-center bg-cover sm:w-full bg-fixed pt-50">
                <div className="w-full h-fit bg-black sm:p-20 p-10" >
                    <div className="text-center mb-16">
                        <h1 className="text-5xl text-white font-bold mb-4">Featured Work</h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            A curated list of projects crafted using modern technologies and clean engineering.
                        </p>
                    </div>

                    {/* Dynamic Grid */}
                    <div className="w-full sm:px-10 sm:flex sm:gap-10">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="w-full flex justify-center pt-10">
                    <button className='sm:w-1/10 bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-2 py-3 text-xl font-bold rounded-xl'>See All</button>
                    </div>

                </div>

            </div>
        </>
    );
}

// Arrow Icon
const ArrowIcon = () => (
    <svg
        height="35px"
        width="35px"
        viewBox="-76.8 -76.8 665.6 665.6"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="10.24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M511.746,252.725c-0.061-0.427-0.11-0.852-0.194-1.275c-0.076-0.382-0.18-0.749-0.275-1.125c-0.092-0.362-0.171-0.726-0.279-1.085c-0.112-0.369-0.251-0.726-0.38-1.089c-0.127-0.354-0.244-0.711-0.388-1.06c-0.143-0.34-0.307-0.666-0.464-0.998c-0.168-0.355-0.327-0.715-0.514-1.064c-0.171-0.321-0.366-0.624-0.552-0.936c-0.203-0.34-0.394-0.684-0.616-1.015c-0.234-0.351-0.493-0.68-0.745-1.015c-0.205-0.272-0.393-0.549-0.608-0.815c-0.489-0.594-1.002-1.167-1.548-1.71l-116.36-116.363c-9.086-9.089-23.822-9.089-32.912,0c-9.089,9.089-9.089,23.824,0,32.912l76.634,76.639H23.273C10.42,232.729,0,243.149,0,256.002c0,12.853,10.42,23.273,23.273,23.273h409.272l-76.636,76.634c-9.089,9.089-9.089,23.824,0,32.913c4.544,4.544,10.501,6.817,16.457,6.817c5.956,0,11.913-2.271,16.455-6.817l116.36-116.36c0.546-0.543,1.06-1.116,1.548-1.711c0.216-0.264,0.403-0.543,0.608-0.813c0.251-0.335,0.51-0.664,0.745-1.015c0.223-0.33,0.414-0.675,0.616-1.015c0.186-0.312,0.382-0.614,0.552-0.936c0.186-0.351,0.346-0.709,0.514-1.066c0.157-0.332,0.321-0.658,0.464-0.998c0.144-0.349,0.261-0.706,0.388-1.06c0.129-0.362,0.268-0.718,0.38-1.089c0.107-0.358,0.188-0.721,0.279-1.085c0.095-0.374,0.199-0.743,0.275-1.125c0.084-0.422,0.133-0.849,0.194-1.275c0.047-0.326,0.109-0.647,0.143-0.976c0.15-1.53,0.15-3.07,0-4.6C511.854,253.372,511.792,253.051,511.746,252.725z" />
    </svg>
);

// Upload Icon
const UploadIcon = () => (
    <svg
        height="35px"
        width="35px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 12L12 16M12 16L16 12M12 16V4M4 20H20"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
function GithubIcon({ size = 64, color = "#fff" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2A10 10 0 008.84 21.5c.5.08.66-.23.66-.5V19.31C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 005 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 011.53 1 2.15 2.15 0 002.91.83 2.16 2.16 0 01.63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 011-2.71 3.58 3.58 0 01.1-2.64s.84-.27 2.75 1a9.63 9.63 0 015 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 01.1 2.64 3.87 3.87 0 011 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 01.69 1.85V21c0 .27.16.59.67.5A10 10 0 0012 2z" />
        </svg>
    );
}

function ExternalLinkIcon({ size = 64, color = "#ffffff" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="-1.2 -1.2 26.4 26.4"
            fill="none"
            stroke={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 4H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5" stroke={color} />
            <path d="M9 15L20 4" stroke={color} />
            <path d="M15 4h5v5" stroke={color} />
        </svg>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="sm:w-1/4 w-full min-h-fit bg-black rounded-2xl mb-4 p-6 border-2 border-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">

            {/* Image */}
            <div className="w-full h-52 rounded-xl bg-cover bg-center mb-6 border-2 border-white" style={{ backgroundImage: `url(${project.image})` }} />

            {/* Title */}
            <h2 className="font-bold text-2xl mb-3 hover:text-green-600 text-white transition cursor-pointer">{project.title}</h2>

            {/* Description */}
            <p className="mb-6 leading-relaxed text-white">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, index) => (
                    <span
                        key={index}
                        className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm cursor-default "
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex justify-center gap-10">
                <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl  hover:scale-110 transition font-semibold"
                >
                    <GithubIcon size={20} color="#fff" />GitHub
                </a>

                <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl  hover:scale-110 transition font-semibold"
                >
                    <ExternalLinkIcon size={20} color="#fff" />Live Demo
                </a>
            </div>
        </div>
    );
}




const projectsData = [
    {
        id: 1,
        title: "VirusViper",
        description:
            "VirusViper, a MERN-based platform with AI chatbot, 3D model, threat detection, and safety tips, won 1st place at Haryana district level..",
        image: "/images/virusviper.png",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "LLM", "LLaMA", "VirusTotal API"],
        github: "https://github.com/eNinja-In/VirusViper",
        demo: "https://virusviper.onrender.com",
    },
    {
        id: 2,
        title: "Liquor Management System",
        description:
            "Liquor Management System using HTML, CSS, and JavaScript for inventory tracking, sales processing, and reports.",
        image: "/images/liquarManagementSystem.png",
        tech: ["HTML", "CSS", "JvaScript"],
        github: "https://github.com/eNinja-In/liquarManagementSystem",
        demo: "https://eninja-in.github.io/liquarManagementSystem",
    },
    {
        id: 3,
        title: "AI Chat Assistant",
        description:
            "A ChatGPT-powered AI assistant built with OpenAI API, React, and vector search.",
        image: "/images/project3.jpg",
        tech: ["React", "OpenAI API", "Node.js", "Express", "Pinecone"],
        github: "https://github.com/user/ai-chat",
        demo: "https://ai-chat.com",
    },
    {
        id: 4,
        title: "AI Chat Assistant",
        description:
            "A ChatGPT-powered AI assistant built with OpenAI API, React, and vector search.",
        image: "/images/project3.jpg",
        tech: ["React", "OpenAI API", "Node.js", "Express", "Pinecone"],
        github: "https://github.com/user/ai-chat",
        demo: "https://ai-chat.com",
    },
];
