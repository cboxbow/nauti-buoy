// ─── Bilingual UI strings ─────────────────────────────────────────────────────
export type B = { fr: string; en: string };
const b = (fr: string, en: string): B => ({ fr, en });

export const T = {
  nav: {
    excursions: b('Excursions', 'Excursions'),
    galerie:    b('Galerie', 'Gallery'),
    programme:  b('Programme', 'Schedule'),
    tarifs:     b('Tarifs', 'Pricing'),
    contact:    b('Contact', 'Contact'),
    book:       b('Réserver', 'Book Now'),
    bookWA:     b('Réserver via WhatsApp', 'Book via WhatsApp'),
  },

  footer: {
    tagline: b('Nord Mauritius · Excursions en mer', 'North Mauritius · Sea Excursions'),
    depart:  b('Départ : Cap Malheureux · 8h30', 'Departure: Cap Malheureux · 8:30 AM'),
    rights:  b('© 2026 Nauti Buoy Mauritius. Tous droits réservés.', '© 2026 Nauti Buoy Mauritius. All rights reserved.'),
    from:    b('À partir de Rs 2 500 / pers.', 'From Rs 2,500 / person'),
  },

  hero: {
    badge:    b("Nord de l'Île Maurice · Excursions en mer", 'North Mauritius · Sea Excursions'),
    title1:   b('Découvrez Maurice', 'Discover Mauritius'),
    title2:   b('Comme Jamais Avant', 'Like Never Before'),
    sub1:     b('Escapade privée dans le lagon cristallin du Nord 🇲🇺', 'Private escape in the crystal-clear northern lagoon 🇲🇺'),
    sub2:     b('Flat Island · Gabriel Island · Coin de Mire · BBQ all-inclusive', 'Flat Island · Gabriel Island · Coin de Mire · BBQ all-inclusive'),
    cta1:     b('Réserver Maintenant', 'Book Now'),
    cta2:     b('Voir les excursions ↓', 'See excursions ↓'),
    sound:    b('Son', 'Sound'),
    trust: {
      fr: [
        { label: '500+ Clients ravis', icon: '⭐' },
        { label: 'Skippers licenciés', icon: '🏅' },
        { label: 'Max 14 personnes',   icon: '🚤' },
      ],
      en: [
        { label: '500+ Happy Clients', icon: '⭐' },
        { label: 'Licensed Skippers',  icon: '🏅' },
        { label: 'Max 14 Guests',      icon: '🚤' },
      ],
    },
  },

  experiences: {
    tag:       b('Nos Excursions', 'Our Excursions'),
    title:     b('Choisissez Votre Aventure', 'Choose Your Adventure'),
    subtitle:  b('Chaque sortie est conçue pour créer des souvenirs inoubliables.', 'Every trip is designed to create unforgettable memories.'),
    itinerary: b('Programme', 'Itinerary'),
    cta:       b('Réserver ce voyage', 'Book this trip'),
  },

  whyUs: {
    tag:      b('Pourquoi Nous', 'Why Us'),
    title:    b('Ce Qui Nous Distingue', 'What Sets Us Apart'),
    subtitle: b("Pas juste une sortie en bateau. Une expérience façonnée avec passion et authenticité mauricienne.", "Not just a boat trip. An experience crafted with passion and authentic Mauritian spirit."),
  },

  gallery: {
    tag:         b('Galerie', 'Gallery'),
    title:       b('Vivez la Magie', 'Feel the Magic'),
    subtitle:    b("Les photos ne font qu'effleurer la réalité. Mais elles vous feront ressentir quelque chose.", "Photos only scratch the surface. But they'll make you feel something."),
    tabDrone:    b('🚁 Vue du ciel', '🚁 Aerial View'),
    tabAmbiance: b('🍹 Ambiance & Repas', '🍹 Vibes & Dining'),
    tabVideos:   b('🎬 Vidéos', '🎬 Videos'),
  },

  timeline: {
    tag:      b('Votre Journée', 'Your Day'),
    title:    b('Une Journée au Paradis', 'A Day in Paradise'),
    subtitle: b("Du moment où vous montez à bord jusqu'au retour sous la lumière dorée.", 'From the moment you step aboard to the golden-lit return.'),
  },

  testimonials: {
    tag:    b('Avis Clients', 'Guest Reviews'),
    title:  b('Ce Que Disent Nos Clients', 'What Our Guests Say'),
    count:  b('200+ avis sur Google & TripAdvisor', '200+ reviews on Google & TripAdvisor'),
  },

  pricing: {
    tag:      b('Tarifs', 'Pricing'),
    title:    b('Prix Clairs & Transparents', 'Clear & Transparent Pricing'),
    subtitle: b("Aucun frais caché. Aucune surprise. Juste une journée incroyable sur l'eau.", 'No hidden fees. No surprises. Just an incredible day on the water.'),
    cta:      b('Réserver via WhatsApp', 'Book via WhatsApp'),
    footer:   b('Paiement sur place — espèces ou carte acceptés. Départ : 08h30 · Retour : 15h30.', 'Payment on site — cash or card accepted. Departure: 08:30 AM · Return: 3:30 PM.'),
    transfer: {
      title:  b('🚐 Transfert depuis le Nord — en option', '🚐 North Transfer — optional'),
      desc:   b('Vous séjournez dans le Nord de Maurice ? Nous pouvons vous récupérer à votre hôtel ou villa et vous déposer au point de départ à Cap Malheureux.', 'Staying in North Mauritius? We can pick you up at your hotel or villa and drop you off at the Cap Malheureux departure point.'),
      price:  b('À partir de Rs 2 000 / trajet', 'From Rs 2,000 / trip'),
      hint:   b('Mentionnez-le dans votre message WhatsApp lors de la réservation.', 'Just mention it in your WhatsApp message when booking.'),
    },
  },

  cta: {
    tag:      b('Nauti Buoy · Île Maurice 🇲🇺', 'Nauti Buoy · Mauritius 🇲🇺'),
    title1:   b('Prêt à vivre', 'Ready to experience'),
    title2:   b('le paradis ?', 'paradise?'),
    subtitle: b('Le lagon vous attend. Réservez en quelques minutes.\nPaiement sur place. Souvenirs pour la vie.', 'The lagoon awaits. Book in minutes.\nPay on site. Memories for life.'),
    cta1:     b('Réserver via WhatsApp', 'Book via WhatsApp'),
    cta2:     b('Voir les tarifs', 'See pricing'),
  },

  contact: {
    tag:          b('Contact', 'Contact'),
    title:        b('Planifions Votre Escapade', 'Plan Your Escape'),
    subtitle:     b('Une question ? Une réservation ? On vous répond en quelques minutes sur WhatsApp.', "A question? A booking? We reply in minutes on WhatsApp."),
    phoneLabel:      b('Appel ou WhatsApp', 'Call or WhatsApp'),
    locLabel:        b('Point de départ', 'Meeting Point'),
    locValue:        b('Église de Cap Malheureux, Nord Mauritius', 'Cap Malheureux Church, North Mauritius'),
    hoursLabel:      b('Départs', 'Departures'),
    hoursValue:      b('Tous les jours à 8h30 (selon météo)', 'Daily at 8:30 AM (weather permitting)'),
    transferLabel:   b('Transfert Nord', 'North Transfer'),
    transferValue:   b('Récupération hôtel/villa — à partir de Rs 2 000', 'Hotel/villa pick-up — from Rs 2,000'),
    formTitle:    b('Réserver votre excursion', 'Book your excursion'),
    formSub:      b('Remplissez le formulaire — on confirme via WhatsApp.', "Fill in the form — we'll confirm via WhatsApp."),
    name:         b('Votre nom', 'Your name'),
    namePh:       b('Jean Dupont', 'John Smith'),
    tel:          b('Tél / WhatsApp', 'Phone / WhatsApp'),
    email:        b('Email', 'Email'),
    guests:       b('Nombre de personnes', 'Number of guests'),
    guestsPh:     b('Sélectionner...', 'Select...'),
    date:         b('Date souhaitée', 'Preferred date'),
    msg:          b('Message / Demandes spéciales', 'Message / Special requests'),
    msgPh:        b('Anniversaire, lune de miel, homard, privatisation...', 'Birthday, honeymoon, lobster, private hire...'),
    send:         b('Envoyer via WhatsApp', 'Send via WhatsApp'),
    successTitle: b('Message envoyé !', 'Message sent!'),
    successSub:   b("WhatsApp s'ouvre avec vos informations. On confirme très rapidement ! 🌊", "WhatsApp opens with your details. We'll confirm very quickly! 🌊"),
    waMsg: {
      fr: (f: Record<string, string>) =>
        `Bonjour Nauti Buoy! 🌊 Je souhaite réserver une excursion.\n\nNom : ${f.name}\nEmail : ${f.email}\nTél : ${f.phone}\nNombre de personnes : ${f.guests}\nDate souhaitée : ${f.date}\nMessage : ${f.message}`,
      en: (f: Record<string, string>) =>
        `Hello Nauti Buoy! 🌊 I would like to book an excursion.\n\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nGuests: ${f.guests}\nPreferred date: ${f.date}\nMessage: ${f.message}`,
    },
    guestUnit: {
      fr: (n: number) => `${n} personne${n > 1 ? 's' : ''}`,
      en: (n: number) => `${n} guest${n > 1 ? 's' : ''}`,
    },
  },

  banners: {
    excursions: {
      tag:   b('Excursions', 'Excursions'),
      title: b('Choisissez Votre Aventure', 'Choose Your Adventure'),
      sub:   b("Trois îlots, une journée inoubliable. Snorkeling, tortues, BBQ, lagon cristallin — tout inclus au départ de Cap Malheureux.", 'Three islands, one unforgettable day. Snorkeling, turtles, BBQ, crystal lagoon — all-inclusive from Cap Malheureux.'),
    },
    galerie: {
      tag:   b('Galerie', 'Gallery'),
      title: b('Vivez la Magie', 'Feel the Magic'),
      sub:   b('Photos & vidéos de vos escapades dans le lagon du Nord de Maurice.', 'Photos & videos of your escapes in the North Mauritius lagoon.'),
    },
    programme: {
      tag:   b('Programme de la journée', 'Day Schedule'),
      title: b('Une Journée au Paradis', 'A Day in Paradise'),
      sub:   b("Départ 08h30 · Retour 15h30 — depuis la plage de l'église de Cap Malheureux. Voici comment se déroule votre journée parfaite.", "Departure 08:30 · Return 15:30 — from Cap Malheureux Church beach. Here's how your perfect day unfolds."),
    },
    tarifs: {
      tag:   b('Tarifs', 'Pricing'),
      title: b('Prix Clairs & Transparents', 'Clear & Transparent Pricing'),
      sub:   b('Partagé Rs 2 500/pers. · Privatisé dès Rs 24 000 pour 2 personnes — BBQ complet, boissons & snorkeling inclus. Paiement sur place.', 'Shared Rs 2,500/person · Private from Rs 24,000 for 2 — full BBQ, drinks & snorkeling included. Pay on site.'),
    },
    contact: {
      tag:   b('Contact', 'Contact'),
      title: b('Planifions Votre Escapade', 'Plan Your Escape'),
      sub:   b('Répondons en quelques minutes sur WhatsApp. Départ depuis Cap Malheureux à 8h30.', 'We reply in minutes on WhatsApp. Departure from Cap Malheureux at 8:30 AM.'),
    },
  },
};
