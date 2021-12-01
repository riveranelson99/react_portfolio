import React from "react";

export default function Portfolio() {
  return (
    <section className="p-5">

      <h2 className="d-flex justify-content-center">
        My Work
      </h2>

      <div className="grid-box">
        <a id="movieRoulette" target="_blank" href="https://riveranelson99.github.io/p1_movie_roullete/" className="grid-item movie-roulette">Movie Roulette Project 1</a>
        <a id="weatherTracker" target="_blank" href="https://riveranelson99.github.io/weather_tracker/" className="grid-item weather-tracker">Weather Tracker</a>
        <a id="workDay" target="_blank" href="https://riveranelson99.github.io/work_day_scheduler/" className="grid-item work-day-scheduler">Work Day Scheduler</a>
        <a id="codeQuiz" target="_blank" href="https://riveranelson99.github.io/my_code_quiz/" className="grid-item code-quiz">Code Quiz</a>
        <a id="horiseon" target="_blank" href="https://riveranelson99.github.io/seo_code_refactor/" className="grid-item horiseon">Horiseon</a>
      </div>

    </section>
  )
}