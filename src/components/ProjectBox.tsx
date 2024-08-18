import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import ButtonLink from "./ButtonLink";
import "@/app/animations.css";

interface Props {
    title: string;
    image: StaticImageData;
    Github: string;
    children: ReactNode;
}
export default function ProjectBox({title, image, children, Github} : Props) {
    return (
        // <div className="flex flex-col border hover:scale-105 text-center max-w-[20rem]">
        //     {image}
        //     <h1>{title}</h1>
        //     {children}
        // </div>
        <div>
            <div className="image-container w-[20rem] relative overflow-hidden rounded-lg border-2 border-blue-600">
                <Image
                id="Icon" 
                className="object-cover transition-transform duration-500 ease-in-out" 
                src={image} 
                width={400} 
                height={400} 
                alt="icon">
                </Image>
                <div className="overlay transition-opacity duration-500 ease-in-out absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 text-white">
                    <div className="w-[18rem] text-sm text-center">
                        {children}
                    </div>
                    <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`mt-5 hover:scale-105 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                    ${Github === "" ? 'visibility: hidden' : 'visibility: visible'}`}
                    href={Github}> Check out my code!
                  </a>
                </div>
            </div>
            <h1 className="text-center mt-5"> {title} </h1>
        </div>


        
    )
}