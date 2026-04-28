import { PageBanner, PricingSection, TestimonialsSection } from '@/pages/sections';

export default function Tarifs() {
  return (
    <div>
      <PageBanner
        tag="Tarifs"
        title="Prix Clairs & Transparents"
        subtitle="Partagé Rs 2 500/pers. · Privatisé dès Rs 20 000 pour 2 personnes — BBQ complet, boissons & snorkeling inclus. Paiement sur place."
        image="/images/nb-11.jpg"
      />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
