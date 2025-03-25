import React, { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="contact bg-dark text-white py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Get in Touch</h2>
        
        {/* Contact Me Button */}
        <button 
          className="btn btn-primary mb-3"
          onClick={() => setShowContact(!showContact)}
        >
          Contact Me
        </button>

        {/* Contact Details (Hidden by Default) */}
        {showContact && (
          <div className="mt-3">
            <p>Email: your.email@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        )}

        {/* Social Links (Inline) */}
        <div className="mt-4 d-flex justify-content-center">
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a 
            href="https://github.com/your-profile" 
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
