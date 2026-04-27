import { PageBanner, ContactSection } from '@/pages/sections';

export default function Contact() {
  return (
    <div>
      <PageBanner
        tag="Contact"
        title="Planifions Votre Escapade"
        subtitle="Répondons en quelques minutes sur WhatsApp. Départ depuis Cap Malheureux à 8h30."
        image="/images/nb-3.jpg"
      />
      <ContactSection />
    </div>
  );
}
