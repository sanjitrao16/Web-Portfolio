import Profile from "../assets/Portfolio-Profile.png";
import LinkedIn from "../assets/Linkedin.svg";
import GitHub from "../assets/GitHub.svg";
import Email from "../assets/Email.svg";

export default function Home() {
  return (
    <>
      <div className="Home-Section grid grid-cols-2">
        <div className="self-center justify-self-center">
          <img src={Profile} alt="Profile" width="350px" />
        </div>

        <div className="self-center">
          <p className="text-[#8b8b8b] text-lg">
            <small className="uppercase">Hello,</small>
          </p>
          <p className="text-7xl text-[#e8e8e8]">I'm Sanjit Rao</p>
          <p className="text-[#8b8b8b] text-xl mt-2">
            A backend developer with
            <br />
            expertise in JavaScript, Java and Python.
          </p>

          <div className="flex items-center font-semibold text-lg gap-10 mt-6 ml-7">
            <a href="" className="text-black bg-[#80f9ff] py-1 px-5 rounded-xl">
              Hire Me
            </a>
            <a
              href=""
              className="text-[#e8e8e8] border-[#e8e8e8] border-2 py-1 px-5 rounded-xl hover:bg-[#e8e8e8] hover:text-[#110f10] transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex mt-6 gap-2">
            <a href="https://github.com/sanjitrao16" target="_blank">
              <img
                src={GitHub}
                alt="GitHub"
                width="28px"
                height="28px"
                className="invert"
              />
            </a>
            <a href="https://www.linkedin.com/in/sanjitrao16/" target="_blank">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                width="28px"
                height="28px"
                className="invert"
              />
            </a>
            <a href="mailto: sanjitrao1605@gmail.com" target="_blank">
              <img
                src={Email}
                alt="Email"
                width="28px"
                height="28px"
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
