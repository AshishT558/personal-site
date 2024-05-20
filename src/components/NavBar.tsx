"use client";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import "@/app/animations.css"

export default function NavBar() {
    return (
        <div className="flex justify-center pt-5 bg-blue-600 fade-in sticky top-0">
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

                <select id="dropdown" className="lg:hidden bg-blue-600 mb-5 mr-[5rem]">
                    <option>Home</option>
                    <option>About</option>
                    <option>Experience</option>
                    <option>Projects</option>
                </select>
        </div>    
    )
}