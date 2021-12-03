import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';

// Set up function that will export the primary container of my portfolio content 
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About')

  // Establish switch case that will render the appropriate page in relation to what nav link the viewer has chosen to view
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />
    }
  };

  // Establish function that will set the current page to whichever page the viewer has elected to view
  const handlePageChange = (page) => setCurrentPage(page);

  // Return the overall content of my portfolio through this one container that brings it all together
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}