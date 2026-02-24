import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${posX}px`;
        outlineRef.current.style.top = `${posY}px`;
      }

      if (Math.random() > 0.9) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.floor(Math.random() * 5) + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
          particle.style.opacity = '0';
          setTimeout(() => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle);
            }
          }, 300);
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleHoverStart = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width = '50px';
        outlineRef.current.style.height = '50px';
        outlineRef.current.style.borderColor = 'rgba(99, 102, 241, 0.8)';
      }
    };

    const handleHoverEnd = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width = '40px';
        outlineRef.current.style.height = '40px';
        outlineRef.current.style.borderColor = 'rgba(99, 102, 241, 0.5)';
      }
    };

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(item => {
      item.addEventListener('mouseenter', handleHoverStart);
      item.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      interactiveElements.forEach(item => {
        item.removeEventListener('mouseenter', handleHoverStart);
        item.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
}