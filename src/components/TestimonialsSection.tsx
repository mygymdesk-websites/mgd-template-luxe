import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    quote:
      "LUXE isn't just a gym—it's my sanctuary. The attention to detail, from the eucalyptus-infused towels to my trainer remembering my preferences, is unmatched.",
    name: 'Kavitha Rao',
    title: 'CEO, Rao Enterprises',
    since: 'Member since 2022',
  },
  {
    quote:
      "After trying every premium gym in Hyderabad, I finally found my home. The privacy, the equipment quality, and the community—it's worth every rupee.",
    name: 'Vikram Malhotra',
    title: 'Entrepreneur',
    since: 'Member since 2021',
  },
  {
    quote:
      "The transformation I've achieved here in 8 months surpasses my last 5 years at other gyms. My trainer Arjun has been exceptional.",
    name: 'Sneha Kapoor',
    title: 'Fashion Designer',
    since: 'Member since 2023',
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-luxe">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Member Stories</h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative text-center px-4 md:px-12">
            {/* Quote Mark */}
            <Quote className="w-16 h-16 text-gold/30 mx-auto mb-8" />

            {/* Quote - using CSS transitions instead of AnimatePresence */}
            <div
              key={currentIndex}
              className="animate-fade-in"
            >
              <p className="quote-text mb-10">"{current.quote}"</p>

              {/* Author */}
              <div className="space-y-2">
                <p className="font-display text-xl text-navy">
                  {current.name}
                </p>
                <p className="text-gold text-sm font-body tracking-wide">
                  {current.title}
                </p>
                <p className="text-muted text-xs font-body">
                  {current.since}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-navy/20 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-navy" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gold w-6'
                        : 'bg-navy/20 hover:bg-navy/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-navy/20 hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-navy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
