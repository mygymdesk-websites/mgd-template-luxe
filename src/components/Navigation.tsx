import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger header animation on mount
    requestAnimationFrame(() => setIsVisible(true));
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled
            ? 'bg-cream/95 glass shadow-soft py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-luxe flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`font-display text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-navy' : 'text-cream'
            }`}
          >
            LUXE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link ${
                  isScrolled ? 'text-navy' : 'text-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection('#enquiry')}
            className={`hidden lg:inline-flex items-center px-6 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              isScrolled
                ? 'bg-navy text-cream hover:bg-navy-light'
                : 'bg-gold text-navy hover:bg-gold-dark'
            }`}
          >
            Book a Tour
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-navy' : 'text-cream'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 mobile-menu-overlay animate-fade-in"
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl font-semibold text-cream">
                LUXE
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-cream"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="font-display text-3xl text-cream hover:text-gold transition-colors duration-300 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="px-6 pb-10">
              <button
                onClick={() => scrollToSection('#enquiry')}
                className="w-full btn-gold"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
