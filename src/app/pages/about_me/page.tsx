import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import GithubIcon from "/public/github-icon.webp"

export default function AboutPage() {
    return (
    <main className="flex flex-col items-center justify-between p-24">

       <Image id="Github Icon" className="rounded-full" src={GithubIcon} width={50} height={50} alt="github icon"></Image>

       <ButtonLink text="Home" page="/"></ButtonLink>
    </main>);
  }