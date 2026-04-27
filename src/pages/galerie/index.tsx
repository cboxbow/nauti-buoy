import { PageBanner, GallerySection, CTASection } from '@/pages/sections';

export default function Galerie() {
  return (
    <div>
      <PageBanner
        tag="Galerie Photos"
        title="Vivez la Magie"
        subtitle="Des eaux turquoise, des plages de sable blanc, des couchers de soleil à couper le souffle."
        image="/images/nb-6.jpg"
      />
      <GallerySection />
      <CTASection />
    </div>
  );
}
