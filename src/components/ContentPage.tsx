import { ReactNode } from "react";
import "@/app/animations.css"

interface Props {
    title: string;
    children: ReactNode;
}


export default function ContentPage({title, children} : Props) {
    return (
        <main className="fade-in">
            <div id="main_centered_content" className="flex flex-col items-center justify-center">
                <h1 id="title" className="hidden text-5xl lg:text-7xl mt-20 mb-10">
                    {title}
                </h1>
                <div className="mt-20">
                    {children}
                </div>
            </div>
        </main>
    );
}