import { PageBanner, ExperiencesSection, WhyUsSection, CTASection } from '@/pages/sections';

export default function Excursions() {
  return (
    <div>
      <PageBanner
        tag="Nos Excursions"
        title="Choisissez Votre Aventure"
        subtitle="Flat Island, Gabriel Island & Coin de Mire — chaque sortie est une expérience unique dans le lagon du Nord."
        image="/images/nb-4.jpg"
      />
      <ExperiencesSection />
      <WhyUsSection />
      <CTASection />
    </div>
  );
}
