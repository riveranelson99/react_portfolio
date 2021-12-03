import React from 'react';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';

// Import the portfolio container and all of the content it is meant to contain through the app file
// I could have simply elected to render the content of the portfolio container into this app file, but ultimately decided to keep it in the port container file for better understanding and practice
function App() {
  return (
    <PortfolioContainer />
  );
}

export default App;