import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Waves, MapPin, Ship, Users, Flame, Music,
  Anchor, Fish, Sun, Star, Check, Phone,
  ChevronLeft, ChevronRight, X, Clock, Send, TreePalm,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  WHATSAPP_URL, TOURS, FEATURES, TIMELINE,
  TESTIMONIALS, PRICING_PLANS, GALLERY_IMAGES, GALLERY_AMBIANCE, GALLERY_VIDEOS,
  type GalleryImage,
} from '@/lib/index';

// ─── Animation Variants ───────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Section Wrapper ─────────────────────────────────────────────────────────
export function Section({
  children, id, className = '', style,
}: {
  children: React.ReactNode; id?: string; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref} id={id} variants={stagger}
      initial="hidden" animate={inView ? 'visible' : 'hidden'}
      className={className} style={style}
    >
      {children}
    </motion.section>
  );
}

// ─── Icon Map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Waves, MapPin, Ship, Users, Flame, Music,
  Anchor, Fish, Sun, TreePalm, Sunset: Sun, Clock,
};
export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] || Anchor;
  return <Icon className={className} />;
}

// ─── Page Banner (pour les pages intérieures) ─────────────────────────────────
export function PageBanner({
  title, subtitle, tag, image,
}: {
  title: string; subtitle?: string; tag?: string; image: string;
}) {
  return (
    <div className="relative h-72 flex items-end overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/65 to-ocean-deep/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
        {tag && (
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">{tag}</p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-white/70 mt-3 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// ─── EXPERIENCES ──────────────────────────────────────────────────────────────
export function ExperiencesSection() {
  return (
    <Section id="experiences" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Nos Excursions</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Choisissez Votre Aventure</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chaque sortie est conçue pour créer des souvenirs inoubliables.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOURS.map((tour, idx) => (
            <motion.div
              key={tour.id} variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent" />
                {tour.badge && (
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: tour.badge === 'Best Value' ? 'oklch(0.75 0.13 65)' : 'oklch(0.78 0.14 195)' }}
                  >
                    {tour.badge}
                  </span>
                )}
                <p className="absolute bottom-4 left-4 text-xs font-semibold tracking-widest uppercase text-white/80">{tour.tagline}</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-2xl text-card-foreground mb-2">{tour.name}</h3>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tour.description}</p>

                {/* Itinerary stops (optional) */}
                {tour.itinerary && (
                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60">Programme</p>
                    {tour.itinerary.map((stop, si) => (
                      <div key={si} className="flex gap-3">
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                          style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195), oklch(0.65 0.12 195))' }}
                        >
                          {si + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground/90 leading-tight mb-0.5">{stop.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{stop.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-1.5 mb-6 flex-1">
                  {tour.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-auto w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 bg-primary text-primary-foreground"
                  style={{ boxShadow: '0 4px 16px oklch(0.78 0.14 195 / 0.35)' }}
                >
                  Réserver ce voyage
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
export function WhyUsSection() {
  return (
    <Section
      id="why-us" className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.06 220) 100%)' }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Pourquoi Nous</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">Ce Qui Nous Distingue</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Pas juste une sortie en bateau. Une expérience façonnée avec passion et authenticité mauricienne.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title} variants={fadeUp} whileHover={{ scale: 1.03 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)' }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                style={{ background: 'oklch(0.78 0.14 195 / 0.2)', border: '1px solid oklch(0.78 0.14 195 / 0.3)' }}
              >
                <DynamicIcon name={feature.icon} className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function PhotoGrid({ images, onOpen }: { images: GalleryImage[]; onOpen: (i: number) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
      {images.map((img, idx) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onOpen(idx)}
          className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span === 'wide' ? 'col-span-2' : ''}`}
        >
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/30 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⊕</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function GallerySection() {
  const [tab, setTab] = useState<'drone' | 'ambiance' | 'videos'>('drone');
  const [lightboxPool, setLightboxPool] = useState<GalleryImage[]>([]);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (pool: GalleryImage[], idx: number) => {
    setLightboxPool(pool);
    setLightboxIdx(idx);
  };
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + lightboxPool.length) % lightboxPool.length));
  const nextImage = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % lightboxPool.length));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxPool]);

  const tabs = [
    { key: 'drone',    label: '🚁 Vue du ciel' },
    { key: 'ambiance', label: '🍹 Ambiance & Repas' },
    { key: 'videos',   label: '🎬 Vidéos' },
  ] as const;

  return (
    <Section id="gallery" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Galerie</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Vivez la Magie</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Les photos ne font qu'effleurer la réalité. Mais elles vous feront ressentir quelque chose.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeUp} className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                tab === t.key
                  ? 'text-white shadow-lg'
                  : 'bg-card border border-border text-foreground hover:border-primary/40'
              }`}
              style={tab === t.key ? { background: 'linear-gradient(135deg, oklch(0.78 0.14 195), oklch(0.65 0.12 195))' } : {}}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {tab === 'drone' && (
            <motion.div key="drone" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <PhotoGrid images={GALLERY_IMAGES} onOpen={(i) => openLightbox(GALLERY_IMAGES, i)} />
            </motion.div>
          )}
          {tab === 'ambiance' && (
            <motion.div key="ambiance" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <PhotoGrid images={GALLERY_AMBIANCE} onOpen={(i) => openLightbox(GALLERY_AMBIANCE, i)} />
            </motion.div>
          )}
          {tab === 'videos' && (
            <motion.div key="videos" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_VIDEOS.map((v, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300" style={{ aspectRatio: '9/16', maxHeight: '480px' }}>
                    <video
                      src={v.src}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      style={{ display: 'block' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                      <p className="text-white text-sm font-medium">{v.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxPool[lightboxIdx].src} alt={lightboxPool[lightboxIdx].alt} className="w-full max-h-[85vh] object-contain rounded-2xl" />
              <p className="text-center text-white/60 text-sm mt-3">{lightboxPool[lightboxIdx].alt}</p>
              <button onClick={closeLightbox} className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <X className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {lightboxPool.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }} className={`h-2 rounded-full transition-all ${i === lightboxIdx ? 'bg-primary w-6' : 'bg-white/40 w-2'}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
export function TimelineSection() {
  return (
    <Section id="timeline" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Votre Journée</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Une Journée au Paradis</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Du moment où vous montez à bord jusqu'au retour sous la lumière dorée.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[2.2rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.time} variants={fadeUp}
                className={`flex gap-6 md:gap-0 items-start relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                    style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195) 0%, oklch(0.70 0.12 195) 100%)' }}
                  >
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                </div>
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <div className={`flex items-center gap-3 mb-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-full" style={{ background: 'oklch(0.78 0.14 195 / 0.12)', color: 'oklch(0.78 0.14 195)' }}>
                        {item.time}
                      </span>
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  return (
    <Section
      id="testimonials" className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, oklch(0.97 0.02 195) 0%, oklch(0.99 0.01 200) 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Avis Clients</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Ce Que Disent Nos Clients</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
            <span className="ml-2 font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground ml-1">· 200+ avis sur Google &amp; TripAdvisor</span>
          </div>
        </motion.div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div key={t.name} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <p className="text-foreground/85 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground" style={{ background: `linear-gradient(135deg, oklch(0.78 0.14 195), oklch(${0.3 + idx * 0.07} 0.08 240))` }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.35 }} className="bg-card rounded-2xl p-6 border border-border shadow-lg mx-4">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
              </div>
              <p className="text-foreground/85 text-base leading-relaxed mb-5 italic">"{TESTIMONIALS[current].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">{TESTIMONIALS[current].avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{TESTIMONIALS[current].name}</p>
                  <p className="text-sm text-muted-foreground">{TESTIMONIALS[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-6 items-center">
            <button onClick={() => setCurrent((c) => (c - 1 + total) % total)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><ChevronLeft className="w-4 h-4" /></button>
            <span className="text-sm text-muted-foreground">{current + 1} / {total}</span>
            <button onClick={() => setCurrent((c) => (c + 1) % total)} className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
export function PricingSection() {
  return (
    <Section id="pricing" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Tarifs</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Prix Clairs &amp; Transparents</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Aucun frais caché. Aucune surprise. Juste une journée incroyable sur l'eau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlighted ? 'text-white shadow-2xl' : 'bg-card border border-border hover:border-primary/30 hover:shadow-xl'}`}
              style={plan.highlighted ? { background: 'linear-gradient(145deg, oklch(0.22 0.08 240) 0%, oklch(0.18 0.06 220) 100%)', boxShadow: '0 20px 60px oklch(0.22 0.08 240 / 0.4)' } : {}}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap" style={{ background: 'oklch(0.78 0.14 195)' }}>
                  {plan.badge}
                </span>
              )}

              {/* Name & description */}
              <div className="mb-5">
                <h3 className={`font-heading text-2xl mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-muted-foreground'}`}>{plan.description}</p>
              </div>

              {/* Price block */}
              <div className="mb-6 pb-5 border-b" style={{ borderColor: plan.highlighted ? 'rgba(255,255,255,0.1)' : '' }}>
                <div className="flex items-end gap-1 flex-wrap">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>{plan.currency}{plan.price}</span>
                  <span className={`text-base mb-1.5 ${plan.highlighted ? 'text-white/60' : 'text-muted-foreground'}`}>/{plan.per}</span>
                </div>
                {plan.priceNote && (
                  <p className="text-xs mt-1.5 font-medium" style={{ color: 'oklch(0.78 0.14 195)' }}>
                    {plan.priceNote}
                  </p>
                )}
              </div>

              {/* Key features */}
              <ul className="space-y-2 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: plan.highlighted ? 'oklch(0.78 0.14 195 / 0.3)' : 'oklch(0.78 0.14 195 / 0.12)' }}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-white/90' : 'text-foreground/90'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Detailed sections (BBQ, drinks, extras) */}
              <div className="space-y-4 mb-8 flex-1">
                {plan.sections.map((sec) => (
                  <div key={sec.title}>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-white/50' : 'text-muted-foreground/70'}`}>
                      {sec.title}
                    </p>
                    <ul className="space-y-1.5">
                      {sec.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sec.isExtra ? 'oklch(0.75 0.13 65)' : 'oklch(0.78 0.14 195)' }} />
                          <span className={`text-sm ${plan.highlighted ? (sec.isExtra ? 'text-amber-300' : 'text-white/75') : (sec.isExtra ? 'text-amber-700' : 'text-foreground/75')}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 ${plan.highlighted ? 'bg-primary text-primary-foreground' : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
                style={plan.highlighted ? { boxShadow: '0 6px 20px oklch(0.78 0.14 195 / 0.4)' } : {}}
              >
                Réserver via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeUp} className="text-center text-muted-foreground text-sm mt-8">
          Paiement sur place — espèces ou carte acceptés. Départ : 08h30 · Retour : 15h30.
        </motion.p>
      </div>
    </Section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
export function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="relative py-32 px-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, oklch(0.22 0.08 240) 0%, oklch(0.28 0.06 200) 100%)' }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/nb-5.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-transparent to-ocean-deep/80" />
      {[...Array(4)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full opacity-10 border border-primary" style={{ width: 100 + i * 100, height: 100 + i * 100, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5 + i * 2, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6" style={{ border: '3px solid rgba(244,169,65,0.7)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
            <img src="/images/nauti-buoy-logo.jpg" alt="Nauti Buoy" className="w-full h-full object-cover" />
          </div>
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Nauti Buoy · Île Maurice 🇲🇺</p>
          <h2 className="font-heading text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Prêt à vivre<br /><span style={{ color: '#00CFC8' }}>le paradis ?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Le lagon vous attend. Réservez en quelques minutes.<br />
            Paiement sur place. Souvenirs pour la vie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:scale-105" style={{ background: '#25D366', boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)' }}>
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" /></svg>
              Réserver via WhatsApp
            </a>
            <button onClick={() => navigate('/tarifs')} className="px-8 py-4 rounded-full font-semibold text-base border-2 border-white/30 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">
              Voir les tarifs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', guests: '', message: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour Nauti Buoy! 🌊 Je souhaite réserver une excursion.\n\nNom : ${formData.name}\nEmail : ${formData.email}\nTél : ${formData.phone}\nNombre de personnes : ${formData.guests}\nDate souhaitée : ${formData.date}\nMessage : ${formData.message}`
    );
    window.open(`https://wa.me/23057701684?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Contact</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Planifions Votre Escapade</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Une question ? Une réservation ? On vous répond en quelques minutes sur WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '280px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60208.70456888745!2d57.5292!3d-20.0132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5006e3db0001%3A0x8beebb35bfbce3ba!2sNorth%20Mauritius!5e0!3m2!1sen!2smu!4v1720000000000!5m2!1sen!2smu"
                width="100%" height="100%" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cap Malheureux map"
              />
            </div>
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Appel ou WhatsApp', value: '+230 5770 1684', href: 'tel:+23057701684' },
                { icon: MapPin, label: 'Point de départ', value: 'Église de Cap Malheureux, Nord Mauritius', href: 'https://maps.google.com/?q=Cap+Malheureux+Church,+Mauritius' },
                { icon: Clock, label: 'Départs', value: 'Tous les jours à 8h30 (selon météo)', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-16 bg-card rounded-3xl border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">Message envoyé !</h3>
                <p className="text-muted-foreground max-w-xs">WhatsApp s'ouvre avec vos informations. On confirme très rapidement ! 🌊</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8 space-y-5 shadow-sm">
                <h3 className="font-heading text-2xl text-foreground mb-2">Réserver votre excursion</h3>
                <p className="text-muted-foreground text-sm mb-4">Remplissez le formulaire — on confirme via WhatsApp.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Votre nom</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground transition" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Tél / WhatsApp</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground transition" placeholder="+230 5XXX XXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground transition" placeholder="vous@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">Nombre de personnes</label>
                    <select required value={formData.guests} onChange={(e) => setFormData((f) => ({ ...f, guests: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition">
                      <option value="">Sélectionner...</option>
                      {[...Array(14)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1} personne{i > 0 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Date souhaitée</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData((f) => ({ ...f, date: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">Message / Demandes spéciales</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground transition resize-none" placeholder="Anniversaire, lune de miel, homard, privatisation..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-base text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 6px 24px rgba(37, 211, 102, 0.35)' }}>
                  <Send className="w-5 h-5" />
                  Envoyer via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
