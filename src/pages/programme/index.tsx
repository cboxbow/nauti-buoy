import { PageBanner, TimelineSection, CTASection } from '@/pages/sections';

export default function Programme() {
  return (
    <div>
      <PageBanner
        tag="Programme de la journée"
        title="Une Journée au Paradis"
        subtitle="Départ 08h30 · Retour 15h30 — depuis la plage de l'église de Cap Malheureux. Voici comment se déroule votre journée parfaite."
        image="/images/nb-8.jpg"
      />
      <TimelineSection />
      <CTASection />
    </div>
  );
}
