import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Activity, Sparkles } from 'lucide-react';

// --- Image Imports ---
import hemo from "../assets/hemo.png";
import f3 from "../assets/ipl.png";
import f4 from "../assets/secureslack.png";
import f5 from "../assets/heart.png";
import p1 from "../assets/aideas.png";
import f from "../assets/ff.png";
import c from "../assets/crypto.png";
import f1 from "../assets/expens.png";
import f2 from "../assets/mcq.png";

// New Images (Ensure these exist in your assets folder)
import taskforge from "../assets/taskforage.png";
import automl from "../assets/automl.png";
import llm from "../assets/llm.png";
import ratehub from "../assets/ratehub.png";
import deepinsight from "../assets/deepinsight.png";
import gst from "../assets/gst.png";

// --- PROJECT DATA ---
const projects = [
  // --- FLAGSHIP ---
  {
    title: "HemoLink: Thalassemia Ecosystem",
    role: "Full-Stack System Architect",
    description: "Enterprise-grade healthcare platform for donor matching and inventory management. Solves critical supply-chain gaps in blood banking.",
    impact: "Digitized workflow for 3 hospital wards; Reduced patient-donor coordination time by 60% via automated matching algorithms.",
    tech: ["Next.js", "React Native", "Node.js", "Socket.io", "MongoDB"],
    image: hemo, 
    link: "https://github.com/pkkulk/hemo-link-repo",
    category: "Full Stack",
    isFeatured: true 
  }, {
    title: "aIDEAS Association Portal",
    role: "Technical Head",
    description: "Official event management portal for the university technical board. Handles user registrations and content dissemination.",
    impact: "Streamlined event registration for 500+ students; Boosted Core Web Vitals score by 40% via Next.js SSG.",
    tech: ["Next.js", "React", "Tailwind", "Vercel"],
    image: p1,
    link: "https://aideas-website-new.vercel.app/",
    category: "Full Stack"
  },
  {
    title: "Hospital Food Logistics",
    role: "Backend Developer",
    description: "Digital inventory log system for managing patient diet plans and kitchen delivery schedules.",
    impact: "Eliminated paper logs, reducing food wastage tracking errors by 25% in simulated ward tests.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: f,
    link: "https://mern-stack-hospital-food-management-system-frontend.vercel.app",
    category: "Full Stack"
  },
  {
    title: "DeepInsight Backend",
    role: "Backend Engineer",
    description: "Robust backend infrastructure designed for high-scale data processing and containerized deployment.",
    impact: "Optimized for microservices architecture using Docker; implemented secure API gateways and efficient data pipelines.",
    tech: ["Node.js", "Docker", "REST API", "MongoDB"],
    image: deepinsight,
    link: "https://github.com/pkkulk/deepinsight-backend", 
    category: "Core CS"
  },
   {
    title: "IPL Analytics Engine",
    role: "Data Visualization Engineer",
    description: "High-performance analytics dashboard processing 15 years of match data. Features dynamic filtering and comparative team analysis.",
    impact: "Visualized 10,000+ data points with sub-100ms render latency using optimized React patterns.",
    tech: ["React.js", "Python Pandas", "Chart.js", "REST APIs"],
    image: f3,
    link: "https://ipl-dashboard2.vercel.app/teams",
    category: "Data Science"
  },
  {
    title: "Secure Slack (Cyber Chat)",
    role: "Full Stack Developer",
    description: "E2E Encrypted messaging platform featuring real-time socket connections and an automated threat intelligence chatbot.",
    impact: "Implemented AES-256 encryption; Integrated live bot reducing manual security news search time by 50%.",
    tech: ["React", "Node.js", "Socket.io", "WebCrypto API"],
    image: f4,
    link: "https://secure-slack-frontend.vercel.app/blog",
    category: "Full Stack"
  },
  {
    title: "Store Rate Hub",
    role: "Full Stack Developer",
    description: "Community-driven business discovery platform with an admin dashboard for tracking user engagement and rating analytics.",
    impact: "Implemented complex geospatial data visualization and secure JWT authentication for multi-role users.",
    tech: ["MERN Stack", "Redux", "Chart.js", "Tailwind"],
    image: ratehub,
    link: "https://github.com/pkkulk/Roxiler_challenge",
    category: "Full Stack"
  },
  {
    title: "No-Code ML Pipeline",
    role: "ML Engineer",
    description: "Interactive SaaS tool allowing users to upload datasets, preprocess data, and train classification models without writing code.",
    impact: "Democratized ML prototyping; reduced baseline model creation time from hours to minutes for non-technical users.",
    tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
    image: automl,
    link: "https://github.com/pkkulk/No-code-ML-Pipeline",
    category: "ML/AI"
  },
  {
    title: "LLM Prompt Eval System",
    role: "Backend AI Engineer",
    description: "High-performance REST API for testing and grading Generative AI prompts using Google's Gemini model.",
    impact: "Built scalable asynchronous endpoints using FastAPI; automated the feedback loop for prompt engineering workflows.",
    tech: ["FastAPI", "Google Gemini", "Python", "Docker"],
    image: llm,
    link: "https://github.com/pkkulk/LLM-Prompt-Evaluation-System",
    category: "ML/AI"
  },

  // --- EXISTING & CORE PROJECTS ---
 
  {
    title: "Heart Failure Predictor",
    role: "ML Engineer",
    description: "Clinical predictive model aimed at early risk detection using patient biomarkers (BP, Cholesterol, Age).",
    impact: "Achieved 92% accuracy using Random Forest classifiers; Deployed via Streamlit for instant clinician access.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    image: f5,
    link: "https://deployedheartfailure-jkwf8r9tujutnt9beinksw.streamlit.app/",
    category: "ML/AI"
  },
 {
    title: "TaskForge: Task Manager",
    role: "Full Stack Developer",
    description: "Secure task orchestration platform focusing on data integrity. Features role-based access control (RBAC) and strict type safety.",
    impact: "Achieved 100% type safety using TypeScript & Zod; reduced database query latency by 40% via Prisma ORM indexing.",
    tech: ["TypeScript", "PostgreSQL", "Prisma", "Node.js", "Express"],
    image: taskforge,
    link: "https://github.com/pkkulk/TaskForge",
    category: "Full Stack"
  },
  {
    title: "GST Growth Calculator",
    role: "Frontend Developer",
    description: "Rapid financial projection tool for calculating GST liabilities and revenue growth with real-time updates.",
    impact: "Optimized rendering performance using React Compiler and Vite, achieving a perfect Lighthouse performance score.",
    tech: ["React", "Vite", "Tailwind", "JavaScript"],
    image: gst,
    link: "https://github.com/pkkulk/gst-growth-calculator",
    category: "Frontend"
  },
  {
    title: "Crypto Tracker V2",
    role: "Frontend Developer",
    description: "Real-time market dashboard featuring live price updates, historical candlestick charting, and trend analysis.",
    impact: "Optimized API consumption strategies to handle high-frequency data updates without UI freeze.",
    tech: ["React.js", "Axios", "CoinGecko API", "Chart.js"],
    image: c,
    link: "https://github.com/pkkulk/cryptocurrency-tracker-using-reactjs-v2",
    category: "Frontend"
  },
  {
    title: "Travel Recommender",
    role: "Algorithm Design",
    description: "Budget-based destination recommendation engine using collaborative filtering for Indian tourism spots.",
    impact: "Personalized travel suggestions based on user constraints, improving decision capability.",
    tech: ["Python", "Jupyter", "Pandas", "Scikit-Learn"],
    image: f1,
    link: "https://github.com/pkkulk/Travel_recommendation_system_for_India",
    category: "ML/AI"
  },
  {
    title: "Online Exam System",
    role: "Java Developer",
    description: "Desktop-based MCQ testing platform with robust user authentication and automated result generation.",
    impact: "Built concurrency-safe JDBC transactions to handle multiple simultaneous test submissions.",
    tech: ["Java", "JDBC", "MySQL", "Swing"],
    image: f2,
    link: "https://github.com/pkkulk/online-examination-system-using-java",
    category: "Core CS"
  },
];

