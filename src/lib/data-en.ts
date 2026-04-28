// ─── English content for all data arrays ─────────────────────────────────────
import type { Tour, Feature, TimelineItem, PricingPlan } from './index';

export const TOURS_EN: Tour[] = [
  {
    id: 'flat-gabriel',
    name: 'Flat Island & Gabriel',
    tagline: 'Pristine Lagoon Escape',
    description:
      "Three islands, one extraordinary day. Snorkeling among sea turtles, BBQ on a white-sand beach and crystal-clear waters of the northern lagoon. Departure at 08:30 from Cap Malheureux Church.",
    itinerary: [
      {
        label: '1st stop',
        title: 'Îlot Gabriel — Snorkeling & Turtles',
        description:
          "Dive into the preserved marine world of Îlot Gabriel, home to sea turtles and rays. A rare encounter in their natural habitat.*",
      },
      {
        label: '2nd stop',
        title: 'Île Plate — Lunch & Relaxation',
        description:
          'A gastronomic BBQ on the white sand beach, facing the turquoise lagoon. Free time to unwind at your own pace.',
      },
      {
        label: '3rd stop',
        title: 'Coin de Mire — Final Snorkeling',
        description:
          '30 to 45 min off the mythical Coin de Mire rock, a sanctuary of tropical fish. A conclusion worthy of the journey.',
      },
    ],
    duration: 'Full Day',
    highlights: [
      'Îlot Gabriel · Île Plate · Coin de Mire',
      'Snorkeling & swimming with turtles*',
      'Full BBQ on the beach',
      'Private boat · Max 14 guests',
    ],
    image: '/images/nb-1.jpg',
  },
  {
    id: 'coin-de-mire',
    name: 'Coin de Mire Discovery',
    tagline: 'Volcanic Wonder',
    description:
      "The volcanic silhouette of Coin de Mire rises majestically above the ocean. Swim in hidden turquoise coves, spot sea turtles and immerse yourself in the raw beauty of North Mauritius.",
    duration: 'Half Day',
    highlights: [
      'Iconic Coin de Mire cruise',
      'Sea turtle spotting',
      'Hidden coves & snorkeling',
      'Snorkeling gear included',
    ],
    image: '/images/nb-7.jpg',
    badge: 'Popular',
  },
  {
    id: 'full-day-ultimate',
    name: 'Ultimate Island Tour',
    tagline: 'The Complete Experience',
    description:
      "The ultimate Mauritius experience — Flat Island, Gabriel Island and Coin de Mire brought together in one exceptional day. Private escape in the crystal-clear northern lagoon, with BBQ, drinks, music and fresh lobster on request.",
    duration: 'Full Day',
    highlights: [
      'Flat Island · Gabriel · Coin de Mire',
      'BBQ & drinks at will',
      'Fresh lobster optional (500g)',
      'Private boat · Max 14 guests',
    ],
    image: '/images/nb-13.jpg',
    badge: 'Best Value',
  },
];

export const FEATURES_EN: Feature[] = [
  {
    icon: 'Waves',
    title: 'Crystal North Lagoon',
    description: 'Navigate the legendary northern lagoon — waters so clear you can see the coral far below.',
  },
  {
    icon: 'MapPin',
    title: 'Cap Malheureux Departure',
    description: 'Meet us at Cap Malheureux Church beach at 8:30 AM sharp.',
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
    description: 'Freshly grilled sea bream, chicken & sausages with authentic Mauritian sides. Optional fresh lobster (500g).',
  },
  {
    icon: 'Music',
    title: 'Drinks & Good Vibes',
    description: 'Refreshing drinks, great music, and an atmosphere that makes you never want to leave.',
  },
];

export const TIMELINE_EN: TimelineItem[] = [
  {
    time: '08:30',
    title: 'Departure',
    description: 'Meet at Cap Malheureux Church beach for boarding. The boat is waiting — your day in paradise begins.',
    icon: 'Anchor',
  },
  {
    time: '09:30',
    title: 'Îlot Gabriel Exploration',
    description: 'Our first stop. Try to spot turtles and rays in their natural habitat. Note: wildlife sightings are frequent but not 100% guaranteed.',
    icon: 'Fish',
  },
  {
    time: '11:00',
    title: 'Île Plate Stop',
    description: "Landing on Île Plate's white sand beaches. Free time to swim in turquoise waters and explore the island at your own pace.",
    icon: 'TreePalm',
  },
  {
    time: '12:30',
    title: 'BBQ Lunch on the Beach',
    description: 'A feast prepared on-site: sea bream fillet, chicken, sausages, mixed salads (coleslaw, pasta, potato) and garlic bread. Dessert: fresh fruit mix or flambéed banana.',
    icon: 'Flame',
  },
  {
    time: '14:30',
    title: 'Snorkeling at Coin de Mire',
    description: "A 30 to 45-minute stop near the Coin de Mire volcanic rock — one of the island's best spots to admire tropical fish in crystal-clear waters.",
    icon: 'Waves',
  },
  {
    time: '15:30',
    title: 'Return to Cap Malheureux',
    description: 'End of this unforgettable day and return to the starting point. Music, sunshine and a lifetime of memories.',
    icon: 'Sunset',
  },
];

export const PRICING_PLANS_EN: PricingPlan[] = [
  {
    name: 'Full Day — Shared',
    price: '2,500',
    currency: 'Rs ',
    per: 'per person',
    description: 'Join a small group for an unforgettable day in the Northern lagoon.',
    features: [
      'Departure 08:30 · Return 15:30',
      'Max 14 guests per boat',
      'Flat Island · Gabriel Island · Coin de Mire',
      'Snorkeling gear included (masks & snorkels)',
    ],
    sections: [
      {
        title: '🍖 Full BBQ Lunch',
        items: [
          'Sea bream fillet, chicken & sausages',
          'Coleslaw, pasta & potato salad',
          'Garlic bread',
          'Dessert: fresh fruit mix or flambéed banana',
        ],
      },
      {
        title: '🥤 Drinks included',
        items: [
          'Punch & beer',
          'Cola, soft drinks & mineral water',
        ],
      },
    ],
    highlighted: false,
  },
  {
    name: 'Full Day — Private',
    price: '20,000',
    priceNote: '+ Rs 1,000 / additional guest',
    currency: 'Rs ',
    per: 'for 2 guests',
    description: 'Exclusive boat use with customizable itinerary, at your own pace.',
    features: [
      'Exclusive boat use',
      'Departure 08:30 · Return 15:30',
      'Customizable itinerary',
      'Snorkeling gear included (masks & snorkels)',
    ],
    sections: [
      {
        title: '🍖 Full BBQ Lunch',
        items: [
          'Sea bream fillet, chicken & sausages',
          'Coleslaw, pasta & potato salad',
          'Garlic bread',
          'Dessert: fresh fruit mix or flambéed banana',
        ],
      },
      {
        title: '🥤 Drinks included',
        items: [
          'Punch & beer',
          'Cola, soft drinks & mineral water',
        ],
      },
      {
        title: '✨ Optional extras',
        items: [
          'Red or white wine: Rs 1,000',
          'Fresh lobster 500g: Rs 1,200 / guest',
        ],
        isExtra: true,
      },
    ],
    highlighted: true,
    badge: 'All Inclusive',
  },
];
