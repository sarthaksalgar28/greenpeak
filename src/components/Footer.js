import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #214f32;
  color: white;
  padding: 20px 0; /* Increase padding for better spacing */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center everything horizontally */
  justify-content: center; /* Center content vertically if needed */
  text-align: center;
`;

const Logo = styled.img`
  max-width: 100px; /* Adjust the size of the logo */
  margin-bottom: 10px; /* Space between the logo and the text */
`;

const SocialLinks = styled.div`
  margin: 8px 0;
  font-size: 1.5rem;

  a {
    color: white;
    margin: 0 15px; /* Increased spacing between icons */
    text-decoration: none;
    display: inline-block;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Logo */}
      <Logo
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp2_xDgzryqQ26NUVoz2xarordIpm3BPSV_IMfoePC3q657H4aOlGbeEK3PQe4nfYfsw1Cqvee62qL5adV16qeB4epvEtoTBa6hcvYZSWmA64iymQoDLdW4ExngLrbifP9SD9xMU6WGOFtdWNSij5TTBtA-lpucq1BnBUmFVghJvANHz1DsNO3PPuT8CY/s836/logo-removebg-preview.png"
        alt="Greenpeak Farms Logo"
      />
      
      {/* Footer Text */}
      <p>&copy; 2024 Greenpeak Farms Producer Company Limited</p>

      {/* Social Media Links */}
      <SocialLinks>
        <a
          href="https://www.facebook.com/share/18q36DhyDS/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/greenpeak_farms_ltd?igsh=NmQ5ZGc0dGoycDV3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </SocialLinks>
    </FooterWrapper>
  );
};

export default Footer;
