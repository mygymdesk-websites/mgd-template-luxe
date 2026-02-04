import { useRef, useState, useEffect } from 'react';
import { Users, Sparkles, Crown } from 'lucide-react';
import aboutImage from '@/assets/about-studio.jpg';

const pillars = [
  {
    icon: Users,
    title: 'Personalized Training',
    description: 'Bespoke fitness programs tailored to your goals',
  },
  {
    icon: Sparkles,
    title: 'Premium Amenities',
    description: 'Spa, sauna, private lockers & more',
  },
  {
    icon: Crown,
    title: 'Exclusive Community',
    description: 'Limited membership, like-minded individuals',
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="img-zoom">
              <img
                src={aboutImage}
                alt="LUXE Studio Interior"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title">
              Curated for the
              <br />
              <span className="italic">Discerning Few</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-10 font-body font-light">
              At LUXE Fitness, we believe wellness is not a destination—it's a
              lifestyle. Our members enjoy personalized attention, world-class
              amenities, and an environment designed to inspire excellence.
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 100}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10">
                    <pillar.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-navy mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-muted text-sm font-body">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
