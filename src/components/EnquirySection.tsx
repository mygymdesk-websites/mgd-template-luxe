import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { toast } from '@/hooks/use-toast';

export function EnquirySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Request Received',
      description: "Thank you for your interest. We'll contact you shortly.",
    });

    setFormData({ name: '', phone: '', email: '', interest: '', time: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-navy relative" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/20" />

      <div className="container-luxe">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4 font-body">
              Get Started
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-medium mb-4">
              Begin Your Transformation
            </h2>
            <p className="text-cream/60 text-lg font-body font-light">
              Schedule a private tour and experience LUXE firsthand
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-dark"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-dark"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-dark"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="input-dark"
              >
                <option value="">Interested In</option>
                <option value="tour">Private Tour</option>
                <option value="membership">Membership Enquiry</option>
                <option value="training">Personal Training</option>
                <option value="corporate">Corporate Wellness</option>
              </select>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="input-dark"
              >
                <option value="">Preferred Time</option>
                <option value="morning">Morning (5 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 11 PM)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gold disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
          </motion.form>

          {/* Alternative CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-cream/60 text-sm mt-8 font-body"
          >
            Or call us directly:{' '}
            <a
              href="tel:+919876543210"
              className="text-gold hover:text-gold-light transition-colors"
            >
              +91 98765 43210
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
