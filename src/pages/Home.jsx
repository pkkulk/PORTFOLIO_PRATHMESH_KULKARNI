import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow } from "react-icons/si";
import f from '../assets/ff.png'
import { Link } from 'react-router-dom';
import c from "../assets/crypto.png"
import f1 from "../assets/expens.png"
import f2 from "../assets/mcq.png"
import f5 from "../assets/heart.png"
import p from "../assets/b2.png"
import p1 from "../assets/aideas.png"
import f4 from "../assets/secureslack.png"
import f3 from "../assets/ipl.png"
function Home() {
  const titleRef = useRef(null);

  const titleRef2 = useRef(null);
  const [current, setCurrent] = useState(0);

 const projects = [
   {
    title: "aIDEAS association website",
    description: "for showing the past events of association,doing the technical task ..",
    image: p1,
    link: "https://aideas-website-new.vercel.app/",
  },{
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
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const project = projects[current];
  const [Menu,setMenu] = useState(false);
  useEffect(() => {
    // Rotate the ring infinitely
    gsap.to(".ring", {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: "linear"
    });
    const letters = titleRef.current.textContent.split("");
    titleRef.current.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join("");
    gsap.from(titleRef.current.children, {
      opacity: 0,
      y: 20, // Move letters upwards
      duration: 0.9 , // Delay between letters
      repeat: -1, 
      stagger: 0.1, // Delay each letter by 0.1s

      yoyo: true, // Makes animation go back and forth
      ease: "power2.out",
    });
    const letters2 = titleRef2.current.textContent.split("");
    titleRef2.current.innerHTML = letters2.map((letter) => `<span>${letter}</span>`).join("");
    gsap.from(titleRef2.current.children, {
      opacity: 0,
      y: 20, // Move letters upwards
      duration: 0.3 , // Delay between letters
      repeat: -1, 
      repeatDelay: 10,
      stagger: 0.1, // Delay each letter by 0.1s
 // Makes animation go back and forth
      ease: "power2.out",
    });
  }, []);
return(<>

<div className='w-screen bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900'>
<div className="lg:hidden p-4 flex justify-between">  
  <h1 ref={titleRef} className="text-white font-medium text-2xl">
      Portfolio
    </h1>
        <button onClick={() => setMenu(!Menu)} className="text-white text-2xl">
  {Menu ? "✖" : "☰"}
</button>
      </div>  

      <div className='hidden sticky z-40 top-0 lg:flex bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400  p-4 border-b-2 mx-auto border-gray-50'>

   <h1 className='flex-1 mx-auto font-bold text-white hover:text-gray-400'><Link to="/" >Home</Link></h1>
   <h1 className='flex-1 mx-auto font-bold text-white hover:text-gray-400'><Link to="/about" >about</Link></h1>
   <h1 className='flex-1 mx-auto font-bold text-white hover:text-gray-400'><Link to="/project" >Project</Link></h1>
   <h1 className='flex-1 mx-auto font-bold text-white hover:text-gray-400'><Link to="/experience" >Experience</Link></h1>
   <h1 className='flex-1 mx-auto font-bold text-white hover:text-gray-400'><Link to="/contact" >Contact</Link></h1>
</div> 
{Menu &&(
 <div className=' z-30 absolute top-16 right-4 w-64 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col text-center p-4'>
 <Link to="/" className='py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Home</Link>
 <Link to="/about" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>About</Link>
 <Link to="/project" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Projects</Link>
 <Link to="/experience" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Experience</Link>
 <Link to="/contact" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Contact</Link>
</div> )}
 <div className='mx-auto w-fit mt-5'>
  <div className=' flex flex-col-2 relative w-full  '>
    <div className='w-1/2'>
                   <div className='relative w-20  lg:top-12 lg:left-52 top-14  '> 
                   <motion.div
                   className="w-full absolute -top-10 left-10 text-blue-500 text-4xl"
                      animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                     >
                         <FaReact  className='w-full lg:h-24 sm:h-9 '/>
                      </motion.div>
                     </div> 
                     <div className='relative w-20  lg:top-40  lg:left-80 top-72 '> 
                   
                     <motion.div
                   className="w-full absolute -top-10 left-10 text-blue-500 text-4xl"
                      animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                     >
                         <RiTailwindCssFill  className='w-full lg:h-24 sm:h-9 '/>
                      </motion.div>
                     </div>

                 <div className='relative w-20 lg:top-40 lg:left-36  top-36'> 
                    <motion.div
                    className="w-full absolute top-0 -right-0 text-green-500 text-4xl "
                 animate={{ y: [0, -15, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}>
                    <FaNodeJs className='w-full lg:h-24 sm:h-9' />
                      </motion.div>
                </div>   
        </div>
        <div>
                   <div className='relative w-20  lg:top-12 lg:left-52 top-14 left-14'> 
                   <motion.div
                   className="w-full absolute -top-10 left-10 text-blue-500 text-4xl"
                      animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                     >
                         <FaPython  className='w-full lg:h-24 sm:h-9'/>
                      </motion.div>
                     </div>
                     <div className='relative w-20  lg:top-48 lg:left-36 top-72 left-14'> 
                   <motion.div
                   className="w-full absolute -top-10 left-10 text-blue-500 text-4xl"
                      animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                     >
                         <SiTensorflow className='w-full lg:h-24 sm:h-9'/>
                      </motion.div>
                     </div>
                 <div className='relative w-20 lg:top-40 lg:left-96 left-32 top-32'> 
                    <motion.div
                    className="w-full absolute top-0 left-0 text-green-500 text-4xl "
                 animate={{ y: [0, -15, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}>
                    <FaDatabase className='w-full lg:h-24 h-9' />
                      </motion.div>
                </div>   
        </div>   
                

 </div>
 <div className="relative mx-auto w-fit mt-5  ">

      {/* Rotating Ring */}
      <div className="shadow-2xl shadow-white ring absolute top-1/2 left-1/2 w-64 h-64 border-4 border-green-400 rounded-full transform -translate-x-1/2  -translate-y-1/2">
      </div>
      {/* Profile Image */}
      <img
        src={p}
        alt="Profile"
        className="relative mx-auto w-64 h-64 rounded-full object-cover z-10"
      />
    </div>
   
 <div className="text-center mt-7 mb-4 ">
        <h1 className="  text-5xl font-bold bg-gradient-rainbow text-transparent bg-clip-text animate-gradient">Hi, I'm Prathmesh!</h1>
       <div className='w-4/5 mx-auto pt-2 pb-4 border-2  rounded-3xl mt-2 mb-4'>
            <p  className="mt-2 text-xl  font-medium text-transparent bg-gradient-to-r bg-clip-text from-orange-700 via-white to-green-600">
          <h1 ref={titleRef2} > A passionate developer skilled in nextjs, nodejs Python, and building modern web applications. I love solving complex problems and creating impactful projects.
          </h1>  </p>
          </div>
       </div>
       <hr></hr>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen p-8">
      {/* Navigation Buttons */}
      <div className="text-center mt-4 mb-12">
        <h2 className="text-3xl font-bold mb-6">🚀 Explore My Portfolio</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#projects" className="px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">Projects</a>
          <a href="#skills" className="px-5 py-2 bg-green-600 rounded-full hover:bg-green-700 transition">Skills</a>
          <a href="#about" className="px-5 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition">About</a>
          <a href="#contact" className="px-5 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">Contact</a>
        </div>
      </div>
 <section id="projects" className="text-center mb-20">
  <h2 className="text-2xl font-semibold mb-8 border-b-2 inline-block border-purple-500 text-white">
    My Projects
  </h2>
  
  <div className="bg-white text-gray-900 p-7 max-w-xl mx-auto rounded-xl shadow-lg transition duration-300">
    <img
      src={projects[current].image}
      alt={projects[current].title}
      className="w-full h-64 p-2  rounded mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{projects[current].title}</h3>
    <p className="mb-4">{projects[current].description}</p>
    <a
      href={projects[current].link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-blue-600 hover:underline font-medium"
    >
      View Project →
    </a>
  </div>

  <div className="flex justify-center gap-3 mt-6">
    {projects.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-4 h-4 rounded-full ${i === current ? "bg-blue-600" : "bg-gray-400"} transition`}
      />
    ))}
  </div>
</section>

      {/* About */}
      <section id="about" className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 inline-block border-blue-500">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mt-4 leading-relaxed">
          I'm <strong className="text-white">Prathmesh</strong>, a passionate software developer who loves building modern, impactful web applications. I focus on performance, clean code, and creating smooth user experiences  
      <Link to="/about" className='text-blue-500' >  more...</Link>
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-8 border-b-2 inline-block border-green-500">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            ["Frontend", "React, Tailwind CSS"],
            ["Backend", "Node.js, Flask"],
            ["Databases", "MongoDB, MySQL"],
            ["AI/ML", "Tensorflow, Keras"],
            ["Data Analysis", "Python, Pandas, Matplotlib, SQL"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white text-gray-900 p-6 rounded-xl shadow-md w-64 hover:scale-105 transition">
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
     
      {/* Contact */}
      <section id="contact" className="text-center">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 inline-block border-pink-500">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          Let's connect and create something amazing together!
        </p>
        <a
          href="mailto:prathmeshkulkarni312@gmail.com"
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
     </div>
</div>
  </>
);
 
}

export default Home;