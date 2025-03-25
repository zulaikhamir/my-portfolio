import React from "react";
import backgroundImage from "../assets/Cutie nuage.jpg"

function Home() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center"
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h1 className="display-4">I'm Zulaikha.</h1><br/>
        <p className="lead"style={{ color: "#66BFBF" }}>A passionate Web Developer building awesome websites.</p>
        <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
