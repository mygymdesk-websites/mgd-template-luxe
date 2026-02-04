import { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

import gallerySpa from '@/assets/gallery-spa.jpg';
import galleryReception from '@/assets/gallery-reception.jpg';
import galleryRooftop from '@/assets/gallery-rooftop.jpg';
import galleryBar from '@/assets/gallery-bar.jpg';
import galleryLockers from '@/assets/gallery-lockers.jpg';
import galleryTraining from '@/assets/gallery-training.jpg';

const galleryImages = [
  { src: galleryReception, caption: 'Reception & Lounge' },
  { src: galleryTraining, caption: 'Main Training Floor' },
  { src: gallerySpa, caption: 'Spa & Recovery Zone' },
  { src: galleryRooftop, caption: 'Rooftop Yoga Deck' },
  { src: galleryBar, caption: 'Organic Wellness Bar' },
  { src: galleryLockers, caption: 'Luxury Locker Room' },
];

export function GallerySection() {
  const { ref, isInView } = useInView<HTMLElement>();
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-cream-dark" ref={ref}>
        <div className="container-luxe">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="section-label">Gallery</p>
            <h2 className="section-title">A Glimpse Inside</h2>
            <p className="section-subtitle mx-auto">
              Explore the spaces designed for your wellness journey
            </p>
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.caption}
                onClick={() => setLightboxImage(image)}
                className={`relative overflow-hidden group cursor-pointer transition-all duration-500 ease-out ${
                  isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${
                  index === 0 || index === 3 ? 'row-span-2' : ''
                }`}
                style={{ 
                  transitionDelay: `${150 + index * 100}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  width={index === 0 || index === 3 ? 600 : 400}
                  height={index === 0 || index === 3 ? 800 : 288}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 || index === 3 ? 'h-full min-h-[400px]' : 'h-64 md:h-72'
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-end">
                  <p className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 font-display text-lg">
                    {image.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-center text-cream font-display text-xl mt-4">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
