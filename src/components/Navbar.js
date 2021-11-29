import React from 'react'

export default function Navbar() {
  return (
    <>
      <header>
        <h1>Nelson Rivera</h1>
        <nav>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#my-work">My Work</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
          <li><a href="https://docs.google.com/document/d/180-G6O_wIBsKqRz9eaGt0i1GBGjzNjYg/edit?usp=sharing&ouid=106707977828245057672&rtpof=true&sd=true" target="_blank">Resume</a></li>
        </nav>
      </header>
    </>
  )
}

// [
//   {
//     href: "#aboutme",
//     title: "About Me",
//     blank: false,
//   },
//   {
//     href: "#aboutme",
//     title: "About Me",
//     blank: false,
//   },
//   {
//     href: "#aboutme",
//     title: "About Me",
//     blank: false,
//   },
//   {
//     href: "#aboutme",
//     title: "About Me",
//     blank: true,
//   }
// ]