// Project.jsx
import f from "../assets/ff.png";
import c from "../assets/crypto.png";
import f1 from "../assets/expens.png";
import f2 from "../assets/mcq.png";
import f5 from "../assets/heart.png"
import p from "../assets/b2.png"
import p1 from "../assets/aideas.png"

import f4 from "../assets/secureslack.png"
import f3 from "../assets/ipl.png"
const projects = [
   {
      title: "aIDEAS association website",
      description: "for showing the past events of association,doing the technical task ..",
      image: p1,
      link: "https://aideas-website-new.vercel.app/",
    },{
    title: "Hospital Food Management",
    image: f,
    description: "A platform for managing food in hospitals.",
    link: "https://mern-stack-hospital-food-management-system-frontend.vercel.app",
  },
   {
      title: "Ipl Dashboard ",
      description: "platform for analyze ipl data players performance and team performance pe year ",
      image: f3,
      link: "https://ipl-dashboard2.vercel.app/teams",
    },
    {
      title: "Secure slack",
      description: "for cyber news ,for any cyber providing company with chatbot  ",
      image: f4,
      link: "https://secure-slack-frontend.vercel.app/blog",
    },
     {
      title: "Heart failure detection",
      description: "for detecting failure of heart based on user data like cholestrol,BP,chest pain ",
      image: f5,
      link: "https://deployedheartfailure-jkwf8r9tujutnt9beinksw.streamlit.app/",
    },
    {
    title: "Travel Recommendation System",
    image: f1,
    description: "Information related to destinations based on budget.",
    link: "https://github.com/pkkulk/Travel_recommendation_system_for_India",
  },
  {
    title: "Cryptocurrency Tracker using ReactJS",
    image: c,
    description: "Fetches crypto prices with history and real-time data.",
    link: "https://github.com/pkkulk/cryptocurrency-tracker-using-reactjs-v2",
  },
  {
    title: "Online MCQ Examination System",
    image: f2,
    description: "Platform for MCQ tests online using Java and JDBC.",
    link: "https://github.com/pkkulk/online-examination-system-using-java",
  },
];

export default function Project() {
  return (
    <div className="w-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-400 text-center mb-6">Projects</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="shadow-2xl border-2 rounded-xl hover:shadow-slate-700 overflow-hidden">
            <h2 className="bg-white/10 text-center font-medium py-3">{proj.title}</h2>
            <img src={proj.image} alt={proj.title} className="h-44 w-full object-contain px-8 py-2" />
            <div className="px-4 pb-4">
              <p className="text-gray-700 text-center">{proj.description}</p>
              <a
                href={proj.link}
                className="text-blue-500 hover:underline block mt-2 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
