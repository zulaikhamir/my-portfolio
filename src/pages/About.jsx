import React from "react";
import profilePic from "../assets/duck.jpg"; // Add your image in the assets folder

function About() {
  return (
    <section id="about"className="about bg-light text-center py-5 w-100">
      <div className="container">
        
        <img 
          src={profilePic} 
          alt="Zulaikha" 
          className="rounded-circle mb-3" 
          width="150" 
          height="150"
        />
		<h2 className="mb-4">Hello.</h2>
        <p className="lead mx-auto w-75">
          Hi! I'm Zulaikha, a passionate web developer who loves building user-friendly 
          and visually appealing websites. I specialize in React, JavaScript, and Bootstrap. 
          Let's create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
