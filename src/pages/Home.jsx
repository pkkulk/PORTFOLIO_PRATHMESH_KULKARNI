import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDownload, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow, SiNextdotjs, SiMongodb, SiDocker, SiPostgresql } from "react-icons/si";
import { Link } from 'react-router-dom';

// Assets
import f from '../assets/ff.png'
import c from "../assets/crypto.png"
import f1 from "../assets/expens.png"
import f2 from "../assets/mcq.png"
import f5 from "../assets/heart.png"
import p from "../assets/i2.png" 
import p1 from "../assets/aideas.png"
import f4 from "../assets/secureslack.png"
import f3 from "../assets/ipl.png"

// --- Animation Variants ---
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Orbit animation for Hero icons
const iconVariants = (duration) => ({
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

function Home() {
  const [Menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Projects Array - All 8 included, descriptions refined from Resume where applicable
  const projects = [
    {
      title: "aIDEAS Association Website",
      description: "Technical Head for managing technical tasks and showcasing association events.",
      image: p1,
      link: "https://aideas-website-new.vercel.app/",
    },
    {
      title: "Hospital Food Management",
      description: "MERN stack platform with role-based access, reducing food waste by 30%.",
      image: f,
      link: "https://mern-stack-hospital-food-management-system-frontend.vercel.app",
    },
    {
      title: "IPL Analytics Dashboard",
      description: "Interactive dashboard using Next.js and Recharts with 40% faster query times.",
      image: f3,
      link: "https://ipl-dashboard2.vercel.app/teams",
    },
    {
      title: "Heart Failure Detection",
      description: "AI-powered clinical support system using scikit-learn and Streamlit.",
      image: f5,
      link: "https://deployedheartfailure-jkwf8r9tujutnt9beinksw.streamlit.app/",
    },
    {
      title: "Secure Slack & Cyber News",
      description: "Cybersecurity portal featuring real-time news updates and an AI-powered chatbot.",
      image: f4,
      link: "https://secure-slack-frontend.vercel.app/blog",
    },
    {
      title: "Crypto Real-time Tracker",
      description: "Monitoring live cryptocurrency prices and market trends using high-frequency APIs.",
      image: c,
      link: "https://github.com/pkkulk/cryptocurrency-tracker-using-reactjs-v2",
    },
    {
      title: "Travel Expense Tracker",
      description: "Tracks travel expenses and provides algorithmic insights for budget management.",
      image: f1,
      link: "https://github.com/pkkulk/Travel_recommendation_system_for_India",
    },
    {
      title: "Online MCQ Examination",
      description: "Robust platform for conducting online tests built using Java and JDBC.",
      image: f2,
      link: "https://github.com/pkkulk/online-examination-system-using-java",
    },
  ];

  // Carousel Logic with Pause
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length, isPaused]);

  return (
    <div className='min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30 overflow-x-hidden'>
      
      {/* --- Navigation --- */}
      <nav className='sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <div className="text-2xl font-black tracking-tighter text-white">PORTFOLIO</div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center space-x-8'>
              {['Home', 'About', 'Project', 'Experience', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className='text-sm uppercase tracking-widest font-semibold text-gray-400 hover:text-cyan-400 transition-colors relative group'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></span>
                </Link>
              ))}
              {/* Resume Button */}
              <a 
                href="/Prathameshkulkarni_cv7.3.pdf" 
                download 
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
              >
                <FaDownload className="text-xs" /> RESUME
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenu(!Menu)} className="lg:hidden text-white text-3xl p-2 rounded-md hover:bg-slate-800 transition">
              {Menu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {Menu && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }} 
              className='lg:hidden bg-slate-800 border-b border-slate-700 overflow-hidden'
            >
              {['Home', 'About', 'Project', 'Experience', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className='block px-6 py-4 text-base font-medium text-white hover:bg-slate-700' 
                  onClick={() => setMenu(false)}
                >
                  {item}
                </Link>
              ))}
              <a href="/Prathameshkulkarni_cv7.3.pdf" download className="block px-6 py-4 text-cyan-400 font-bold hover:bg-slate-700">
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* --- New Hero Section --- */}
       {/* --- IMPROVED HERO SECTION --- */}
        <section className='relative pt-12 pb-20 lg:pt-20 lg:pb-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:gap-16'>
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Left: Text Content (Bottom on Mobile, Left on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:w-3/5 z-10 text-center lg:text-left w-full'
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Available for Hire</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Digital</span> Intelligence.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm <span className="text-white font-bold">Prathmesh Kulkarni</span>, a Full Stack Developer specializing in 
              scalable <span className="text-cyan-400">Node.js</span> architectures and 
              <span className="text-purple-400"> Machine Learning</span> solutions. 
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a href="#projects" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-black text-lg hover:bg-cyan-400 transition-all transform hover:-translate-y-1">
                View Projects
              </a>
              <Link to="/contact" className="px-8 py-4 border-2 border-slate-700 rounded-xl font-black text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual Orbit Animation (Top on Mobile, Right on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='lg:w-2/5 relative flex justify-center items-center mt-0 lg:mt-0'
          >
            {/* If your image has a white background, 'bg-white' ensures it looks intentional. 
               If it's transparent, 'bg-slate-800' fits the dark theme.
               Changed to 'bg-slate-800' to match your dark theme, but you can swap to 'bg-white' if you prefer the card look.
            */}
            <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
              
              {/* Image Container */}
              <div className="absolute inset-0 bg-slate-800 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl">
                <img 
                  src={p} 
                  alt="Prathmesh Profile" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                />
              </div>
              
              {/* Floating Tech Icons - Pushed further out to avoid overlapping the face */}
              <motion.div variants={iconVariants(3)} animate="animate" className="absolute -top-10 -left-10 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-3xl text-cyan-400 shadow-xl backdrop-blur-md">
                <FaReact />
              </motion.div>
              <motion.div variants={iconVariants(4)} animate="animate" className="absolute top-20 -right-12 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-3xl text-green-500 shadow-xl backdrop-blur-md">
                <FaNodeJs />
              </motion.div>
              <motion.div variants={iconVariants(3.5)} animate="animate" className="absolute -bottom-10 -left-10 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-3xl text-yellow-500 shadow-xl backdrop-blur-md">
                <FaPython />
              </motion.div>
              <motion.div variants={iconVariants(4.5)} animate="animate" className="absolute -bottom-16 right-10 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-3xl text-blue-500 shadow-xl backdrop-blur-md">
                <SiDocker />
              </motion.div>
              <motion.div variants={iconVariants(5)} animate="animate" className="absolute top-0 -right-4 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-3xl text-orange-500 shadow-xl backdrop-blur-md">
                <SiTensorflow />
              </motion.div>
              <motion.div variants={iconVariants(2.8)} animate="animate" className="absolute bottom-20 -right-16 p-3 bg-slate-800 border border-slate-700 rounded-2xl text-2xl text-gray-300 shadow-xl backdrop-blur-md">
                <SiNextdotjs />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- Summary / Stats Bar --- */}
        <section className="py-12 border-y border-slate-800/50 mb-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="space-y-2 p-4">
                <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Education</h3>
                <p className="text-white font-bold text-xl">B.E. AI & Data Science</p>
                <p className="text-gray-400 text-sm">SPPU University | SGPA: 8.90</p>
              </div>
              <div className="space-y-2 p-4 border-t md:border-t-0 md:border-l border-slate-800">
                <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs">Experience</h3>
                <p className="text-white font-bold text-xl">ML Developer Intern</p>
                <p className="text-gray-400 text-sm">Edunet Foundation (2025)</p>
              </div>
              <div className="space-y-2 p-4 border-t md:border-t-0 md:border-l border-slate-800">
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Skills</h3>
                <p className="text-white font-bold text-xl">Modern Tech Stack</p>
                <p className="text-gray-400 text-sm">React, Next.js, FastAPI, Docker</p>
              </div>
           </div>
        </section>

        {/* --- Featured Projects Section (With Pause on Hover) --- */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold inline-block border-b-4 border-purple-500 pb-2">Featured Projects</h2>
          </div>

          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={projects[current].image} 
                    alt={projects[current].title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">{projects[current].title}</h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">{projects[current].description}</p>
                  <div>
                    <a href={projects[current].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition font-bold group">
                      Explore Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-purple-500" : "w-2 bg-slate-700 hover:bg-slate-600"}`}
                  aria-label={`View project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* --- About Me (Restored) --- */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-blue-500 inline-block px-4 pb-2">About Me</h2>
          <div className="max-w-4xl mx-auto bg-slate-800/60 p-10 rounded-3xl border border-slate-700 shadow-xl">
             <p className="text-xl text-gray-300 leading-relaxed">
              I'm <strong>Prathmesh</strong>, a Full Stack Developer with hands-on experience in developing and deploying modern web applications using 
              <strong> JavaScript, TypeScript, React.js</strong>, and <strong>Node.js</strong>. 
              I specialize in building scalable RESTful APIs and managing data using <strong>MongoDB</strong> and <strong>MySQL</strong>.
              Currently pursuing my B.E. in Artificial Intelligence & Data Science with an <strong>8.90 SGPA</strong>.
              <br /><br />
              <Link to="/about" className='text-cyan-400 hover:text-cyan-300 font-bold transition inline-flex items-center'>
                Read full bio <span className="ml-1">→</span>
              </Link>
            </p>
          </div>
        </motion.section>

        {/* --- Skills Section (Resume Accurate) --- */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold inline-block border-b-4 border-green-500 pb-2">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Programming", items: "Python, JavaScript (ES6+), TypeScript, C++, Java", icon: <FaJava className="text-orange-500"/> },
              { title: "Frontend", items: "React.js, Next.js, HTML5, Tailwind CSS, Framer Motion", icon: <FaReact className="text-blue-400"/> },
              { title: "Backend & API", items: "Node.js, Express.js, FastAPI, RESTful Design", icon: <FaNodeJs className="text-green-500"/> },
              { title: "Databases", items: "PostgreSQL, MongoDB, Supabase, MySQL", icon: <SiMongodb className="text-green-600"/> },
              { title: "DevOps & Cloud", items: "Docker, Kubernetes, AWS (EC2, S3), CI/CD", icon: <SiDocker className="text-blue-500"/> },
              { title: "AI & ML", items: "TensorFlow, scikit-learn, pandas, numpy", icon: <SiTensorflow className="text-orange-400"/> }
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-6">{skill.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-white">{skill.title}</h3>
                <p className='text-gray-400 text-sm leading-relaxed'>{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Contact --- */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-20 text-center">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-extrabold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-10">
              Ready to collaborate on something amazing?
            </p>
            <motion.a
              href="mailto:prathmeshkulkarni312@gmail.com"
              className="inline-block px-10 py-4 bg-pink-600 text-white rounded-full text-xl font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.a>
          </div>
        </motion.section>

      </main>

      {/* --- Footer --- */}
      <footer className="py-8 border-t border-slate-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Prathmesh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;