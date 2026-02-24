import React from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'Web Development', href: '#' },
  { label: '3D & WebGL', href: '#' },
  { label: 'UI/UX Design', href: '#' },
  { label: 'Mobile Development', href: '#' },
  { label: 'Consulting', href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Gradient Line Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="text-3xl font-['Pacifico'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 inline-block hover:scale-105 transition-transform duration-300">
              Tshegofatso Nkosi
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Creating innovative digital experiences that push the boundaries of what's possible. Let's build the future together.
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-green-400 text-xs uppercase tracking-wider font-medium">Open for Work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all duration-300"></span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs tracking-wider">
              © {currentYear} Tshegofatso Nkosi. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-600 text-xs">Built with</span>
              <div className="flex items-center gap-2 text-gray-500">
                <i className="ri-reactjs-line text-cyan-400 text-lg"></i>
                <span className="text-xs">React</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <i className="ri-tailwind-css-fill text-cyan-400 text-lg"></i>
                <span className="text-xs">Tailwind</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="text-gray-600 text-xs flex items-center gap-1">
                Made with <i className="ri-heart-fill text-red-500 text-xs animate-pulse"></i> in SA
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}