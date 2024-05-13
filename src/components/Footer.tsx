import GithubIcon from "/public/github-icon.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-black-500 flex flex-row pb-4">
            <p className="pt-4 ml-3">
            &#x24B8; Ashish Thomas | 2024 | 
            </p>
            <div id="contact_site_icons" className="flex flex-row space-x-5 pl-3">
               <a 
               target="_blank" 
               rel="noopener noreferrer" 
               href={"https://github.com/AshishT558"}>
                  <Image id="Github Icon" className="rounded-full mt-3" src={GithubIcon} width={30} height={30} alt="github icon"></Image>
                  </a>
               <a 
               target="_blank" 
               rel="noopener noreferrer" 
               href={"https://www.linkedin.com/in/ashish-thomas-neu/"}>
               <Image id="Linked Icon" className="mt-3.5" src={LinkedInIcon} width={25} height={25} alt="github icon"></Image>
                  </a>
            </div>
        </div>
    );
}