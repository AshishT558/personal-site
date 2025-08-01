import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";
import ExperienceBox from "@/components/ExperienceBox";
import MBTALogo from "/public/MBTALogo.webp"
import OasisLogo from "/public/oasis_logo.png"
import JaybotsLogo from "/public/jaybots_logo.webp"
import ScoutLogo from "/public/neuscout_logo.jpeg"
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import NEULogo from "/public/alt_neu_logo.png"
import AgileLogo from "/public/agile_logo.webp"
import ShopifyLogo from "/public/shopify_logo.webp"
import FigmaIcon from "/public/figma_icon.png"
import LiguidLogo from "/public/liquid_logo.png"
import TJXLogo from "/public/TJX-Logo.png"
import JayLogo from "/public/jay_logo.jpeg"
import DCCLogo from "/public/dcc_logo.jpeg"
import PythonLogo from "/public/python_logo.png"
import TableauLogo from "/public/tableau_logo.webp"
import JupyterLogo from "/public/jupyter_logo.png"
import SQLLogo from "/public/MSSQL_logo.jpeg"
import ExcelLogo from "/public/excel_logo.png"
import DjangoLogo from "/public/django_logo.svg"
import PSSqllogo from "/public/postgresql_logo.png"
import HTMLLogo from "/public/html_logo.png"
import CSSLogo from "/public/css_logo.webp"
import JavaLogo from "/public/java_logo.jpeg"
import RevLogo from "/public/rev_robotics_logo.jpeg"
import TSFlowLogo from "/public/tensorflow_logo.webp"
import GoBuildaLogo from "/public/gobuilda_logo.png"
import hackbeanport from "/public/hackbeanpot.jpeg"
import mithack from "/public/mithack.png"
import EducationBox from "@/components/EducationBox";
import SkillBox from "@/components/SkillBox";
import AtlassianLogo from "/public/atlassian-logo.webp"
import MongoLogo from "/public/mongo-logo.png"
import TypeScriptLogo from "/public/typescript-logo.png"
import ReactLogo from "/public/react-logo.webp"
import CSharpLogo from "/public/csharp-logo.webp"
import "@/app/animations.css";

