import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="p-5">

      <h2 className="d-flex justify-content-center p-2">
        About Me
      </h2>

      {/* <p className="d-flex justify-content-center p-2">
        Roosevelt University Class of 2017 - Bachelors of Arts in Paralegal Studies - Northwestern University Coding Bootcamp Graduate
      </p> */}

      <div className="d-flex justify-content-center p-2">
        <img src="./assets/244996835_305594117635243_3281901498404681923_n.jpg" height="300px" />
      </div>

      <p className="p-2">
        Why hello there! My name is Nelson Rivera and I am currently a student of Northwestern's coding bootcamp. As I gain knowledge of the greater intricacies of coding, I intend to apply said skills as I search diligantly for employment. So take a look at
        what I have currently accomplished knowing that the work will only continue to grow along with my increased understanding of it all.
      </p>

    </section>
  )
}