import React, { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="contact" className="bg-gray-100 text-center py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="mb-8">Get in Touch</h2>

        {/* Contact Me Button */}
        <button
          className="mb-4 rounded-lg bg-slate-900 px-6 py-3 text-white transition-colors hover:bg-slate-700"
          onClick={() => setShowContact(!showContact)}
        >
          Contact Me
        </button>

        {/* Contact Details (Hidden by Default) */}
        {showContact && (
          <div className="mt-4 space-y-2">
            <p className="text-lg">
              <a href="mailto:zulaikhamir786@gmail.com" className="text-gray-800 transition-colors hover:text-slate-600">
                zulaikhamir786@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <a href="tel:+918899826326" className="text-gray-800 transition-colors hover:text-slate-600">
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
