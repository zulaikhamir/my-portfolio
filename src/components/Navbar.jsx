import { useState } from "react";
import { Github, Linkedin, Mail, Menu, PencilLine, X, Download } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[#21262d] bg-[#0d1117]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-semibold tracking-tight text-[#f0f6fc]">
              Zulaikha Ashiq
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#c9d1d9] transition-colors hover:text-[#58a6ff]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:zulaikhamir786@gmail.com" className="text-[#8b949e] transition-colors hover:text-[#58a6ff]" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/zulaikhamir" target="_blank" rel="noreferrer" className="text-[#8b949e] transition-colors hover:text-[#58a6ff]" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/zulaikhaashiq/" target="_blank" rel="noreferrer" className="text-[#8b949e] transition-colors hover:text-[#58a6ff]" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#projects" className="text-[#8b949e] transition-colors hover:text-[#58a6ff]" aria-label="Projects">
              <PencilLine size={18} />
            </a>
            <a href="/resume.pdf" download className="text-[#8b949e] transition-colors hover:text-[#58a6ff]" aria-label="Resume">
              <Download size={18} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-[#c9d1d9] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#21262d] md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded px-3 py-2 text-base font-medium text-[#c9d1d9] transition-colors hover:text-[#58a6ff]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
