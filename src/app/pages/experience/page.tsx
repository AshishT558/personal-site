import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";
import ExperienceBox from "@/components/ExperienceBox";
import MBTALogo from "/public/MBTALogo.webp"
import OasisLogo from "/public/oasis_logo.png"
import JaybotsLogo from "/public/jaybots_logo.webp"
import Image from "next/image";

export default function ExperiencePage() {

    return (
        <ContentPage title={"Experience"} children={
            <div className="flex flex-row mt-10 ">
                <div id="time_stamps" className="flex flex-col space-y-10 mr-5 mt-4">
                    <h1 className="">2024</h1>
                    <h1 className="pt-2">2023</h1>
                    <h1 className="pt-2">2022</h1>
                </div>
                <div id="vertical_line" className="border-l-4 border-white-500">
                    <div id="experience_boxes" className="ml-5 flex flex-col space-y-5">

                        <a>
                        <ExperienceBox 
                        title="Data Analytics Co-op" 
                        company="Massachusetts Bay Transportation Authority" 
                        logo={<Image id="MBTA Photo" className="rounded-l-[5px] border-r-[1.5px] border-white-500" src={MBTALogo} width={50} height={50} alt="mbta photo"></Image>}
                        content={"Content"}/>
                        </a>

                        <a>
                        <ExperienceBox 
                        title="Software Developer" 
                        company="Oasis NEU" 
                        logo={<Image id="Oasis Photo" className="rounded-l-[5px] border-r-2 border-b-[1.5px] border-white-500" src={OasisLogo} width={50} height={50} alt="oasis photo"></Image>}
                        content={"Content"}/>
                        </a>

                        <a>
                        <ExperienceBox 
                        title="Software Lead" 
                        company="Jaybots Robotics" 
                        logo={<Image id="Jaybots Photo" className="rounded-l-[5px] border-r-2 border-white-500" src={JaybotsLogo} width={50} height={50} alt="jaybots photo"></Image>}
                        content={"Content"}/>
                        </a>

                    </div>
                </div>
            </div>
            
        }></ContentPage>
    );
}