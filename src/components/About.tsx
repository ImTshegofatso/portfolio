import mypic from '../assets/mypic.jpeg';  // Changed from '../mypic.png'
import { Github, Linkedin, Download } from 'lucide-react';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/ImTshegofatso',
    label: 'GitHub'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/YOUR-LINKEDIN-USERNAME',
    label: 'LinkedIn'
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1] to-[#818cf8] opacity-20 blur-lg rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={mypic}
                  alt="Profile Photo"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate developer and designer with a year of experience creating innovative digital 
              solutions. My journey began with a fascination for the intersection of technology and creativity, 
              which has guided my career ever since.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I specialize in building immersive web experiences that push the boundaries of what's possible 
              in the browser. My approach combines cutting-edge technologies with thoughtful design to create 
              solutions that are both visually stunning and functionally powerful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Matric</p>
                    <p className="text-gray-400">Hoerskool Westonaria, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium">Full Stack Web Development</p>
                    <p className="text-gray-400">HyperionDev / University of Stellenbosch, 2024</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Certifications & Training</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">CCNA (In Progress)</p>
                    <p className="text-gray-400">Cisco, Expected 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Certified in CyberSecurity (CC)</p>
                    <p className="text-gray-400">ISC2, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-indigo-500/20 rounded-full transition-all duration-300"
                  >
                    <IconComponent size={20} className="text-white" />
                  </a>
                );
              })}
            </div>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download="Tshegofatso_Molefe_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 font-semibold transition"
            >
              <Download size={20} />
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}