// --- COMPONENT: Project Card ---
const ProjectCard = ({ project }) => {
  // Logic: Featured spans 2 columns, but ALWAYS keeps vertical (column) layout
  const glowClass = project.isFeatured 
    ? "md:col-span-2 lg:col-span-2 flex flex-col shadow-[0_0_30px_rgba(20,184,166,0.15)] border-teal-500/40" 
    : "col-span-1 flex flex-col border-gray-800 hover:border-teal-500/30";
    
  const bgClass = project.isFeatured
    ? "bg-gradient-to-br from-gray-900 via-gray-900 to-teal-900/10"
    : "bg-gray-900";

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${glowClass} ${bgClass}`}>
      
      {/* IMAGE SECTION */}
      <div className={`relative overflow-hidden w-full ${project.isFeatured ? 'h-64 md:h-80' : 'h-48'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            {project.category}
          </span>
          {project.isFeatured && (
            <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-wider text-teal-100 bg-teal-600/90 backdrop-blur-md rounded-full shadow-lg border border-teal-500">
               <Sparkles size={10} /> FLAGSHIP
            </span>
          )}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col p-6 z-20 flex-grow w-full">
        
        <div className="mb-3">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className={`font-bold text-white group-hover:text-teal-400 transition-colors ${project.isFeatured ? 'text-2xl' : 'text-lg'}`}>
                {project.title}
              </h3>
              <p className="text-xs text-teal-200/70 font-medium mt-1 uppercase tracking-wider">
                {project.role}
              </p>
            </div>
            {project.isFeatured && (
               <ArrowUpRight className="text-gray-500 group-hover:text-teal-400 transition-colors" />
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className={`mb-5 pl-3 border-l-2 border-teal-500 py-2 pr-2 rounded-r ${project.isFeatured ? 'bg-teal-900/10' : ''}`}>
          <p className="text-xs text-gray-300 italic">
            <span className="text-teal-400 font-bold not-italic">Result: </span>
            {project.impact}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="px-2.5 py-1 text-[10px] font-medium text-teal-100/70 bg-gray-800/50 rounded border border-gray-700/50">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
             <span className="px-2 py-1 text-[10px] text-gray-500">+ {project.tech.length - 4}</span>
          )}
        </div>

        <div className="mt-auto pt-4 flex gap-3 border-t border-gray-800/50">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 
              ${project.isFeatured 
                ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/20' 
                : 'bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700'
              }`}
          >
            {project.link.includes('github') ? <Github size={16} /> : <ExternalLink size={16} />}
            <span>{project.link.includes('github') ? 'View Source' : 'Live Demo'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN LAYOUT ---
export default function Project() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "Data Science", "ML/AI", "Frontend", "Core CS"];

  const filteredProjects = projects.filter(p => {
    if (filter === "All") return true;
    return p.category === filter || (filter === "Full Stack" && p.category === "Frontend"); 
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 selection:bg-teal-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-800 text-teal-400 text-xs font-semibold tracking-wide uppercase">
            <Activity size={12} /> Engineering Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Works</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             Building scalable systems and predictive models. A collection of production-ready applications and technical experiments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? "bg-teal-600 border-teal-500 text-white shadow-lg shadow-teal-900/40" 
                  : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, i) => (
            <ProjectCard key={i} project={proj} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        )}

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-gray-900 text-center">
          <a 
            href="https://github.com/pkkulk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors text-sm font-medium"
          >
            <Github size={18} />
            <span>Review full commit history on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}