import { HeroCanvas } from './HeroCanvas';

export function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 h-screen flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pt-32 md:pt-0 z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Crafting <span className="text-gradient">Digital Experiences</span> for the Future
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              I design and develop cutting-edge web solutions that merge creativity with technology. 
              Explore my portfolio to see how I bring innovative ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="glow-button bg-[#6366f1] text-white px-6 py-3 rounded-lg font-semibold inline-block"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="glow-button border-2 border-[#6366f1] text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-[#6366f1]/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative mt-8 md:mt-0">
          <HeroCanvas />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center text-white opacity-70">
          <i className="ri-arrow-down-line ri-lg"></i>
        </div>
      </div>
    </section>
  );
}