export default function ExperiencePage() {

    return (
        <ContentPage title={"Experience"}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-5xl lg:pt-10">My Experience</h1>
                <h1 className="text-2xl lg:text-3xl mt-10 lg:mt-20">Technical Work<span className="fade-in inline">: <span className="text-2xl lg:text-3xl text-blue-400">Click for Details</span></span></h1>
                <div className="flex flex-row mt-10 ">
                    <div id="time_stamps" className="flex flex-col space-y-10 mr-5 mt-[5rem]">
                        <h1 className="pt-5">2025</h1>
                        <h1 className="pt-[5rem]">2024</h1>
                        <h1 className="">2023</h1>
                        <h1 className="pb-2">2022</h1>
                    </div>
                    <div id="vertical_line" className="border-l-4 border-white-500">
                        <div id="experience_boxes" className="ml-5 flex flex-col space-y-5">

                            <a>
                            <ExperienceBox 
                            title="Software Engineer Intern" 
                            company="Atlassian" 
                            logo={<Image id="Atlassian Photo" className="rounded-l-[5px] border-r-[1.5px] border-white-500" src={AtlassianLogo} width={50} height={50} alt="tjx photo"></Image>}
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> June 2025 - September 2025</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                            Current SWE Intern at Atlassian working on full-stack updates to the Trello Billing Platform.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-x-8 gap-5">
                                            <SkillBox name={"Typescript"} image={TypeScriptLogo}></SkillBox>
                                            <SkillBox name={"C#"} image={CSharpLogo}></SkillBox>
                                            <SkillBox name={"Mongo"} image={MongoLogo}></SkillBox>
                                            <SkillBox name={"React"} image={ReactLogo}></SkillBox>
                                            <SkillBox name={"SQL"} image={SQLLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Built invoice retrieval endpoints in C# calling MS SQL Server on AWS RDS for enterprise billing support.
                                            </p>
                                            <p>
                                                • Enhanced an internal subscription management tool in TypeScript, reducing on-call incident resolution time.
                                            </p>
                                            <p>
                                            • Ensured backwards compatibility for updates across GraphQL and REST API architecutres

                                            </p>
                                            <p>
                                            • Integrated third-party services like Xero and Salesforce into backend systems for enterprise subscription tracking

                                            </p>
                                        </div> 
                                        </div>
                                    

                                </div>
                            }/>
                            </a>                        

                            <a>
                            <ExperienceBox 
                            title="Data Science Co-op" 
                            company="TJX" 
                            logo={<Image id="TJX Photo" className="rounded-l-[5px] border-r-[1.5px] border-white-500" src={TJXLogo} width={50} height={50} alt="tjx photo"></Image>}
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> Januray 2025 - May 2025</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        As a Data Science Co-op at <span className="text-red-500 hover:text-red-600"><a href="https://www.tjx.com/" target="_blank" rel="noopener noreferrer">The TJX Companies, Inc. &#8599;</a></span> I worked on a mix of ad-hoc requests and machine learning/statistics projects. 
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 gap-5">
                                            <SkillBox name={"Python"} image={PythonLogo}></SkillBox>
                                            <SkillBox name={"Jupyter"} image={JupyterLogo}></SkillBox>
                                            <SkillBox name={"Excel"} image={ExcelLogo}></SkillBox>
                                            <SkillBox name={"SQL"} image={SQLLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                    <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Worked on ad-hoc data analysis projects for Marketing, Finance, and Real Estate teams with Python and Pandas.
                                            </p>
                                            <p>
                                                • Contributed to work on Sierra store-profitability machine learning model using Elastic Net Regression 
                                            </p>
                                            <p>
                                            • Built market expansion simulation covering 600+ potential stores, shared to Finance and Real Estate teams.
                                            </p>
                                        </div> 
                                    

                                </div>
                            }/>
                            </a>

                            <a>
                            <ExperienceBox 
                            title="Software Developer" 
                            company="Scout" 
                            logo={<Image id="Scout Photo" className="rounded-l-[5px] border-r-[1.5px] border-white-500" src={ScoutLogo} width={50} height={50} alt="scout photo"></Image>}
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> August 2024 - December 2024</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        As a Developer at <span className="text-purple-600 hover:text-purple-500"><a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer">Scout &#8599;</a></span>, I worked with a team of designers and developer to implement features and improve the customer experience for our client, <span className="text-green-500 hover:text-green-600"><a href="https://rootedliving.org/" target="_blank" rel="noopener noreferrer">Rooted Living &#8599;</a></span>.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-x-8 gap-5">
                                            <SkillBox name={"Liquid"} image={LiguidLogo}></SkillBox>
                                            <SkillBox name={"Figma"} image={FigmaIcon}></SkillBox>
                                            <SkillBox name={"Agile"} image={AgileLogo}></SkillBox>
                                            <SkillBox name={"CSS"} image={CSSLogo}></SkillBox>
                                            <SkillBox name={"Shopify"} image={ShopifyLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Converting Figma wireframes to an engaging UI/UX through the Shopify platform with HTML/CSS/JavaScript.
                                            </p>
                                            <p>
                                                • Fixing the client’s website performance and interactivity with a ticket system, weekly sprints, and stand-ups. 
                                            </p>
                                            <p>
                                            </p>
                                        </div> 
                                    </div>
                                    

                                </div>
                            }/>
                            </a>

                            <a>
                            <ExperienceBox 
                            title="Data Analytics Co-op" 
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
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-x-8 gap-5">
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
                                    <h1> September 2023 - December 2023</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        I worked with a team of software engineers over a 4 month period to design and build a web application targeted at displaying wait times and order queues for local coffee shops.
                                        I focused on learning new technologies such as the Django framework and worked on the backend of the application.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-5 lg:gap-x-8 gap-5">
                                            <SkillBox name={"Django"} image={DjangoLogo}></SkillBox>
                                            <SkillBox name={"Python"} image={PythonLogo}></SkillBox>
                                            <SkillBox name={"Postgres"} image={PSSqllogo}></SkillBox>
                                            <SkillBox name={"HTML"} image={HTMLLogo}></SkillBox>
                                            <SkillBox name={"CSS"} image={CSSLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Followed an agile workflow across 10+ work sessions experiencing the project lifecycle from design to prototyping to testing with collaboration tools such as 
                                                Miro and Git.
                                            </p>
                                            <p>
                                                • Led backend development connecting the Django framework and a PostgreSQL database and designed a current customer queue display for users.
                                            </p>
                                            <p>
                                                • Built Django templates with HTML and CSS and used the Grubhub API to retrieve and render content based on selected coffee shops.
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
                            content={
                                <div className="flex flex-col items-center space-y-10 text-center">
                                    <h1> September 2020 - July 2022</h1>
                                    <div className="">
                                        <h1 className="underline underline-offset-8"> Abstract </h1>
                                        <p className="mt-5">
                                        I held the Vice President and Software Team Lead roles for the FTC Robotics Team 16700 for a combined 3 years, focusing on improving team efficiency as well as 
                                        building reusable code for the game season tasks. 
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Skills </h1>
                                        <div id="skill logos" className="mt-5 grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 gap-5">
                                            <SkillBox name={"Java"} image={JavaLogo}></SkillBox>
                                            <SkillBox name={"TensorFlow"} image={TSFlowLogo}></SkillBox>
                                            <SkillBox name={"Rev"} image={RevLogo}></SkillBox>
                                            <SkillBox name={"GoBuilda"} image={GoBuildaLogo}></SkillBox>
                                            
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="underline underline-offset-8"> Responsibilities </h1>
                                        <div className="mt-5 text-left flex flex-col gap-y-5 ml-10">
                                            <p>
                                                • Led Team 16700 to Regional Level placement 2/3 years, being awarded the Think and Control awards at multiple levels of competition for innovative design and code. 
                                            </p>
                                            <p>
                                                • Designed autonomous control code utilizing TensorFlow for image recognition on the playing field and OnBot Java for a multidirectional mecanum drive.
                                            </p>
                                            <p>
                                                • Oversaw CAD and parts engineering efforts in a project management role and organized STEM outreach events to share these skills with the community.
                                            </p>
                                        </div> 
                                    </div>
                                    

                                </div>
                            }/>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="mt-[10rem] flex flex-col items-center justify-center">
                    <h1 className="text-2xl lg:text-3xl mb-10">Hackathons</h1>
                    <div className="flex flex-col gap-y-5">
                        <Image id="mitHack Icon" className="rounded-full hover:scale-105" src={mithack} width={200} height={200} alt=" icon"></Image>
                        <div className="border-l-4 border-white-500 h-[10rem] ml-[6rem]"></div>
                        <Image id="hackbeanpot Icon" className="rounded-full hover:scale-105" src={hackbeanport} width={200} height={200} alt=" icon"></Image>
                    </div>
                </div>

                <div className="mt-[10rem] flex flex-col items-center justify-center">
                    <h1 className="text-2xl lg:text-3xl">Education</h1>
                    <div className="space-y-[3rem] mt-10">
                        <div className="">
                            <EducationBox
                            image={
                                <Image id="Linked Icon" className="rounded-full" src={NEULogo} width={200} height={200} alt="github icon"></Image>
                            }
                            name="Northeastern University"
                            years="2022 - Present"
                            type="College"
                            text="I am currently pursuing a Bachelor of Science in Computer Science with a Concentration in Artificial Intelligence and Machine Learning. 
                            With courses such as Object-Oriented Design, Algorithms and Data, and Foundations of Data Science, I have learned software and data science fundamentals."
                            />
                        </div>

                        <div className="border-l-4 border-white-500 h-[15rem] ml-[10.5rem]"></div>

                        <div className="">
                            <div className="">
                                <EducationBox
                                image={
                                    <Image id="Linked Icon" className="rounded-full" src={DCCLogo} width={200} height={100} alt="github icon"></Image>
                                }
                                name="Dutchess Community College"
                                type="Dual-Enrollment"
                                years="2020 - 2022"
                                text="Across the summer of 2020 and the 2020-2022 school years I was dual-enrolled at Dutchess Community College for their Chemistry, Precalculus, and Economics courses.
                                I took these in sync with my high school level courses, and they provided an intro to university level work."
                                />
                            </div>
                        </div>

                        <div className="border-l-4 border-white-500 h-[15rem] ml-[10.5rem]"></div>

                        <div className="">
                            <div className="">
                                <EducationBox
                                image={
                                    <Image id="Linked Icon" className="rounded-full" src={JayLogo} width={200} height={200} alt="github icon"></Image>
                                }
                                name="John Jay Senior High School"
                                type="High School"
                                years="2018 - 2022"
                                text="I was in high school for the 2018-2022 school years, and was involved in a variety of extracurricular activities that propelled me into STEM and community service. 
                                I played Varsity Tennis, led our FTC Robotics Team, and competed in Science Olympiad across my time here."
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ContentPage>
    );
}