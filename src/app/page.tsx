import Button from "@/components/button";
import PageLink from "@/components/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>
        Hello World
      </p>
      <PageLink text="About Me" page="/about_me"></PageLink>
      <Button text="hello"></Button>
    
    </main>
  );
}

