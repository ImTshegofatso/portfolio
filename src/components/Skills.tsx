import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Globe, 
  Shield,
  FileCode,
  GitBranch
} from 'lucide-react';

const developmentSkills = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Full Stack Development', level: 85 },
  { name: 'Backend Development', level: 80 },
  { name: 'Database Management', level: 75 },
  { name: 'Cybersecurity Fundamentals', level: 70 },
];

const technologies = [
  {
    icon: Code2,
    title: 'React & TypeScript',
    description: 'Modern frontend development with type-safe components',
  },
  {
    icon: Server,
    title: 'Node.js & Express',
    description: 'Server-side applications and RESTful APIs',
  },
  {
    icon: Database,
    title: 'MongoDB & SQL',
    description: 'Database design and efficient data management',
  },
  {
    icon: Globe,
    title: 'HTML5, CSS3 & Tailwind',
    description: 'Responsive design and modern styling techniques',
  },
  {
    icon: GitBranch,
    title: 'Git & GitHub',
    description: 'Version control and collaborative development',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security best practices and ISC2 certification',
  },
  {
    icon: Layers,
    title: 'Vite & Modern Tooling',
    description: 'Fast development environments and build tools',
  },
  {
    icon: FileCode,
    title: 'Python & JavaScript',
    description: 'Multi-language programming proficiency',
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white bg-opacity-[0.02] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-400">Technical Expertise</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16" ref={skillsRef}>
          {/* Development Skills - Progress Bars */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Development Skills</h3>
            <div className="space-y-6">
              {developmentSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-400">{skill.name}</span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6366f1] to-[#818cf8] rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technologies & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.5s ease-out ${index * 50}ms`
                    }}
                  >
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent size={24} className="text-indigo-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-1 text-gray-400">{tech.title}</h4>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}