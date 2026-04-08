function Footer() {
  return (
    <footer className="min-h-[200px] bg-slate-900 py-20 text-center text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social Links - Inline */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/zulaikhaashiq/"
            className="transition-colors hover:text-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/zulaikhamir"
            className="transition-colors hover:text-slate-300"
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
