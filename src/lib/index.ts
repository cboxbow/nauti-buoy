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
export interface TourStop {
  label: string;
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  name: string;
  tagline: string;
  description: string;
  itinerary?: TourStop[];
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
      'Trois îlots, une journée hors du commun. Snorkeling au milieu des tortues marines, déjeuner BBQ sur plage immergée et eaux cristallines du lagon nord. Départ 08h30 depuis l\'église de Cap Malheureux.',
    itinerary: [
      {
        label: '1er arrêt',
        title: 'Îlot Gabriel — Snorkeling & Tortues',
        description:
          'Plongez dans les fonds marins préservés de l\'Îlot Gabriel, peuplés de tortues et de raies. Une rencontre rare dans leur milieu naturel.*',
      },
      {
        label: '2ème arrêt',
        title: 'Île Plate — Déjeuner & Détente',
        description:
          'BBQ gastronomique sur la plage de sable blanc, face au lagon turquoise. Temps libre pour se ressourcer à votre rythme.',
      },
      {
        label: '3ème arrêt',
        title: 'Coin de Mire — Snorkeling Final',
        description:
          '30 à 45 min au large du mythique Coin de Mire, sanctuaire de poissons tropicaux. Une conclusion à la hauteur du voyage.',
      },
    ],
    duration: 'Journée complète',
    highlights: [
      'Îlot Gabriel · Île Plate · Coin de Mire',
      'Snorkeling & nage avec les tortues*',
      'BBQ complet sur la plage',
      'Bateau privé · Max 14 personnes',
    ],
    image: '/images/nb-1.jpg',
  },
  {
    id: 'coin-de-mire',
    name: 'Coin de Mire Discovery',
    tagline: 'Volcanic Wonder',
    description:
      'La silhouette volcanique de Coin de Mire se dresse majestueusement au-dessus de l\'océan. Nage en eaux turquoise cachées, observation de tortues marines et immersion dans la beauté brute du nord de Maurice.',
    duration: 'Demi-journée',
    highlights: [
      'Croisière emblématique Coin de Mire',
      'Observation de tortues marines',
      'Criques cachées & snorkeling',
      'Équipement de snorkeling fourni',
    ],
    image: '/images/nb-7.jpg',
    badge: 'Populaire',
  },
  {
    id: 'full-day-ultimate',
    name: 'Ultimate Island Tour',
    tagline: 'The Complete Experience',
    description:
      'L\'expérience ultime autour de Maurice — Flat Island, Gabriel Island et Coin de Mire réunis en une seule journée d\'exception. Évasion privée dans le lagon nord cristallin, avec BBQ, boissons, musique et homard frais en option.',
    duration: 'Journée complète',
    highlights: [
      'Flat Island · Gabriel · Coin de Mire',
      'BBQ & boissons à volonté',
      'Homard frais en option (500g)',
      'Bateau privé · Max 14 personnes',
    ],
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
    title: 'Départ',
    description: 'Rendez-vous sur la plage de l\'église de Cap Malheureux pour l\'embarquement. Le bateau vous attend — c\'est le début de votre journée au paradis.',
    icon: 'Anchor',
  },
  {
    time: '09:30',
    title: 'Exploration à l\'Îlot Gabriel',
    description: 'Notre première escale. Profitez de ce moment pour tenter d\'apercevoir les tortues et les raies dans leur habitat naturel. Note : l\'observation des animaux sauvages est fréquente mais non garantie à 100%.',
    icon: 'Fish',
  },
  {
    time: '11:00',
    title: 'Escale à l\'Île Plate',
    description: 'Débarquement sur les plages de sable blanc de l\'Île Plate. Temps libre pour nager dans les eaux turquoise et explorer l\'île à votre rythme.',
    icon: 'TreePalm',
  },
  {
    time: '12:30',
    title: 'Déjeuner BBQ sur la plage',
    description: 'Un festin préparé sur place : filet de dorade, poulet, saucisses, salades variées (chou, pâtes, pommes de terre) et pain à l\'ail. Dessert : mix de fruits frais ou banane flambée.',
    icon: 'Flame',
  },
  {
    time: '14:30',
    title: 'Snorkeling au Coin de Mire',
    description: 'Une halte de 30 à 45 minutes près du rocher volcanique du Coin de Mire — l\'un des meilleurs sites de l\'île pour admirer les poissons tropicaux dans leurs eaux cristallines.',
    icon: 'Waves',
  },
  {
    time: '15:30',
    title: 'Retour à Cap Malheureux',
    description: 'Fin de cette journée inoubliable et retour au point de départ. Musique, soleil et souvenirs plein la tête.',
    icon: 'Sunset',
  },
];

// ─── Testimonials (vrais avis Google) ─────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Teddy',
    location: 'Google Reviews',
    rating: 5,
    text: "Incroyable comme expérience, franchement je suis visiteur régulier j'hésiterais pas à revenir vers vous merci encore.",
    avatar: 'T',
  },
  {
    name: 'Liam Apostin',
    location: 'Google Reviews',
    rating: 5,
    text: "Super expérience du début à la fin ! La nourriture était vraiment bonne, l'ambiance au top et l'équipe très accueillante. Franchement, l'excursion vaut totalement le coup si vous voulez passer une excellente journée dans le nord de l'île.",
    avatar: 'LA',
  },
  {
    name: 'Steven Moron',
    location: 'Google Reviews',
    rating: 5,
    text: "Super expérience avec Nauti Buoy Mauritius ! L'équipe est très professionnelle, accueillante et met directement à l'aise. Le bateau était propre, bien entretenu et la sortie était incroyable du début à la fin. Les paysages sont magnifiques.",
    avatar: 'SM',
  },
  {
    name: 'Ludovic Rouland',
    location: 'Google Reviews',
    rating: 5,
    text: "Superbe excursion en mer ! Le bateau est top, l'ambiance est au rendez-vous du début à la fin. Si vous cherchez une sortie en mer mémorable, foncez les yeux fermés. Je recommande à 100 % !",
    avatar: 'LR',
  },
  {
    name: 'Kim C',
    location: 'Local Guide · Google',
    rating: 5,
    text: "Très belle journée avec Nauti Buoy. Excellent service, super bateau très moderne et spacieux (nous étions 11 personnes et très confortables). La nourriture était vraiment bonne. Une journée parfaite grâce à l'équipe de Nauti Buoy et à leur super bateau. Je recommande fortement !",
    avatar: 'KC',
  },
  {
    name: 'Yan Mackjoo',
    location: 'Google Reviews',
    rating: 5,
    text: "Memorable trip, very friendly staffs, food was excellent and the boat was really a Nauti Buoy!! Will definitely come back. Thank you to the team for creating memories.",
    avatar: 'YM',
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Full Day — Partagé',
    price: '3 000',
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
    price: '26 000',
    priceNote: '+ Rs 1 500 / personne additionnelle',
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
          'Vin rouge ou blanc : Rs 1 200',
          'Homard frais 500g : Rs 1 440 / personne',
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
