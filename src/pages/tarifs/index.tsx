import { PageBanner, PricingSection, TestimonialsSection } from '@/pages/sections';

export default function Tarifs() {
  return (
    <div>
      <PageBanner
        tag="Tarifs"
        title="Prix Clairs & Transparents"
        subtitle="Partagé ou privatif — aucun frais caché, paiement sur place. Rs 2 200/pers. ou Rs 25 000 le bateau entier."
        image="/images/nb-11.jpg"
      />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
