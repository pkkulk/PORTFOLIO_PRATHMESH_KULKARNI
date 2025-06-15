export default function Experience() {
    return (
      <div className="bg-gradient-to-r from-slate-600 to-lime-500 via-sky-400 text-white py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-6">My Journey</h1>
          <p className="text-center font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-red-400 mb-10">
            As a beginner, I’m building my skills and learning through projects, internships, and certifications.
          </p>
          <div className="experience-item mb-8 border border-white rounded-xl p-6 bg-white/10">
            <h2 className="text-2xl font-semibold">Leadership Role</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Technical Head – [aIDEAS Association]</strong> Leading the tech initiative of assocation and managing technical events, workshops.
              </li>
              <li>
                <strong>Social Media Head – TPSA </strong>Managing social presence, content strategy, event promotions, and audience engagement across platforms
              </li>
            </ul>
          </div>
  
          {/* Academic Projects */}
          <div className="experience-item mb-8 border border-white rounded-xl p-6 bg-white/10">
            <h2 className="text-2xl font-semibold">Roles in Academic Projects</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Frontend Development:</strong> Built a web app using React and Tailwind CSS to manage currencies.
              </li>
              <li>
                <strong>Java Development:</strong> Created an online MCQ examination system using Swing framework with JDBC.
              </li>
              <li>
                <strong>Python Development:</strong> Developed a Traveller Recommendation System using Flask.
              </li>
            </ul>
          </div>
  
          {/* Certifications */}
          <div className="experience-item mb-8 border border-white rounded-xl p-6 bg-white/10">
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Gen AI for Beginners:</strong> Completed an online course on Google Cloud in 2023.
              </li>
              <li>
                <strong>Python Basics:</strong> Learned the fundamentals of Python programming.
              </li>
            </ul>
          </div>
  
          {/* Industrial Training */}
          <div className="experience-item border border-white rounded-xl p-6 bg-white/10">
            <h2 className="text-2xl font-semibold">Industrial Training</h2>
            <p className="mt-3">
              Completed training at <strong>Bright Career Infotech</strong>, where I learned web development technologies.
            </p>
          </div>
        </div>
      </div>
    );
  }
  