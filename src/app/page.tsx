import Button from "@/components/button";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { useState } from "react";
import Image from "next/image";
import AboutPage from "./pages/about/page";
import "@/app/animations.css"
import PreviewPage from "@/components/PreviewPage";
import LinkedInProfilePic from "/public/linkedinphoto.jpeg"
import GithubIcon from "/public/github-icon.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Home() {
  return (
    <main className="scroll-smooth fade-in">
      <div id="landing_page" className="h-screen flex flex-col items-center justify-center pb-20">
        <h1 className="text-7xl pb-5">Hello, I'm Ashish</h1>
        <p className="text-lg pb-20">
          Software Development • Data Science • Artificial Intelligence • Machine Learning
          </p>
          <div className="space-x-20">
            <ButtonLink text="About Me" page="/#about_preview"></ButtonLink>
            <ButtonLink text="Experience" page="/#experience_preview"></ButtonLink>
            <ButtonLink text="Projects" page="/#projects_preview"></ButtonLink>
          </div>
      </div>
        
      {/* About Preview */}
      <div id="about_preview" className="h-screen">
        <PreviewPage
        title="About Me"
        description="Hi, my name is Ashish Thomas and I am studying Computer Science with a concentration in Artificial Intelligence at Northeastern University. 
        My interests include solving intricate problems by utilizing software solutions, working with teams on end to end projects, as well as the intersection between hardware and software. 
        Through my coursework I have become passionate about artificial intelligence and machine learning, and am always looking to learn."
        reverse={false}
        content=
        <Image id="Profile Photo" className="rounded-full border-2" src={LinkedInProfilePic} width={250} height={500} alt="profile photo"></Image>
        main="/pages/about"
        ></PreviewPage>
      </div>

      {/* Experience Preview */}
      <div id="experience_preview" className="h-screen">
        <PreviewPage
        title="Experience"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        
        reverse={true}
        content=<PlaceholderImage></PlaceholderImage>
        main="/pages/experience"
        ></PreviewPage>
      </div>

      {/* Projects Preview */}
      <div id="projects_preview" className="h-screen">
        <PreviewPage
        title="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        
        reverse={false}
        content=<PlaceholderImage></PlaceholderImage>
        main="/pages/projects"
        ></PreviewPage>
      </div>

    </main>
  );
}

