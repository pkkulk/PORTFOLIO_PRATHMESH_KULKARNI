import f from "../assets/images.jpeg"

export default function About(){
return(
<>
<div className="dark:bg-white bg-gradient-to-tr from-slate-900 to-slate-700 via-slate-600 ">
<h1 className="text-3xl text-teal-400">About me</h1>
<div className="flex flex-col-2">
    <div className="w-1/2">
    <h1 className="text-2xl p-3 text-green-400 font-bold "> Introduction </h1> 
        <div className="pl-7 space-y-1 text-lg text-slate-200"> <p>Hi I am kulkarni Prathmesh i am currently in third year pursing my degree in Artificial Inetelligence and data science from Pvgcoet pune
            I completed my diploma in Information Technology from puranmal Lahoti Government Poly Latur . I completed my school education from sdvl
            </p> <br/><p>I’m passionate about software development and have been building my skills in various technologies to prepare for a career in this field.
            I’ve worked on projects that have helped me develop both technical and problem-solving skills. For instance, I created a 'Book-store' project using Vite, React, and Tailwind CSS, where I designed the frontend and integrated dynamic features. I also have experience with backend development, working with Flask and Node.js to create full-stack solutions. Additionally, I’ve been exploring database management, using tools like MySQL and MongoDB.
            <br/></p>  <p><h1 className="pt-3 ">My technical skill set includes:</h1>
            <ol className="pl-7 list-disc">
                <li>Programming languages: Python, JavaScript, and C++</li>
                <li>Frontend technologies: React, Vite, Tailwind CSS, and HTML/CSS</li>
                 <li>Backend: Node.js, Flask</li>
                 <li>Databases: MySQL, MongoDB</li>
                 <li>Tools & Platforms: Git/GitHub, Visual Studio Code, and Linux</li>
            </ol></p>
               <p className="pt-3"> 
        While I’m still in the early stages of my career, I’m eager to continue learning and contributing to meaningful projects. I’m particularly excited about opportunities that will allow me to deepen my knowledge in [mention specific interest areas, like web development, data-driven applications, or full-stack development].

        I believe my growing technical expertise, combined with my enthusiasm for learning, makes me a strong candidate to contribute positively to your team."
        </p>

        </div>


    </div>
    <div className="mx-auto">
   <img src={f} className="w-96 h-1/2 mx-auto"/>     
    </div>
</div> 
</div>

</>

);
}