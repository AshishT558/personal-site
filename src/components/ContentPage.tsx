import { ReactNode } from "react";
import "@/app/animations.css"

interface Props {
    title: string;
    children: ReactNode;
}


export default function ContentPage({title, children} : Props) {
    return (
        <main className="fade-in">
            <div id="main_centered_content" className="h-screen flex flex-col items-center justify-center">
                <h1 id="title" className="text-7xl">
                    {title}
                </h1>
                <div className="pt-5">
                    {children}
                </div>
            </div>
        </main>
    );
}