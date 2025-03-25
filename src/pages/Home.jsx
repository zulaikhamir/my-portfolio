import React from "react";

function Home() {
  return (
    <section className="hero bg-light text-center py-5 w-100"> {/* Ensuring full width */}
      <div className="container-fluid"> 
        <h1 className="display-4">Hi, I'm Zulaikha</h1>
        <p className="lead">A passionate Web Developer building awesome websites.</p>
        <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
      </div>
    </section>
  );
}

export default Home;

