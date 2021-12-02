import React from "react";

export default function Contact() {
  return (
    <section className="p-5">

      <h2 className="d-flex justify-content-center">
        Contact Me
      </h2>

      <div className="container">
        <div className="row d-flex justify-content-center">
            <a target="_blank" href="tel:773-744-9457" class="col-md-5 btn btn-primary">773-744-9457</a>

            <a target="_blank" href="mailto:riveranelson99@gmail.com" class="col-md-5 btn btn-primary">riveranelson99@gmail.com</a>

            <a target="_blank" href="https://github.com/riveranelson99" class="col-md-5 btn btn-primary">GitHub</a>

            <a target="_blank" href="https://www.linkedin.com/in/nelson-rivera-b1413a150/" class="col-md-5 btn btn-primary">LinkedIn</a>
        </div>
      </div>

    </section>
  )
}