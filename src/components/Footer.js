// Import font awesome package in order to utilize their icons for my footer aesthetic
import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faConnectdevelop } from '@fortawesome/free-brands-svg-icons'

// Set up function in order to export the footer section of my portfolio
// Invoke font awesome in this section within anchor tags in order to make the icons themselves interact-able "links"
function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <a
        target="_blank"
        href="tel:773-744-9457"
      >
        <FontAwesomeIcon icon={faPhone} className="fa-2x"></FontAwesomeIcon>
      </a>

      <a
        target="_blank"
        href="mailto:riveranelson99@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon>
      </a>

      <a
        target="_blank"
        href="https://github.com/riveranelson99"
      >
        <FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/nelson-rivera-b1413a150/"
      >
        <FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon>
      </a>
    </footer>
  );
}

export default Footer;