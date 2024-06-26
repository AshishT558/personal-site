"use client";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import "@/app/animations.css"

export default function NavBar() {
    const[isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    return (
        <div className="flex justify-center pt-5 bg-blue-600 fade-in z-40 sticky top-0">
            <ul className="invisible lg:visible pb-5 flex flex-row gap-10">
                    {NavLinks.map((link, index) => (
                        <Link 
                        key={index}
                        href={link.path}
                        className="hover:text-black hover:underline underline-offset-8 focus:underline underline-offset-8">
                            {link.name}
                        </Link>
                    ))}
                </ul>

                <div id="dropdown" className="fixed top-0 right-5 lg:hidden relative inline-block">
                    <button onClick={toggleDropdown}className="text-3xl">&#8801;</button>
                    {isOpen && (
                        <div className="fixed top-[3.5rem] right-2 bg-blue-600 rounded py-2">
                            <ul className="flex flex-col gap-y-2 items-center">
                                
                                <li className="px-2">
                                    <a href="/" onClick={closeDropdown}>
                                    Home
                                    </a>
                                </li>
                                <div className="w-full border-[0.5px]"></div>
                                <li className="px-2">
                                    <a href="/pages/about" onClick={closeDropdown}>
                                    About
                                    </a>
                                </li>
                                <div className="w-full border-[0.5px]"></div>
                                <li className="px-2">
                                    <a href="/pages/experience" onClick={closeDropdown}>
                                    Experience
                                    </a>
                                </li>
                                <div className="w-full border-[0.5px]"></div>
                                <li className="px-2">
                                    <a href="/pages/projects" onClick={closeDropdown}>
                                    Projects
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
        </div>    
    )
}