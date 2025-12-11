import Title from "../assets/Title_Icon.svg";
import GitHub from "../assets/GitHub.svg";
import LinkedIn from "../assets/Linkedin.svg";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#ffffff08] py-6 bg-gradient-to-b from-transparent to-[#0b0b0b]/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm flex items-center text-[#9aa0a6]">
          <img src={Title} alt="Title" width="50px" height="50px" />
          <span className="font-bold mx-2 text-lg">• Sanjit Rao</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-3 text-sm text-[#9aa0a6]">
            <a className="hover:text-[#80f9ff]" href="#about">
              About
            </a>
            <a className="hover:text-[#80f9ff]" href="#projects">
              Projects
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/3 border border-[#ffffff10] text-[#e8e8e8] hover:bg-[#80f9ff]/10"
              href="https://github.com/sanjitrao16"
              target="__blank"
              aria-label="GitHub"
            >
              <img
                src={GitHub}
                alt="GitHub"
                width="25px"
                height="25px"
                className="invert"
              />
            </a>
            <a
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/3 border border-[#ffffff10] text-[#e8e8e8] hover:bg-[#80f9ff]/10"
              href="https://www.linkedin.com/in/sanjitrao16/"
              target="__blank"
              aria-label="LinkedIn"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                width="25px"
                height="25px"
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
