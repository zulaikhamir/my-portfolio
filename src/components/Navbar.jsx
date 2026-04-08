import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              🐸
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="px-3 py-2 text-sm font-medium transition-colors hover:text-slate-300">
                About
              </a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium transition-colors hover:text-slate-300">
                Projects
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium transition-colors hover:text-slate-300">
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-slate-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-base font-medium transition-colors hover:text-slate-300">
              About
            </a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium transition-colors hover:text-slate-300">
              Projects
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium transition-colors hover:text-slate-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
