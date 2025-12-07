import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function NavBar() {
  return (
    <>
      <div className="NavBar flex items-center justify-around py-3 px-10 bg-[#110f10]">
        {/* Logo */}
        <img src={Logo} alt="Logo" width="248px" height="72px" />
        <nav className="pr-10">
          <ul className="flex gap-10 text-base text-white font-extralight">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about-me" className="hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
