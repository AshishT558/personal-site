import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    text: ReactNode;
    page: string;
}

export default function ButtonLink({text, page}: Props) {
    return (
            <Link 
                href={page}
                className="hover:scale-105 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                {text}
            </Link>    
    
    )
}