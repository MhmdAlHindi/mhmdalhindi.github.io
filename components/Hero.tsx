
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-med-dark text-white">
      {/* Dynamic background blending blue and terracotta */}
      <div className="absolute inset-0 med-coast-gradient opacity-40"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-terracotta opacity-20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-med-blue opacity-30 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-sand font-bold tracking-[0.2em] uppercase text-xs mb-4 animate-fade-in">
            Electrical & Biomedical Engineering @ McMaster
          </h2>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sand">Resilient</span> Systems.
          </h1>
          <p className="text-lg md:text-xl text-blue-50/80 mb-12 max-w-2xl leading-relaxed">
            Mohammed Al-Hindi — Turning complex engineering challenges into elegant solutions across robotics, IoT, and medical tech.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="bg-white text-med-dark px-10 py-4 rounded-xl font-black hover:bg-sand hover:text-white transition-all shadow-2xl">
              Explore Projects
            </a>
            <a href="#contact" className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-black hover:bg-white/10 transition-all backdrop-blur-sm">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
