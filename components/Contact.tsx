
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-slate-100 shadow-2xl shadow-sand/10">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-earth">
             <svg className="w-80 h-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
             </svg>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight text-slate-900">
                Let's Build the <span className="text-med-blue">Future</span> of <span className="text-earth">Engineering.</span>
              </h2>
              <p className="text-slate-500 mb-12 text-lg font-medium leading-relaxed">
                I'm actively seeking 2026 Co-op opportunities. Let's connect and discuss how my blend of hardware and software skills can contribute to your team.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:moalhindi@hotmail.com" className="flex items-center gap-5 group">
                  <div className="bg-white shadow-md text-med-blue p-4 rounded-2xl group-hover:bg-med-blue group-hover:text-white transition-all transform group-hover:rotate-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-black text-slate-800 tracking-tight">moalhindi@hotmail.com</span>
                </a>
                <a href="https://linkedin.com/in/al-hindi" target="_blank" className="flex items-center gap-5 group">
                  <div className="bg-white shadow-md text-terracotta p-4 rounded-2xl group-hover:bg-terracotta group-hover:text-white transition-all transform group-hover:-rotate-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="font-black text-slate-800 tracking-tight">LinkedIn Profile</span>
                </a>
                <a 
                  href="https://mhmdalhindi.github.io/assets/pdf/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group mt-4"
                >
                  <div className="bg-earth text-white p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-slate-800 border-b-2 border-earth/20 group-hover:border-earth transition-all leading-tight">Download My Resume</span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">PDF Format</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-med-blue transition-all font-medium" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-med-blue transition-all font-medium" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-med-blue transition-all font-medium" placeholder="Describe your project..."></textarea>
                </div>
                <button className="w-full bg-med-blue text-white py-5 rounded-2xl font-black hover:bg-earth transition-all shadow-xl shadow-blue-100 hover:shadow-earth/20 text-lg uppercase tracking-widest">
                  Deploy Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 px-6">
          <p className="text-slate-400 text-xs font-bold tracking-tight">© 2025 Mohammed Al-Hindi. Electrical & Biomedical Engineering Portfolio.</p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <a href="https://github.com/mhmdalhindi" target="_blank" className="hover:text-med-blue transition-colors">Github</a>
            <a href="https://linkedin.com/in/al-hindi" target="_blank" className="hover:text-terracotta transition-colors">LinkedIn</a>
            <a href="https://mhmdalhindi.github.io/" target="_blank" className="hover:text-earth transition-colors">V1 Legacy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
