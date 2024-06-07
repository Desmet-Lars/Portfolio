import { useState } from 'react';
import styled from "styled-components";
import Link from "next/link"; // Import useState hook

export const HeaderStyle = styled.header`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1; /* Ensure the header appears above the main content */

    @media screen and (max-width: 768px) {
        padding: 10px;
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
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Toggle visibility */
        width: 100%; /* Make the navlist take up full width when open */
    }
`;

export const NavItem = styled.li`
    margin: 0 15px;
    position: relative; /* Make the parent element for the ::after pseudo-element */

    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black; /* White color for links */
    font-weight: bold;
    position: relative; /* Ensure that ::after is relative to this element */
    transition: color 0.3s;

    &:hover {
        color: #d2d2d2; /* Olive Drab */
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -5px; /* Position the underline below the text */
        left: 0;
        width: 100%; /* Extend the underline across the entire width */
        height: 2px; /* Height of the underline */
        background-color: #d2d2d2; /* Olive Drab */
        transition: width 0.3s, left 0.3s; /* Add transition effect */
        transform: scaleX(0); /* Initially, set the width to zero */
        transform-origin: center; /* Set the origin of the transform */
    }

    &:hover::after {
        transform: scaleX(1); /* Expand the width of the underline on hover */
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

// Button component to toggle navbar visibility
const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: none; /* Hide the button by default for larger screens */
    @media screen and (max-width: 768px) {
        display: block; /* Show the button for smaller screens */
        top: 10px;
        right: 20px;
        color: black;
        font-size: 20px;
        z-index: 2;
    }
`;

// Header component
const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track whether the navbar is open or closed

    // Function to toggle navbar visibility
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderStyle>
            <ToggleButton onClick={toggleNavbar}>☰</ToggleButton> {/* Button to toggle navbar */}
            <NavList isOpen={isOpen}>
                <NavItem><StyledLink href="#home">Home</StyledLink></NavItem>
                <NavItem><StyledLink href="#projects">Projects</StyledLink></NavItem>
                <NavItem><StyledLink href="#about-me">About me</StyledLink></NavItem>
                <NavItem><StyledLink href="#contact">Contact</StyledLink></NavItem>
            </NavList>
        </HeaderStyle>
    );
};

export default Header;
