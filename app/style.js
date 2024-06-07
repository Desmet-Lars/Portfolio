import styled from "styled-components";
import Link from "next/link";

// Main section
export const Main = styled.section`
    background-image: url('https://images.unsplash.com/photo-1706820643404-71812d9d7d3a?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Nature-themed image */
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    padding-top: 60px; /* Space for the header */
`;

// Info section
export const Info = styled.section`
    padding: 20px;
    text-align: center;
    background-color: #f8f9fa;
`;

// AboutMe section
export const AboutMe = styled.div`
    margin-bottom: 20px;
    h1{        
        font-size: 2rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.1rem;
    margin-top: 60px;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

// ProgramCards container
export const ProgramCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;

// ProgramCard component
export const ProgramCard = styled.div`
    background-color: #ffffff;
    padding: 15px;
    width: 100%;
    max-width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-10px);
    }

    img {
        width: 200px;
        height: 200px;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1rem;
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 4.1em;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #0070f3;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
            color: #0056b3;
        }
    }
`;

// Projects section
export const Projects = styled.div`
    text-align: center;
    
    h1 {
        font-size: 2rem;
        margin-bottom: 20px;
    }
`;

// ProjectCardsContainer component
export const ProjectCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

// ProjectCard component
export const ProjectCard = styled.div`
    background-color: #ffffff;
    padding: 15px;
    width: 90%;
    max-width: 300px;
    height: 350px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-10px);
    }

    img {
        width: 70%;
        height: 50%;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1.25rem;
        margin: 0 0 10px;
        text-overflow: ellipsis;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 4.1em;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #0070f3;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
            color: #0056b3;
        }
    }
`;

// HR section
export const HR = styled.section`
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
`;

