import { StaticImageData } from "next/image";
import  Image from "next/image";

interface Props {
    name: string;
    image: StaticImageData;
}

export default function SkillBox({name, image} : Props) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[50px] h-[50px] flex justify-center">
                <Image className="hover:scale-125 rounded" src={image} id={name} alt={name} width={50} height={50}></Image>
            </div>
            
            <h1 className="pt-2">{name}</h1>
        </div>
        
    )
}