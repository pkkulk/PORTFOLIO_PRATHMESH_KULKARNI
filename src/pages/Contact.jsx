import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact(){


    return(
    <>
        <div className="w-screen min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col items-center p-6">
          <h1 className="font-bold text-3xl text-center mb-4">Get In Touch</h1>
          <hr className="w-full max-w-md border-gray-400 mb-6" />
          <p className="text-center text-lg max-w-lg">I’m currently open to job and internship opportunities.</p>
    
          <div className="flex flex-col sm:w-full md:w-3/4 lg:w-1/2 mt-10 space-y-6 lg:ml-96 md:ml-80">
            <div className="flex items-center gap-4">
              <TfiEmail className="text-2xl" />
              <p className="text-lg">prathmeshkulkarni312@gmail.com</p>
            </div>
    
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-blue-400" />
              <a href="https://www.linkedin.com/in/prathmesh-kulkarni-57972" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-300">
                linkedin.com/in/prathmesh-kulkarni-57972
              </a>
            </div>
    
            <div className="flex items-center gap-4">
              <FaGithubSquare className="text-2xl text-gray-300" />
              <a href="https://github.com/pkkulk" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-400">
                github.com/pkkulk
              </a>
            </div>
    
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-green-400" />
              <p className="text-lg">8421624619</p>
            </div>
          </div>
        </div>
    
    </>
    
    );
    }