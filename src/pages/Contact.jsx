import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact(){


    return(
    <><div className="w-screen h-screen bg-gradient-to-r from-slate-900 to-slate-700  text-white">
        <h1 className="font-bold text-3xl p-4">Get In Touch</h1><hr/>
        <div>
        <p className="p-2">I’m  currently open to job and internship opportunities</p>
   <div className=" p-2 text-2xl w-1/2 ml-7 mt-20 ">
       <p className="flex gap-4 mb-5"> <p><TfiEmail/></p><p >prathmeshkulkarni312@gmail.com</p></p>
       <p className="flex gap-4 mb-5"> <p><FaLinkedin/></p><p><a href="https://www.linkedin.com/in/prathmesh-kulkarni-57972" className="hover:text-blue-400">https://www.linkedin.com/in/prathmesh-kulkarni-57972</a></p></p>
       <p className="flex gap-4 mb-5"> <p><FaGithubSquare/></p><p ><a href="https://github.com/pkkulk" className="hover:text-blue-400">https://github.com/pkkulk</a></p></p>
       <p className="flex gap-4 mb-5"> <p><FaPhoneAlt/></p><p >8421624619</p></p>
         
    </div>
         </div>







</div>
    
    
    </>
    
    );
    }