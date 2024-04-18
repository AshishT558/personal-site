import Button from "@/components/button";
import ButtonLink from "@/components/ButtonLink";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center pb-20">
        <h1 className="text-7xl pb-5">Hello, I'm Ashish</h1>
        <p className="text-lg pb-20">
          Software Development • Data Science • Artificial Intelligence • Machine Learning
        </p>
        <div className="space-x-20">
          <ButtonLink text="About Me" page="/pages/about"></ButtonLink>
          <ButtonLink text="Experience" page="/pages/experience"></ButtonLink>
          <ButtonLink text="Projects" page="/pages/projects"></ButtonLink>
        </div>
      
    
    </main>
  );
}

