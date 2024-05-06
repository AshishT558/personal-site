import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";

interface Props {
    title: string;
    description: ReactNode;
    reverse: boolean;
    content: ReactNode;
    main: string;
}

export default function PreviewPage({title, description, reverse, content, main} : Props) {
    if(!reverse) {
        return (
            <main className="h-screen grid grid-cols-2 place-items-center">
                <div id="left_box" className="mr-10 ml-20 flex flex-col space-y-10">
                    <h1 className="text-5xl">{title}</h1>
                    <div id="description" className="">
                        {description}
                    </div>
                    <div id="main_page_button">
                        <ButtonLink text="More" page={main}></ButtonLink>
                    </div>
                </div>
                <div id="right_box" className="">
                    {content}
                </div>
            </main>);
    }
    else {
        return (
            <main className="h-screen grid grid-cols-2 place-items-center">
                <div id="left_box" className="">
                    {content}
                </div>
                <div id="right_box" className="mr-20 ml-10 flex flex-col space-y-10">
                    <h1 className="text-5xl">{title}</h1>
                    <div id="description" className="">
                        {description}
                    </div>
                    <div id="main_page_button">
                        <ButtonLink text="More" page={main}></ButtonLink>
                    </div>
                </div>
            </main>);
    }
}