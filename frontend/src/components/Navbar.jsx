import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Left side: Logo and text */}
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        src="/path-to-your-logo.png"
                        alt="Logo"
                        className="w-10 h-10 mr-2"
                    />
                    {/* Text */}
                    <span className="text-xl font-semibold">My Portfolio</span>
                </div>

                {/* Hamburger menu for smaller screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Right side: Navigation links */}
                <div
                    className={`md:flex space-x-4 ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    {/* Home link */}
                    <Link to="/" className="text-gray-800 hover:text-blue-600">
                        Home
                    </Link>
                    {/* Projects link */}
                    <Link
                        to="/projects"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        Projects
                    </Link>
                    {/* About link */}
                    <Link
                        to="/about"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        About
                    </Link>
                    {/* Contact link */}
                    <Link
                        to="/contact"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
