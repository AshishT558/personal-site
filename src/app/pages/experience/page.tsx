import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";
import ExperienceBox from "@/components/ExperienceBox";
import MBTALogo from "/public/MBTALogo.webp"
import OasisLogo from "/public/oasis_logo.png"
import JaybotsLogo from "/public/jaybots_logo.webp"
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import NEULogo from "/public/alt_neu_logo.png"
import JayLogo from "/public/jay_logo.jpeg"
import DCCLogo from "/public/dcc_logo.jpeg"
import PythonLogo from "/public/python_logo.png"
import TableauLogo from "/public/tableau_logo.webp"
import JupyterLogo from "/public/jupyter_logo.png"
import SQLLogo from "/public/MSSQL_logo.jpeg"
import ExcelLogo from "/public/excel_logo.png"
import EducationBox from "@/components/EducationBox";
import SkillBox from "@/components/SkillBox";

export default function ExperiencePage() {

    return (
        <ContentPage title={"Experience"}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-5xl">Technical Work</h1>
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
                            title="Data Analytics" 
                            company="MBTA" 
                            logo={<Image id="MBTA Photo" className="rounded-l-[5px] border-r-[1.5px] border-white-500" src={MBTALogo} width={50} height={50} alt="mbta photo"></Image>}
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> Januray 2024 - June 2024</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        As a co-op at the Massachussetts Bay Transportation Authority, I focused primarily on automation of data retrieval, cleaning, and analysis. 
                                        I also led data visualization and reporting efforts to find data-driven insights about railway part procurement that were shared across departments in the Authority.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid lg:grid-cols-5 lg:gap-x-8 gap-y-8">
                                            <SkillBox name={"Python"} image={PythonLogo}></SkillBox>
                                            <SkillBox name={"Tableau"} image={TableauLogo}></SkillBox>
                                            <SkillBox name={"Jupyter"} image={JupyterLogo}></SkillBox>
                                            <SkillBox name={"SQL"} image={SQLLogo}></SkillBox>
                                            <SkillBox name={"Excel"} image={ExcelLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Rebuilt existing data pipeline with Python | Selenium | Pandas for extraction and transformation of 100,000+ inventory records from the MBTA 
                                                Materials database, eliminating manual data refresh that would take hours.
                                            </p>
                                            <p>
                                                • Led data engineering with maintenance of Tableau Prep and SQL workflows to ensure data validity and build new data sources for downstream analysis. 
                                            </p>
                                            <p>
                                                • Utilized Tableau Desktop to design insightful data visualizations of financial and materials data held by the MBTA and third party rail companies and shared 
                                                these across the Authority with Tableau Server. 
                                            </p>
                                        </div> 
                                    </div>
                                    

                                </div>
                            }/>
                            </a>

                            <a>
                            <ExperienceBox 
                            title="Software Developer" 
                            company="Oasis NEU" 
                            logo={<Image id="Oasis Photo" className="rounded-l-[5px] border-r-2 border-b-[1.5px] border-white-500" src={OasisLogo} width={50} height={50} alt="oasis photo"></Image>}
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> Januray 2024 - June 2024</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        As a co-op at the Massachussetts Bay Transportation Authority, I focused primarily on automation of data retrieval, cleaning, and analysis. 
                                        I also led data visualization and reporting efforts to find data-driven insights about railway part procurement that were shared across departments in the Authority.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid lg:grid-cols-5 lg:gap-x-8 gap-y-8">
                                            <SkillBox name={"Python"} image={PythonLogo}></SkillBox>
                                            <SkillBox name={"Tableau"} image={TableauLogo}></SkillBox>
                                            <SkillBox name={"Jupyter"} image={JupyterLogo}></SkillBox>
                                            <SkillBox name={"SQL"} image={SQLLogo}></SkillBox>
                                            <SkillBox name={"Excel"} image={ExcelLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Rebuilt existing data pipeline with Python | Selenium | Pandas for extraction and transformation of 100,000+ inventory records from the MBTA 
                                                Materials database, eliminating manual data refresh that would take hours.
                                            </p>
                                            <p>
                                                • Led data engineering with maintenance of Tableau Prep and SQL workflows to ensure data validity and build new data sources for downstream analysis. 
                                            </p>
                                            <p>
                                                • Utilized Tableau Desktop to design insightful data visualizations of financial and materials data held by the MBTA and third party rail companies and shared 
                                                these across the Authority with Tableau Server. 
                                            </p>
                                        </div> 
                                    </div>
                                    

                                </div>
                            }/>
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

                <div className="mt-[10rem] flex flex-col items-center justify-center">
                    <h1 className="text-3xl lg:text-5xl">Education</h1>
                    <div className="lg:grid lg:grid-cols-3 gap-x-[5rem] space-y-10 lg:space-y-0 mt-10">
                        <div className="">
                            <EducationBox
                            image={
                                <Image id="Linked Icon" className="rounded-full" src={NEULogo} width={200} height={200} alt="github icon"></Image>
                            }
                            name="Northeastern University"
                            years="2022 - Present"
                            text="Pursuing a Bachelor of Science in Computer Science "
                            />
                        </div>
                        <div className="">
                            <div className="">
                                <EducationBox
                                image={
                                    <Image id="Linked Icon" className="rounded-full" src={DCCLogo} width={200} height={100} alt="github icon"></Image>
                                }
                                name="Dutchess Community College"
                                years="2020 - 2022"
                                text="text"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <EducationBox
                                image={
                                    <Image id="Linked Icon" className="rounded-full" src={JayLogo} width={200} height={200} alt="github icon"></Image>
                                }
                                name="John Jay Senior High School"
                                years="2018 - 2022"
                                text="text"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ContentPage>
    );
}