import Link from "next/link";
import { NavLinks } from "./NavLinks";

export default function NavBar() {
    return (
        <div className="flex justify-center pt-5">
            <ul className="flex flex-row space-x-10">
                {NavLinks.map((link, index) => (
                    <Link 
                    key={index}
                    href={link.path}>
                        {link.name}
                    </Link>
                ))}
            </ul>
        </div>    
    )
}