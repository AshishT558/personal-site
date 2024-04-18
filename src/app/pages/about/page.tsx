import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import GithubIcon from "/public/github-icon.webp"

export default function AboutPage() {
    return (
    <main>
      <div id="main_content" className="grid grid-cols-2">
         <div id="title_and_description_box" className="flex flex-col">
            <h1 className="text-5xl">About Me</h1>
            <p className="pt-5">
               My name is Ashish, and I'm a student. I have a wonderful girlfriend named Bella. She is the light and love of my life.
            </p>
         </div>
         <Image id="Profile Photo" className="border-2" src={ProfilePic} width={500} height={500} alt="profile photo"></Image>
      </div>
      
    </main>);
  }

  {/* <Image id="Github Icon" className="rounded-full" src={GithubIcon} width={50} height={50} alt="github icon"></Image> */}