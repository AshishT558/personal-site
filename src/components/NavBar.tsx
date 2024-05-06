import Link from "next/link";
import { NavLinks } from "./NavLinks";
import "@/app/animations.css"

export default function NavBar() {
    return (
        <div className="flex justify-center pt-5 bg-blue-600 fade-in">
            <ul className="pb-5 flex flex-row space-x-10">
                {NavLinks.map((link, index) => (
                    <Link 
                    key={index}
                    href={link.path}
                    className="hover:text-black hover:underline underline-offset-8 focus:underline underline-offset-8">
                        {link.name}
                    </Link>
                ))}
            </ul>
        </div>    
    )
}