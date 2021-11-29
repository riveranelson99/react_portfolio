import React, { useState } from 'react';

import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';

export default function PortContainer() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'About') {
      return  <About />;
    }
    if (currentPage === 'Portfolio') {
      return  <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return  <Contact />;
    }
    if (currentPage === 'Resume') {
      return  <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Navigation bar */}
      {/* Render page change */}
    </div>
  )
}