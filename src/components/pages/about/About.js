import React from "react";
import "./About.css";
import profile from "../../../images/profile.jpg"

// Set up a function to export the about section of my portfolio
export default function About() {
  return (
    <section className="p-5">
      <h2 className="d-flex justify-content-center p-2">
        About Me
      </h2>

      {/* Where I bring in my profile picture in my about page */}
      <div className="d-flex justify-content-center p-2">
        <img src={profile} height="300px" />
      </div>

      {/* Brief bio */}
      <p className="p-2">
        Why hello there! My name is Nelson Rivera and I am currently a student of Northwestern's coding bootcamp. As I gain knowledge of the greater intricacies of coding, I intend to apply said skills as I search diligantly for employment. So take a look at
        what I have currently accomplished knowing that the work will only continue to grow along with my increased understanding of it all.
      </p>
    </section>
  )
}