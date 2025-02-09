export default function Experience(){

    return(
    <><div className="bg-gradient-to-r from-slate-600 to-lime-500 via-sky-400 text-white">
        <div className="experience-page container mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold text-center mb-6 ">My Journey</h1>
            <p className="text-center font-bold bg-clip-text bg-gradient-to-r text-transparent from-yellow-500 via-white to-red-500 mb-10">
                As a beginner, I’m building my skills and learning through projects, internships, and certifications.
            </p>

            {/* Academic Projects */}
            <div className="experience-item mb-8 border-2 rounded-2xl p-4">
                <h2 className="text-2xl font-semibold">My Roles at various Academic Projects</h2>
                <ul className="list-disc pl-5 mt-3">
                    <li>
                      In <strong> Front end Developemrnt </strong> I Built a web app using React and Tailwind CSS to manage currencies                                                                                                                                     .
                    </li>
                    <li>
                      In <strong> Java  Developemrnt </strong> I created online mcq examination system using swing Framework with JDBC connection                                                                                                                                    .
                    </li>
                    <li>
                        As <strong>Python Developer</strong> Developed a Traveller Recommendation system using flask in python
                    </li>
                </ul>
            </div>

            {/* Certifications */}
            <div className="experience-item mb-8  border-2 rounded-2xl p-4">
                <h2 className="text-2xl font-semibold">Certifications</h2>
                <ul className="list-disc pl-5 mt-3">
                    <li>
                        <strong>Gen Ai for  Beginners:</strong> Completed an online course on Google cloud native in 2023.
                    </li>
                    <li>
                        <strong>Python Basics:</strong> Learned the fundamentals of Python programming.
                    </li>
                </ul>
            </div>

            {/* Optional: Volunteer Work */}
          
            <div className="experience-item  border-2 rounded-2xl p-4">
                <h2 className="text-2xl font-semibold">Industrial Training </h2>
                <p className="mt-3">At Bright Carreer Infotech, where I learnt web Development languages </p>
            </div>
        </div>
   



    </div>
       </>
    
    );
    }