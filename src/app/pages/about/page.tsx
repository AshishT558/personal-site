import Link from "next/link";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import TennisPic from "/public/profile-tennis.jpg"
import LinkedIn from "/public/linkedinphoto.jpeg"
import GithubIcon from "/public/github-icon.webp"
import MBTA from "/public/MBTALogo.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import Instagram from "/public/instagram.webp"
import Scout from "/public/scout_logo.jpeg"
import Boston from "/public/boston.jpeg"
import Boston2 from "/public/boston2.jpeg"
import LinkOut from "/public/newtab.jpeg"
import ContentPage from "@/components/ContentPage";
import TJXLogo from "/public/TJX-Logo.png"
import AtlassianLogo from "/public/atlassian-logo.webp"

export default function AboutPage() {
    return (
    <ContentPage title="About Me">
      <div id="Content" className="flex flex-col">

        <div className="mx-5 flex flex-col">
          <div className="flex flex-col gap-y-10 text-center lg:grid lg:grid-cols-2 lg:gap-x-10">
            <div className="flex flex-col justify-center items-center">
            <Image className="lg:hidden border rounded-full" src={LinkedIn} alt={"bench pic"} width={150} height={200}></Image>

                  <h1 className="mt-10 text-3xl lg:text-5xl lg:pt-10 mb-10">About Me</h1>
                  
                  <p className="w-[23rem] text-center">Hi! I'm Ashish, and I'm a student at Northeastern University in Boston, Massachussetts. 
                    I am studying Computer Science with a concentration in Artificial Intelligence. I'm very interested in technology and understanding the intersection between
                    hardware and software in my projects and coursework. I love learning new things and building on my skills with new technologies.
                    I'm originally from New York, and love biking, playing tennis, and learning new recipes! </p>
                    

                    <h1 className="text-2xl lg:text-3xl mt-[5rem] "> Where I Am </h1>
                    <p className="mt-[2rem] w-[26rem]">
                      I previously completed my co-ops at the MBTA <span><a target="_blank" rel="noopener noreferrer" href="https://www.mbta.com/"><Image className="rounded inline hover:scale-105" src={MBTA} alt={"mbta pic"} width={20} height={10}></Image></a> </span> and The TJX Companies, Inc. <span><a target="_blank" rel="noopener noreferrer" href="https://www.tjx.com/"><Image className="rounded inline hover:scale-105" src={TJXLogo} alt={"tjx pic"} width={20} height={10}></Image></a> </span>, and I'm now working as a Software Engineer Intern at Atlassian <span><a target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com/"><Image className="rounded inline hover:scale-105" src={AtlassianLogo} alt={"atlassian pic"} width={20} height={10}></Image></a> </span>!
                      <br></br><br></br>I am also returning as a Community Group Leader at Northeastern's South Asian Intervarsity 
                         <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/neusaiv/"><Image className="rounded inline hover:scale-105" src={Instagram} alt={"instagram pic"} width={20} height={10}></Image> </a></span>, and am additionally continuing with the PlusOne Masters in CS Program at Northeastern, aiming to graduate in December 2026.
                        <br></br> <br></br>
                         As I continue this academic year, I am looking for open internship or full-time roles in Software Engineering, Data Science, or Machine Learning for 2026. 
                    </p> 
                    <h1 className="text-2xl lg:text-3xl mt-[5rem]"> Contact Me </h1>
                    <p className="mt-[2rem] text-left">
                      <Link className="italic underline underline-offset-4" target="_blank" rel="noopener noreferrer" locale={false} href="/resume.pdf">Resume</Link> &#8599;
                      <br></br>
                      Email: thomas.ash@northeastern.edu
                      <br></br>
                      Phone: 914-506-9982
                      <br></br>
                    </p>
            </div>
            <div id="photo_grid" className="relative lg:ml-10">
              <Image className="ml-5 lg:ml-5 mt-5 lg:absolute border z-30" src={ProfilePic} alt={"bench pic"} width={300} height={200}></Image>
              <Image className="hidden lg:list-item lg:absolute border lg:ml-[15rem] lg:mt-[15rem] z-20" src={Boston} alt={"tennis pic"} width={250} height={200}></Image>
              <Image className="mt-2 lg:absolute border lg:mt-[35rem] lg:ml-5 z-10" src={TennisPic} alt={"tennis pic"} width={350} height={200}></Image>
              <Image className="hidden lg:list-item lg:absolute border lg:mt-[45rem] lg:ml-[18rem] z-0" src={Boston2} alt={"bench pic"} width={220} height={200}></Image>
            </div>
          </div>
        </div>
      </div>
    </ContentPage>);
  }