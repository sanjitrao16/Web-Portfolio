import Profile from "../assets/Portfolio-Profile.png";
import LinkedIn from "../assets/Linkedin.svg";
import GitHub from "../assets/GitHub.svg";
import Email from "../assets/Email.svg";

export default function Home() {
  return (
    <div className="Home-Section grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-8">
      <div className="flex items-center justify-center md:justify-center md:pl-6">
        <img
          src={Profile}
          alt="Profile"
          className="w-44 sm:w-56 md:w-80 lg:w-96"
        />
      </div>

      <div className="self-center px-4 md:px-16 text-center md:text-left">
        <p className="text-[#8b8b8b] text-sm sm:text-base">
          <small className="uppercase">Hello,</small>
        </p>
        <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#e8e8e8]">
          I'm Sanjit Rao
        </p>
        <p className="text-[#8b8b8b] text-sm sm:text-base mt-2">
          A backend developer with
          <br />
          expertise in JavaScript, Java and Python.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-10 mt-6 sm:ml-7">
          <a
            href=""
            className="text-black bg-[#80f9ff] py-2 px-6 rounded-xl inline-block text-center"
          >
            Hire Me
          </a>
          <a
            href=""
            className="text-[#e8e8e8] border-[#e8e8e8] border-2 py-2 px-6 rounded-xl hover:bg-[#e8e8e8] hover:text-[#110f10] transition duration-300 inline-block text-center"
          >
            Resume
          </a>
        </div>

        <div className="flex mt-6 gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/sanjitrao16"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GitHub}
              alt="GitHub"
              className="w-6 h-6 sm:w-7 sm:h-7 invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjitrao16/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-6 h-6 sm:w-7 sm:h-7 invert"
            />
          </a>
          <a
            href="mailto:sanjitrao1605@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Email}
              alt="Email"
              className="w-6 h-6 sm:w-7 sm:h-7 invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
