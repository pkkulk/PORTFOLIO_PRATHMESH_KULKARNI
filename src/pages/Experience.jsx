import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      category: "Work Experience",
      role: "Software Engineer Intern",
      company: "Philips HIC",
      duration: "Dec 2025 - Present",
      icon: <FaBriefcase />,
      colorClass: "text-cyan-400",
      dotClass: "text-cyan-400 border-cyan-500/40 group-hover:border-cyan-400 shadow-cyan-500/10",
      cardHoverClass: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      points: [
        "Contributing to a production-grade software system; understanding end-to-end application architecture and service interactions.",
        "Debugging issues in existing modules and improving stability and reliability of the application.",
        "Working with a large, real-world codebase to trace control flow, identify problem areas, and apply fixes.",
        "Collaborating with senior engineers to understand system design, APIs, and integration points.",
        "Following industry practices for versioned releases, testing, and deployment workflows."
      ]
    },
    {
      category: "Work Experience",
      role: "ML Developer Intern",
      company: "Edunet Foundation",
      duration: "2025",
      icon: <FaBriefcase />,
      colorClass: "text-cyan-400",
      dotClass: "text-cyan-400 border-cyan-500/40 group-hover:border-cyan-400 shadow-cyan-500/10",
      cardHoverClass: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      points: [
        "Designed and trained Machine Learning models utilizing TensorFlow, scikit-learn, NumPy, and Pandas.",
        "Implemented end-to-end data preprocessing pipelines, feature engineering, and model evaluation metrics."
      ]
    },
    {
      category: "Leadership",
      role: "Technical Head",
      company: "aIDEAS Association",
      duration: "2024 - 2026",
      icon: <FaUsers />,
      colorClass: "text-purple-400",
      dotClass: "text-purple-400 border-purple-500/40 group-hover:border-purple-400 shadow-purple-500/10",
      cardHoverClass: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      points: [
        "Leading the technical initiatives, driving association growth, and building robust community networks.",
        "Managing large-scale technical events, organizing hands-on coding workshops, hackathons, and guest lectures."
      ]
    },
    {
      category: "Leadership",
      role: "Social Media Head",
      company: "TPSA",
      duration: "2023 - 2024",
      icon: <FaUsers />,
      colorClass: "text-purple-400",
      dotClass: "text-purple-400 border-purple-500/40 group-hover:border-purple-400 shadow-purple-500/10",
      cardHoverClass: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      points: [
        "Managed brand identity, content strategy, and digital presence across primary social media channels.",
        "Spearheaded promotional campaigns for major college events, resulting in higher participation and engagement."
      ]
    },
    {
      category: "Industrial Training",
      role: "Web Development Trainee",
      company: "Bright Career Infotech",
      duration: "2024",
      icon: <FaLaptopCode />,
      colorClass: "text-blue-400",
      dotClass: "text-blue-400 border-blue-500/40 group-hover:border-blue-400 shadow-blue-500/10",
      cardHoverClass: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      points: [
        "Completed comprehensive training on core web technologies (HTML5, CSS3, JavaScript, Responsive Design).",
        "Applied best development practices to construct interactive, client-side web application layouts."
      ]
    },
    {
      category: "Academic Contributions",
      role: "Project Developer Roles",
      company: "PVGCOET Academic Projects",
      duration: "2023 - Present",
      icon: <FaGraduationCap />,
      colorClass: "text-emerald-400",
      dotClass: "text-emerald-400 border-emerald-500/40 group-hover:border-emerald-400 shadow-emerald-500/10",
      cardHoverClass: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      points: [
        "Frontend Development: Designed and engineered a modern, responsive web application using React.js and Tailwind CSS for currency tracking.",
        "Java Development: Engineered a fully functional online MCQ examination system utilizing Java Swing and JDBC-based database connectivity.",
        "Python Development: Developed a Flask-based Traveller Recommendation System employing data filtering algorithms."
      ]
    }
  ];

  const certifications = [
    {
      title: "Gen AI for Beginners",
      issuer: "Google Cloud",
      year: "2023",
      icon: <FaAward className="text-yellow-400" />
    },
    {
      title: "Math for ML",
      issuer: "DeepLearning.AI",
      year: "2023",
      icon: <FaAward className="text-yellow-400" />
    },
    {
      title: "Python Basics",
      issuer: "Python Institute / Online",
      year: "2022",
      icon: <FaAward className="text-yellow-400" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            Professional Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Building technical prowess and leadership competence through real-world experience, research, and project engineering.
          </motion.p>
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[17px] md:-left-[21px] mt-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-slate-900 border-2 border-slate-800 rounded-full text-lg shadow-lg group-hover:scale-110 transition-all duration-300 ${exp.colorClass} ${exp.dotClass}`}>
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className={`bg-slate-800/75 backdrop-blur-md border border-slate-700/40 rounded-3xl p-6 md:p-8 transition-all duration-300 transform group-hover:-translate-y-1 ${exp.cardHoverClass}`}>
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${exp.badgeColor}`}>
                    {exp.category}
                  </span>
                  <span className="text-gray-400 text-sm font-semibold">{exp.duration}</span>
                </div>

                {/* Title and Company */}
                <h3 className={`text-xl md:text-2xl font-bold mb-1 transition-colors ${exp.colorClass}`}>
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  {exp.company}
                </h4>

                {/* Points */}
                <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="hover:text-gray-300 transition-colors">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold inline-block relative pb-2">
              Professional Certifications
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700/40 p-6 rounded-3xl hover:border-yellow-500/30 hover:shadow-[0_0_25px_rgba(234,179,8,0.08)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">{cert.year}</span>
                <h3 className="font-bold text-lg text-white mt-1 mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
