
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-med-blue' : 'text-white'}`}>
          MAH<span className="text-sand">.</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold hover:text-sand transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a 
          href="mailto:moalhindi@hotmail.com" 
          className="bg-med-blue hover:bg-med-dark text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-blue-200"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
