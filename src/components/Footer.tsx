import { Instagram, Facebook, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="font-display text-2xl text-cream mb-2">LUXE</h3>
            <p className="text-gold text-sm font-body tracking-wide mb-4">
              Fitness & Wellness
            </p>
            <p className="text-cream/60 text-sm font-body font-light leading-relaxed">
              Hyderabad's premier luxury fitness destination, where wellness meets
              sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/60 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-display text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-cream/60 text-sm font-body font-light">
              <p>
                The Skyview Tower
                <br />
                Jubilee Hills, Hyderabad
              </p>
              <p>+91 40 6789 0123</p>
              <p>concierge@luxefitness.in</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream font-display text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cream/80 hover:text-gold" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-cream/80 hover:text-gold" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-cream/80 hover:text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-xs font-body">
              © 2024 LUXE Fitness & Wellness. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-cream/40 hover:text-cream/80 text-xs font-body transition-colors">
                Privacy Policy
              </button>
              <button className="text-cream/40 hover:text-cream/80 text-xs font-body transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
