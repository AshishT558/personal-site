import Link from "next/link";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import TennisPic from "/public/profile-tennis.jpg"
import GithubIcon from "/public/github-icon.webp"
import MBTA from "/public/MBTALogo.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import Instagram from "/public/instagram.webp"
import LinkOut from "/public/newtab.jpeg"
import ContentPage from "@/components/ContentPage";

export default function AboutPage() {
    return (
    <ContentPage title="About Me">
      <div id="Content" className="flex flex-col">

        <div className="mx-5 flex flex-col">
          <div className="mt-[2rem] flex flex-col gap-y-10 text-center lg:grid lg:grid-cols-2 lg:gap-x-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center ">
                  <h1 className="text-3xl lg:text-5xl mb-10">About Me</h1>
                  <p className="w-[23rem] text-center">Hi! I'm Ashish, and I'm a student at Northeastern University in Boston, Massachussetts. 
                    I am studying Computer Science with a concentration in Artificial Intelligence. I'm very interested in technology and understanding the intersection between
                    hardware and software in my projects and coursework. I love learning new things and building on my skills with new technologies.
                    I'm originally from New York, and love biking, playing tennis, and learning how to cook new meals! </p>
                    <h1 className="text-2xl lg:text-3xl mt-[5rem]"> Where I Am </h1>
                    <p className="mt-[2rem] w-[23rem]">
                      I just finished my co-op at the Massachusetts Bay Transportation Authority <span><a target="_blank" rel="noopener noreferrer" href="https://www.mbta.com/"><Image className="rounded inline hover:scale-105" src={MBTA} alt={"mbta pic"} width={20} height={10}></Image></a> </span>
                         and am returning to classes for the Fall 2024 semester. I am excited to take on a new position as a Community Group Leader at Northeastern's South Asian Intervarsity 
                         <span> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/neusaiv/"><Image className="rounded inline hover:scale-105" src={Instagram} alt={"instagram pic"} width={20} height={10}></Image></a></span> . As I start this academic year, I am looking for open internship roles
                         in Software Engineering, Data Science, or Machine Learning for the 2025 Spring or Summer.  
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
            <div id="photo_grid" className="flex flex-col justify-center items-center gap-y-5">
              <Image className="border" src={TennisPic} alt={"tennis pic"} width={400} height={200}></Image>
              <Image className="border " src={ProfilePic} alt={"bench pic"} width={300} height={200}></Image>
            </div>
          </div>
        </div>
      </div>
    </ContentPage>);
  }