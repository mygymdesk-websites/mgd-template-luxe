import { Dumbbell, Sparkles, Coffee, Shirt, Heart, Sun } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const amenities = [
  {
    icon: Dumbbell,
    title: 'Private Training Suites',
    description: 'One-on-one sessions in soundproof studios',
  },
  {
    icon: Sparkles,
    title: 'Himalayan Salt Sauna',
    description: 'Detox and rejuvenate in mineral-rich warmth',
  },
  {
    icon: Coffee,
    title: 'Organic Wellness Bar',
    description: 'Cold-pressed juices and protein meals',
  },
  {
    icon: Shirt,
    title: 'Luxury Locker Rooms',
    description: 'Dyson dryers, premium toiletries, towel service',
  },
  {
    icon: Heart,
    title: 'Recovery Lounge',
    description: 'Cryotherapy, massage chairs, meditation pods',
  },
  {
    icon: Sun,
    title: 'Rooftop Yoga Deck',
    description: 'Sunrise sessions with stunning city views',
  },
];

export function AmenitiesSection() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section id="amenities" className="section-padding bg-cream-dark" ref={ref}>
      <div className="container-luxe">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">Amenities</p>
          <h2 className="section-title">World-Class Amenities</h2>
          <p className="section-subtitle mx-auto">
            Every detail curated for your comfort and performance
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={`card-luxury card-luxury-gold p-8 group transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${150 + index * 100}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 flex items-center justify-center bg-gold/10 mb-6 transition-colors duration-300 group-hover:bg-gold/20">
                  <amenity.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy mb-3">
                  {amenity.title}
                </h3>
                <p className="text-muted font-body font-light">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
