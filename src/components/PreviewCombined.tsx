import PreviewPage from "@/components/PreviewPage";
import LinkedInProfilePic from "/public/linkedinphoto.jpeg"
import MBTALogo from "/public/MBTALogo.webp"
import JaybotsLogo from "/public/jaybots_logo.jpg"
import NEUPic from "/public/neu_logo.jpeg"
import PlaceholderImage from "@/components/PlaceholderImage"
import LinkedExperience from "/public/experiences_linked.jpg"
import LinkedProjects from "/public/projects_linked.jpg"
import LinkedAbout from "/public/aboutme_linked.jpg"
import Link from "next/link";

import Image from "next/image";
export default function PreviewCombined() {
    return (
        <main>
            {/* About Preview */}
            <div id="about_preview" className="h-screen">
                <PreviewPage
                title="Who I Am"
                description="Hi, my name is Ashish Thomas and I am studying Computer Science with a concentration in Artificial Intelligence at Northeastern University. 
                My interests include solving intricate problems by utilizing software solutions, working with teams on artificial intelligence and machine learning projects, as well as the intersection between hardware and software in robotics."
                reverse={false}
                content=
                {<Image id="Profile Photos" className="" src={LinkedAbout} width={700} height={500} alt="profile photo"></Image>}
                main="/pages/about"
                top="/#landing_page"
                bottom="/#experience_preview"
                ></PreviewPage>
            </div>

            {/* Experience Preview */}
            <div id="experience_preview" className="h-screen">
                <PreviewPage
                title="Where I've Been"
                description="Across the last 6 years I have been exposed to many different technologies in the software development and data science landscapes. 
                From computer science coursework to software clubs to internship roles, I have pursued learning and application of my studies in a variety of ways.
                As a full-time student, I'm always looking to learn and build on my knowledge with new experiences."
                reverse={true}
                content=
                {<div className="flex flex-row">
                {/* <Image id="NEU Photo" className="w-40 h-40 object-none object-[50%] rounded-full" src={NEUPic} width={250} height={500} alt="profile photo"></Image>
                <Image id="T Photo" className="w-40 h-40 object-none object-[50%] rounded-full" src={MBTALogo} width={250} height={500} alt="profile photo"></Image>
                <Image id="Jaybots Photo" className="w-40 h-40 object-none object-[50%] rounded-full" src={JaybotsLogo} width={250} height={500} alt="profile photo"></Image> */}
                <Image id="Experiences Photos" className="" src={LinkedExperience} width={800} height={500} alt="profile photo"></Image>
                </div>}
                main="/pages/experience"
                top="/#about_preview"
                bottom="/#projects_preview"
                ></PreviewPage>
            </div>

            {/* Projects Preview */}
            <div id="projects_preview" className="h-screen">
                <PreviewPage
                title="What I've Done"
                description="In addition to work experience, much of my technical skills come from my personal projects. 
                Following the project lifecycle all the way from planning and design to testing and production, I have built applications based on topics I enjoy on a personal level.
                Working on these projects, I have learned software and design skills that I hope to put into use in industry."
                reverse={false}
                content=
                {<div className="flex flex-row">
                <Image id="Projects Photos" className="" src={LinkedProjects} width={800} height={500} alt="profile photo"></Image>
                </div>}
                main="/pages/projects"
                top="/#experience_preview"
                bottom="end"
                ></PreviewPage>
            </div>
        </main>
    );
}