import { Check } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const plans = [
  {
    name: 'Essential',
    price: '₹15,000',
    period: '/month',
    featured: false,
    features: [
      'Access to main fitness floor',
      'Group classes included',
      'Locker access',
      '1 guest pass/month',
    ],
    cta: 'Enquire Now',
  },
  {
    name: 'Signature',
    price: '₹25,000',
    period: '/month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'All Essential benefits',
      '4 personal training sessions',
      'Spa & sauna access',
      'Priority class booking',
      'Wellness bar credits (₹2,000)',
      '2 guest passes/month',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Elite',
    price: '₹45,000',
    period: '/month',
    featured: false,
    features: [
      'All Signature benefits',
      'Unlimited PT sessions',
      'Private locker with name plate',
      'Complimentary laundry service',
      'Access to all locations',
      'Exclusive member events',
      'Dedicated relationship manager',
    ],
    cta: 'Experience Elite',
  },
];

export function MembershipSection() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section id="membership" className="section-padding bg-cream" ref={ref}>
      <div className="container-luxe">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">Membership</p>
          <h2 className="section-title">Select Your Experience</h2>
          <p className="section-subtitle mx-auto">
            Choose the membership that aligns with your wellness aspirations
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 transition-all duration-500 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                plan.featured
                  ? 'bg-cream border-2 border-gold shadow-elevated -mt-4 md:scale-105'
                  : 'bg-cream border border-border shadow-card hover:shadow-elevated'
              }`}
              style={{ 
                transitionDelay: `${150 + index * 150}ms`,
                willChange: 'transform, opacity'
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-medium tracking-wider uppercase">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 pt-2">
                <h3 className="font-display text-2xl text-navy mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl text-navy">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm font-body">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 font-body text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() =>
                  document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`w-full py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  plan.featured
                    ? 'btn-gold'
                    : 'btn-outline-dark'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p
          className={`text-center text-muted text-sm mt-10 font-body transition-all duration-700 ease-out ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Annual memberships available with 2 months complimentary
        </p>
      </div>
    </section>
  );
}
