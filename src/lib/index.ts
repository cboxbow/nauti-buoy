// ─── Routes ──────────────────────────────────────────────────────────────────
export const ROUTE_PATHS = {
  HOME: '/',
  EXCURSIONS: '/excursions',
  GALERIE: '/galerie',
  PROGRAMME: '/programme',
  TARIFS: '/tarifs',
  CONTACT: '/contact',
} as const;

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '23057701684';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Bonjour Nauti Buoy! 🌊 Je souhaite réserver une excursion en bateau à Maurice.'
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Tour {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  highlights: string[];
  image: string;
  badge?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface PricingSection {
  title: string;
  items: string[];
  isExtra?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  currency: string;
  per: string;
  description: string;
  features: string[];
  sections: PricingSection[];
  highlighted: boolean;
  badge?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface GalleryVideo {
  src: string;
  poster?: string;
  label: string;
}

// ─── Tours Data ───────────────────────────────────────────────────────────────
export const TOURS: Tour[] = [
  {
    id: 'flat-gabriel',
    name: 'Flat Island & Gabriel',
    tagline: 'Pristine Lagoon Escape',
    description:
      'Set sail from Cap Malheureux at 8:30 AM into the crystal-clear northern lagoon. Discover Flat Island\'s powder-white beaches and the emerald waters surrounding Gabriel Island. Snorkel vibrant reefs, swim in paradise, and feast on a freshly grilled BBQ lunch on the beach.',
    duration: 'Full Day',
    highlights: ['Flat Island & Gabriel Island stops', 'Snorkeling in coral reefs', 'BBQ lunch & refreshing drinks', 'Up to 14 guests max'],
    image: '/images/nb-1.jpg',
    badge: 'Most Popular',
  },
  {
    id: 'coin-de-mire',
    name: 'Coin de Mire Discovery',
    tagline: 'Volcanic Wonder',
    description:
      'Explore the dramatic silhouette of Coin de Mire rising majestically from the ocean. Swim in hidden turquoise coves, spot sea turtles gliding through the reefs, and soak in the raw beauty of this iconic protected monument of North Mauritius.',
    duration: 'Half Day',
    highlights: ['Iconic Coin de Mire cruise', 'Sea turtle spotting', 'Hidden coves & snorkeling', 'Snorkeling gear included'],
    image: '/images/nb-7.jpg',
    badge: 'Half Day',
  },
  {
    id: 'full-day-ultimate',
    name: 'Ultimate Island Tour',
    tagline: 'The Complete Experience',
    description:
      'The ultimate Mauritius adventure — Flat Island, Gabriel Island, and Coin de Mire in one unforgettable day. Private escape in the crystal-clear North lagoon with BBQ, drinks, music, and the option to add fresh lobster on request.',
    duration: 'Full Day',
    highlights: ['Flat Island · Gabriel · Coin de Mire', 'All-inclusive BBQ & drinks', 'Optional fresh lobster (500g)', 'Private boat up to 14 guests'],
    image: '/images/nb-13.jpg',
    badge: 'Best Value',
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  {
    icon: 'Waves',
    title: 'Crystal North Lagoon',
    description: 'Navigate the legendary northern lagoon — waters so clear you can see the coral far below.',
  },
  {
    icon: 'MapPin',
    title: 'Cap Malheureux Departure',
    description: 'Meet us right in front of the iconic Cap Malheureux Church at 8:30 AM sharp.',
  },
  {
    icon: 'Ship',
    title: 'Licensed Skippers',
    description: 'Professional, experienced captains who know every hidden cove and sandbank of North Mauritius.',
  },
  {
    icon: 'Users',
    title: 'Max 14 Guests',
    description: 'Intimate private escapes — never more than 14 guests on board. Your comfort is the priority.',
  },
  {
    icon: 'Flame',
    title: 'All-Inclusive BBQ',
    description: 'Freshly grilled fish, prawns & authentic Mauritian cuisine. Optional fresh lobster (500g) available.',
  },
  {
    icon: 'Music',
    title: 'Drinks & Good Vibes',
    description: 'Refreshing drinks, great music, and an atmosphere that makes you never want to leave.',
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    time: '08:30',
    title: 'Set Sail',
    description: 'Meet in front of the iconic Cap Malheureux Church. Board your speedboat and head into the crystal-clear north lagoon.',
    icon: 'Anchor',
  },
  {
    time: '09:30',
    title: 'Snorkeling Stop',
    description: 'Dive into vibrant coral reefs teeming with tropical fish, sea turtles, and dazzling marine life.',
    icon: 'Fish',
  },
  {
    time: '11:00',
    title: 'Flat Island Landing',
    description: 'Step ashore on Flat Island\'s powder-white beach. Explore the untouched shore, swim in turquoise waters.',
    icon: 'TreePalm',
  },
  {
    time: '12:30',
    title: 'BBQ Lunch on the Beach',
    description: 'Freshly grilled fish, prawns & authentic Mauritian specialties. Optional: fresh lobster (500g) on request.',
    icon: 'Flame',
  },
  {
    time: '14:30',
    title: 'Gabriel Island & Coin de Mire',
    description: 'Cruise past the iconic Coin de Mire volcanic rock and swim the emerald waters of Gabriel Island.',
    icon: 'Waves',
  },
  {
    time: '16:30',
    title: 'Return to Cap Malheureux',
    description: 'Glide back under the golden light, music on, drinks in hand, memories for a lifetime.',
    icon: 'Sunset',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sophie & Marc',
    location: 'Paris, France',
    rating: 5,
    text: 'Best day of our entire honeymoon. The sandbank was absolutely unreal — turquoise water, just us and the horizon. The BBQ prawns? Incredible. We\'re already planning our return.',
    avatar: 'SM',
  },
  {
    name: 'James Whitfield',
    location: 'London, UK',
    rating: 5,
    text: 'I\'ve been on boat tours worldwide — Bali, Maldives, Greece. This was honestly top 3. The skippers know every perfect spot. Small group, great vibe, and photos I\'ll show forever.',
    avatar: 'JW',
  },
  {
    name: 'Ananya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'We saw sea turtles! Genuinely the most magical moment. The water is so clear it doesn\'t feel real. Booking was easy via WhatsApp and the crew was so warm and professional.',
    avatar: 'AS',
  },
  {
    name: 'Thomas & Léa',
    location: 'Brussels, Belgium',
    rating: 5,
    text: 'Île Plate is paradise on earth. The snorkeling was world-class and the BBQ on the beach with local music playing... we didn\'t want to leave. Unforgettable experience.',
    avatar: 'TL',
  },
  {
    name: 'Sarah Johnson',
    location: 'Cape Town, SA',
    rating: 5,
    text: 'Booked the private boat for my birthday. Best decision ever. The team decorated the boat, surprised me with a cake on the sandbank. Moments I\'ll treasure for life.',
    avatar: 'SJ',
  },
  {
    name: 'Hiroshi Tanaka',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'Professional, safe, and incredibly fun. The lagoon colours are beyond what any photo can capture. The fresh seafood BBQ was exceptional. Will recommend to everyone visiting Mauritius.',
    avatar: 'HT',
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Full Day — Partagé',
    price: '2 500',
    currency: 'Rs ',
    per: 'par personne',
    description: 'Rejoignez un petit groupe pour une journée inoubliable dans le lagon du Nord.',
    features: [
      'Départ 08h30 · Retour 15h30',
      'Max 14 personnes par bateau',
      'Flat Island · Gabriel Island · Coin de Mire',
      'Équipement snorkeling inclus (masques & tubas)',
    ],
    sections: [
      {
        title: '🍖 Déjeuner BBQ Complet',
        items: [
          'Filet de dorade, poulet & saucisses',
          'Salade de chou, pâtes & pommes de terre',
          'Pain à l\'ail',
          'Dessert : fruits frais ou banane flambée',
        ],
      },
      {
        title: '🥤 Boissons incluses',
        items: [
          'Punch & bière',
          'Coca-Cola, boissons gazeuses & eau minérale',
        ],
      },
    ],
    highlighted: false,
  },
  {
    name: 'Full Day — Privatisé',
    price: '20 000',
    priceNote: '+ Rs 1 000 / personne additionnelle',
    currency: 'Rs ',
    per: 'pour 2 personnes',
    description: 'Usage exclusif du bateau avec itinéraire personnalisable, à votre rythme.',
    features: [
      'Usage exclusif du bateau',
      'Départ 08h30 · Retour 15h30',
      'Itinéraire personnalisable',
      'Équipement snorkeling inclus (masques & tubas)',
    ],
    sections: [
      {
        title: '🍖 Déjeuner BBQ Complet',
        items: [
          'Filet de dorade, poulet & saucisses',
          'Salade de chou, pâtes & pommes de terre',
          'Pain à l\'ail',
          'Dessert : fruits frais ou banane flambée',
        ],
      },
      {
        title: '🥤 Boissons incluses',
        items: [
          'Punch & bière',
          'Coca-Cola, boissons gazeuses & eau minérale',
        ],
      },
      {
        title: '✨ Suppléments en option',
        items: [
          'Vin rouge ou blanc : Rs 1 000',
          'Homard frais 500g : Rs 1 200 / personne',
        ],
        isExtra: true,
      },
    ],
    highlighted: true,
    badge: 'All Inclusive',
  },
];

// ─── Gallery Images — Vue du ciel (DJI drone) ────────────────────────────────
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/nb-1.jpg',  alt: 'Vue aérienne du lagon nord de Maurice', span: 'wide' },
  { src: '/images/nb-2.jpg',  alt: 'Bateau Nauti Buoy en mer', span: 'normal' },
  { src: '/images/nb-3.jpg',  alt: 'Eaux cristallines du lagon', span: 'normal' },
  { src: '/images/nb-4.jpg',  alt: 'Excursion vers Flat Island', span: 'wide' },
  { src: '/images/nb-5.jpg',  alt: 'Plage de sable blanc à l\'île plate', span: 'normal' },
  { src: '/images/nb-6.jpg',  alt: 'Snorkeling dans le lagon', span: 'normal' },
  { src: '/images/nb-7.jpg',  alt: 'Coin de Mire depuis le bateau', span: 'wide' },
  { src: '/images/nb-8.jpg',  alt: 'BBQ sur la plage', span: 'normal' },
  { src: '/images/nb-9.jpg',  alt: 'Gabriel Island vue du ciel', span: 'normal' },
  { src: '/images/nb-10.jpg', alt: 'Le speedboat Nauti Buoy dans le lagon', span: 'wide' },
  { src: '/images/nb-11.jpg', alt: 'Coucher de soleil sur le lagon nord', span: 'normal' },
  { src: '/images/nb-12.jpg', alt: 'Vue panoramique de Cap Malheureux', span: 'normal' },
  { src: '/images/nb-13.jpg', alt: 'Journée complète — tous les îlots du nord', span: 'wide' },
];

// ─── Gallery Images — Ambiance & Moments ─────────────────────────────────────
export const GALLERY_AMBIANCE: GalleryImage[] = [
  { src: '/images/jenna-1.jpg',  alt: 'Nauti Buoy naviguant vers Coin de Mire', span: 'wide' },
  { src: '/images/jenna-2.jpg',  alt: 'Le bateau longe la plage blanche', span: 'normal' },
  { src: '/images/jenna-3.jpg',  alt: 'Départ depuis l\'église de Cap Malheureux', span: 'normal' },
  { src: '/images/jenna-6.jpg',  alt: 'Plateau de langoustes grillées', span: 'wide' },
  { src: '/images/jenna-7.jpg',  alt: 'Assiette langouste grillée, salade & pain', span: 'normal' },
  { src: '/images/jenna-10.jpg', alt: 'Table BBQ dressée sur l\'île', span: 'normal' },
  { src: '/images/jenna-8.jpg',  alt: 'Groupe de clients au déjeuner sur l\'île', span: 'wide' },
  { src: '/images/jenna-9.jpg',  alt: 'Snorkeling en groupe dans le lagon', span: 'normal' },
  { src: '/images/jenna-4.jpg',  alt: 'Vue drone sur le récif de corail', span: 'normal' },
  { src: '/images/jenna-5.jpg',  alt: 'Deux bateaux côte à côte, eau turquoise', span: 'wide' },
  { src: '/images/jenna-11.jpg', alt: 'Poussin sterne blanche sur l\'île', span: 'normal' },
  { src: '/images/jenna-12.jpg', alt: 'Vue top-down du bateau dans le lagon cristallin', span: 'normal' },
];

// ─── Gallery Videos ───────────────────────────────────────────────────────────
export const GALLERY_VIDEOS: GalleryVideo[] = [
  { src: '/videos/jenna-v1.mp4', label: 'Ambiance Île Plate' },
  { src: '/videos/jenna-v2.mp4', label: 'Plaisir de plongée' },
  { src: '/videos/jenna-v3.mp4', label: 'Snorkeling' },
  { src: '/videos/jenna-v4.mp4', label: 'Seul au monde' },
  { src: '/videos/jenna-v5.mp4', label: 'Le paradis commence ici' },
];
