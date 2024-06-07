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
    ProgramCard, HR, Projects, ProjectCardsContainer, ProjectCard, Contact
} from "@/app/style";
import Header from './header'

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
                            <img src="https://imgs.search.brave.com/R-bmvuO_aoBnN5WUXs7Z-CMD37loarjGxgcVGraDR2U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3JlYWN0/LmpwZw" alt="React"/>
                            <h2>React</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="https://imgs.search.brave.com/J8FUkJ_yGZYVMdOfDg521emcJp77_7u_uvmEw5pTfLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk5NzYy/MC8xMDYyNTAyNy80/N2IwYWI4YS03Nzdk/LTExZTUtODQ3Ni1h/ZTAxNDhkNDRjNDYu/cG5n" alt="Node.js"/>
                            <h2>Node.js</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="https://imgs.search.brave.com/rU-xKCJwWtJq29sf-C9iG8Bt92d_FwQKH_y5HTlseBs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25leHRq/czc2ODUubG9nb3dp/ay5jb20ud2VicA" alt="Next.js"/>
                            <h2>Next.js</h2>
                        </ProgramCard>
                        <ProgramCard>
                            <img src="https://imgs.search.brave.com/UtLy-XdeBFloVtqXskK5ZyUdYcW8svd4_ijGW8fapz0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlibG9nby5jb20v/aW1nLWxvZ28vcGg0/MjRwYTQ4LXBocC1s/b2dvLXBocC1wbGFp/bi1sb2dvLWZyZWUt/aWNvbi1vZi1kZXZp/Y29uLnBuZw" alt="PHP"/>
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
            <Contact id="contact">
                <h1>Contact</h1>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows={4} required></textarea>
                    <button type="submit">Send</button>
                </form>
            </Contact>
        </div>
    );
}
