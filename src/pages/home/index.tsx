import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Volume2, VolumeX, Music2 } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/index';
import { ExperiencesSection, WhyUsSection, TestimonialsSection, CTASection } from '@/pages/sections';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/lib/translations';

// ─── HERO avec fond vidéo ──────────────────────────────────────────────────────
function HeroSection() {
  const { lang }    = useLang();
  const navigate    = useNavigate();
  const videoRef    = useRef<HTMLVideoElement>(null);
  const audioRef    = useRef<HTMLAudioElement>(null);
  const [muted, setMuted]             = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [musicOn, setMusicOn]         = useState(false);
  const [showHint, setShowHint]       = useState(false);

  // Show music hint after 3 s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((m) => !m);
    }
  };

  const toggleMusic = () => {
    setShowHint(false);
    const audio = audioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      audio.volume = 0.55;
      audio.play().catch(() => {});
      setMusicOn(true);
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">

      {/* ── Musique sega (invisible) ── */}
      <audio ref={audioRef} src="/sega-dance-mauricien.mp3" loop preload="metadata" />

      {/* ── Fond photo (fallback) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: "url('/images/nb-2.jpg')", opacity: videoLoaded ? 0 : 1 }}
      />

      {/* ── Fond vidéo drone ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 1 : 0 }}
        autoPlay muted loop playsInline preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/55 via-ocean-deep/35 to-ocean-deep/70" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ocean-deep/80 to-transparent" />

      {/* ── Bulles animées ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/15"
          style={{ width: 60 + i * 20, height: 60 + i * 20, left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Contrôles audio ── */}
      <div className="absolute top-24 right-5 z-20 flex flex-col items-end gap-2">

        {/* Son vidéo */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }}
          onClick={toggleVideo}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-black/50 transition-all duration-200"
        >
          {muted
            ? <><VolumeX className="w-4 h-4" /><span className="hidden sm:inline">{T.hero.sound[lang]}</span></>
            : <><Volume2 className="w-4 h-4 text-primary" /><span className="hidden sm:inline text-primary">On</span></>
          }
        </motion.button>

        {/* Musique sega */}
        <div className="relative flex items-center gap-2">
          <AnimatePresence>
            {showHint && !musicOn && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg pointer-events-none"
              >
                🎵 {lang === 'fr' ? 'Sega Mauricien' : 'Mauritian Sega'}
                <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.3 }}
            onClick={toggleMusic}
            className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm border text-xs font-medium transition-all duration-300 ${
              musicOn
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/40'
                : 'bg-black/30 border-white/20 text-white hover:bg-black/50'
            }`}
          >
            <Music2 className={`w-4 h-4 ${musicOn ? 'animate-pulse' : ''}`} />
            <span className="hidden sm:inline">
              {musicOn ? 'Sega 🎶' : (lang === 'fr' ? 'Sega' : 'Sega')}
            </span>
            {musicOn && (
              <span className="flex items-end gap-[2px] h-3">
                {[0.6, 1, 0.7, 0.9, 0.5].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] bg-white rounded-full"
                    animate={{ scaleY: [h, 1, h * 0.4, 0.9, h] }}
                    transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ height: '100%', transformOrigin: 'bottom' }}
                  />
                ))}
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* ── Contenu central ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {T.hero.badge[lang]}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
        >
          {T.hero.title1[lang]}<br />
          <span style={{ color: '#00CFC8' }}>{T.hero.title2[lang]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          {T.hero.sub1[lang]}<br />
          {T.hero.sub2[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-3 text-white"
            style={{ background: 'linear-gradient(135deg, #00CFC8 0%, #0099A8 100%)', boxShadow: '0 8px 30px oklch(0.78 0.14 195 / 0.5)' }}
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            {T.hero.cta1[lang]}
          </a>
          <button
            onClick={() => navigate('/excursions')}
            className="px-8 py-4 rounded-full font-semibold text-base border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            {T.hero.cta2[lang]}
          </button>
        </motion.div>

        {/* Badges de confiance */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-6 mt-12 flex-wrap"
        >
          {T.hero.trust[lang].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-white/75 text-sm">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-3 rounded-full bg-white/70 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperiencesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
