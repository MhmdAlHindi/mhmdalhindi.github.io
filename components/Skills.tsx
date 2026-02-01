
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-med-dark text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-terracotta/10 rounded-full blur-[150px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h3 className="text-sand font-black text-xs mb-3 uppercase tracking-[0.4em]">Expertise</h3>
          <h2 className="text-5xl font-black">Technical Toolbox</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {SKILLS.map((cat, catIdx) => (
            <div key={cat.category} className="group">
              <h4 className="text-xl font-black mb-10 text-sand flex items-center gap-4 justify-center md:justify-start">
                <span className="w-8 h-1 bg-sand rounded-full transition-all group-hover:w-16"></span>
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {cat.items.map((skill, i) => (
                  <div 
                    key={skill} 
                    className="animate-float px-5 py-3 bg-white text-med-dark text-[11px] font-black rounded-2xl shadow-xl border border-white/20 cursor-default hover:bg-sand hover:text-white transition-all whitespace-nowrap"
                    style={{ animationDelay: `${(i + catIdx) * 0.3}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
