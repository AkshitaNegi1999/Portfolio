import "./App.css";
import logo from "./assets/images/name-logo-white.svg";
import phone from "./assets/icons/phone.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import linkedIn from "./assets/icons/linkedin.svg";
import email from "./assets/icons/email.svg";
import github from "./assets/icons/github.svg";
import portfolioLogo from "./assets/images/portfolioLogo.png"


function App() {
  return (
    <div className="bg-[#111] h-screen flex flex-col justify-between">
      <header className="flex items-center justify-between px-4 mt-4 w-full max-w-screen-xl mx-auto">
        <img src={logo} alt="logo" className="h-auto" />
        <div className="flex gap-4">
          <img src={phone} alt="phone" className="h-auto" />
          <img src={whatsapp} alt="whatsapp" className="h-auto" />
        </div>
      </header>
      <div className="flex -mt-10 relative">
        <div className="w-80 px-4 max-w-screen-xl mx-auto">
          <h1 className="font-semibold text-white text-3xl">
            Shubhang Mishra
          </h1>
          <p className="text-[16px] font-medium italic text-white">Interactive Front End Developer</p>
          <button className="bg-[#4595eb] py-2 px-5 rounded font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white">About Me</button>
      <img src={portfolioLogo} alt="portfolioLogo" className="h-auto bg-transparent" />
      </div>
      <ul className="ml-auto mr-8 space-y-6 text-[#b0b2c3} absolute right-12">
        <li>
          <a href="https://www.linkedin.com/in/shubhang-mishra-833408184/" target="_blank">
            <img
              src={linkedIn}
              alt="linkedIn"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
        </li>
        <li>
          <a href="mailto:shubhangmishra999@gmail.com" target="_blank">
            <img
              src={email}
              alt="email"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Shubh-31" target="_blank">
            <img
              src={github}
              alt="github"
              className="h-auto w-7 bg-white border-white rounded-md hover:text-white p-1"
            />
          </a>
        </li>
      </ul>
      </div>
      <button>All My Works</button>
    </div>
  );
}

export default App;
