import ContentPage from "@/components/ContentPage";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProjectBox from "@/components/ProjectBox";
import ShoeIcon from "/public/shoe-icon.jpg";
import SpotifyLogo from "/public/spotify.jpeg"
import NotebookLogo from "/public/notebook_logo.jpeg"
import MedBottle from "/public/MedBottle.jpeg"
import Battleship from "/public/battleship_icon.jpeg"
import Shell from "/public/shell_logo.png"
import timeline from "/public/ai-timeline.jpg"
import Coffee from "/public/coffee_cup.jpeg"
import GithubIcon from "/public/github-icon.webp"
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import "@/app/animations.css";

export default function ProjectsPage() {
    return (
        <ContentPage title={"Projects"}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-5xl lg:pt-10">My Projects</h1>
                <ul className="pt-[5rem] flex flex-col gap-y-[5rem] lg:grid lg:grid-cols-2 lg:gap-5">
                    <li className="">
                        <ProjectBox title={"Kicks"} image={ShoeIcon} Github="https://github.com/AshishT558/Kicks-App">
                            Technology: Python, Flask, JavaScript, JSON, Express, MongoDB, React, AWS, HuggingFace, LLMs
                            <br></br> 
                            <br></br>
                            This was a Full-Stack project that I built to provide users with shoe recommendations. I built a backend with Express to prompt a Llama 3.1 Model, using Hugging Face's inference API.
                            I also added a Python-Flask API microservice hosted on AWS EC2 that allows users to retrieve real-time prices for the shoes they are recommended. 
                            <br></br>
                            <br></br>
                            <a  className="hover:scale-105 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                            href="https://www.justkicks.online/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Check out the website!
                            </a>
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"Spotify Playlist Generator"} image={SpotifyLogo} Github="https://github.com/AshishT558/Spotify_Playlist_Analysis">
                            Technology: Python, Pandas, JSON, Jupyter Notebooks, Spotify Web API
                            <br></br> 
                            <br></br>
                            This was a Machine Learning project with a goal of predicting the Spotify playlist a given song would belong to based on the song's audio features. 
                            I extracted audio features for 600,000 songs across 10,000 playlists from Spotify's Web API, visualized and tested feature correlations, and trained and tuned Random Forest, SVM, and K-NN classification models.
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"AI & Deviance"} image={timeline} Github="https://github.com/AshishT558/AI-timeline">
                            Technology: React, Tailwind
                            <br></br> 
                            <br></br>
                            This was a Web Development project focused on technology and human values. It serves to provide readers with a history of AI as well as a look into the normalization of deviance within the field.  
                            <br></br>
                            <br></br>
                            <a  className="hover:scale-105 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                            href="https://ai-in-time.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Check out the website!
                            </a>
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"Your BUJO App"} image={NotebookLogo} Github="https://github.com/AshishT558/BUJO-App">
                            Technology: Java, JavaFX, SceneBuilder, JUnit4
                            <br></br> 
                            <br></br>
                            This was a Software Development project aimed at building a weekly task and event scheduler called a "Bullet Journal" - a quick way to mark down events and track your task completion over a week. 
                            My team and I focused on following object oriented design principles in the JavaFX and SceneBuilder environment and built in extensive testing of our application through JUnit. 
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"Smart Medicine Cabinet"} image={MedBottle} Github="">
                            Technology: Python, Arduino, IBM Watson Visual Recognition, Circuit design
                            <br></br> 
                            <br></br>
                            This was a project at the intersection of hardware and software meant to prevent medicine overdose and assist the elderly. I trained a Watson Visual Recognition model for facial recognition and connected the output of the Python-Watson-API call to an 
                            Arudino integrated circuit that would lock a medicine bottle in place and display messages on an LCD screen. 
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"My Custom Shell"} image={Shell} Github="https://github.com/AshishT558/C-Shell-and-Tokenizer">
                        Technology: C, Python, Makefile
                            <br></br> 
                            <br></br>
                            This was a Software Development project that focused on building a shell in C. I designed a tokenizer to split user inputs into keywords and interpret them as commands, and then created an application to deploy these commands. Supported actions include piping, input/output redirection, and directory creation/maneuvering/deletion. 
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"Algorithm Based BattleSalvo"} image={Battleship} Github="https://github.com/AshishT558/Algorithm-Based-BattleSalvo">
                            Technology: Java, JUnit, Gradle, JaCoCo
                            <br></br> 
                            <br></br>
                            This was a Software project that was centered around building a game called Battlesalvo, similar to the board game BattleShip. I focused on following object oriented design principles and creating a smooth user experience in which they could play the game against an AI Player. Key parts of this project were understanding grid creation and replicating board game actions virtually. 
                        </ProjectBox>
                    </li>
                    <li className="">
                        <ProjectBox title={"Sip 'N Dip"} image={Coffee} Github="https://github.com/Oasis-NEU/f23-group05/tree/main">
                            Technology: Django, Python, SQL, Bootstrap CSS
                            <br></br> 
                            <br></br>
                            This was a Web Development project that I started with a team during my time at OasisNEU for improving wait times and queue information at coffee shops around our campus. We used a PostgreSQL database and the Django framework to pull in and store data from the Grubhub API, allowing us to monitor wait times and provide statistics such as busy hours and customer counts. 
                        </ProjectBox>
                    </li>
                </ul>
                <div className="mt-12">
                    <p> Check out more of my projects on <span className="text-blue-600 hover:text-blue-700"> <a href="https://github.com/AshishT558" target="_blank" rel="noopener noreferrer" >GitHub</a> </span> !</p>
                </div>
            </div>
        </ContentPage>
    );
}