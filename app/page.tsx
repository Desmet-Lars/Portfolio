'use client'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
    Main,
    AboutMe,
    Info,
    SubTitle,
    ProgramCards,
    ProgramCard, HR, Projects, ProjectCardsContainer, ProjectCard,
} from "@/app/style";
import Header from './header'
import Contact from './contact'

export default function Home() {
    return (

        <div>
            <Header/>
            <Main id="home">
                <section>
                    Lars Desmet
                </section>
            </Main>
            <Info>
                <AboutMe id="about-me">
                    <h1>About</h1>
                    <SubTitle style={{marginTop:'10px'}}>Me</SubTitle>
                    <p>hello, I am an enthusiastic person who can learn quickly.</p>
                    <p>I am currently studying Industrial ICT at Don Bosco Sint-Denijs-Westrem,</p>
                    <p>after which I will continue my studies at Odisee with a specialization in Web/app development.</p>
                    <SubTitle>Programming skills</SubTitle>
                    <ProgramCards>
                        <ProgramCard>
                            <img src="/react_logo.png" alt="React"/>
                            <h2>React</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="/nodejs_logo.png" alt="Node.js"/>
                            <h2>Node.js</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="/nextjs_logo.png" alt="Next.js"/>
                            <h2>Next.js</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="/php_logo.png" alt="PHP"/>
                            <h2>PHP</h2>
                        </ProgramCard>
                    </ProgramCards>

                    <SubTitle>Internship</SubTitle>
                    <p></p>
                    <img src="https://www.deniba.at/home/img/logo400p.png" style={{width:'300px'}} alt="Deniba"/>
                    <p>I did an internship at Deniba Software in Austria where I learned the Angular framework with mongoDB.</p>
                    <p>This internship was made possible by the Erasmus+ programme.</p>


                </AboutMe>
                <HR/>
                <Projects id="projects">
                    <h1>Projects</h1>
                    <ProjectCardsContainer>
                        <ProjectCard>
                            <img src="/lars-desmet-high-resolution-logo-black-transparent.png" alt="Project X"/>
                            <h2>Portfolio</h2>
                            <p>This is the website you are currently in.</p>
                            <a href="#">Learn more</a>
                        </ProjectCard>
                        <ProjectCard>
                            <img src="/sm_logo.jpg" alt="smartschool"/>
                            <h2>SmartschoolApplication</h2>
                            <p>A end project for the school Don Bosco Sint-Denijs-Westrem Ghent</p>
                            <a href="#">Learn more</a>
                        </ProjectCard>
                        <ProjectCard>
                            <img src="/web-chat-high-resolution-logo-black-transparent.png" alt="Project Z"/>
                            <h2>Web Chat</h2>
                            <p>A 1 group chat for with friends (currently down)</p>
                            <a href="#">Learn more</a>
                        </ProjectCard>
                        <ProjectCard>
                            <img src="/spotyfree-high-resolution-logo-black-transparent.png" alt="Project W"/>
                            <h2>SpotifyFree</h2>
                                <p>A Flask app that searches your liked Spotify tracks and downloads them from YouTube.</p>
                            <a href="#">Learn more</a>
                        </ProjectCard>
                    </ProjectCardsContainer>
                </Projects>
            </Info>
            <Contact/>
        </div>
    );
}
