import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';

// Lazy load below-fold components to reduce initial bundle and main-thread work
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection').then(m => ({ default: m.AmenitiesSection })));
const MembershipSection = lazy(() => import('@/components/MembershipSection').then(m => ({ default: m.MembershipSection })));
const TrainersSection = lazy(() => import('@/components/TrainersSection').then(m => ({ default: m.TrainersSection })));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const GallerySection = lazy(() => import('@/components/GallerySection').then(m => ({ default: m.GallerySection })));
const LocationSection = lazy(() => import('@/components/LocationSection').then(m => ({ default: m.LocationSection })));
const EnquirySection = lazy(() => import('@/components/EnquirySection').then(m => ({ default: m.EnquirySection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const MobileBottomCTA = lazy(() => import('@/components/MobileBottomCTA').then(m => ({ default: m.MobileBottomCTA })));

// Minimal fallback that doesn't cause layout shift
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<SectionFallback />}>
          <AmenitiesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MembershipSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TrainersSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <LocationSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EnquirySection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <MobileBottomCTA />
      </Suspense>
    </div>
  );
};

export default Index;
