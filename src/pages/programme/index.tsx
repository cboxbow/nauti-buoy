import { PageBanner, TimelineSection, CTASection } from '@/pages/sections';

export default function Programme() {
  return (
    <div>
      <PageBanner
        tag="Programme de la journée"
        title="Une Journée au Paradis"
        subtitle="Départ 8h30 depuis l'Église de Cap Malheureux — voici comment se déroule votre journée parfaite."
        image="/images/nb-8.jpg"
      />
      <TimelineSection />
      <CTASection />
    </div>
  );
}
