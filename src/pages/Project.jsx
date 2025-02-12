
import f from "../assets/ff.png"

import c from "../assets/crypto.png"
import f1 from "../assets/expens.png"
import f2 from "../assets/mcq.png"

export default function Project(){

    return(
    <>
    <div className="border-2  w-screen  ">
    <h1 className="font-bold text-3xl text-teal-400 text-center" >Projects</h1>
      <div className="sm:grid-cols-1 grid p-7 lg:grid-cols-3 border-2 border-white rounded-md space-x-2 space-y-2 gap-4">
           <div className=" shadow-2xl hover:shadow-2xl hover:shadow-slate-700  border-2 ml-2 mt-2 h-80 rounded-xl ">
            <h1 className=" bg-white/10 pl-24 pt-3 pb-2 font-medium">Hospital Food Management </h1>
             <hr/>  <img src={f} className="mx-auto h-44 w-full px-8 py-2"/>
            <hr/>
            <div className="w-fit h-20">
            <p className="mx-auto pl-4 text-gray-700 from-neutral-100">A platform for Managing food managent of hospital</p>
             <a href="https://mern-stack-hospital-food-management-system-frontend.vercel.app" className="pl-32 pt-5 text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
            <div className=" shadow-2xl hover:shadow-2xl hover:shadow-slate-700  border-2 ml-2 mt-2 h-80 rounded-xl ">
            <h1 className="pl-24 pt-3 pb-2 font-medium">Travel Recomendation system </h1>
             <hr/>  <img src={f1} className="mx-auto h-44 w-full px-8 py-2"/>
            <hr/>
            <div className="w-fit  ">
            <p className="mx-auto pl-4  text-gray-700 from-neutral-100">Information related to destination based on budget</p>
             <a href="https://github.com/pkkulk/Travel_recommendation_system_for_India" className="pl-32 text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
            <div className=" shadow-2xl hover:shadow-2xl hover:shadow-slate-700  border-2 ml-2 mt-2 h-80 rounded-xl ">
            <h1 className="pl-16 pt-3 pb-2 font-medium">Cryptocurrency tracker usring reactjs </h1>
             <hr/>  <img src={c} className="mx-auto h-44 w-full px-8 py-2"/>
            <hr/>
            <div className="w-fit  ">
            <p className="mx-auto pl-4  text-gray-700 from-neutral-100">fetches crypto prizes with history and real time data</p>
             <a href="https://github.com/pkkulk/cryptocurrency-tracker-using-reactjs-v2" className="pl-32 text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
            <div className=" shadow-2xl hover:shadow-2xl hover:shadow-slate-700  border-2 ml-2 mt-2 h-80 rounded-xl ">
            <h1 className="pl-16 pt-3 pb-2 font-medium">Online Mcq examination system </h1>
             <hr/>  <img src={f2} className="mx-auto h-44 w-full px-8 py-2"/>
            <hr/>
            <div className="w-fit  ">
            <p className="mx-auto pl-4  text-gray-700 from-neutral-100">platform for giving mcq test online using java with JDBC conection</p>
             <a href="https://github.com/pkkulk/online-examination-system-using-java" className="pl-32 text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
            
          



    </div>
    </div>

    
    </>
     
    );
    }