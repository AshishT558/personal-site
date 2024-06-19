import { ReactNode } from "react";
import Image from "next/image";

interface Props {
    name: string;
    years: string;
    image: ReactNode;
    type: string;
    text: string;
}

export default function EducationBox({name, years, image, type, text} : Props) {
    return (
        <div id="education_box_content" className="flex flex-col justify-center items-center">
            <div id="logo" className="hover:scale-105">
                {image}
            </div>
            <div className="pt-5 flex flex-col justify-center items-center text-center">
                <h1> {name} </h1>
                <h2> {type} </h2>
                <h3> {years} </h3>
                <div id="text" className="pt-5 ml-5 max-w-[20rem]">
                    {text}
                </div>
            </div>
        </div>
    )

}