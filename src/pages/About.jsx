import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaServer, FaDatabase, FaCloud, FaBrain, FaTools } from "react-icons/fa";
import f from "../assets/images.jpeg"; // Profile picture

export default function About() {
  const skills = [
    { category: "Programming", items: ["JavaScript", "TypeScript", "Python", "C++", "Java"], icon: <FaCode className="text-cyan-400" /> },
    { category: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"], icon: <FaCode className="text-pink-400" /> },
    { category: "Backend & APIs", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Microservices"], icon: <FaServer className="text-purple-400" /> },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase", "MySQL"], icon: <FaDatabase className="text-emerald-400" /> },
    { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD", "Linux", "GitHub Actions"], icon: <FaCloud className="text-blue-400" /> },
    { category: "Machine Learning", items: ["TensorFlow", "scikit-learn", "Data Preprocessing", "Model Training"], icon: <FaBrain className="text-orange-400" /> },
    { category: "Tools & Methods", items: ["Git", "GitHub", "Agile/Scrum", "Postman", "Figma"], icon: <FaTools className="text-yellow-400" /> },
    { category: "Core CS", items: ["Data Structures", "Algorithms", "Problem Solving"], icon: <FaTools className="text-red-400" /> }
  ];

  const education = [
    {
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: "PVG’s COET, SPPU University",
      duration: "Aug 2023 – Expected Aug 2026",
      grade: "SGPA: 9.25",
      color: "border-cyan-500/30"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Puranmal Lahoti Govt. Polytechnic, Latur",
      duration: "Dec 2020 – Aug 2023",
      grade: "Percentage: 89.06%",
      color: "border-purple-500/30"
    },
    {
      degree: "High School Education",
      institution: "Shri Deshikendra Vidyalaya, Latur",
      duration: "Dec 2010 – Aug 2020",
      grade: "Percentage: 93.20%",
      color: "border-blue-500/30"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Get to know my professional background, education, and technical toolkit.
          </motion.p>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-800 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl">
                <img src={f} className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="Profile" />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-gray-300"
          >
            <h2 className="text-2xl font-bold text-teal-400">Professional Summary</h2>
            <p className="text-lg leading-relaxed">
              I am <span className="font-bold text-white">Prathamesh Kulkarni</span>, a Software Engineer / Full Stack Developer with hands-on experience in building and maintaining production-grade applications, currently working as a Software Engineer at <span className="text-teal-300 font-bold">Philips</span>.
            </p>
            <p className="text-lg leading-relaxed">
              I have a strong foundation in data structures, algorithms, and problem-solving, with expertise in developing scalable full-stack applications and AI-powered systems. I am experienced in debugging real-world systems, working with large codebases, and deploying cloud-native applications.
            </p>
            <p className="text-lg leading-relaxed">
              My core project work includes building AI-powered healthcare platforms like <span className="font-semibold text-teal-300">HemoLink</span> (a Thalassemia patient–donor matching system), creating analytics systems, and engineering ML predictive models.
            </p>
          </motion.div>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold inline-block relative pb-2">
              Technical Arsenal
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-800/60 backdrop-blur-md p-6 rounded-3xl border border-slate-700/40 hover:border-teal-500/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.06)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-900 text-gray-300 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold inline-block relative pb-2">
              Academic Background
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border ${edu.color} hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 text-teal-400 text-3xl mb-4">
                    <FaGraduationCap />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm mb-4">{edu.institution}</p>
                </div>
                <div className="border-t border-slate-700/50 pt-4 mt-4 flex items-center justify-between">
                  <span className="text-gray-400 text-xs font-semibold">{edu.duration}</span>
                  <span className="text-teal-400 text-xs font-bold bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
