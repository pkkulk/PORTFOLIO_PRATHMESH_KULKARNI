import f from "../assets/images.jpeg";

export default function About() {
  return (
    <>
      <div className="dark:bg-white bg-gradient-to-tr from-slate-900 to-slate-700 via-slate-600 min-h-screen py-10 px-6">
        <h1 className="text-3xl text-teal-400 text-center mb-6">About Me</h1>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-10">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={f} className="w-72 md:w-80 lg:w-96 h-auto rounded-lg shadow-lg" alt="Profile" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/3 space-y-6 text-slate-200">
            <h1 className="text-2xl text-green-400 font-bold text-center lg:text-left">
              Introduction
            </h1>

            <p className="text-lg leading-relaxed">
              Hi, I am <span className="font-bold text-teal-300">Prathmesh Kulkarni</span>. 
              I am currently in my third year pursuing a degree in Artificial Intelligence and Data Science at PVGCOET Pune. 
              I completed my diploma in Information Technology from Puranmal Lahoti Government Polytechnic, Latur.
            </p>

            <p className="text-lg leading-relaxed">
              I’m passionate about software development and have been honing my skills in various technologies. I’ve worked on projects 
              that have helped me develop both technical and problem-solving skills. 
            </p>

            <p className="text-lg leading-relaxed">
              Some of my notable projects include a <span className="font-semibold text-teal-300">Book-store app</span> 
              using Vite, React, and Tailwind CSS, along with backend solutions using Flask and Node.js. 
              Additionally, I have experience in database management using MySQL and MongoDB.
            </p>

            <div className="bg-gray-800 p-5 rounded-lg shadow-md">
              <h1 className="text-xl text-white font-semibold mb-3">My Technical Skill Set:</h1>
              <ul className="pl-6 list-disc space-y-2">
                <li>Programming Languages: <span className="text-teal-300">Python, JavaScript, C++</span></li>
                <li>Frontend Technologies: <span className="text-teal-300">React, Vite, Tailwind CSS, HTML/CSS</span></li>
                <li>Backend: <span className="text-teal-300">Node.js, Flask</span></li>
                <li>Databases: <span className="text-teal-300">MySQL, MongoDB</span></li>
                <li>Tools & Platforms: <span className="text-teal-300">Git/GitHub, VS Code, Linux</span></li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              I am excited about opportunities that allow me to deepen my knowledge in 
              <span className="text-teal-300"> web development, data-driven applications, and full-stack development</span>. 
              My growing technical expertise, combined with my enthusiasm for learning, makes me a strong candidate to contribute positively to a team.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
