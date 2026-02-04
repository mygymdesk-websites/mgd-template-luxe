import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image - static to avoid reflow */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="LUXE Fitness Interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="image-overlay" />
      </div>

      {/* Content with CSS animations instead of JS-driven */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-body opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
          Where Fitness Meets Luxury
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-medium mb-6 max-w-4xl opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]">
          Elevate Your
          <br />
          <span className="italic">Wellness Journey</span>
        </h1>

        <p className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mb-10 font-light opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]">
          Experience fitness reimagined at Hyderabad's most exclusive wellness destination
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
          <button
            onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Book a Tour
          </button>
          <button
            onClick={() => document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Explore Membership
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors duration-300 opacity-0 animate-[fade-in_0.8s_ease-out_1.2s_forwards]"
        aria-label="Scroll to explore"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
}
