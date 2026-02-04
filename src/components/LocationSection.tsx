import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-cream" ref={ref}>
      <div className="container-luxe">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label">Location</p>
          <h2 className="section-title">Visit Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-full min-h-[400px] bg-cream-dark"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2714766936397!2d78.40691931487756!3d17.44535388804182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c3d2ea5d0b%3A0x8b6e1e3d8e6d8d8e!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LUXE Fitness Location"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold/10">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy mb-2">Address</h3>
                <p className="text-charcoal/70 font-body font-light leading-relaxed">
                  LUXE Fitness & Wellness
                  <br />
                  4th Floor, The Skyview Tower
                  <br />
                  Road No. 36, Jubilee Hills
                  <br />
                  Hyderabad - 500033
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold/10">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy mb-2">Contact</h3>
                <p className="text-charcoal/70 font-body font-light">
                  Phone: +91 40 6789 0123
                  <br />
                  WhatsApp: +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold/10">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy mb-2">Email</h3>
                <a
                  href="mailto:concierge@luxefitness.in"
                  className="text-charcoal/70 font-body font-light hover:text-gold transition-colors"
                >
                  concierge@luxefitness.in
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold/10">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy mb-2">Hours</h3>
                <p className="text-charcoal/70 font-body font-light">
                  Mon-Sat: 5:00 AM - 11:00 PM
                  <br />
                  Sunday: 6:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            {/* Valet Note */}
            <div className="pt-4 border-t border-border">
              <p className="text-muted text-sm font-body italic">
                Complimentary valet parking for all members
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
