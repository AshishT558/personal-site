"use client";
import { ReactNode } from "react";
import Modal from "react-modal";
import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import "@/app/animations.css"

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
        <div onClick={() => setIsOpen(!isOpen)}>
            <div className="border-2 rounded-lg hover:scale-105">
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
            onRequestClose={() => setIsOpen(!isOpen)} 
            className="h-screen flex flex-row items-center justify-end" 
            shouldCloseOnEsc={false}
            style={{ overlay: { backgroundColor: 'transparent' } }}
            shouldCloseOnOverlayClick={false}>
                <div className="flex flex-col items-center bg-slate-500 h-2/5 w-1/4 rounded-lg mr-20">
                    <h1 className="text-nowrap">{title} @ {company}</h1>
                    {content}
                    <PlaceholderImage></PlaceholderImage>
                    content
                    <PlaceholderImage></PlaceholderImage>
                    <button 
                    onClick={() => setIsOpen(!isOpen)}  
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  
                    >Close Modal</button>
                </div>
                
            </Modal>
        </div>
    );
}

export default ExperienceBox;