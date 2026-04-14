import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar';

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Shivansh_Resume.pdf";
        link.click();
    };

    return (
        <>
            <section className="w-full xl:min-h-screen bg-[#0f172a] text-white flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-10 lg:px-20 gap-10 pt-24 pb-16 lg:pb-24 border-b border-white/10">
                {/* LEFT PART */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

                    {/* Badge */}
                    <div className="inline-block px-5 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                        • Open to SDE roles · Final year B.Tech
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold leading-tight">
                        Hi, I’m <span className="text-indigo-400">Shivansh</span> <br />
                        Kumar
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
                        Mern Stack developer · Java Developer · System Design Learner · MNC Aspirant
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0">
                        Full Stack Developer | Java · Spring Boot · React · Node.js
                        Building scalable backends and clean frontend experiences.
                        Open to SDE · Full Stack · Java Developer roles.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        <Link to="/projects">
                            <button className="px-10 py-2 cursor-pointer border border-gray-500 rounded-md hover:bg-white hover:text-black transition">
                                View projects
                            </button>
                        </Link>

                        <button
                            onClick={handleDownload}
                            className="px-6 py-2 cursor-pointer border border-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-500 hover:text-white transition">
                            Download resume
                        </button>
                    </div>

                </div>

                {/* RIGHT PART */}
                <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end mt-8 lg:mt-0">

                    {/* Circle Profile */}
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-indigo-500 overflow-hidden shadow-lg shadow-indigo-500/20 hover:scale-105 transition duration-300">
                        <img
                            src="/profile.png"
                            alt="Shivansh Kumar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Stats */}
                    {/* <div className="flex gap-4">
                        <div className="bg-[#1e293b] px-6 py-4 rounded-lg text-center">
                            <h2 className="text-indigo-400 font-bold text-xl">400+</h2>
                            <p className="text-gray-400 text-sm">LeetCode</p>
                        </div>

                        <div className="bg-[#1e293b] px-6 py-4 rounded-lg text-center">
                            <h2 className="text-green-400 font-bold text-xl">5+</h2>
                            <p className="text-gray-400 text-sm">Projects</p>
                        </div>

                        <div className="bg-[#1e293b] px-6 py-4 rounded-lg text-center">
                            <h2 className="text-yellow-400 font-bold text-xl">7.95</h2>
                            <p className="text-gray-400 text-sm">CGPA</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Hero