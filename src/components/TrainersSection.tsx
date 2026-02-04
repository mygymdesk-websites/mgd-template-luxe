import { useInView } from '@/hooks/useInView';

const trainers = [
  {
    name: 'Arjun Mehta',
    role: 'Head of Strength & Conditioning',
    bio: 'Former national powerlifting champion. 12+ years experience.',
    specialties: ['Strength', 'Body Recomposition'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Yoga & Mindfulness Director',
    bio: 'Trained in Rishikesh. Certified in Ashtanga & Vinyasa.',
    specialties: ['Yoga', 'Breathwork', 'Meditation'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Kabir Singh',
    role: 'Elite Personal Trainer',
    bio: 'Celebrity trainer with clientele including Bollywood actors.',
    specialties: ['HIIT', 'Functional Training'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Ananya Reddy',
    role: 'Nutrition & Wellness Coach',
    bio: 'MSc in Sports Nutrition. Holistic approach to wellness.',
    specialties: ['Meal Planning', 'Lifestyle Coaching'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop&crop=face',
  },
];

export function TrainersSection() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section id="trainers" className="section-padding bg-cream-dark" ref={ref}>
      <div className="container-luxe">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">Our Team</p>
          <h2 className="section-title">Meet Your Coaches</h2>
          <p className="section-subtitle mx-auto">
            Certified experts dedicated to your transformation
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={`group transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${150 + index * 150}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="card-luxury overflow-hidden">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-navy">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-navy mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-gold text-sm font-body tracking-wide mb-3">
                    {trainer.role}
                  </p>
                  <p className="text-muted text-sm font-body font-light mb-4">
                    {trainer.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 text-xs font-body tracking-wide bg-gold/10 text-navy"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
