import { useEffect, useRef, useState } from 'react'

import f from '../assets/b2.png'
import { Link } from 'react-router-dom';

function Home() {
  const titleRef = useRef(null);

 
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

      <div className='hidden lg:flex bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400  p-4 border-b-2 mx-auto border-gray-50'>

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
 <div className=' mx-auto w-fit mt-5``'>
 <div className="relative mx-auto w-fit mt-5  ">
      {/* Rotating Ring */}
      <div className="shadow-2xl shadow-white ring absolute top-1/2 left-1/2 w-64 h-64 border-4 border-green-400 rounded-full transform -translate-x-1/2  -translate-y-1/2">
      </div>

      {/* Profile Image */}
      <img
        src={f}
        alt="Profile"
        className="relative mx-auto w-64 h-64 rounded-full object-cover z-10"
      />
    </div>
 <div className="text-center mt-7 mb-4 ">
        <h1 className="  text-5xl font-bold bg-gradient-rainbow text-transparent bg-clip-text animate-gradient">Hi, I'm Prathmesh!</h1>
       <div className='w-4/5 mx-auto pt-2 pb-4 border-2  rounded-3xl mt-2 mb-4'>
            <p className="mt-2 text-xl  font-medium text-transparent bg-gradient-to-r bg-clip-text from-orange-700 via-white to-green-600">
            A passionate developer skilled in React, Flask, Python, and building modern web applications. I love solving complex problems and creating impactful projects.
            </p>
          </div>
       </div>
       <hr></hr>
       <div className="text-center mt-8">
  <h2 className="text-xl font-semibold text-white">Explore My Portfolio</h2>
  <div className="flex justify-center gap-4 mt-4">
    <a href="#about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">About</a>
    <a href="#skills" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Skills</a>
    <a href="#projects" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Projects</a>
    <a href="#contact" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Contact</a>
  </div>
</div> 
<div className='w-4/5 mx-auto rounded-3xl mt-5 border-4 border-white'>
<section id="about" className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl text-white font-bold mb-4">About Me</h2>
    <p className="text-white w-full lg:w-1/2 mx-auto p-4">
      I'm Prathmesh, a software developer passionate about creating impactful applications with modern tools. I specialize in building clean, functional, and visually appealing projects.
    </p>
  </div>
</section>
<section id="skills" className="py-16 ">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4 text-white">My Skills</h2>
    <div className="flex justify-center flex-wrap gap-6">
      <div className="p-4 w-36 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Frontend</h3>
        <p>React, Tailwind CSS</p>
      </div>
      <div className="p-4 w-36 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Backend</h3>
        <p>Node.js, Flask</p>s
      </div>
      <div className="p-4 w-36 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Databases</h3>
        <p>MongoDB MySQL</p>
      </div>
      <div className="p-4 w-36 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">AI/ML</h3>
        <p>Tensorflow.keras</p>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow mx-8">
        <h3 className="font-semibold m-2">Data analysis</h3>
        <p> Python (NumPy, Pandas, Matplotlib, Seaborn), SQL for data queries</p>
      </div>
    </div>
  </div>
</section>
<section id="projects" className="py-16 ">
  <div className="grid container mx-auto text-center justify-center">

    <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 m-5 ml-8 lg:gap-4">
      <div className="p-4 w-36  mx-auto bg-white rounded shadow  ">
        <h3 className="font-semibold">Hospital Food Management</h3>
        <p>A platform for buying books online.</p>
        <a href="https://mern-stack-hospital-food-management-system-frontend.vercel.app" className="text-blue-500 hover:underline">View Project</a>
      </div>
      <div className="p-4 w-36 bg-white rounded shadow">
        <h3 className="font-semibold">Crypto Tracker</h3>
        <p>A React app to track cryptocurrency prices.</p>
        <a href="#" className="text-blue-500 hover:underline">View Project</a>
      </div>
      <div className="p-4 w-36 bg-white rounded shadow">
        <h3 className="font-semibold">EmailSlicer</h3>
        <p>A tool to extract information from emails.</p>
        <a href="#" className="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="py-16 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <p className="text-white   mb-4">Let's connect and create something amazing together!</p>
    <a href="mailto:your-email@example.com" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
      Get in Touch
    </a>
  </div>
</section>
</div>
     </div>
</div>
  </>
);
 
}

export default Home