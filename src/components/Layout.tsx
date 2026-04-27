import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { WHATSAPP_URL } from '@/lib/index';

const NAV_LINKS = [
  { label: 'Excursions', path: '/excursions' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Programme', path: '/programme' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Contact', path: '/contact' },
];

const WA_SVG = (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
  </svg>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // On inner pages, always show the solid nav
  const solidNav = scrolled || !isHome;

  return (
    <>
      {/* ── STICKY NAV ── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidNav ? 'bg-white/96 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        {/* 3-column grid: logo | nav centré | book now */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-[auto_1fr_auto] items-center gap-4">

          {/* ── COL 1 : LOGO ── */}
          <button onClick={() => navigate('/')} className="flex items-center gap-3 group">
            <div
              className="relative overflow-hidden rounded-full flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              style={{
                width: solidNav ? 42 : 50,
                height: solidNav ? 42 : 50,
                transition: 'width 0.4s, height 0.4s',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                border: '2px solid rgba(244,169,65,0.8)',
              }}
            >
              <img src="/images/nauti-buoy-logo.jpg" alt="Nauti Buoy logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <span className={`block font-heading font-bold tracking-wide transition-all duration-300 ${solidNav ? 'text-foreground text-lg' : 'text-white text-xl'}`}>
                Nauti Buoy
              </span>
              <span className={`block text-xs tracking-widest uppercase transition-colors duration-300 ${solidNav ? 'text-muted-foreground' : 'text-white/60'}`}>
                Île Maurice
              </span>
            </div>
          </button>

          {/* ── COL 2 : NAV LINKS (desktop, centré) ── */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`text-sm font-medium tracking-wide transition-colors relative ${
                    active
                      ? solidNav ? 'text-primary' : 'text-primary'
                      : solidNav ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── COL 3 : BOOK NOW + HAMBURGER ── */}
          <div className="flex items-center justify-end gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
              style={{ boxShadow: '0 4px 20px oklch(0.78 0.14 195 / 0.4)' }}
            >
              {WA_SVG}
              Réserver
            </a>
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X className={`w-6 h-6 ${solidNav ? 'text-foreground' : 'text-white'}`} />
                : <Menu className={`w-6 h-6 ${solidNav ? 'text-foreground' : 'text-white'}`} />
              }
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`text-left text-base font-medium transition-colors py-2.5 border-b border-border/50 last:border-0 ${
                      location.pathname === link.path ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold hover:opacity-90 transition text-white"
                  style={{ background: '#25D366' }}
                >
                  {WA_SVG}
                  Réserver via WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-ocean-deep text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(244,169,65,0.6)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                <img src="/images/nauti-buoy-logo.jpg" alt="Nauti Buoy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-white">Nauti Buoy</p>
                <p className="text-white/50 text-sm mt-0.5">Nord Mauritius · Excursions en mer</p>
                <p className="text-white/40 text-xs mt-0.5">Départ : Cap Malheureux · 8h30</p>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-5">
              {NAV_LINKS.map((link) => (
                <button key={link.path} onClick={() => navigate(link.path)} className="text-sm text-white/50 hover:text-white transition-colors">
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}
              >
                {WA_SVG}
                Chat WhatsApp
              </a>
              <p className="text-white/30 text-xs">© 2026 Nauti Buoy Mauritius. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <motion.a
        href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 400, damping: 20 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 md:bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" /></svg>
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: '#25D366' }} />
      </motion.a>

      {/* ── MOBILE STICKY BOOKING BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-t" style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderColor: 'rgba(0,0,0,0.08)', boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}>
          <img src="/images/nauti-buoy-logo.jpg" alt="Nauti Buoy" className="w-9 h-9 rounded-full object-cover flex-shrink-0" style={{ border: '1.5px solid rgba(244,169,65,0.6)' }} />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground">Nauti Buoy · Île Maurice</p>
            <p className="text-sm font-bold text-foreground">À partir de Rs 2 200 / pers.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white whitespace-nowrap" style={{ background: 'linear-gradient(135deg, oklch(0.78 0.14 195), oklch(0.65 0.12 195))' }}>
            Réserver
          </a>
        </div>
      </div>
    </>
  );
}
