import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="p-5">

      <h2 className="d-flex justify-content-center">
        My Work
      </h2>

      <div className="container">
        <div className="row d-flex justify-content-center">
          <a id="movie-roulette" target="_blank" href="https://riveranelson99.github.io/p1_movie_roullete/" className="col-md-12 movie-roulette grid-item"><span>Movie Roulette Project 1</span></a>
          <a id="weatherTracker" target="_blank" href="https://riveranelson99.github.io/weather_tracker/" className="col-md-5 weather-tracker grid-item"><span>Weather Tracker</span></a>
          <a id="workDay" target="_blank" href="https://riveranelson99.github.io/work_day_scheduler/" className="col-md-5 work-day-scheduler grid-item"><span>Work Day Scheduler</span></a>
          <a id="codeQuiz" target="_blank" href="https://riveranelson99.github.io/my_code_quiz/" className="col-md-5 code-quiz grid-item"><span>Code Quiz</span></a>
          <a id="horiseon" target="_blank" href="https://riveranelson99.github.io/seo_code_refactor/" className="col-md-5 horiseon grid-item"><span>Horiseon</span></a>
        </div>
      </div>

    </section>
  )
}