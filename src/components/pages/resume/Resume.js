import React from "react";
import './Resume.css'

export default function Resume() {
  return (
    <section className="p-5">
      <h2 className="d-flex justify-content-center">
        Resume
      </h2>

      <p id="resume" className="d-flex justify-content-center">
        <a href="https://docs.google.com/document/d/180-G6O_wIBsKqRz9eaGt0i1GBGjzNjYg/edit?usp=sharing&ouid=106707977828245057672&rtpof=true&sd=true" target="_blank">View my full resume</a>
      </p>

      <div className="container">
        <div className="row d-flex justify-content-center">
          <section className="col-md-5">
            <h4>
              Front-End Proficiencies
            </h4>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </section>

          <section className="col-md-5">
            <h4>
              Back-End Proficiencies
            </h4>

            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}