import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
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
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
