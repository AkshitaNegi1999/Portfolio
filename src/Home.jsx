import logo from "./assets/icons/headerlogo.png";
import phone from "./assets/icons/phone.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import linkedIn from "./assets/icons/linkedin.svg";
import email from "./assets/icons/email.svg";
import github from "./assets/icons/github.svg";
import portfolioLogo from "./assets/images/portfolioLogo.png";
import {
  FaLongArrowAltRight,
  FaTimes,
  FaPhoneAlt, 
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TechStackCanvas from "./TechStackCanvas";



export default function Home() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [showTechDialog, setShowTechDialog] = useState(false);

  

  return (
    <>
      <TechStackCanvas />
      
      <div className="bg-transparent h-screen flex flex-col justify-between relative">
        <header className="flex items-center justify-between px-4 mt-4 w-full max-w-screen-xl mx-auto">
          <img
            src={logo}
            alt="logo"
            className="h-auto w-16 border rounded-md border-black"
          />
          <div className="flex gap-4 z-50">
            <a
              href="tel:+919958806791"
              className="transition-transform hover:scale-110"
            >
              <img
                src={phone}
                alt="phone"
                className="h-auto w-7 p-1 rounded-md transition duration-200 hover:bg-[#007bff]"
              />
            </a>
            <a
              href="https://wa.me/9958806791?text=Hi Akshita, saw your portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={whatsapp}
                alt="whatsapp"
                className="h-auto w-7 p-1 rounded-md transition duration-200 hover:bg-[#25D366]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/akshita-negi-694a67239/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={linkedIn}
                alt="linkedIn"
                className="h-auto bg-white border-white rounded-md w-7 p-1 transition duration-200 hover:bg-[#0077b5]"
              />
            </a>
            <a
              href="mailto:aananegi1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={email}
                alt="email"
                className="h-auto w-7 p-1 rounded-md bg-white border-white transition duration-200 hover:bg-[#ea4335]"
              />
            </a>
            <a
              href="https://github.com/AkshitaNegi1999"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={github}
                alt="github"
                className="h-auto w-7 p-1 rounded-md bg-white border-white transition duration-200 hover:bg-[#333]"
              />
            </a>
          </div>
        </header>

        <div className="flex -mt-16 relative z-60">
          <div className="w-120 px-4 max-w-screen-xl mx-auto relative">
            <img
              src={portfolioLogo}
              alt="portfolioLogo"
              className="w-full h-auto bg-transparent"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h1 className="font-semibold text-white text-3xl md:text-4xl">
                Akshita Negi
              </h1>
              <p className="text-sm md:text-base font-semibold italic text-white mt-2 mb-4">
                Interactive Front End Developer
              </p>
              <button
                onClick={() => setShowDialog(true)}
                className="bg-none hover:underline font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-200 hover:shadow-md hover:bg-gray-600 py-2 px-6 rounded"
              >
                About Me
              </button>
            </div>
          </div>
        </div>

        {showDialog && (
          <div className="fixed inset-0 bg-transparent bg-opacity-40 z-999 flex items-center justify-center px-4 animate-fade-in">
            <div className="bg-[#10172a] border border-gray-600 rounded-xl p-6 max-w-xl w-full text-white relative transition-transform duration-300 ease-in-out animate-slide-up">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl cursor-pointer"
                onClick={() => setShowDialog(false)}
              >
                <FaTimes />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                About Me
              </h2>
              <p className="text-sm text-gray-300 text-center mb-4">
                I'm a results-driven Frontend Developer with over 2 years of
                hands-on experience in crafting responsive, accessible, and
                visually engaging web interfaces.
              </p>
              <p className="text-sm text-gray-300 text-center mb-2">
                💼 Currently working at{" "}
                <span className="text-blue-400">JK International</span>
              </p>
             
              <p className="text-sm text-gray-300 text-center mb-2">
                🎓 Master's in Computer Science from{" "}
                <a
                  href="https://mdu.ac.in/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  Maharishi Dayanand University
                </a>{" "}
                (2021–2023)
              </p>
              <p className="text-sm text-gray-300 text-center mb-4">
                💻 Tech Stack: React.js, Next.js, TailwindCSS, JavaScript,
                Firebase, Node.js, Express.js, Git
              </p>
              <div className="text-sm text-gray-300 text-center mb-4">
                <h3 className="text-white font-semibold mb-2">
                  📆 Career Timeline
                </h3>
                <ul className="space-y-1">
                  <li>
                    • Currently working <strong>JK International</strong> – Nov 2023
                  </li>
                  <li>• Pursued Msc CS at MDU – 2021 to 2023</li>
                </ul>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="tel:+919958806791"
                  className="bg-[#1d3557] hover:bg-[#457b9d] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaPhoneAlt />
                </a>
                <a
                  href="https://wa.me/9958806791?text=Hi Akshita, saw your portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d7933] hover:bg-[#25D366] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="mailto:aananegi1999@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6a040f] hover:bg-[#ea4335] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        )}

        {showTechDialog && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 z-[999] flex items-center justify-center px-4 animate-fade-in">
            <div className="bg-[#10172a] border border-gray-600 rounded-xl p-6 max-w-md w-full text-white relative animate-slide-up">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setShowTechDialog(false)}
              >
                <FaTimes />
              </button>
              <h2 className="text-xl font-bold text-center mb-4">Tech Stack</h2>
              <div className="text-sm text-gray-300 space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-1">Frontend</h3>
                  <ul className="flex flex-wrap gap-3 items-center">
                    <li className="flex items-center gap-1">
                      <SiReact className="text-cyan-400" /> React.js
                    </li>
                    <li className="flex items-center gap-1">
                      <SiNextdotjs className="text-white" /> Next.js
                    </li>
                    <li className="flex items-center gap-1">
                      <SiJavascript className="text-yellow-400" /> JavaScript
                    </li>
                    <li className="flex items-center gap-1">
                      <SiTailwindcss className="text-sky-400" /> TailwindCSS
                    </li>

                    <li className="flex items-center gap-1">
                      <SiHtml5 className="text-orange-600" /> HTML5
                    </li>
                    <li className="flex items-center gap-1">
                      <SiCss3 className="text-blue-600" /> CSS3
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Backend</h3>
                  <ul className="flex flex-wrap gap-3 items-center">
                    <li className="flex items-center gap-1">
                      <SiNodedotjs className="text-green-500" /> Node.js
                    </li>
                    <li className="flex items-center gap-1">
                      <SiExpress className="text-gray-300" /> Express.js
                    </li>
                   
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Cloud & Tools
                  </h3>
                  <ul className="flex flex-wrap gap-3 items-center">
                    <li className="flex items-center gap-1">
                      <SiFirebase className="text-orange-400" /> Firebase
                    </li>
                    <li className="flex items-center gap-1">
                      <SiGit className="text-red-500" /> Git
                    </li>
                    <li className="flex items-center gap-1"> AWS</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="tel:+919958806791"
                  className="bg-[#1d3557] hover:bg-[#457b9d] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaPhoneAlt />
                </a>
                <a
                  href="https://wa.me/9958806791?text=Hi Akshita, saw your portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d7933] hover:bg-[#25D366] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="mailto:aananegi1999@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6a040f] hover:bg-[#ea4335] px-4 py-2 rounded text-white text-sm flex items-center gap-2"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="group self-center mb-8 z-70">
          <button
            onClick={() => navigate("/works")}
            className="group relative bg-gradient-to-r from-[#222d50] via-[#28496e] to-[#2e77a5] py-2 px-6 rounded font-bold text-white cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden"
          >
            <span className="transition-opacity duration-200 ease-in-out group-hover:opacity-0">
              Latest Works
            </span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <FaLongArrowAltRight className="text-white text-lg" />
            </span>
          </button>
          <button
            onClick={() => setShowTechDialog(true)}
            className="mt-4 md:hidden bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] py-2 px-6 rounded font-bold text-white hover:scale-105 transition-transform duration-200"
          >
            Tech I Know
          </button>
        </div>
      </div>
    </>
  );
}
