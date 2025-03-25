import React from "react";

function Footer() {
  return (
    <footer className="bg-custom text-white text-center py-5">
      <div className="container d-flex flex-column align-items-center">
        {/* Social Links - Inline */}
        <div className="d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/zulaikhaashiq/"
            className="social-link mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        
          <a
            href="https://github.com/zulaikhamir"
            className="social-link mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Copyright Text Below */}
        <p className="mt-3">&copy; {new Date().getFullYear()} Zulaikha Ashiq</p>
      </div>
    </footer>
  );
}

export default Footer;
