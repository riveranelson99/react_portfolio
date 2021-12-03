import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  function openGrid1() {
    window.open('https://github.com/riveranelson99/p1_movie_roullete');
  };

  function openGrid2() {
    window.open('https://github.com/Chris-Franklin-1701/CAN-Do-Translations');
  };

  function openGrid3() {
    window.open('https://github.com/riveranelson99/work_day_scheduler');
  };

  function openGrid4() {
    window.open('https://github.com/riveranelson99/my_code_quiz');
  };

  function openGrid5() {
    window.open('https://github.com/riveranelson99/seo_code_refactor');
  };

  function openGrid6() {
    window.open('https://github.com/riveranelson99/tech_blog');
  };

  return (
    <section className="p-5">

      <h2 className="d-flex justify-content-center">
        My Work
      </h2>

      <div className="container">
        <div className="row d-flex justify-content-center">
          <a
            target="_blank"
            href="https://riveranelson99.github.io/p1_movie_roullete/"
            className="col-md-5 movie-roulette grid-item"
            onClick={() => openGrid1()}
          >
            <span>
              Movie Roulette
            </span>
          </a>

          <a
            target="_blank"
            href="https://agile-chamber-45368.herokuapp.com/"
            className="col-md-5 can-do-translations grid-item"
            onClick={() => openGrid2()}
          >
            <span>
              Can-Do Translations
            </span>
          </a>

          <a
            target="_blank"
            href="https://riveranelson99.github.io/work_day_scheduler/"
            className="col-md-5 work-day-scheduler grid-item"
            onClick={() => openGrid3()}
          >
            <span>
              Work Day Scheduler
            </span>
          </a>

          <a
            target="_blank"
            href="https://riveranelson99.github.io/my_code_quiz/"
            className="col-md-5 code-quiz grid-item"
            onClick={() => openGrid4()}
          >
            <span>
              Code Quiz
            </span>
          </a>

          <a
            target="_blank"
            href="https://riveranelson99.github.io/seo_code_refactor/"
            className="col-md-5 horiseon grid-item"
            onClick={() => openGrid5()}
          >
            <span>
              Horiseon
            </span>
          </a>

          <a
            target="_blank"
            href="https://young-spire-79228.herokuapp.com/"
            className="col-md-5 tech-blog grid-item"
            onClick={() => openGrid6()}
          >
            <span>
              Tech Blog
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}