import React from "react";

function Projects() {
  return (
    <section id= "projects" className="projects bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text">Short description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="project2.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">Short description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="project3.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">Short description of the project.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
