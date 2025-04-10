import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiHtml5, SiCss3, SiJquery, SiJavascript, SiReact, SiFigma, SiJsonwebtokens, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const worksData = [
  {
    name: "UI-Educon",
    subtitle: "EdTech Platform Revamp",
    description:
      "As lead frontend developer, redesigned and rebuilt the entire platform to deliver a visually captivating and responsive user interface. Integrated quizzes, animations, and performance enhancements to improve engagement.",
    techStack: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "TailwindCSS" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiFirebase />, name: "Firebase" }
    ],
    github: "https://github.com/Shubh-31/UI-Educon-Projecct",
    link: "https://www.ui-educon.com/",
    color: "#47afa1"
  },
  {
    name: "To-Do App",
    subtitle: "Task Management App",
    description:
      "Developed an interactive and animated To-Do app to help users efficiently track and manage daily tasks. Includes categorization, filtering, and smooth user interactions.",
    techStack: [
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS Modules" },
      { icon: <SiJquery />, name: "jQuery" },
      { icon: <SiJavascript />, name: "JavaScript" }
    ],
    github: "https://github.com/Shubh-31/To-Do-App",
    link: "https://to-do-app-phi-ebon.vercel.app/",
    color: "#fc815c"
  },
  {
    name: "Antspecs",
    subtitle: "E-Commerce Eyewear Website",
    description:
      "Led the development of a modern, responsive E-commerce platform. Built over 20+ dynamic pages and implemented secure session handling using JWT authentication. Closely collaborated with a UI/UX designer, backend developer, and project manager to ensure smooth user journeys and robust performance.",
    techStack: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiCss3 />, name: "Traditional CSS" },
      { icon: <SiJsonwebtokens />, name: "JWT" },
      { icon: <SiFigma />, name: "Figma" }
    ],
    github: "https://github.com/Shubh-31/web-app",
    link: "#",
    color: "#ffe578"
  },
  {
    name: "In House Store App",
    subtitle: "Internal Web App for Advayanethra Pvt Ltd",
    description:
      "Designed and developed a comprehensive web solution tailored for store personnel. Integrated role-based login functionality and dynamic features to streamline inventory and sales operations. Worked alongside stakeholders and team members to align with internal business workflows.",
    techStack: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "CSS" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiJsonwebtokens />, name: "JWT" }
    ],
    github: "https://github.com/Shubh-31/an-store-web/tree/initial-design-and-flows/ANStore",
    link: "#",
    color: "#fc815c"
  },
  {
    name: "LMS Task",
    subtitle: "Learning Management System UI Task",
    description:
      "Created a task-based project involving user-friendly LMS UI workflows to evaluate and improve platform usability. Integrated routing, responsive design, and efficient component structuring.",
    techStack: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "TailwindCSS" },
      { icon: <SiJavascript />, name: "JavaScript" }
    ],
    github: "https://github.com/Shubh-31/LMSTask",
    link: "https://lms-task-nu.vercel.app/",
    color: "#1595b6"
  }
];

const Works = () => {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto text-white">
      {worksData.map((work) => (
        <div
          key={work.name}
          className="mb-16 border border-gray-700 rounded-2xl p-8 bg-transparent backdrop-blur-md shadow-md"
        >
          <div className="text-center">
            <h3 className="font-bold text-2xl md:text-4xl" style={{ color: work.color }}>{work.name}</h3>
            <p className="text-base md:text-lg text-gray-400">{work.subtitle}</p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {work.techStack.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl text-white">{tech.icon}</div>
                <p className="text-sm text-gray-400 mt-1">{tech.name}</p>
              </div>
            ))}
          </div>

          <p className="text-justify text-sm md:text-base mt-6 text-gray-300">
            {work.description}
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#111] hover:bg-gray-800 px-4 py-2 rounded transition"
            >
              <FaGithub /> View Code
            </a>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1595b6] to-[#1f2667] text-white px-4 py-2 rounded hover:scale-105 transition"
            >
              Go To App
            </a>
          </div>
        </div>
      ))}

      {/* Special Mention Section */}
      <div className="mt-24 text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-[#47afa1] mb-4">Special Mention</h3>
        <p className="text-gray-300 text-lg">
          Successfully led a team of 10 members to deliver a data analysis project for{' '}
          <a
            href="https://www.linkedin.com/company/docusign/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            DocuSign
          </a>{' '}
          from conception to deployment, while working at{' '}
          <a
            href="https://www.linkedin.com/company/dawn-digitech/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            Dawn Digitech LLP
          </a>.
        </p>
      </div>
    </section>
  );
};

export default Works;
