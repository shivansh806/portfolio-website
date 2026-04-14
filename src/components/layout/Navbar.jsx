import { Link } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleHireMe = () => {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=shivanshsingh806@gmail.com&su=Hiring Inquiry&body=Hi Shivansh, I want to discuss an opportunity with you.",
            "_blank"
        );
    };

    return (
        <>
            <nav className="w-full bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-700">

                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-lg font-semibold">
                        <span className="text-indigo-400">Shivansh_Kumar</span>
                        <span className="text-gray-400"> / Portfolio</span>
                    </Link>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Center Links */}
                <div
                    className={`${menuOpen ? "flex" : "hidden"
                        } flex-col md:flex md:flex-row gap-4 md:gap-8 text-gray-300 font-medium items-start md:items-center`}
                >
                    <Link to="/about" className="hover:text-white transition">About</Link>
                    <Link to="/skills" className="hover:text-white transition">Skills</Link>
                    <Link to="/projects" className="hover:text-white transition">Projects</Link>
                    <Link to="/contact" className="hover:text-white transition">Contact</Link>

                    <button
                        onClick={handleHireMe}
                        className="w-full md:w-auto border cursor-pointer border-indigo-500 text-indigo-400 px-4 py-1 rounded-md hover:bg-indigo-500 hover:text-white transition"
                    >
                        Hire me
                    </button>
                </div>

            </nav>
        </>
    )
}

export default Navbar