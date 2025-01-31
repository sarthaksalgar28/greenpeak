import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from 'react-icons/fa'; // Hamburger and Phone icons

// Styled-components for navbar
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #214f32; /* Greenish background */
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-right: 12rem; /* Added gap between logo and links */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: auto; /* To center the sections */

  @media (max-width: 768px) {
    display: none; /* Hide on mobile screens */
  }
`;

const NavLink = styled(Link)`
  font-family: 'Georgia', serif;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(232, 242, 231); /* Hover color for links */
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownLink = styled(Link)`
    padding: 12px 16px;
  color: #214f32;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const CallNowButton = styled.a`
  display: flex;
    align-items: center;
  background-color: rgb(218, 227, 218);
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(117, 189, 115); /* Hover effect */
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  background-color: #214f32;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(9, 71, 14);
  }
`;

const CloseIcon = styled.div`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  align-self: flex-end;
`;

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For handling dropdown visibility

  const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen);

  return (
    <NavbarWrapper>
      <Logo>Greenpeak Farms</Logo>

      {/* Desktop Navigation */}
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>

        {/* Dropdown for Products */}
        <Dropdown
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <NavLink to="/services">Products <FaChevronDown /></NavLink>
          <DropdownContent show={dropdownOpen}>
            <DropdownLink to="/bananas">Bananas</DropdownLink>
            <DropdownLink to="/pomogranates">Pomogranates</DropdownLink>
            <DropdownLink to="/bananapowder">Banana Powder</DropdownLink>
            <DropdownLink to="/moringapowder">Moringa Powder</DropdownLink>
            <DropdownLink to="/onion">Onion</DropdownLink>
            <DropdownLink to="/tomato">Tomato</DropdownLink>
            <DropdownLink to="/greenchilli">Green Chilli</DropdownLink>
          </DropdownContent>
        </Dropdown>

        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>

      {/* Call Now Button */}
      <CallNowButton href="tel:+91 9322021556">
        Call Now <FaPhoneAlt />
      </CallNowButton>

      {/* Hamburger Menu Icon for Mobile */}
      <HamburgerIcon onClick={toggleMobileNav}>
        <FaBars />
      </HamburgerIcon>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen}>
        <CloseIcon onClick={toggleMobileNav}>
          <FaTimes />
        </CloseIcon>
        <MobileNavLink to="/" onClick={toggleMobileNav}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={toggleMobileNav}>About</MobileNavLink>

        {/* Mobile Products dropdown */}
        <div>
          <MobileNavLink to="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Products</MobileNavLink>
          <div style={{ display: dropdownOpen ? 'block' : 'none' }}>
            <DropdownLink to="/bananas" onClick={toggleMobileNav}>Bananas</DropdownLink>
            <DropdownLink to="/pomogranates" onClick={toggleMobileNav}>Pomogranates</DropdownLink>
            <DropdownLink to="/bananapowder" onClick={toggleMobileNav}>Banana Powder</DropdownLink>
            <DropdownLink to="/moringapowder" onClick={toggleMobileNav}>Moringa Powder</DropdownLink>
            <DropdownLink to="/onion" onClick={toggleMobileNav}>Onion</DropdownLink>
            <DropdownLink to="/tomato" onClick={toggleMobileNav}>Tomato</DropdownLink>
            <DropdownLink to="/greenchilli" onClick={toggleMobileNav}>Green Chilli</DropdownLink>
          </div>
        </div>

        <MobileNavLink to="/contact" onClick={toggleMobileNav}>Contact</MobileNavLink>
        <MobileNavLink to="tel:+91 9322021556" onClick={toggleMobileNav}>
          Call Now <FaPhoneAlt />
        </MobileNavLink>
      </MobileNav>
    </NavbarWrapper>
  );
};

export default Navbar;