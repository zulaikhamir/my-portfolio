import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 text-center text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-cyan-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/zulaikhaashiq/"
            className="transition-colors hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/zulaikhamir"
            className="transition-colors hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
        <p className="mt-3 text-sm">&copy; {new Date().getFullYear()} Zulaikha Ashiq</p>
      </div>
    </footer>
  );
}

export default Footer;
