import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import ProfilePic from "/public/profile-photo.jpg"
import BikePic from "/public/profile-bike.jpg"
import TennisPic from "/public/profile-tennis.jpg"
import GithubIcon from "/public/github-icon.webp"
import LinkedInIcon from "/public/linkedin-icon.png"
import NavBar from "@/components/NavBar";
import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutPage() {
    return (
    <ContentPage title="About Me">
      <div id="Content" className="flex flex-col items-center justify-center">
         <h2>Section 1</h2>
         <PlaceholderImage></PlaceholderImage>
      </div>
    </ContentPage>);
  }