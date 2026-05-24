import { motion } from 'framer-motion';
import { Check, Clock, Anchor, Fish, TreePalm, Sun, AlertTriangle, Users, Waves, Mountain } from 'lucide-react';
import { PageBanner, Section, fadeUp, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';
import { WHATSAPP_URL } from '@/lib/index';

// ─── Contenu bilingue ─────────────────────────────────────────────────────────
const CONTENT = {
  fr: {
    intro: "Au départ de Cap Malheureux à 08h30, le bateau file vers le sud en longeant toute la côte ouest de Maurice — deux heures de navigation à travers des eaux peu fréquentées, entre récifs coralliens et paysages vierges. C'est ici, dans ce couloir naturel classé, que vivent en liberté les dauphins de l'île.",
    intro2: "Le bateau s'immobilise au cœur de leur territoire. Ils arrivent par dizaines, parfois par centaines — spinner dolphins bondissant, plongeant, jouant dans le sillage. Un spectacle d'une rare intensité, en pleine mer, sans enclos ni artifice. La navigation se poursuit ensuite vers l'Île aux Bénitiers, joyau du lagon ouest, accessible uniquement par bateau.",

    sightsTitle: 'Ce que vous allez voir & vivre',
    sights: [
      {
        icon: '🐬',
        title: 'Dauphins en pleine mer',
        desc: "Des centaines de spinner dolphins évoluent librement autour du bateau. Bonds spectaculaires, acrobaties naturelles — un moment d'une intensité rare.",
      },
      {
        icon: '🐋',
        title: 'Baleines à bosse',
        desc: 'De juin à octobre, les baleines à bosse longent la côte ouest lors de leur migration. Leur présence, silencieuse et majestueuse, est l\'une des plus belles rencontres possibles en mer.',
      },
      {
        icon: '🏔️',
        title: 'Le Morne Brabant',
        desc: 'Le massif volcanique du Morne — classé Patrimoine Mondial UNESCO — surgit de l\'océan face à vous. Une toile de fond épique pour une journée inoubliable.',
      },
      {
        icon: '🐢',
        title: 'Tortues marines',
        desc: 'Le lagon de l\'Île aux Bénitiers abrite des tortues vertes et des tortues imbriquées. Observation depuis le bateau ou en snorkeling dans leurs eaux cristallines.',
      },
      {
        icon: '🪸',
        title: 'Snorkeling & récifs',
        desc: 'Eaux turquoise peu profondes, coraux vivants, poissons tropicaux aux couleurs vives. L\'Île aux Bénitiers offre l\'un des meilleurs sites de snorkeling de l\'ouest.',
      },
      {
        icon: '🌅',
        title: 'Côte sauvage & préservée',
        desc: 'La côte ouest est la plus intacte de Maurice. Deux heures de navigation face à des falaises, une végétation tropicale dense et un lagon d\'un bleu profond — sans construction à l\'horizon.',
      },
      {
        icon: '🏝️',
        title: 'Île aux Bénitiers',
        desc: 'Sable blanc immaculé, eau peu profonde d\'un turquoise absolu, silence total. Un îlot protégé accessible uniquement par bateau — l\'un des plus beaux endroits de l\'île Maurice.',
      },
      {
        icon: '🧺',
        title: 'Pique-nique sur l\'île',
        desc: 'Repas servi sur l\'île dans un cadre de rêve. Pieds dans le sable, lagon turquoise, brise marine — le genre de déjeuner dont on se souvient toute une vie.',
      },
    ],

    programmeTitle: 'Programme de la journée',
    programme: [
      { time: '08h30', title: 'Départ Cap Malheureux', desc: 'Embarquement depuis la plage de l\'église de Cap Malheureux. Le bateau met le cap au sud, longeant la côte ouest face aux premières lumières du matin.', icon: Anchor },
      { time: '~10h00', title: 'Rencontre avec les dauphins', desc: 'Arrêt en pleine mer dans le couloir naturel des dauphins. Des centaines de spinner dolphins évoluent autour du bateau — bonds, plongeons, acrobaties. L\'une des expériences les plus marquantes de la journée.', icon: Fish },
      { time: '~11h30', title: 'Arrivée Île aux Bénitiers', desc: 'Accostage sur l\'îlot protégé. Baignade en eau peu profonde, snorkeling avec masques et tubas fournis. Observation des tortues marines, des coraux et des poissons tropicaux.', icon: TreePalm },
      { time: '~13h00', title: 'Pique-nique sur l\'île', desc: 'Repas servi sur place dans un cadre exceptionnel. Sable blanc, lagon turquoise, calme absolu. Le temps s\'arrête.', icon: Sun },
      { time: '~14h30', title: 'Navigation retour — côte sauvage', desc: 'Retour vers le nord en longeant à nouveau la côte ouest. Le Morne Brabant en toile de fond, récifs coralliens visibles sous la surface, eaux d\'un bleu profond.', icon: Waves },
      { time: '~16h00', title: 'Retour Cap Malheureux', desc: 'Arrivée en fin d\'après-midi, la tête pleine de souvenirs et les yeux encore éblouis.', icon: Anchor },
    ],

    includedTitle: 'Tout inclus dans l\'excursion',
    included: [
      'Bateau privé — Max 14 personnes',
      'Navigation complète côte ouest (aller-retour)',
      'Observation des dauphins en pleine mer',
      'Masques & tubas professionnels fournis',
      'Pique-nique sur l\'Île aux Bénitiers',
      'Boissons fraîches (eau, sodas, punch maison)',
      'Skipper professionnel & équipage expérimenté',
      'Jumelles à bord pour l\'observation des baleines',
    ],

    warningTitle: 'Information importante',
    warning: 'La présence des dauphins et des baleines n\'est pas garantie — ils évoluent librement dans leur milieu naturel. En conformité avec la législation mauricienne, la nage avec les dauphins est interdite. Les conditions météorologiques peuvent influencer le déroulement de l\'excursion.',

    ctaTitle: 'Réserver cette excursion',
    ctaSub: 'Contactez-nous sur WhatsApp pour les disponibilités et les tarifs. Réponse rapide garantie.',
    ctaBtn: 'Réserver via WhatsApp',

    duration: 'Journée complète · 08h30 → ~16h00',
    capacity: 'Max 14 personnes',
    depart: 'Cap Malheureux, Nord Maurice',

    seasonTitle: '🐋 Bonus saisonnier',
    seasonText: 'De juin à octobre, les baleines à bosse migrent le long de la côte ouest de Maurice. Leur présence lors de l\'excursion est l\'une des rencontres les plus rares et les plus émouvantes que l\'océan puisse offrir.',
  },

  en: {
    intro: "Departing Cap Malheureux at 08:30, the boat heads south along the entire west coast of Mauritius — two hours of sailing through largely untouched waters, past coral reefs and pristine landscapes. This protected natural corridor is home to Mauritius's wild dolphin population.",
    intro2: "The boat stops in the heart of their territory. They arrive in their dozens — sometimes hundreds — spinner dolphins leaping, diving, playing in the wake. A raw, spectacular show in the open ocean, with no enclosures, no staging. The journey then continues to Île aux Bénitiers, the jewel of the west lagoon, accessible only by boat.",

    sightsTitle: 'What You Will See & Experience',
    sights: [
      {
        icon: '🐬',
        title: 'Dolphins in the Wild',
        desc: "Hundreds of spinner dolphins move freely around the boat. Spectacular leaps, natural acrobatics — a moment of rare intensity you won't find anywhere else.",
      },
      {
        icon: '🐋',
        title: 'Humpback Whales',
        desc: 'From June to October, humpback whales migrate along the west coast. Their silent, majestic presence is one of the most breathtaking encounters the ocean can offer.',
      },
      {
        icon: '🏔️',
        title: 'Le Morne Brabant',
        desc: 'The volcanic massif of Le Morne — a UNESCO World Heritage Site — rises dramatically from the ocean before you. An epic backdrop for an unforgettable day at sea.',
      },
      {
        icon: '🐢',
        title: 'Sea Turtles',
        desc: 'The Île aux Bénitiers lagoon is home to green and hawksbill sea turtles. Spot them from the boat or while snorkeling in the crystal-clear water.',
      },
      {
        icon: '🪸',
        title: 'Snorkeling & Reefs',
        desc: 'Shallow turquoise water, living coral, vibrant tropical fish. Île aux Bénitiers offers one of the finest snorkeling spots on the entire west coast.',
      },
      {
        icon: '🌅',
        title: 'Wild & Pristine Coastline',
        desc: "The west coast is Mauritius's most unspoiled shore. Two hours of sailing past cliffs, dense tropical vegetation and a deep-blue lagoon — not a building in sight.",
      },
      {
        icon: '🏝️',
        title: 'Île aux Bénitiers',
        desc: 'Immaculate white sand, shallow absolute-turquoise water, total silence. A protected islet reachable only by boat — one of the most beautiful places in Mauritius.',
      },
      {
        icon: '🧺',
        title: 'Island Picnic',
        desc: 'Lunch served on the island in a dreamlike setting. Feet in the sand, turquoise lagoon, sea breeze — the kind of meal you remember for a lifetime.',
      },
    ],

    programmeTitle: 'Day Programme',
    programme: [
      { time: '08:30', title: 'Departure Cap Malheureux', desc: 'Board from Cap Malheureux Church beach. The boat heads south, tracing the west coast in the soft morning light.', icon: Anchor },
      { time: '~10:00', title: 'Dolphin Encounter', desc: "Stop at sea in the dolphins' natural corridor. Hundreds of spinner dolphins swirl around the boat — leaping, diving, performing. One of the most powerful moments of the day.", icon: Fish },
      { time: '~11:30', title: 'Île aux Bénitiers', desc: 'Landing on the protected islet. Swimming in shallow water, snorkeling with provided masks and fins. Watch for sea turtles, coral gardens and tropical fish.', icon: TreePalm },
      { time: '~13:00', title: 'Island Picnic', desc: 'Lunch served on the island in an exceptional setting. White sand, turquoise lagoon, absolute calm. Time stops here.', icon: Sun },
      { time: '~14:30', title: 'Return — Wild Coast', desc: 'Northward return along the west coast. Le Morne Brabant as your backdrop, coral reefs visible through the surface, deep blue all around.', icon: Waves },
      { time: '~16:00', title: 'Return Cap Malheureux', desc: 'Arrival in the late afternoon, eyes still dazzled, memories locked in forever.', icon: Anchor },
    ],

    includedTitle: "What's Included",
    included: [
      'Private boat — Max 14 guests',
      'Full west coast navigation (return)',
      'Wild dolphin encounter at sea',
      'Professional masks & snorkels provided',
      'Picnic on Île aux Bénitiers',
      'Fresh drinks (water, sodas, homemade punch)',
      'Professional skipper & experienced crew',
      'Binoculars on board for whale watching',
    ],

    warningTitle: 'Important Notice',
    warning: 'Dolphin and whale sightings are not guaranteed — they live freely in their natural environment. In accordance with Mauritian law, swimming with dolphins is prohibited. Weather conditions may affect the excursion.',

    ctaTitle: 'Book This Excursion',
    ctaSub: 'Contact us on WhatsApp for availability and pricing. Fast reply guaranteed.',
    ctaBtn: 'Book via WhatsApp',

    duration: 'Full Day · 08:30 → ~16:00',
    capacity: 'Max 14 guests',
    depart: 'Cap Malheureux, North Mauritius',

    seasonTitle: '🐋 Seasonal Bonus',
    seasonText: 'From June to October, humpback whales migrate along the Mauritius west coast. Spotting them during your excursion is one of the rarest and most moving encounters the ocean can offer.',
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

      {/* ── Intro ── */}
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
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center space-y-5 mb-16">
            <p className="text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">{c.intro2}</p>
          </motion.div>

          {/* Bonus saisonnier */}
          <motion.div
            variants={fadeUp}
            className="mb-16 rounded-2xl p-6 flex items-start gap-5 border"
            style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 240 / 0.06) 0%, oklch(0.18 0.06 220 / 0.04) 100%)', borderColor: 'oklch(0.78 0.14 195 / 0.3)' }}
          >
            <span className="text-3xl flex-shrink-0 mt-0.5">🐋</span>
            <div>
              <p className="font-semibold text-foreground mb-1">{c.seasonTitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.seasonText}</p>
            </div>
          </motion.div>

          {/* Ce que vous allez voir */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-10">{c.sightsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.sights.map((s) => (
                <div
                  key={s.title}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
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
                        <h3 className="font-semibold text-white text-base">{item.title}</h3>
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

      {/* ── Inclus + CTA + Avertissement ── */}
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
