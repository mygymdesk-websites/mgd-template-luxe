import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { MembershipSection } from '@/components/MembershipSection';
import { TrainersSection } from '@/components/TrainersSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GallerySection } from '@/components/GallerySection';
import { LocationSection } from '@/components/LocationSection';
import { EnquirySection } from '@/components/EnquirySection';
import { Footer } from '@/components/Footer';
import { MobileBottomCTA } from '@/components/MobileBottomCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <MembershipSection />
        <TrainersSection />
        <TestimonialsSection />
        <GallerySection />
        <LocationSection />
        <EnquirySection />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
};

export default Index;
