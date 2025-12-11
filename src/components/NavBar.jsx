import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/Hamburger.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="NavBar relative bg-[#110f10]">
      <div className="flex items-center justify-between py-3 px-6 md:px-10 max-w-6xl mx-auto">
        {/* Logo */}
        <a href="#" className="inline-flex items-center">
          <img src={Logo} alt="Logo" className="h-10 md:h-12" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-base text-white font-extralight">
            <li>
              <a href="#" className="hover:underline" onClick={close}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline" onClick={close}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline" onClick={close}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about-me" className="hover:underline" onClick={close}>
                About Me
              </a>
            </li>
            <li>
              <a href="#contact-me" className="hover:underline" onClick={close}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-white/3 border border-[#ffffff10]"
          >
            <img src={Hamburger} alt="menu" className="h-6 w-6 invert" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-[#0f0f10] border-t border-[#ffffff08] shadow-lg transform origin-top transition-all duration-200 ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-3 text-sm text-[#e8e8e8]">
            <li>
              <a
                href="#"
                className="block py-2 px-2 rounded hover:bg-white/3"
                onClick={close}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-2 rounded hover:bg-white/3"
                onClick={close}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-2 rounded hover:bg-white/3"
                onClick={close}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="block py-2 px-2 rounded hover:bg-white/3"
                onClick={close}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className="block py-2 px-2 rounded hover:bg-white/3"
                onClick={close}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
