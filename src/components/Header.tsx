import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // adjust for fixed header height
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-10 bg-gray-900">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* === Lines ~40–44 fixed here: proper opening <a> tag === */}
          <a
            href="#home"
           className="text-xl font-bold text-white hover:text-[#6366f1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded"
          >
            Tshegofatso Nkosi
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link text-white hover:text-[#6366f1] ${
                  activeSection === link.href.substring(1) ? 'active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {/* Using Remix Icon classes as in your snippet */}
                <i className="ri-menu-line ri-lg" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-[#6366f1] hover:bg-opacity-20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}