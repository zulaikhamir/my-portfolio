import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>© {currentYear} Zulaikha</p>
    </footer>
  );
}

export default Footer;

