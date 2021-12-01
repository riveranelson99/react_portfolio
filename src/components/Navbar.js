import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="navbar d-flex p-5 justify-content-between">

      <div className="nav-brand">
        <h1>
          Nelson Rivera
        </h1>
        <p>
          Full Stack Developer
        </p>
      </div>

      <ul className="nav nav-pills nav-fill col-8">
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;