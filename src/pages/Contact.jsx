import React, { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="contact" className="about bg-light text-center py-5 w-100">
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
            <p>
			<a href="mailto:zulaikhamir786@gmail.com" className="text-dark">
        zulaikhamir786@gmail.com
      </a>


			</p>
            <p>
			<a href="tel:+918899826326" className="text-dark">
        +91 8899826326
      </a>
			</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
