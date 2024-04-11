import Link from "next/link";
import PageLink from "@/components/link";
import { useState } from "react";

export default function Page() {
    return (
    <main className="flex flex-col items-center justify-between p-24">
       <PageLink text="Home" page="/"></PageLink>
    </main>);
  }