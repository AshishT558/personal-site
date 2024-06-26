"use client";
import { ReactNode } from "react";
import Modal from "react-modal";
import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import "@/app/animations.css"
import Button from "./button";

interface Props {
    title: string;
    company: string;
    logo: ReactNode;
    content: ReactNode;
}

const ExperienceBox = ({title, company, logo, content} :Props) => {
    const [isOpen, setIsOpen] = useState(false)

    // Disables Background Scrolling whilst Modal is open
    // if (typeof window != 'undefined' && window.document) {
    //     document.body.style.overflow = 'hidden';
    // }

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <div className="border-2 rounded-lg hover:scale-105 hover:border-blue-600">
                <div className="flex flex-row">
                    <div className="">
                        {logo}
                    </div>
                    <div className="pl-4 pr-4 flex flex-col">
                        <div className="">
                            {title}
                        </div>
                        <div className="pl-4 italic">
                            @ {company}
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
            isOpen={isOpen} 
            onRequestClose={() => setIsOpen(false)} 
            className="h-screen flex flex-row items-center justify-end" 
            shouldCloseOnEsc={false}
            style={{ overlay: { backgroundColor: 'transparent' } }}
            shouldFocusAfterRender={false}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={false}>
                <div className="flex flex-col items-center bg-slate-500 border-2 border-white-500 lg:max-h-[500px] lg:max-w-[450px] max-h-[400px] rounded-lg lg:mr-[10rem] lg:mb-[10rem] mr-10 ml-10 px-5 overflow-y-scroll">
                    <div className="bg-slate-800 m-2 px-2 rounded-lg text-center flex flex-col lg:flex-row lg:gap-x-2">
                        <h1 className="">{title}</h1>
                        <h2> @ </h2>
                        <h3>{company}</h3>
                    </div>
                    <div className="flex flex-col space-y-5">
                        {content}
                    </div>
                    <button 
                    onClick={() => setIsOpen(false)}  
                    className="sticky bottom-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  
                    >Close</button>
                </div>
                
            </Modal>
        </div>
    );
}

export default ExperienceBox;