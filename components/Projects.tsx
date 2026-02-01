
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h3 className="text-earth font-black text-xs mb-3 uppercase tracking-[0.3em]">Portfolio</h3>
            <h2 className="text-5xl font-black text-slate-900 mb-6">Innovative <span className="text-gradient-earth">Engineering.</span></h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Bridging the gap between software logic and hardware reliability.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-med-dark opacity-10 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-med-blue/20 to-earth/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-200/40 font-black text-8xl select-none group-hover:scale-125 transition-transform duration-700">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-500 shadow-sm uppercase tracking-widest">
                  {project.date}
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-black px-2 py-1 bg-sand/10 text-terracotta rounded uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black text-slate-900 group-hover:text-med-blue transition-colors mb-4 leading-tight">{project.title}</h4>
                <ul className="space-y-3 mb-8 flex-1">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <li key={i} className="text-sm text-slate-500 font-medium leading-relaxed">• {desc}</li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 text-sm font-black text-earth group-hover:gap-4 transition-all">
                  Case Study
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col h-full items-center justify-center p-12 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 hover:border-sand hover:bg-sand/5 transition-all cursor-pointer group">
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-sand group-hover:text-white transition-all shadow-sm">
              <svg className="w-10 h-10 text-slate-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="font-black text-slate-400 group-hover:text-terracotta transition-colors">In the Works...</p>
            <p className="text-xs text-slate-400 mt-2 text-center font-medium">Currently innovating in robotics and biosensors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
