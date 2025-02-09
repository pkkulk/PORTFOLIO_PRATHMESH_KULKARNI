import { useState } from 'react'
import f from '../assets/b2.png'
import { Link } from 'react-router-dom';

function Home() {
  const [Menu,setMenu] = useState(false);
return(<>

<div className='w-screen bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900'>
<div className="lg:hidden p-4 flex justify-between">
        <h1 className='text-white font-bold'>Portfolio</h1>
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
 <div className='absolute top-16 right-4 w-64 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col text-center p-4'>
 <Link to="/" className='py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Home</Link>
 <Link to="/about" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>About</Link>
 <Link to="/project" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Projects</Link>
 <Link to="/experience" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Experience</Link>
 <Link to="/contact" className='py-2 hover:bg-gray-700 rounded  hover:border-b-2 hover:border-white' onClick={() => setMenuOpen(false)}>Contact</Link>
</div> )}
 <div className='mx-auto w-fit mt-5'>
  <img src={f} className='mx-auto w-64 rounded-full pt-3'/>
      <div className="text-center mt-4 mb-4">
        <h1 className="text-5xl font-bold bg-gradient-rainbow text-transparent bg-clip-text animate-gradient">Hi, I'm Prathmesh!</h1>
       <div className='w-1/2 mx-auto pt-2 pb-4 border-2  rounded-3xl mt-2 mb-4'>
            <p className="mt-2 text-xl text-white ">
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
    <p className="text-white w-1/2 mx-auto">
      I'm Prathmesh, a software developer passionate about creating impactful applications with modern tools. I specialize in building clean, functional, and visually appealing projects.
    </p>
  </div>
</section>
<section id="skills" className="py-16 ">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4 text-white">My Skills</h2>
    <div className="flex justify-center flex-wrap gap-6">
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Frontend</h3>
        <p>React, Tailwind CSS</p>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Backend</h3>
        <p>Node.js, Flask</p>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Databases</h3>
        <p>MongoDB, MySQL</p>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="font-semibold">Data analysis</h3>
        <p> Python (NumPy, Pandas, Matplotlib, Seaborn), SQL for data queries, Power BI/Tableau, Excel,</p>
      </div>
    </div>
  </div>
</section>
<section id="projects" className="py-16 ">
  <div className="grid container mx-auto text-center">
    <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
    <div className="grid grid-cols-2 gap-4 m-5">
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-semibold">Book-store</h3>
        <p>A platform for buying books online.</p>
        <a href="#" className="text-blue-500 hover:underline">View Project</a>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-semibold">Crypto Tracker</h3>
        <p>A React app to track cryptocurrency prices.</p>
        <a href="#" className="text-blue-500 hover:underline">View Project</a>
      </div>
      <div className="p-4 bg-white rounded shadow">
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