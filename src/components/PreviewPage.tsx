import Link from "next/link";
import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";

interface Props {
    title: string;
    description: ReactNode;
    reverse: boolean;
    content: ReactNode;
    main: string;
    top: string;
    bottom: string;
}

export default function PreviewPage({title, description, reverse, content, main, top, bottom} : Props) {
    if(!reverse) {
        return (
            <main className="h-screen flex flex-col justify-between">
                <div className="invisible lg:visible grid place-items-center mt-5">
                    <Link className="" href={top}><span>&#x21d1;</span></Link>
                </div>
                <div className="lg:grid lg:grid-cols-2 place-items-center">
                    <div id="left_box" className="mr-10 ml-10 mt-40 lg:mt-0 lg:ml-20 flex flex-col space-y-10">
                        <h1 className="text-5xl">{title}</h1>
                        <div id="description" className="">
                            {description}
                        </div>
                        <div id="main_page_button">
                            <ButtonLink text=<span>More &#187;</span> page={main}></ButtonLink>
                        </div>
                    </div>
                    <div id="right_box" className="invisible lg:visible">
                        {content}
                    </div>
                </div>
                <div className="invisible lg:visible grid place-items-center mb-5">
                    <Link className={`invisible lg:visible ${bottom === "end" ? 'visibility: hidden' : 'visibility: visible'}`} href={bottom}><span>&#x21d3;</span></Link>
                </div>
            </main>);
    }
    else {
        return (
            <main className="h-screen flex flex-col justify-between">
                <div className="invisible lg:visible grid place-items-center mt-5">
                    <Link className="" href={top}><span>&#x21d1;</span></Link>
                </div>
                <div className="lg:grid lg:grid-cols-2 place-items-center">
                    <div id="left_box" className="hidden lg:list-item">
                        {content}
                    </div>
                    <div id="right_box" className="lg:mb-0 mb-80 lg:mr-20 mx-10 mt-[9rem] flex flex-col space-y-10">
                        <h1 className="text-5xl">{title}</h1>
                        <div id="description" className="">
                            {description}
                        </div>
                        <div id="main_page_button">
                            <ButtonLink text=<span>More &#187;</span> page={main}></ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="invisible lg:visible grid place-items-center mb-5">
                    <Link className={`invisible lg:visible ${bottom === "end" ? 'visibility: hidden' : 'visibility: visible'}`} href={bottom}><span>&#x21d3;</span></Link>
                </div>
            </main>);
    }
}