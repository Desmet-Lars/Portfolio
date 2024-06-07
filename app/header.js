import { useState } from 'react';
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const slideAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const HeaderStyle = styled.header`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 10px;
        background-color: rgba(231, 231, 231, 0.85);
        transition: background-color 0.5s ease;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        width: 100%;
        animation: ${slideAnimation} 0.5s ease-in-out forwards;
    }
`;

export const NavItem = styled.li`
    margin: ${({ isOpen }) => (isOpen ? '10px 0' : '0 15px')};
    position: relative;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    position: relative;
    transition: color 0.3s;

    &:hover {
        color: #d2d2d2;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #d2d2d2;
        transition: width 0.3s, left 0.3s;
        transform: scaleX(0);
        transform-origin: center;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        color: black;
    }
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        top: 10px;
        right: 20px;
        color: white;
        font-size: 20px;
        z-index: 2;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderStyle isOpen={isOpen}>
            <ToggleButton onClick={toggleNavbar}>☰</ToggleButton>
            <NavList isOpen={isOpen}>
                <NavItem isOpen={isOpen}><StyledLink href="#home">Home</StyledLink></NavItem>
                <NavItem isOpen={isOpen}><StyledLink href="#projects">Projects</StyledLink></NavItem>
                <NavItem isOpen={isOpen}><StyledLink href="#about-me">About me</StyledLink></NavItem>
                <NavItem isOpen={isOpen}><StyledLink href="#contact">Contact</StyledLink></NavItem>
            </NavList>
        </HeaderStyle>
    );
};

export default Header;
