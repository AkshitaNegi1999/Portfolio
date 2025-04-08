import "./App.css";
import logo from "./assets/images/name-logo-white.svg";
import phone from "./assets/icons/phone.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import linkedIn from "./assets/icons/linkedin.svg";
import email from "./assets/icons/email.svg";
import github from "./assets/icons/github.svg";
import portfolioLogo from "./assets/images/portfolioLogo.png";
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <div className="bg-[#111] h-screen flex flex-col justify-between">
      <header className="flex items-center justify-between px-4 mt-4 w-full max-w-screen-xl mx-auto">
        <img src={logo} alt="logo" className="h-auto" />
        <div className="flex gap-4 z-50">
          <img src={phone} alt="phone" className="h-auto" />
          <img src={whatsapp} alt="whatsapp" className="h-auto" />
          <a
            href="https://www.linkedin.com/in/shubhang-mishra-833408184/"
            target="_blank"
          >
            <img
              src={linkedIn}
              alt="linkedIn"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
          <a href="mailto:shubhangmishra999@gmail.com" target="_blank">
            <img
              src={email}
              alt="email"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
          <a href="https://github.com/Shubh-31" target="_blank">
            <img
              src={github}
              alt="github"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
        </div>
      </header>
      <div id="wrapper-canvas" className="absolute inset-0">
    
      </div>
      <div className="flex -mt-16 relative z-60">
        <div className="w-120 px-4 max-w-screen-xl mx-auto relative">
          <img
            src={portfolioLogo}
            alt="portfolioLogo"
            className="w-full h-auto bg-transparent"
          />
          <div className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-semibold text-white text-3xl">
              Shubhang Mishra
            </h1>
            <p className="text-[16px] font-semibold italic text-white mt-2 mb-4">
              Interactive Front End Developer
            </p>
            <button className="bg-[#4595eb] py-2 px-5 rounded font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white cursor-pointer hover:scale-105 ease-in-out duration-200 hover:underline">
              About Me
            </button>
          </div>
        </div>
      </div>
      <div className="group self-center mb-16 z-70">
      <button
        className="relative bg-[#4595eb] py-2 px-5 rounded font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden"
      >
        <span className="transition-opacity duration-200 ease-in-out group-hover:opacity-0">
          All My Works
        </span>

        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <FaArrowDown className="text-white text-lg" />
        </span>
      </button>
    </div>
    </div>
  );
}

export default App;
