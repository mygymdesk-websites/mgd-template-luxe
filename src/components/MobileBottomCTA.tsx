import { Phone } from 'lucide-react';

export function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-navy border-t border-gold/20 p-4 glass">
      <div className="flex gap-3">
        <button
          onClick={() =>
            document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="flex-1 btn-gold py-3"
        >
          Book a Tour
        </button>
        <a
          href="tel:+919876543210"
          className="w-12 flex items-center justify-center border border-gold text-gold"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
