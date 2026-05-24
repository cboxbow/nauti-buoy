import { motion } from 'framer-motion';
import { Check, Clock, Anchor, Fish, TreePalm, Sun, AlertTriangle, Users, Waves } from 'lucide-react';
import { Section, fadeUp, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';
import { WHATSAPP_URL } from '@/lib/index';

// ─── Contenu bilingue ─────────────────────────────────────────────────────────
const CONTENT = {
  fr: {
    heroTag: '✨ Excursion exclusive · Côte Ouest',
    heroTitle: 'Tortues, Dauphins, Baleines & Île aux Bénitiers',
    heroSub: 'La journée la plus extraordinaire de votre séjour à Maurice',
    heroCta: 'Réserver via WhatsApp',

    intro: "Au départ de Cap Malheureux à 08h30, le bateau file vers le sud en longeant toute la côte ouest de Maurice — deux heures de navigation à travers des eaux peu fréquentées, entre récifs coralliens et paysages vierges. C'est ici, dans ce couloir naturel classé, que vivent en liberté les dauphins de l'île.",
    intro2: "Le bateau s'immobilise au cœur de leur territoire. Ils arrivent par dizaines, parfois par centaines — spinner dolphins bondissant, plongeant, jouant dans le sillage. Un spectacle d'une rare intensité, en pleine mer, sans enclos ni artifice. La navigation se poursuit ensuite vers l'Île aux Bénitiers, joyau du lagon ouest, accessible uniquement par bateau.",

    sightsTitle: '🌊 Ce que vous allez voir & vivre',
    sights: [
      { icon: '🐬', title: 'Dauphins en pleine mer', desc: 'Des centaines de spinner dolphins évoluent librement autour du bateau. Bonds spectaculaires, acrobaties naturelles — un moment d\'une intensité rare.' },
      { icon: '🐋', title: 'Baleines à bosse', desc: 'De juin à octobre, les baleines à bosse longent la côte ouest lors de leur migration. Silencieuses et majestueuses — l\'une des rencontres les plus émouvantes au monde.' },
      { icon: '🏔️', title: 'Le Morne Brabant', desc: 'Le massif volcanique du Morne — classé Patrimoine Mondial UNESCO — surgit de l\'océan face à vous. Une toile de fond épique.' },
      { icon: '🐢', title: 'Tortues marines', desc: 'Le lagon de l\'Île aux Bénitiers abrite des tortues vertes et imbriquées. Observation depuis le bateau ou en snorkeling.' },
      { icon: '🪸', title: 'Snorkeling & récifs', desc: 'Eaux turquoise peu profondes, coraux vivants, poissons tropicaux aux couleurs vives. L\'un des meilleurs spots de l\'ouest.' },
      { icon: '🌅', title: 'Côte sauvage', desc: 'La côte ouest est la plus intacte de Maurice. 2h de navigation face à des paysages préservés — sans construction à l\'horizon.' },
      { icon: '🏝️', title: 'Île aux Bénitiers', desc: 'Sable blanc immaculé, eau turquoise peu profonde, silence absolu. Un îlot protégé accessible uniquement par bateau.' },
      { icon: '🧺', title: 'Pique-nique sur l\'île', desc: 'Repas servi sur l\'île dans un cadre de rêve. Pieds dans le sable, lagon turquoise — le genre de déjeuner dont on se souvient toute une vie.' },
    ],

    programmeTitle: '🗓️ Programme de la journée',
    programme: [
      { time: '08h30', title: 'Départ Cap Malheureux', desc: 'Embarquement depuis la plage de l\'église. Cap au sud, face aux premières lumières du matin.', icon: Anchor },
      { time: '~10h00', title: 'Rencontre avec les dauphins', desc: 'Arrêt en pleine mer dans le couloir naturel des dauphins. Des centaines de spinner dolphins autour du bateau — bonds, plongeons, acrobaties.', icon: Fish },
      { time: '~11h30', title: 'Île aux Bénitiers', desc: 'Accostage sur l\'îlot protégé. Baignade, snorkeling, tortues marines et coraux dans des eaux cristallines.', icon: TreePalm },
      { time: '~13h00', title: 'Pique-nique sur l\'île', desc: 'Repas dans un cadre exceptionnel. Sable blanc, lagon turquoise, calme absolu. Le temps s\'arrête.', icon: Sun },
      { time: '~14h30', title: 'Retour — côte sauvage', desc: 'Navigation retour en longeant la côte ouest. Le Morne Brabant en toile de fond, récifs visibles sous la surface.', icon: Waves },
      { time: '~16h00', title: 'Retour Cap Malheureux', desc: 'Arrivée en fin d\'après-midi, la tête pleine de souvenirs et les yeux encore éblouis.', icon: Anchor },
    ],

    includedTitle: '✅ Tout inclus',
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

    seasonBadge: '🐋 Juin → Octobre',
    seasonText: 'Les baleines à bosse migrent le long de la côte ouest. Leur présence lors de l\'excursion est l\'une des rencontres les plus rares et les plus émouvantes que l\'océan puisse offrir.',
  },

  en: {
    heroTag: '✨ Exclusive Excursion · West Coast',
    heroTitle: 'Turtles, Dolphins, Whales & Île aux Bénitiers',
    heroSub: 'The most extraordinary day of your Mauritius stay',
    heroCta: 'Book via WhatsApp',

    intro: "Departing Cap Malheureux at 08:30, the boat heads south along the entire west coast of Mauritius — two hours of sailing through largely untouched waters, past coral reefs and pristine landscapes. This protected natural corridor is home to Mauritius's wild dolphin population.",
    intro2: "The boat stops in the heart of their territory. They arrive in their dozens — sometimes hundreds — spinner dolphins leaping, diving, playing in the wake. A raw, spectacular show in the open ocean, with no enclosures, no staging. The journey then continues to Île aux Bénitiers, the jewel of the west lagoon, accessible only by boat.",

    sightsTitle: '🌊 What You Will See & Experience',
    sights: [
      { icon: '🐬', title: 'Wild Dolphins', desc: "Hundreds of spinner dolphins move freely around the boat. Spectacular leaps, natural acrobatics — a moment of rare intensity." },
      { icon: '🐋', title: 'Humpback Whales', desc: 'From June to October, humpback whales migrate along the west coast. Silent and majestic — one of the most moving encounters in the world.' },
      { icon: '🏔️', title: 'Le Morne Brabant', desc: 'The volcanic massif of Le Morne — a UNESCO World Heritage Site — rises dramatically from the ocean before you. An epic backdrop.' },
      { icon: '🐢', title: 'Sea Turtles', desc: 'The Île aux Bénitiers lagoon is home to green and hawksbill sea turtles. Spot them from the boat or while snorkeling.' },
      { icon: '🪸', title: 'Snorkeling & Reefs', desc: 'Shallow turquoise water, living coral, vibrant tropical fish. One of the finest snorkeling spots on the entire west coast.' },
      { icon: '🌅', title: 'Wild Coastline', desc: "The west coast is Mauritius's most unspoiled shore. 2h of sailing past pristine landscapes — not a building in sight." },
      { icon: '🏝️', title: 'Île aux Bénitiers', desc: 'Immaculate white sand, shallow absolute-turquoise water, total silence. A protected islet reachable only by boat.' },
      { icon: '🧺', title: 'Island Picnic', desc: 'Lunch served on the island in a dreamlike setting. Feet in the sand, turquoise lagoon — the kind of meal you remember for a lifetime.' },
    ],

    programmeTitle: '🗓️ Day Programme',
    programme: [
      { time: '08:30', title: 'Departure Cap Malheureux', desc: "Board from Cap Malheureux Church beach. Head south in the soft morning light.", icon: Anchor },
      { time: '~10:00', title: 'Dolphin Encounter', desc: "Stop in the dolphins' natural corridor. Hundreds of spinner dolphins swirl around the boat — leaping, diving, performing.", icon: Fish },
      { time: '~11:30', title: 'Île aux Bénitiers', desc: 'Landing on the protected islet. Swimming, snorkeling, sea turtles and coral gardens in crystal-clear water.', icon: TreePalm },
      { time: '~13:00', title: 'Island Picnic', desc: 'Lunch in an exceptional setting. White sand, turquoise lagoon, absolute calm. Time stops here.', icon: Sun },
      { time: '~14:30', title: 'Return — Wild Coast', desc: 'Northward return along the west coast. Le Morne Brabant as your backdrop, coral reefs visible through the surface.', icon: Waves },
      { time: '~16:00', title: 'Return Cap Malheureux', desc: 'Arrival in the late afternoon, eyes still dazzled, memories locked in forever.', icon: Anchor },
    ],

    includedTitle: '✅ All Included',
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

    seasonBadge: '🐋 June → October',
    seasonText: 'Humpback whales migrate along the Mauritius west coast. Spotting them during your excursion is one of the rarest and most moving encounters the ocean can offer.',
  },
};

// ─── Card gradient colors per index ──────────────────────────────────────────
const CARD_GRADIENTS = [
  'from-cyan-400/20 to-blue-500/10 border-cyan-300/40',
  'from-blue-400/20 to-indigo-500/10 border-blue-300/40',
  'from-emerald-400/20 to-teal-500/10 border-emerald-300/40',
  'from-green-400/20 to-cyan-500/10 border-green-300/40',
  'from-teal-400/20 to-cyan-500/10 border-teal-300/40',
  'from-orange-300/20 to-yellow-400/10 border-orange-300/40',
  'from-sky-400/20 to-blue-400/10 border-sky-300/40',
  'from-amber-300/20 to-orange-400/10 border-amber-300/40',
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Benitiers() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO VIDÉO PLEIN ÉCRAN
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        {/* Vidéo background */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/benitiers-hero.mp4"
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />

        {/* Contenu hero */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-6 backdrop-blur-sm"
            style={{ background: 'oklch(0.78 0.14 195 / 0.35)', border: '1px solid oklch(0.78 0.14 195 / 0.5)' }}
          >
            {c.heroTag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 drop-shadow-lg"
          >
            {c.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/85 text-lg md:text-xl mb-8 font-light"
          >
            {c.heroSub}
          </motion.p>

          {/* Badges méta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {[
              { icon: Clock, label: c.duration },
              { icon: Users, label: c.capacity },
              { icon: Anchor, label: c.depart },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white shadow-2xl"
            style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.5)' }}
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            {c.heroCta}
          </motion.a>
        </div>

        {/* Vague bas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTRO — fond dégradé tropical
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(160deg, #f0fffe 0%, #e8f7ff 50%, #f5fff8 100%)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-lg md:text-xl leading-relaxed text-slate-700 font-light"
          >
            {c.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl leading-relaxed text-slate-700 font-light"
          >
            {c.intro2}
          </motion.p>
        </div>

        {/* Bonus saisonnier baleine */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-10 rounded-2xl p-6 flex items-start gap-5"
          style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(6,182,212,0.08) 100%)', border: '1px solid rgba(14,165,233,0.35)' }}
        >
          <div className="text-3xl flex-shrink-0">🐋</div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2" style={{ background: 'oklch(0.58 0.18 220)' }}>
              {c.seasonBadge}
            </span>
            <p className="text-slate-700 text-sm leading-relaxed">{c.seasonText}</p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          CE QUE VOUS ALLEZ VOIR — cards colorées
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #e8f7ff 0%, #f0fff4 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-heading text-3xl md:text-4xl text-slate-800 text-center mb-12"
          >
            {c.sightsTitle}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.sights.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`p-6 rounded-2xl border bg-gradient-to-br ${CARD_GRADIENTS[idx]} backdrop-blur-sm text-center group cursor-default`}
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 drop-shadow">{s.icon}</span>
                <h3 className="font-bold text-slate-800 mb-2 text-sm leading-snug">{s.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROGRAMME — fond océan profond
      ══════════════════════════════════════════════ */}
      <Section
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.06 220) 50%, oklch(0.20 0.09 200) 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">{c.programmeTitle}</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[2.2rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent" />
            <div className="space-y-8">
              {c.programme.map((item, idx) => (
                <motion.div
                  key={item.time} variants={fadeUp}
                  className={`flex gap-6 md:gap-0 items-start relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30" style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195), oklch(0.65 0.16 210))' }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="p-5 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/14 hover:border-cyan-400/30 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="font-mono text-sm font-bold px-3 py-1 rounded-full" style={{ background: 'oklch(0.78 0.14 195 / 0.25)', color: 'oklch(0.85 0.12 185)' }}>
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

      {/* ══════════════════════════════════════════════
          INCLUS + CTA — fond lumineux tropical
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(160deg, #f0fff4 0%, #e8f7ff 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Inclus */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="rounded-3xl p-8 shadow-xl"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,255,254,0.95))', border: '1px solid rgba(6,182,212,0.2)' }}
            >
              <h2 className="font-heading text-2xl text-slate-800 mb-6">{c.includedTitle}</h2>
              <ul className="space-y-3">
                {c.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195), oklch(0.70 0.16 180))' }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA + Avertissement */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="rounded-3xl p-8 text-white shadow-2xl"
                style={{ background: 'linear-gradient(145deg, #0ea5e9 0%, #0891b2 50%, #0e7490 100%)', boxShadow: '0 20px 60px rgba(14,165,233,0.4)' }}
              >
                <h3 className="font-heading text-2xl text-white mb-2">{c.ctaTitle}</h3>
                <p className="text-white/75 text-sm mb-6">{c.ctaSub}</p>
                <a
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-base text-white transition-all hover:scale-105 active:scale-95"
                  style={{ background: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.5)' }}
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                  {c.ctaBtn}
                </a>
              </motion.div>

              {/* Avertissement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
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
      </section>

      <CTASection />
    </div>
  );
}
