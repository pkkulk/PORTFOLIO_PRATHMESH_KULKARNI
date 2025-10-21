import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow } from "react-icons/si";
import { Link } from 'react-router-dom';
import f from '../assets/ff.png'
import c from "../assets/crypto.png"
import f1 from "../assets/expens.png"
import f2 from "../assets/mcq.png"
import f5 from "../assets/heart.png"
import p from "../assets/b2.png" // Profile image
import p1 from "../assets/aideas.png"
import f4 from "../assets/secureslack.png"
import f3 from "../assets/ipl.png"

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Home() {
  const [Menu, setMenu] = useState(false);
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "aIDEAS association website",
      description: "for showing the past events of association,doing the technical task ..",
      image: p1,
      link: "https://aideas-website-new.vercel.app/",
    }, {
      title: "Hospital Food Management",
      description: "A platform for managing hospital food delivery...",
      image: f,
      link: "https://mern-stack-hospital-food-management-system-frontend.vercel.app",
    },
    {
      title: "Crypto Tracker using Reactjs",
      description: "It fetches prices of cryptos.",
      image: c,
      link: "https://github.com/pkkulk/cryptocurrency-tracker-using-reactjs-v2",
    },
    {
      title: "Travel Expense Tracker",
      description: "Tracks travel expenses and gives insights.",
      image: f1,
      link: "https://github.com/pkkulk/Travel_recommendation_system_for_India",
    },
    {
      title: "Online MCQ Examination System",
      description: "Platform for online tests using Java and JDBC.",
      image: f2,
      link: "https://github.com/pkkulk/online-examination-system-using-java",
    },
    {
      title: "IPL Dashboard",
      description: "Platform to analyze IPL data, player, and team performance per year.",
      image: f3,
      link: "https://ipl-dashboard2.vercel.app/teams",
    },
    {
      title: "Secure slack",
      description: "for cyber news, for any cyber providing company with chatbot",
      image: f4,
      link: "https://secure-slack-frontend.vercel.app/blog",
    },
    {
      title: "Heart failure detection",
      description: "for detecting failure of heart based on user data like cholesterol, BP, chest pain",
      image: f5,
      link: "https://deployedheartfailure-jkwf8r9tujutnt9beinksw.streamlit.app/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const iconMotionProps = {
    animate: {
      y: [0, -10, 0],
      rotate: 360,
    },
    transition: {
      y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      rotate: { repeat: Infinity, duration: 10, ease: "linear" },
    },
  };

  const ringMotionProps = {
    animate: { rotate: 360 },
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
    },
  };

  const titleLetters = "Portfolio".split("");

  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Navigation */}
      <nav className='sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo/Title */}
            <div className='flex-shrink-0'>
              <div className="text-white font-extrabold text-2xl tracking-wider">
                {titleLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex space-x-8'>
              {['Home', 'About', 'Project', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className='text-gray-300 hover:text-white transition duration-200 text-lg font-medium relative group'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out'></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenu(!Menu)} className="lg:hidden text-white text-3xl p-2 rounded-md hover:bg-slate-800 transition">
              {Menu ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile Menu Content */}
        <AnimatePresence>
          {Menu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden absolute top-16 w-full bg-slate-800 shadow-xl'
            >
              {['Home', 'About', 'Project', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className='block px-4 py-3 text-base font-medium text-white hover:bg-slate-700 transition'
                  onClick={() => setMenu(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
 <motion.div
          className='relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-12'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <div className='lg:w-1/2 text-center lg:text-left order-last lg:order-none'>
            <motion.h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
              variants={itemVariants}
            >
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Prathmesh</span>!
            </motion.h1>

            <motion.div className='mb-8' variants={itemVariants}>
              <p className="mt-4 text-xl font-medium text-gray-300">
                A passionate developer skilled in <strong className='text-cyan-400'>React/Next.js</strong>, <strong className='text-green-400'>Node.js</strong>, <strong className='text-yellow-400'>Python</strong>, and building modern web applications.
              </p>
              <p className="mt-2 text-lg text-gray-400">
                I love solving complex problems and creating impactful projects.
              </p>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start gap-4" variants={itemVariants}>
              <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">View Projects</a>
              <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition shadow-lg">Get In Touch</Link>
            </motion.div>
          </div>

          {/* Profile Image & Icons */}
          <div className='lg:w-1/2 relative flex justify-center items-center w-full h-[350px] sm:h-[400px] mb-8 lg:mb-0 order-first lg:order-none'>
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full shadow-2xl shadow-cyan-500/50"
                {...ringMotionProps}
              />
              <img
                src={p}
                alt="Profile"
                className="w-full h-full object-cover rounded-full p-2 bg-slate-900 border-4 border-slate-900"
              />
            </motion.div>

            {/* Floating Icons */}
            <motion.div {...iconMotionProps} className="absolute top-0 left-5 text-5xl text-blue-500 lg:text-6xl lg:left-10"><FaReact /></motion.div>
            <motion.div {...iconMotionProps} transition={{ ...iconMotionProps.transition, y: { ...iconMotionProps.transition.y, duration: 2.5 } }} className="absolute top-16 right-0 text-5xl text-green-500 lg:text-6xl lg:right-5"><FaNodeJs /></motion.div>
            <motion.div {...iconMotionProps} transition={{ ...iconMotionProps.transition, y: { ...iconMotionProps.transition.y, duration: 1.8 } }} className="absolute bottom-16 left-0 text-5xl text-yellow-500 lg:text-6xl lg:left-5"><FaPython /></motion.div>
            <motion.div {...iconMotionProps} transition={{ ...iconMotionProps.transition, y: { ...iconMotionProps.transition.y, duration: 2.2 } }} className="absolute bottom-0 right-10 text-5xl text-teal-400 lg:text-6xl lg:right-20"><RiTailwindCssFill /></motion.div>
            <motion.div {...iconMotionProps} transition={{ ...iconMotionProps.transition, y: { ...iconMotionProps.transition.y, duration: 2.8 } }} className="absolute top-5 right-36 text-5xl text-red-500 lg:text-6xl lg:right-40"><SiTensorflow /></motion.div>
            <motion.div {...iconMotionProps} transition={{ ...iconMotionProps.transition, y: { ...iconMotionProps.transition.y, duration: 1.5 } }} className="absolute bottom-32 right-0 text-5xl text-gray-400 lg:text-6xl lg:right-5"><FaDatabase /></motion.div>
          </div>
        </motion.div>
        <hr className='my-16 border-gray-700' />

        {/* Content Sections */}
        <section id="projects" className="py-12">
          <h2 className="text-4xl font-extrabold text-center mb-12 border-b-4 border-purple-500 inline-block px-4 pb-2 mx-auto">
            Featured Project
          </h2>

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/80 p-8 max-w-xl mx-auto rounded-2xl shadow-xl border border-slate-700 hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <motion.img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">{projects[current].title}</h3>
            <p className="mb-6 text-gray-300">{projects[current].description}</p>
            <a
              href={projects[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              View Project →
            </a>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-purple-500 scale-125" : "bg-gray-500"} transition-all duration-300`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 text-center">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-blue-500 inline-block px-4 pb-2">About Me</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mt-4 leading-relaxed bg-slate-800/80 p-8 rounded-xl shadow-lg">
            I'm <strong className="text-white">Prathmesh</strong>, a passionate software developer focused on performance, clean code, and creating smooth user experiences. I thrive in challenging environments and love bringing complex ideas to life.
            <Link to="/about" className='text-blue-500 hover:text-blue-400 ml-2 font-semibold transition'>Read more...</Link>
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12 text-center">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-green-500 inline-block px-4 pb-2">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {[
              ["Frontend", "React, Next.js, HTML5, CSS3, JavaScript, Redux"],
              ["Backend & Tools", "Node.js, Express, Flask, Git, Docker"],
              ["Databases", "MongoDB, MySQL, PostgreSQL, Redis"],
              ["AI/ML & Data", "Python, Pandas, TensorFlow, Scikit-learn, SQL"],
            ].map(([title, desc], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800 text-white p-6 rounded-xl shadow-xl w-full sm:w-64 lg:w-72 hover:shadow-green-500/30 transition-shadow duration-300 border border-slate-700"
              >
                <h3 className="font-bold text-xl mb-2 text-green-400">{title}</h3>
                <p className='text-gray-300 text-sm'>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 text-center">
          <h2 className="text-4xl font-extrabold mb-8 border-b-4 border-pink-500 inline-block px-4 pb-2">Contact Me</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's connect and create something amazing together!
          </p>
          <motion.a
            href="mailto:prathmeshkulkarni312@gmail.com"
            className="px-8 py-4 bg-pink-600 text-white rounded-full text-xl font-semibold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send a Message
          </motion.a>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-700 text-center text-gray-500">
        <p>© 2025 Prathmesh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;