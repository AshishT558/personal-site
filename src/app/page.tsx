import Button from "@/components/button";
import PageLink from "@/components/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center pb-20">
        <h1 className="text-7xl pb-5">Hello, I'm Ashish</h1>
        <p className="text-lg pb-20">
          Softare Development • Data Science • Artificial Intelligence • Machine Learning
        </p>
        <div className="space-x-20">
          <PageLink text="About Me" page="/about_me"></PageLink>
          <PageLink text="Experience" page="/about_me"></PageLink>
          <PageLink text="Projects" page="/about_me"></PageLink>
        </div>
      
    
    </main>
  );
}

