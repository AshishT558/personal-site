import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import TennisPic from "/public/profile-tennis.jpg"
import GithubIcon from "/public/github-icon.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import NavBar from "@/components/NavBar";
import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutPage() {
    return (
    <ContentPage title="About Me">
      <div id="Content" className="flex flex-col">

        <div className="mx-5 flex flex-col">
          <div className="mt-[2rem] flex flex-col gap-y-10 text-center lg:grid lg:grid-cols-2 lg:gap-x-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center lg:text-left lg:text-5xl mb-10">About Me</h1>
              <p>Hi! I'm Ashish, and I'm a student at Northeastern University in Boston, Massachussetts. 
                I am studying Computer Science with a concentration in Artificial Intelligence. I'm very interested in technology and understanding the intersection between
                hardware and software in my projects and coursework. I love learning new things and helping others in this pursuit.
                I'm originally from New York, and love biking, playing tennis, and learning how to cook new meals! </p>
                <h1 className="text-2xl lg:text-3xl mt-[5rem]"> My Activities </h1>
                <p className="mt-[2rem]">
                  - Community Group Leader @ South Asian Intervarsity
                  <br></br>
                  - Club Member @ NUAerospace
                </p>
                <h1 className="text-2xl lg:text-3xl mt-[5rem]"> Contact Me </h1>
                <p className="mt-[2rem]">
                  thomas.ash@northeastern.edu
                  <br></br>
                  914-506-9982
                </p>
            </div>
            <div id="photo_grid" className="flex flex-col justify-center items-center lg:gap-y-5">
              <Image className="border" src={TennisPic} alt={"tennis pic"} width={400} height={200}></Image>
              <Image className="border " src={ProfilePic} alt={"bench pic"} width={300} height={200}></Image>
            </div>
          </div>
        </div>
      </div>
    </ContentPage>);
  }