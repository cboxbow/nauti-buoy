import { motion } from 'framer-motion';
import { Check, Clock, Anchor, Fish, TreePalm, Sun, AlertTriangle, Users } from 'lucide-react';
import { PageBanner, Section, fadeUp, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';
import { WHATSAPP_URL } from '@/lib/index';

// ─── Contenu bilingue ─────────────────────────────────────────────────────────
const CONTENT = {
  fr: {
    intro: "Au départ de Cap Malheureux à 08h30, le bateau longe toute la côte ouest de Maurice — environ 2 heures de navigation dans des eaux peu fréquentées. C'est dans ce couloir naturel que vivent en liberté les dauphins de l'île Maurice. L'arrêt en mer permet de les observer de près et, selon les conditions, de nager à leurs côtés.",
    intro2: "L'excursion se poursuit jusqu'à l'Île aux Bénitiers, îlot protégé du lagon ouest, accessible uniquement par bateau. Eau peu profonde, sable blanc et cadre préservé — idéal pour se baigner, faire du snorkeling et pique-niquer.",
    programmeTitle: 'Programme de la journée',
    programme: [
      { time: '08h30', title: 'Départ Cap Malheureux', desc: 'Embarquement sur le bateau depuis la plage de l\'église de Cap Malheureux. Cap vers le sud, longeant toute la côte ouest.', icon: Anchor },
      { time: '~10h30', title: 'Rencontre avec les dauphins', desc: 'Arrêt en pleine mer dans les zones fréquentées par les dauphins. Observation depuis le bateau et nage avec eux selon les conditions du jour.', icon: Fish },
      { time: '~11h30', title: 'Arrivée Île aux Bénitiers', desc: 'Accostage sur l\'îlot protégé du lagon ouest. Baignade en eau peu profonde et snorkeling dans les eaux cristallines.', icon: TreePalm },
      { time: '~13h00', title: 'Pique-nique sur l\'île', desc: 'Repas pique-nique sur place dans un cadre paradisiaque. Sable blanc, lagon turquoise, silence absolu.', icon: Sun },
      { time: '~16h00', title: 'Retour Cap Malheureux', desc: 'Navigation retour vers le nord en longeant à nouveau la côte ouest. Arrivée à Cap Malheureux en fin d\'après-midi.', icon: Anchor },
    ],
    includedTitle: 'Inclus dans l\'excursion',
    included: [
      'Transport en bateau privé — Max 14 personnes',
      'Navigation côte ouest complète (aller-retour)',
      'Arrêt dauphins en pleine mer',
      'Masques & tubas fournis',
      'Pique-nique sur l\'Île aux Bénitiers',
      'Boissons (eau, sodas, punch)',
    ],
    highlightsTitle: 'Points forts',
    highlights: [
      { icon: '🐬', title: 'Dauphins en liberté', desc: 'Nage et observation dans leur milieu naturel, sans enclos ni captivité.' },
      { icon: '🌊', title: 'Côte ouest sauvage', desc: '2h de navigation face aux paysages les plus préservés de Maurice.' },
      { icon: '🏝️', title: 'Île aux Bénitiers', desc: 'Lagon protégé, eau peu profonde idéale pour snorkeling et baignade.' },
      { icon: '🧺', title: 'Pique-nique sur l\'île', desc: 'Repas dans un cadre dépaysant, les pieds dans le sable blanc.' },
    ],
    warningTitle: 'Information importante',
    warning: 'La présence des dauphins n\'est pas garantie — ils évoluent en liberté dans leur milieu naturel. Les conditions météorologiques peuvent influencer le déroulement de l\'excursion.',
    ctaTitle: 'Réserver cette excursion',
    ctaSub: 'Contactez-nous sur WhatsApp pour connaître les disponibilités et les tarifs.',
    ctaBtn: 'Réserver via WhatsApp',
    duration: 'Journée complète · 08h30 → ~16h00',
    capacity: 'Max 14 personnes',
    depart: 'Cap Malheureux, Nord Maurice',
  },
  en: {
    intro: "Departing from Cap Malheureux at 08:30, the boat cruises the entire west coast of Mauritius — about 2 hours of sailing through largely untouched waters. This natural corridor is home to Mauritius's free-living dolphin population. We stop at sea to observe them up close and, conditions permitting, swim alongside them.",
    intro2: "The excursion continues to Île aux Bénitiers, a protected islet in the west lagoon, accessible only by boat. Shallow water, white sand and a pristine setting — ideal for swimming, snorkeling and a picnic.",
    programmeTitle: 'Day Programme',
    programme: [
      { time: '08:30', title: 'Departure Cap Malheureux', desc: 'Board the boat from Cap Malheureux Church beach. Head south along the entire west coast.', icon: Anchor },
      { time: '~10:30', title: 'Dolphin Encounter', desc: 'Stop at sea in areas frequented by dolphins. Observe from the boat and swim with them depending on the day\'s conditions.', icon: Fish },
      { time: '~11:30', title: 'Arrival Île aux Bénitiers', desc: 'Landing on the protected west lagoon islet. Swimming in shallow water and snorkeling in crystal-clear waters.', icon: TreePalm },
      { time: '~13:00', title: 'Picnic on the Island', desc: 'Lunch picnic in a paradisiacal setting. White sand, turquoise lagoon, absolute silence.', icon: Sun },
      { time: '~16:00', title: 'Return to Cap Malheureux', desc: 'Return navigation northward along the west coast again. Arrival at Cap Malheureux in the late afternoon.', icon: Anchor },
    ],
    includedTitle: 'What\'s Included',
    included: [
      'Private boat transfer — Max 14 guests',
      'Full west coast navigation (return)',
      'Dolphin stop at sea',
      'Masks & snorkels provided',
      'Picnic on Île aux Bénitiers',
      'Drinks (water, sodas, punch)',
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      { icon: '🐬', title: 'Wild Dolphins', desc: 'Swim and observe in their natural habitat — no enclosures, no captivity.' },
      { icon: '🌊', title: 'Wild West Coast', desc: '2h of sailing past Mauritius\'s most preserved landscapes.' },
      { icon: '🏝️', title: 'Île aux Bénitiers', desc: 'Protected lagoon, shallow water perfect for snorkeling and swimming.' },
      { icon: '🧺', title: 'Island Picnic', desc: 'Lunch in a stunning setting, feet in the white sand.' },
    ],
    warningTitle: 'Important Notice',
    warning: 'Dolphin sightings are not guaranteed — they live freely in their natural environment. Weather conditions may affect the excursion.',
    ctaTitle: 'Book This Excursion',
    ctaSub: 'Contact us on WhatsApp for availability and pricing.',
    ctaBtn: 'Book via WhatsApp',
    duration: 'Full Day · 08:30 → ~16:00',
    capacity: 'Max 14 guests',
    depart: 'Cap Malheureux, North Mauritius',
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Benitiers() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const b = T.banners.benitiers;

  return (
    <div>
      <PageBanner
        tag={b.tag[lang]}
        title={b.title[lang]}
        subtitle={b.sub[lang]}
        image="/images/nb-7.jpg"
      />

      {/* ── Intro + méta-infos ── */}
      <Section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">

          {/* Badges méta */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10 justify-center">
            {[
              { icon: Clock, label: c.duration },
              { icon: Users, label: c.capacity },
              { icon: Anchor, label: c.depart },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-sm font-medium text-foreground">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Texte intro */}
          <motion.div variants={fadeUp} className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-center mb-16">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <p className="text-lg leading-relaxed">{c.intro2}</p>
          </motion.div>

          {/* Points forts */}
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="font-heading text-2xl text-foreground text-center mb-8">{c.highlightsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.highlights.map((h) => (
                <div key={h.title} className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                  <span className="text-3xl mb-3 block">{h.icon}</span>
                  <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Programme ── */}
      <Section
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.06 220) 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">{c.programmeTitle}</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[2.2rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            <div className="space-y-8">
              {c.programme.map((item, idx) => (
                <motion.div
                  key={item.time} variants={fadeUp}
                  className={`flex gap-6 md:gap-0 items-start relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195) 0%, oklch(0.70 0.12 195) 100%)' }}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="p-5 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-300">
                      <div className={`flex items-center gap-3 mb-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-full" style={{ background: 'oklch(0.78 0.14 195 / 0.2)', color: 'oklch(0.78 0.14 195)' }}>
                          {item.time}
                        </span>
                        <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                      </div>
                      <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Inclus + Avertissement ── */}
      <Section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Inclus */}
            <motion.div variants={fadeUp} className="bg-card rounded-3xl border border-border p-8 shadow-sm">
              <h2 className="font-heading text-2xl text-foreground mb-6">{c.includedTitle}</h2>
              <ul className="space-y-3">
                {c.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'oklch(0.78 0.14 195 / 0.15)' }}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/85 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA + Avertissement */}
            <div className="space-y-6">
              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 text-white"
                style={{ background: 'linear-gradient(145deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.06 220) 100%)', boxShadow: '0 20px 60px oklch(0.22 0.08 240 / 0.35)' }}
              >
                <h3 className="font-heading text-2xl text-white mb-2">{c.ctaTitle}</h3>
                <p className="text-white/65 text-sm mb-6">{c.ctaSub}</p>
                <a
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-base text-white transition-all hover:scale-105"
                  style={{ background: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.4)' }}
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                  {c.ctaBtn}
                </a>
              </motion.div>

              {/* Avertissement */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-4"
              >
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-1">{c.warningTitle}</p>
                  <p className="text-amber-700 text-sm leading-relaxed">{c.warning}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
