import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  const titleRef = useRef(null);
  const [Menu, setMenu] = useState(false);

  useEffect(() => {
    const letters = titleRef.current.textContent.split("");
    titleRef.current.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join("");
    gsap.from(titleRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.9,
      repeat: -1,
      stagger: 0.1,
      yoyo: true,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden p-4 flex justify-between bg-slate-900 z-50 relative">
        <h1 ref={titleRef} className="text-white font-medium text-2xl">
          Portfolio
        </h1>
        <button onClick={() => setMenu(!Menu)} className="text-white text-2xl">
          {Menu ? "✖" : "☰"}
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sticky z-40 top-0 lg:flex bg-gradient-to-r from-slate-400 via-slate-900 to-slate-400 p-4 border-b-2 mx-auto border-gray-50">
        <h1 className="flex-1 mx-auto font-bold text-white hover:text-gray-400">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="flex-1 mx-auto font-bold text-white hover:text-gray-400">
          <Link to="/about">About</Link>
        </h1>
        <h1 className="flex-1 mx-auto font-bold text-white hover:text-gray-400">
          <Link to="/project">Project</Link>
        </h1>
        <h1 className="flex-1 mx-auto font-bold text-white hover:text-gray-400">
          <Link to="/experience">Experience</Link>
        </h1>
        <h1 className="flex-1 mx-auto font-bold text-white hover:text-gray-400">
          <Link to="/contact">Contact</Link>
        </h1>
      </div>

      {/* Mobile Menu Drawer */}
      {Menu && (
        <div className="z-30 absolute top-16 right-4 w-64 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col text-center p-4">
          <Link to="/" className="py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white" onClick={() => setMenu(false)}>
            Home
          </Link>
          <Link to="/about" className="py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white" onClick={() => setMenu(false)}>
            About
          </Link>
          <Link to="/project" className="py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white" onClick={() => setMenu(false)}>
            Projects
          </Link>
          <Link to="/experience" className="py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white" onClick={() => setMenu(false)}>
            Experience
          </Link>
          <Link to="/contact" className="py-2 hover:bg-gray-700 rounded hover:border-b-2 hover:border-white" onClick={() => setMenu(false)}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
