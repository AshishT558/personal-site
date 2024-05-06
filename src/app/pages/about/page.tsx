import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import BikePic from "/public/profile-bike.jpg"
import TennisPic from "/public/profile-tennis.jpg"
import GithubIcon from "/public/github-icon.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import NavBar from "@/components/NavBar";

export default function AboutPage() {
    return (
    <main>
      <div id="main_content" className="grid grid-cols-2 mt-10 place-items-center">
         <div id="title_and_description_box" className="ml-10">
            <h1 className="text-5xl">About Me</h1>
            <p className="pt-5">
            Hi, my name is Ashish Thomas and I am studying Computer Science with a concentration in Artificial Intelligence at Northeastern University. 
            My interests include solving intricate problems by utilizing coding solutions, working with teams on projects, as well as the intersection between hardware and software. 
            Through my coursework I have become passionate about artificial intelligence and machine learning, and am always looking to learn!
            </p>

            <h1 className="text-3xl pt-20">Contact</h1>
            <div id="contact_site_icons" className="flex flex-row space-x-5">
               <a 
               target="_blank" 
               rel="noopener noreferrer" 
               href={"https://github.com/AshishT558"}>
                  <Image id="Github Icon" className="rounded-full mt-5" src={GithubIcon} width={50} height={50} alt="github icon"></Image>
                  </a>
               <a 
               target="_blank" 
               rel="noopener noreferrer" 
               href={"https://www.linkedin.com/in/ashish-thomas-neu/"}>
               <Image id="Linked Icon" className=" mt-5" src={LinkedInIcon} width={50} height={50} alt="github icon"></Image>
                  </a>
            </div>
         </div>
         <div id="photos" className="">
            <Image id="Profile Photo" className="border-2" src={ProfilePic} width={500} height={500} alt="profile photo"></Image>
            {/* <Image id="Biking Photo" className="border-2" src={BikePic} width={500} height={500} alt="profile photo"></Image> */}
            <Image id="Tennis Photo" className="border-2 ml-20 mt-1" src={TennisPic} width={500} height={500} alt="profile photo"></Image>
         </div>
      </div>
      
    </main>);
  }