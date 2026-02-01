
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sand/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-slate-100">
              <img 
                src="https://raw.githubusercontent.com/mhmdalhindi/mhmdalhindi.github.io/main/assets/img/profile-img.jpg" 
                alt="Mohammed Al-Hindi" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-earth text-white p-5 rounded-2xl shadow-2xl transform rotate-3">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Academic Standing</p>
              <p className="text-2xl font-black leading-none">3.96 GPA</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="inline-block px-3 py-1 bg-sand/10 text-terracotta rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              The Journey
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Fusing <span className="text-med-blue">Technical Rigor</span> with <span className="text-earth">Creative Intuition.</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm an Electrical & Biomedical Engineering student at McMaster University. 
              My expertise lies in building bridges between theoretical concepts and high-performance hardware—from 
              precision HVAC controls to bio-sensor head supports.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I balance the logic of engineering with the artistry of pottery and the rhythm of the oud. 
              This duality drives my unique approach to problem-solving.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-sand transition-all">
                <div className="w-10 h-10 bg-med-blue/10 rounded-lg flex items-center justify-center mb-4 text-med-blue group-hover:bg-med-blue group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <h4 className="font-black text-slate-900 text-sm mb-1">McMaster '28</h4>
                <p className="text-xs text-slate-500 font-medium">B.Eng. Electrical & Biomedical</p>
              </div>
              <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-earth transition-all">
                <div className="w-10 h-10 bg-earth/10 rounded-lg flex items-center justify-center mb-4 text-earth group-hover:bg-earth group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="font-black text-slate-900 text-sm mb-1">Hamilton, ON</h4>
                <p className="text-xs text-slate-500 font-medium">Based in the GTA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
